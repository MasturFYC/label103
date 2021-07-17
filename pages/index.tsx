import Head from 'next/head'
import Link from 'next/link'
import React, { MouseEvent, useState } from 'react'
import Image from "next/image";

// import { useRouter } from 'next/router'
import useSWR, { mutate } from 'swr'
import Layout, { siteTitle } from '../components/layout'
//import Group from '../components/group'
import utilStyles from '../styles/utils.module.css'
import { iGroup } from 'components/interfaces'
import { fontSize } from 'pdfkit';

const fetcher = async (url: string) => {
  const res = await fetch(url)
  const data: iGroup[] | any = await res.json();

  if (res.status !== 200) {

    throw new Error(data.message)
  }

  return data;
}

const fetchUpdate = async (url: string, group: iGroup): Promise<iGroup | any> => {
  const requestOptions = {
    method: group.group_id === 0 ? 'POST' : 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(group)
  };
  const res = await fetch(url, requestOptions)
  const data: iGroup | any = await res.json();

  if (res.status !== 200) {
    return ([null, data.message]);
  }

  return ([data, null]);
}

const fetchDelete = async (url: string): Promise<any> => {
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  };
  const res = await fetch(url, requestOptions)
  const data: number | any = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message)
  }

  return data;
}

const initGroup: iGroup = {
  group_id: 0,
  name: '',
  peoples: []
}

type TFormGroup = {
  group: iGroup,
  reload: Function
}
const FormGroup = ({ group, reload }: TFormGroup) => {
  const [currentGroup, setCurrentGroup] = useState<iGroup>(group)
  const handleSubmit = (e: MouseEvent) => {
    e.preventDefault();
    reload(currentGroup);
  }
  return (
    <div style={{ backgroundColor: "#cecece", padding: "16px" }}>
      <form>
        <span>Group ID: {currentGroup.group_id}</span><br />
        Name: <input type="text" autoFocus value={currentGroup.name} onChange={(e) => setCurrentGroup({ ...currentGroup, name: e.target.value })} />
        {' '}<button id="submit" type="submit"
          onClick={handleSubmit}
        >
          Save
        </button>
      </form>
    </div>
  )
}

function OldHome() {
  const [currentIndex, setCurrentIndex] = useState(-1)
  //  const { query } = useRouter()
  const { data, error, mutate } = useSWR<iGroup[], Error>(`/api/group/`, fetcher);

  if (error) return <div>Error: {error.message}</div>
  if (!data) return <div>Loading...</div>

  const reload = async (group: iGroup) => {
    const i = currentIndex
    const [json, error] = await fetchUpdate(`/api/group/${group.group_id}`, group);


    if (error) {
      alert(error);
    }

    if (json) {
      const newData: iGroup[] = [];

      let n = -1;

      for (let j = 0; j < data.length; j++) {
        if (data[j].group_id === json.group_id) {
          newData.push(json)
          n = j;
        } else {
          newData.push(data[j])
        }
      }

      if (group.group_id === 0) {
        newData.push(json)
        setCurrentIndex(data.length + 1)
      }
      //console.log(json)

      mutate([...newData], false);
    }
    //setCurrentIndex(i);
  }

  const deleteGroup = async (id: number) => {
    const test = confirm("Anda yakin ingin menghapus project ini?")
    if (true === test) {
      const json = await fetchDelete(`/api/group/${id}`);
      //console.log(json)
      if (json.group_id) {
        const newData: iGroup[] = data.filter(x => x.group_id !== id);
        mutate([...newData], false);
        setCurrentIndex(-1)
      }
    }
  }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Fine Young Canibals</p>
        <div>
          {data && [...data, {
            group_id: 0,
            name: 'New Group',
            peoples: []
          }].map((item: iGroup, i: number) => (
            <div key={i}>
              {i === currentIndex ?
                <FormGroup group={item} reload={reload} /> :
                <div>
                  <span style={{ cursor: 'pointer' }} onClick={() => {
                    setCurrentIndex(i);
                  }}>
                    <Image src='/images/edit-pen.svg' width={16} height={16} crossOrigin={'anonymous'} />
                    {'  '}{item.group_id === 0 && item.name}
                  </span>
                  {item.group_id > 0 && <span style={{ cursor: 'pointer' }}>
                    <Image src='/images/delete.svg' width={16} height={16}
                      onClick={() => deleteGroup(item.group_id)}
                      crossOrigin={'anonymous'} />{'  '}
                  </span>}
                  {item.group_id !== 0 && <Link href="/label103/[id]/[name]" as={`/label103/${item.group_id}/${item.name}`}>
                    <a>{item.name}</a>
                  </Link>}
                </div>
              }
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

interface iAyat {
  id: number;
  read: string;
  indo: string;
  means: string;
}

interface iSurat {
  surat: string;
  pengantar?: {
    read: string;
    means: string;
  };
  ayat: iAyat[];
  akhiran?: {
    name: string;
    bacaan: string;
  }
}

export default function Home() {

  const [data, setData] = React.useState<iSurat>({} as iSurat)

  React.useEffect(() => {
    let isLoaded = false;

    const fetchData = async () => {
      // "https://surat-yasin.com/surat-yasin/"
      const res = await fetch('/api/yasin')
      const data: string[] | any = await res.json();

      if (res.status !== 200) {
        return ([null, data.message]);
      }

      setData(data);
    }

    if (!isLoaded) {
      fetchData();
    }

    return () => { isLoaded = true }
  })

  const angka = (n: number) => {
    if (n === 0) return " ";
    const arr = [
      '٠',
      '١',
      '٢',
      '٣',
      '٤',
      '٥',
      '٦',
      '٧',
      '٨',
      '٩'];
    const sn = '' + n;
    let s = '';
    for (let c = 0; c < sn.length; c++) {
      const i = parseInt(sn[c]);
      s = s + arr[i];
    }

    return `﴿${s}﴾`;
  }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link
          rel="preload"
          href="/fonts/LPMQ.woff2"
          as="font"
          crossOrigin=""
        />
      </Head>
      <section className={utilStyles.headingMd}>
        {data.pengantar && <div>
          <div>Pengantar:</div>
          <div className={'q'} dir="rtl">{data.pengantar.read}</div>
          <div>"{data.pengantar.means}"</div>
        </div>}
        <h2>{data.surat}</h2>
        {/* <div className={'q bismillah'}>{"بِسْــــمِ اﷲِالرَّحْمَنِ اارَّحِيم"}</div> */}
        <div>
          {
            data.ayat && data.ayat.map((item) => (
              <React.Fragment key={`ayat-${item.id}`}>
                <hr />
                <div className={'q'} dir={'rtl'}>
                  <div>{item.read}{' ͏'}<span className={'q-num'}>{angka(item.id)}</span>
                  </div>
                </div>
                <div dir="rtl"><em>{item.indo}</em></div>
                <div>{item.id > 0 && `${item.id})`} {item.means}</div>
              </React.Fragment>))
          }
          <hr />
        </div>
        {data.akhiran && <div>
          <div>{data.akhiran.name}</div>
          <div className={'q'} dir="rtl">{data.akhiran.bacaan}</div>
        </div>}
      </section>
    </Layout >
  )
}