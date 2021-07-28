import React from "react";
import { iSurat } from 'constants/ayat-interface'
import { angka, Bismillah, PageTitle } from '../../components/books'


const YasinPage = () => {
  const [surat, setSurat] = React.useState<iSurat>({} as iSurat);

  React.useEffect(() => {
    let isLoaded = false;

    const loadData = async () => {
      const yasin = (await import('shared/jsons/yasin.json')).default;
      //console.log(yasin.ayats)
      setSurat(yasin)
    }

    if (!isLoaded) {
      loadData();
    }

    return () => { isLoaded = false }
  }, [])

  return (
    <React.Fragment>
      {surat.intro && <PageTitle intro={surat.intro} />}
      <Bismillah />
      <div className='ayat'>
        {surat
          && surat.ayats
          && surat.ayats.map(ayat => <span key={`ayat-${ayat.id}`}>{ayat.ayat}<span className='q-num'>{angka(ayat.id)}</span></span>)}
      </div>
      <div className='page-title'>{surat.penutup?.title}</div>
      <Bismillah />
      <div className='ayat'>
        {surat.penutup?.ayats && surat.penutup?.ayats.map(ayat => <span key={`ayat-${ayat.id}`}>{ayat.ayat}.</span>)}
      </div>

      <style jsx>{`
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
