import Head from 'next/head'
import Link from 'next/link'
import React, { MouseEvent, useState } from 'react'
import Image from "next/image";
//import doaDanZikir from './api/json-data/bagian-2/doa-dan-zikir';
import doa from './api/doa-sehari-hari';
import YasinPage from './sesaat-setelah-meninggal-dunia';
// import { useRouter } from 'next/router'
import useSWR, { mutate } from 'swr'
import Layout, { siteTitle } from '../components/layout'
//import Group from '../components/group'
import utilStyles from '../styles/utils.module.css'
import { iGroup } from 'constants/interfaces'
import { angka } from 'components/books';

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
  bacaan: string;
  arti: string;
  ayat: string;
  read: string;
  indo: string;
  means: string;
}
interface iPenutup {
  name: string;
  bacaan: string;
  means: string;
}

interface iSurat {
  surat: string;
  pengantar?: iAyat[];
  ayats: iAyat[];
  penutup?: iPenutup
  desc?: string;
}

interface iTahlil {
  bismillah: iAyat;
  alIkhlas: iSurat;
  alFalaq: iSurat;
  anNas: iSurat;
  alFatihah: iSurat;
  doaTahlil: iSurat;
}


function NewHome() {

  const [data, setData] = React.useState<iTahlil>({} as iTahlil)

  React.useEffect(() => {
    let isLoaded = false;

    const fetchData = async () => {
      // "https://surat-yasin.com/surat-yasin/"
      const res = await fetch('/api/tahlil')
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
  }, []);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link
          rel="preload"
          href="/fonts/lpmq.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <React.Fragment>
        <h1>BACAAN DO'A TAHLIL</h1>
        {data &&
          <section className={utilStyles.headingMd}>
            {data.alIkhlas && <AlIkhlas data={data.alIkhlas} />}
            {data.alFalaq && <AlIkhlas data={data.alFalaq} />}
            {data.anNas && <AlIkhlas data={data.anNas} />}
            {data.alFatihah && <AlFatihah data={data.alFatihah} />}
          </section>
        }
      </React.Fragment>
    </Layout >
  )
}

const Ayat: React.FC<{ ayat: iAyat }> = ({ ayat }) => {
  return (
    <div style={{ textAlign: 'center' }} >
      <div className={'q'} dir="rtl">{ayat.read}</div>
      <div><em>{ayat.means}</em></div>
    </div>
  )

}

const AlIkhlas: React.FC<{ data: iSurat }> = ({ data }) => {
  return (
    data &&
    <React.Fragment>
      <div className={'surat'}>
        <h2>{data.surat}</h2>
        {data.desc && <div className={'desc'}>{data.desc}</div>}
      </div>
      {data.pengantar && <Ayat ayat={data.pengantar[0]} />}
      <div>
        {
          data.ayats && data.ayats.map((item) => (
            <React.Fragment key={`ayat-${item.id}`}>
              <hr />
              <div className={'q'} dir={'rtl'}>
                <div>{item.read}{' ͏'}<span className={'q-num'}>{angka(item.id)}</span>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}><em>{item.indo}</em></div>
              <div style={{ textAlign: 'center' }}>{item.id > 0 && `${item.id})`} {item.means}</div>
            </React.Fragment>))
        }
        <hr />
      </div>
      {
        data.penutup && <div style={{ textAlign: 'center' }}>
          <div>{data.penutup.name}</div>
          <div className={'q'} dir="rtl">{data.penutup.bacaan}</div>
        </div>
      }
    </React.Fragment>
  )
}

