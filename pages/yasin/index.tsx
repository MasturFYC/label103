import React from "react";
import { iDoa, iAyat } from 'constants/ayat-interface'

interface iPenutup {
  title: string;
  ayats: iAyat[]
}

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

  return `${s}`;
  //return `﴿${s}﴾`;
}

const jsonData: iDoa = {
  id: 40,
  title: "Surat Ya'Sin",
  phar: [
    "Surah ke-36",
    "Terdiri atas 83 ayat",
    "Termasuk Surat Makkiyyah"
  ],
  contents: []
}

const YasinPage = () => {
  const [data, setData] = React.useState<iAyat[]>([]);
  const [doa, setDoa] = React.useState<iPenutup>({} as iPenutup);

  React.useEffect(() => {
    let isLoaded = false;
    
    const loadData = async () => {
      const yasin = (await import('shared/jsons/yasin.json')).default;
      //console.log(yasin.ayats)
      setData(yasin.ayats)
      setDoa(yasin.penutup);
    }

    if(!isLoaded) {
      loadData();
    }

    return () => {isLoaded = false}
  },[])

  return (
    <React.Fragment>
      <div className='page-title'>{jsonData.id}<br />{jsonData.title}</div>
      <div className='page-desc'>
        {
          jsonData.phar
          && Array.isArray(jsonData.phar)
          && jsonData.phar.map((p,i) =>
            <span key={`key-${i}`}>{p}<br /></span>)
        }
      </div>
      <div className='bismillah'>بِـــسْمِ اﷲِالرَّحْمٰنِ الرَّحِيْمِ</div>
      <div className='ayat'>
      {data && data.map(ayat => <span key={`ayat-${ayat.id}`}>{ayat.ayat}<span className='q-num'>{angka(ayat.id)}</span></span>)}
      </div>
      <div className='page-title'>{doa.title}</div>
      <div className='bismillah'>بِـــسْمِ اﷲِالرَّحْمٰنِ الرَّحِيْمِ</div>
      <div className='ayat'>
        {doa && doa.ayats && doa.ayats.map(ayat => <span key={`ayat-${ayat.id}`}>{ayat.ayat}.</span>)}
      </div>
      <style jsx>{`
      .bismillah {
        font-family: 'lpmq';
        font-size: 1.75em;
        text-align: center;
        margin-bottom: 24px;
      }

      .q-num {
        font-size: 0.8em;
      }

      .q-num:after {
        content:' ';
      }

      .q-num:before {
        content:'';
        white-space: nowrap;
      }

      .ayat {
        font-family: 'lpmq';
        font-weight: 400;
        font-size: 1.6em;
        direction: rtl;
        text-align: justify;
        text-align-last: center;
      }

      .page-desc {
        margin: 25px 0;
        text-align: right;
      }

      .page-title {
        font-weight: bold;
        font-size: 16pt;
        text-align: right;
        margin-top: 16px;
      }`}</style>
    </React.Fragment>
  )
}


export default YasinPage;