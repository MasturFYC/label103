import { iAyat } from "constants/ayat-interface";
import React from "react";
import { angka } from "./end-of-ayah";

export const Bismillah: React.FC = () => {
  return (
    <React.Fragment>
      <div className='bismillah'>بِـــسْمِ اﷲِالرَّحْمٰنِ الرَّحِــيْــمِ</div>
      <style jsx>{`
      .bismillah {
        font-family: 'lpmq';
        font-size: 1.75em;
        direction: rtl;
        margin: 24px 0 16px 0;
        text-align-last: center;
      }`}</style>
    </React.Fragment>
  )
}

export const Surat: React.FC<{ fileName: string }> = ({ fileName}) => {
  const [ayats, setAyats] = React.useState<iAyat[]>([]);

  React.useEffect(() => {
    let isLoaded = false;

    const loadData = async () => {
      const data = (await import(`shared/jsons/${fileName}.json`)).default;
      //console.log(yasin.ayats)
      setAyats(data.ayats)
    }

    if (!isLoaded) {
      loadData();
    }

    return () => { isLoaded = false }
  }, [])

  return (
    <React.Fragment>
      {(fileName !== 'al-fatihah') &&
      <div className='bismillah'>بِـــسْمِ اﷲِالرَّحْمٰنِ الرَّحِــيْــمِ</div>
      }
      <div className='ayat'>
      {ayats && ayats.map(ayat => <span>{ayat.arti}{ '. '}</span>)}
      </div>
      <style jsx>{`
      .ayat {
        font-family: 'lpmq';
        font-weight: 400;
        font-size: 1.6em;
        direction: rtl;
        text-align: justify;
        text-align-last: center;
      }
      `}</style>
    </React.Fragment>
  )
}