const AlFatihah: React.FC<{ data: iSurat }> = ({ data }) => {
  return (
    data &&
    <React.Fragment>
      <div className={'surat'}>
        <h2>{data.surat}</h2>
        {data.desc && <div className={'desc'}>{data.desc}</div>}
      </div>
      {data.pengantar && <Ayat ayat={data.pengantar[0]} />}
      {data.pengantar && <Ayat ayat={data.pengantar[1]} />}
      <div>
        {
          data.ayats && data.ayats.map((item) => (
            <React.Fragment key={`ayat-${item.id}`}>
              <hr />
              <div className={'q'} dir={'rtl'}>
                <div>{item.read}{' ͏'}<span className={'q-num'}>{angka(item.id)}</span>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}><em>{item.indo}</em></div>
              <div style={{ textAlign: 'center' }}>{item.id > 0 && `${item.id})`} {item.means}</div>
            </React.Fragment>))
        }
        <hr />
      </div>
      {
        data.penutup && <div style={{ textAlign: 'center' }}>
          <div>{data.penutup.name}</div>
          <div className={'q'} dir="rtl">{data.penutup.bacaan}</div>
        </div>
      }
    </React.Fragment>
  )
}

const test = String.raw`&#65165;&#65247;&#65248;&#65260;&#65250; &#65165;&#1616;&#65255;&#1617;&#1616;&#65264; &#65165;&#1614;&#65203;&#1618;&#65166;&#1614;&#65247;&#1615;&#65242;&#1614; &#65169;&#1616;&#65166;&#65203;&#1618;&#65252;&#1616;&#65242;&#1614; &#65165;&#65275;&#1614;&#65227;&#1618;&#65224;&#1614;&#65250;&#1616; &#65165;&#65247;&#1618;&#65252;&#1614;&#65244;&#1618;&#65176;&#65262;&#1618;&#65167;&#1616; &#65251;&#1616;&#65254;&#1618; &#65255;&#1615;&#65262;&#1618;&#65197;&#1616; &#65261;&#1614;&#65183;&#1618;&#65260;&#1616;&#65242;&#1614; &#65165;&#65275;&#1614;&#65227;&#1618;&#65248;&#1648;&#65264; &#65165;&#65247;&#1618;&#65252;&#1615;&#65157;&#1614;&#65169;&#1617;&#1614;&#65194;&#1616; &#65165;&#65247;&#65194;&#1617;&#1614;&#65165;&#65163;&#1616;&#65250;&#1616; &#65165;&#65247;&#1618;&#65170;&#1614;&#65166;&#65239;&#1616;&#65264; &#65165;&#65247;&#65252;&#1615;&#65192;&#1614;&#65248;&#1617;&#1614;&#65194;&#1616; &#65235;&#1616;&#65264; &#65239;&#1614;&#65248;&#1618;&#65168;&#1616; &#65255;&#1614;&#65170;&#1616;&#65268;&#1617;&#1616;&#65242;&#1614; &#65261;&#1614;&#65197;&#1614;&#65203;&#1615;&#65262;&#1618;&#65247;&#1616;&#65242;&#1614; &#65251;&#1615;&#65188;&#1614;&#65252;&#1617;&#1614;&#65194;&#1613; &#65261;&#1614;&#65165;&#1614;&#65203;&#1618;&#65166;&#1614;&#65247;&#1615;&#65242;&#1614; &#65169;&#1616;&#65166;&#65203;&#1618;&#65252;&#1616;&#65242;&#1614; &#65165;&#1618;&#65275;&#1614;&#65227;&#1618;&#65224;&#1614;&#65250;&#1616; &#65165;&#65247;&#65262;&#1614;&#65165;&#65187;&#1616;&#65194;&#1616; &#65169;&#1616;&#65262;&#1614;&#65187;&#1618;&#65194;&#1614;&#65171;&#1616; &#65165;&#65275;&#1614;&#65187;&#1614;&#65194;&#1616; &#65165;&#1618;&#65247;&#65252;&#1615;&#65176;&#1614;&#65228;&#1614;&#65166;&#65247;&#1616;&#65264; &#65227;&#1614;&#65254;&#1618; &#65261;&#1614;&#65187;&#1618;&#65194;&#1614;&#65171;&#1616; &#65165;&#65247;&#1618;&#65244;&#1614;&#65250;&#1617;&#1616; &#65261;&#1614;&#65165;&#65247;&#65228;&#1614;&#65194;&#1614;&#65193;&#1616; &#65165;&#65247;&#65252;&#1615;&#65240;&#1614;&#65194;&#1617;&#1614;&#65201;&#1616; &#65227;&#1614;&#65254;&#1618; &#65243;&#1615;&#65246;&#1617;&#1616; &#65165;&#1614;&#65187;&#1614;&#65194;&#1613; &#65261;&#1614;&#65169;&#1616;&#65188;&#1614;&#65238;&#1617;&#1616; &#65169;&#1616;&#65204;&#1618;&#65250;&#1616; &#65165;&#65247;&#65248;&#65258;&#1616; &#65165;&#65247;&#65198;&#1617;&#1614;&#65187;&#1618;&#65252;&#1648;&#65254;&#1616; &#65165;&#65247;&#65198;&#1617;&#1614;&#65187;&#1616;&#65268;&#1618;&#65250;&#1616; &#65239;&#1615;&#65246;&#1618; &#65259;&#1615;&#65262;&#1614; &#65165;&#65247;&#65248;&#1648;&#65258;&#1615; &#65165;&#65187;&#1614;&#65194;&#1612; &#65165;&#1614;&#65247;&#65248;&#1617;&#1648;&#65258;&#1615; &#65165;&#65247;&#65212;&#1617;&#1614;&#65252;&#1614;&#65194;&#1616; &#65247;&#1614;&#65250;&#1618; &#65267;&#1614;&#65248;&#1616;&#65194;&#1618; &#65261;&#1614;&#65247;&#1614;&#65250;&#1618; &#65267;&#1615;&#65262;&#1618;&#65247;&#1614;&#65194;&#1618; &#65261;&#1614;&#65247;&#1614;&#65250;&#1618; &#65267;&#1614;&#65244;&#1615;&#65254;&#1618; &#65247;&#1614;&#65258;&#1615; &#65243;&#1615;&#65236;&#1615;&#65262;&#1611;&#65165; &#65165;&#1614;&#65187;&#1614;&#65194;&#1615; . &#65165;&#1614;&#65253;&#1618; &#65175;&#1615;&#65212;&#1614;&#65248;&#1617;&#1616;&#65266;&#1614; &#65261;&#1614;&#65175;&#1615;&#65204;&#1614;&#65248;&#1617;&#1616;&#65250;&#1614; &#65227;&#1614;&#65248;&#1648;&#65264; &#65203;&#1614;&#65268;&#1617;&#1616;&#65194;&#1616;&#65255;&#1614;&#65166; &#65251;&#1615;&#65188;&#1614;&#65252;&#1617;&#1614;&#65194;&#1613; &#65203;&#1616;&#65198;&#1617;&#1616; &#65187;&#1614;&#65268;&#1614;&#65166;&#65171;&#1616; &#65165;&#65247;&#65262;&#1615;&#65183;&#1615;&#65262;&#1618;&#65193;&#1616; &#65261;&#1614;&#65165;&#65247;&#65204;&#1617;&#1614;&#65170;&#1614;&#65168;&#1616; &#65165;&#65275;&#1614;&#65227;&#1618;&#65224;&#1614;&#65250;&#1616; &#65247;&#1616;&#65244;&#1615;&#65246;&#1617;&#1616; &#65251;&#1614;&#65262;&#1618;&#65183;&#1615;&#65262;&#1618;&#65193;&#1613; &#65211;&#1614;&#65276;&#1614;&#65171;&#1611; &#65175;&#1615;&#65180;&#1614;&#65170;&#1617;&#1616;&#65174;&#1615; &#65235;&#1616;&#65264; &#65239;&#1614;&#65248;&#1618;&#65170;&#1616;&#65264; &#65165;&#1618;&#65275;&#1616;&#65267;&#1618;&#65252;&#1614;&#65166;&#65253;&#1616; &#65261;&#1614;&#65175;&#1615;&#65188;&#1614;&#65236;&#1617;&#1616;&#65224;&#1615;&#65256;&#1616;&#65264; &#65165;&#1618;&#65247;&#65240;&#1615;&#65198;&#1618;&#65153;&#65253;&#1614; &#65261;&#1614;&#65175;&#1615;&#65236;&#1614;&#65260;&#1617;&#1616;&#65252;&#1615;&#65256;&#1616;&#65264; &#65251;&#1616;&#65256;&#1618;&#65258;&#1615; &#65165;&#65275;&#1614;&#65267;&#1614;&#65166;&#65173;&#1616; &#65261;&#1614;&#65175;&#1614;&#65236;&#1618;&#65176;&#1614;&#65186;&#1615; &#65247;&#1616;&#65264; &#65169;&#1616;&#65260;&#1614;&#65166; &#65255;&#1615;&#65262;&#1618;&#65197;&#1614; &#65165;&#65247;&#1618;&#65184;&#1614;&#65256;&#1617;&#1614;&#65166;&#65173;&#1616; &#65261;&#1614;&#65255;&#1615;&#65262;&#1618;&#65197;&#1614; &#65165;&#65247;&#65256;&#1617;&#1614;&#65228;&#1616;&#65268;&#1618;&#65250;&#1616; &#65261;&#1614;&#65255;&#1615;&#65262;&#1618;&#65197;&#1614; &#65165;&#65247;&#65256;&#1617;&#1614;&#65224;&#1618;&#65198;&#1616; &#65165;&#1616;&#65247;&#1648;&#65264; &#65261;&#1614;&#65183;&#1618;&#65260;&#1616;&#65242;&#1614; &#65165;&#65247;&#1618;&#65244;&#1614;&#65198;&#1616;&#65267;&#1618;&#65250;&#1616; &#65261;&#1614;&#65227;&#1614;&#65248;&#1648;&#65264; &#65153;&#65247;&#1616;&#65258;&#1622; &#65261;&#1614;&#65211;&#1614;&#65188;&#1618;&#65170;&#1616;&#65258;&#1622; &#65261;&#1614;&#65203;&#1614;&#65248;&#1617;&#1616;&#65250;&#1618; .`;

function Home() {

  const [testData, setTestData] = React.useState<string>("");
  const [data, setData] = React.useState<iSurat>({} as iSurat)

  React.useEffect(() => {
    let isLoaded = false;

    const fetchData = async () => {
      // "https://surat-yasin.com/surat-yasin/"
      const res = await fetch('/api/yasin')
      const data: iSurat[] | any = await res.json();

      if (res.status !== 200) {
        return ([null, data.message]);
      }

      setData(data);
    }

    if (!isLoaded) {
      fetchData();
    }

    return () => { isLoaded = true }
  }, []);

  React.useEffect(() => {
    let isLoaded = false;

    const fetchData = async () => {
      setTestData(test)
    }

    if (!isLoaded) {
      fetchData();
    }

    return () => { isLoaded = true }
  }, []);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link
          rel="preload"
          href="/fonts/lpmq.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <React.Fragment>
        {data &&
          <section className={utilStyles.headingMd}>

            <h2>{String.fromCodePoint(parseInt("670", 16))}</h2>
            <h2>{data.surat}</h2>
            <p dir="rtl">{testData.split(/[&#;.]/g).map(c => isNaN(parseInt(c)) ? c : String.fromCodePoint(parseInt(c, 10)))}</p>
            <div className={'surat'} dir="rtl">
              {data.ayats && data.ayats.map((item) => (
                <React.Fragment>
                  <span className={'ayat'} key={`key${item.id}`}>{item.ayat}</span>
                  <span className='ayat-num'>{angka(item.id)}</span>
                </React.Fragment>))
              }
            </div>
          </section>
        }
      </React.Fragment>
    </Layout >
  )
}

//              {/* <div className='bacaan'><em>{item.bacaan}</em></div> */}
//              {/* <div className='arti'>{item.id}) {item.arti}</div> */}
//              {/* <hr /> */}
const ShowDoaDanZikir = () => {
  //const doaDanZikir = doa();
  return (
    <React.Fragment>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
          <link
            rel="preload"
            href="/fonts/lpmq.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>
        {/* <h2>{doaDanZikir.title}</h2> */}
        {/* {doaDanZikir.contents.map(doa => (
          <React.Fragment key={`key-${doa.id}`}>
            <h3>{doa.id}. {doa.subTitle}</h3>
            {doa.ayats && doa.ayats.map(ayat => (
              <React.Fragment key={`key-${doa.id}-${ayat.id}`}>
                <p className={'ayat'} dir='rtl'><span>{ayat.ayat}.</span></p> */}
        {/*ayat.bacaan && <p className='bacaan'><i>{ayat.bacaan}</i>.</p>}
                {ayat.arti && <p className='arti'>"{ayat.arti}."{' '}
            {ayat.reference && <span>{' ('}{ayat.reference.surat}{ayat.reference.id > 0 && <span>: {ayat.reference.id}</span>}{')'}</span>}</p>*/}
        {/* </React.Fragment>
            ))}
          </React.Fragment>
        )
        )}
         */}
        <YasinPage />
      </Layout>
    </React.Fragment>
  )
}

export default ShowDoaDanZikir;

async function test2(callback: Function) {
  const doa = (await import('shared/jsons/talkin-menjelang-ajal.json')).default;
  callback(doa);
}

interface iList {
  id: number;
  text: string | string[];
  ayat?: import('constants/ayat-interface').iAyat | import('constants/ayat-interface').iAyat[]
}


interface iPharagraph {
  id: number;
  text: string;
  ayat?: import('constants/ayat-interface').iAyat,
  list?: iList[]
}

interface iKidr {
  id: number;
  title: string;
  pharagraph?: iPharagraph[]
}

function DoaNabiKidr() {
  const [data, setData] = React.useState<iKidr>({} as iKidr);
  React.useEffect(() => {
    let isLoaded = false;

    const LoadData = () => {
      test2((doa: iKidr) => {
        setData(doa)
      })
    }

    if (!isLoaded) {
      LoadData();
    }

    return () => { isLoaded = true }
  })

  return (
    <React.Fragment>
      {data &&
        <>
          <h1>{data.id}. {data.title}</h1>
          {data.pharagraph
            && data.pharagraph.map((pharagraph: iPharagraph) => (
              <React.Fragment key={`key-${pharagraph.id}`}>
                <p>{pharagraph.text}</p>
                {pharagraph.ayat &&
                  <ShowAyat ayat={pharagraph.ayat} />
                }
                {pharagraph.list
                  && pharagraph.list.map((list: iList) =>
                    <React.Fragment key={`key-${list.id}`}>
                      <p className='just'>{list.id}. <ArrayOrText text={list.text} /></p>
                      {list.ayat
                        && (Array.isArray(list.ayat)
                          ? list.ayat.map((ayat) => <ShowAyat ayat={ayat} />)
                          : <ShowAyat ayat={list.ayat} />)
                      }
                    </React.Fragment>)}
              </React.Fragment>
            ))
          }
        </>}
      <style jsx>{`
        .just {
          text-align: justify
        }
        `}</style>
    </React.Fragment>
  )
}


const ShowAyat: React.FC<{ ayat: import('constants/ayat-interface').iAyat }> =
  ({ ayat }) => {
    return <React.Fragment>
      <p className={'ayat'} dir='rtl'>{ayat.ayat}</p>
      <p className={'bacaan'}>{ayat.bacaan}.</p>
      <p className={'arti'}>{ayat.arti}.</p>
      <style jsx>{`
        .ayat {
          font-family: 'lpmq';
          font-weight: 400;
          font-size: 20pt;
        }

        .bacaan {
          color: #007000;
          text-align: right;
        }

        .arti {
          color: #555;
          text-align: left;
          margin-top: 16px;
        }      
        `}</style>
    </React.Fragment>;
  }

const ArrayOrText: React.FC<{ text: string | string[] }> = ({ text }) => {
  return (
    <React.Fragment>
      {(Array.isArray(text))
        ? text.map((item: string, i: number) => <span key={`key-${i}`} className={i === 0 ? 'list-first' : 'list-next'}>{item}<br /></span>)
        : <span>{text}</span>
      }
      <style jsx>{`
        .list-first {
          display: inline;
        }
        .list-next {
          display: block;
          margin-top: 10px;
        }
        `}</style>
    </React.Fragment>
  )
}