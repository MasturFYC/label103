import React from "react"
import Layout, { siteTitle } from 'components/layout'
import { Bismillah, iSurat, AlSurat } from "components/books";
import Head from "next/head";

export default function PageTahlil() {
  const [alFatihah, setAlfatihah] = React.useState<iSurat>({} as iSurat);

  React.useEffect(() => {
    let isLoaded = false;

    const LoadData = async () => {
      const data = (await import('shared/jsons/al-fatihah.json')).default;
      setAlfatihah(data)
    }

    if (!isLoaded) {
      LoadData();
    }
    return () => { isLoaded = true }
  },[])

  const [alIkhlas, setAlIkhlas] = React.useState<iSurat>({} as iSurat);

  React.useEffect(() => {
    let isLoaded = false;

    const LoadData = async () => {
      const data = (await import('shared/jsons/al-ikhlas.json')).default;
      setAlIkhlas(data)
    }

    if (!isLoaded) {
      LoadData();
    }
    return () => { isLoaded = true }
  },[])


  const [alFalaq, setAlFalaq] = React.useState<iSurat>({} as iSurat);

  React.useEffect(() => {
    let isLoaded = false;

    const LoadData = async () => {
      const data = (await import('shared/jsons/al-falaq.json')).default;
      setAlFalaq(data)
    }

    if (!isLoaded) {
      LoadData();
    }
    return () => { isLoaded = true }
  }, [])


  const [anNas, setAnNas] = React.useState<iSurat>({} as iSurat);

  React.useEffect(() => {
    let isLoaded = false;

    const LoadData = async () => {
      const data = (await import('shared/jsons/an-nas.json')).default;
      setAnNas(data)
    }

    if (!isLoaded) {
      LoadData();
    }
    return () => { isLoaded = true }
  }, [])

  const [alifLamMin, setAlifLamMin] = React.useState<iSurat>({} as iSurat);

  React.useEffect(() => {
    let isLoaded = false;

    const LoadData = async () => {
      const data = (await import('shared/jsons/alif-lam-mim.json')).default;
      setAlifLamMin(data)
    }

    if (!isLoaded) {
      LoadData();
    }
    return () => { isLoaded = true }
  }, [])


  return (
    <Layout home title={"TAHLILAN"}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <Bismillah />
        <div className="bacaan">Bismillaahir Rahmaanir Rahiim</div>
        <div className="arti">Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang</div>
        <div className="ayat">اِلَى حَضْرَةِ النَّبِيِّ صَلَّى اللهُ عَلَيهِ وَسَلَّمَ وَاَلِهِ وصَحْبِهِ شَيْءٌ لِلهِ . لَهُمُ الْفَاتِحَةُ :</div>
        <div className="arti">Untuk yang terhormat Nabi Muhammad SAW, segenap keluarga, dan para sahabatnya. Bacaan Al-Fatihah ini kami tujukan kepada Allah dan pahalanya untuk mereka semua. Al-Fatihah</div>
        <AlSurat surat={alFatihah} includeBacaan />
        <div className="ayat">شَمَّ اِلٰى حَضَرَاتِ اِخْوَا نِهٖ مِنَ الْاَنْبِۢيَاۤءِ وَ الْمُرْسَلِيْنَ وَالْاَوْلِيَاۤءِ وَاَلشَّهَدَاۤءِ وَاَلصّٰلِحِيْنَ وَاَلصَّحَا بَةِوَ التَّا بِعِيّنَ وَالْعُلَمَاۤءِ الْعَا مِلِيْنَ وَالْمُصَنِّفِيْنَ الْمُخْلِصِيْنَ وَ جَمِيْعِ الْمَلٰۤئِكَةِ الْمُقَرَّ بِيْنَ خُصُوْصًا سَيِّدِنَا الشَّيْخِ عَبْدِ الْقَادِرِا لْجَيْلَانِى . الْفَاتِحَةْ :</div>
        <div className="bacaan">Summa ilaa hadhorooti ikhwaanihi minal anbiyaa’I wal mursaliina wal auliyaa’I wash syuhadaa’I wash shoolihiina wash shohaabati wat taabi’iina wal ulamaa’il aamiliina walmushonni final mukh’lishina wa jamii’il malaa ikatil muqorrobiina khusuushon sayyidinaa asy syaikhi’abdil qoodiril jailaani . Al Fatihah</div>
        <div className="arti">kepada yang terhormat para handai taulan dari para nabi dan rosul, para wali, para syuhada’, orang orang saleh, para sahabat, para ulama yang mengamalkan ilmunya, para pengarang yang ikhlas dan kepada segenap malaikat yang mendekatkan diri kepada Allah, terutama kepada penghulu kita syaikh Abdul Qadir Jailani. (Lanjutkan membaca Al Fatihah)</div>
        <AlSurat surat={alFatihah} includeBacaan />
        <div className="ayat">شُمَّ اِلٰى جَمِيْعِ اَهْلِ الْقُبُوْرِ مِنَا لْمُسْلِمِيْنَ وَالْمُسْلِمَتِ وَالْمُؤْمِنِيْنَ وَالْمُوْ مِنٰتِ مِنْ  مَّشَارِ قِالْاَرْضِ وَمَغَا رِبِهَا بَرِّهَا وَبَحْرِ هَا خُصُوْصًااِلىٰۤ اٰبَاۤءَ نَاوَ اُمَّهَا تِنَا وَاَجْدَا دِنَا وَ جَدَّا تِنَا وَمَشَا يِخَنَا وَمَشَا يِخَ مَشَا يِخِنَا وَاَسَاتِذَتِنَا وَاَسَا تَذَةِ اِسَاتِذَ تِنَ (وَحُصُوْصًا اِلَى الرُّحِ …) وَلَمِنِ اجْتَمَعْنَا هَهُنَا بِسَبَبِهٖ . الْفَتِحَةُ :</div>
        <div className="bacaan">Tshumma ilaa jamii'i ahlil qubuuri minal muslimiina walmuslimaati walmu'miniina walmu'minaati mim masyaariqil ardhi ilaa maghooribihaa barrihaa wabahrihaa khushushon ilaa aabaainaa wa-ummahaatinaa wa-ajdaadinaa wajaddaatinaa wanakhush-shu khushuuson manijtama'naa haahunaa bisababihii wali-ajlihii. AL-Faatihah</div>
        <div className="arti">Kemudian kepada seluruh penghuni kubur dalam kalangan orang Islam lelaki dan perempuan, orang Mukmin lelaki dan perempuan, dari belahan bumi Timur dan Barat, di laut dan di darat, terutama kepada (Fulan bin Fulan), dan ibu bapak kami, datuk dan nenek kami, lebih utamakan lagi kepada orang yang menyebabkan kami berkumpul di sini.</div>
        <AlSurat surat={alFatihah} includeBacaan />
        <Bismillah />
        <AlSurat surat={alIkhlas} includeBacaan includePenutup />
        <Bismillah />
        <AlSurat surat={alFalaq} includeBacaan includePenutup />
        <Bismillah />
        <AlSurat surat={anNas} includeBacaan includePenutup />
        <div className="ayat">الْفَتِحَةُ :</div>
        <AlSurat surat={alFatihah} includeBacaan />
        <Bismillah />
        {alifLamMin && alifLamMin.ayats &&
          <React.Fragment>
          <div className="ayat">{alifLamMin.ayats.filter(item => item.id <= 5).map(x => <span key={`ayat-${x.id}`}>{x.ayat}{'. '}</span>)}</div>
          <div className="ayat">{alifLamMin.ayats.filter(item => item.id === 163).map(x => <span key={`ayat-${x.id}`}>{x.ayat}{'. '}</span>)}</div>
          <div className="ayat">{alifLamMin.ayats.filter(item => item.id === 255).map(x => <span key={`ayat-${x.id}`}>{x.ayat}{'. '}</span>)}</div>
          <div className="ayat">{alifLamMin.ayats.filter(item => item.id >= 284 && item.id <= 286).map(x => <span key={`ayat-${x.id}`}>{x.ayat}{'. '}</span>)}</div>
          <div className="ayat">{alifLamMin.ayats.filter(item => item.id === 500).map(x => <span key={`ayat-${x.id}`}>{x.ayat}{'. '}</span>)}</div>
          <div className="ayat">{alifLamMin.ayats.filter(item => item.id === 501).map(x => <span key={`ayat-${x.id}`}>{x.ayat}{'. '}</span>)}</div>

          <div className="bacaan">{alifLamMin.ayats.filter(item => item.id <= 5).map(x => <span key={`ayat-${x.id}`}>{x.bacaan}{'. '}</span>)}</div>
          <div className="bacaan">{alifLamMin.ayats.filter(item => item.id === 163).map(x => <span key={`ayat-${x.id}`}>{x.bacaan}{'. '}</span>)}</div>
          <div className="bacaan">{alifLamMin.ayats.filter(item => item.id === 255).map(x => <span key={`ayat-${x.id}`}>{x.bacaan}{'. '}</span>)}</div>
          <div className="bacaan">{alifLamMin.ayats.filter(item => item.id >= 284 && item.id <= 286).map(x => <span key={`ayat-${x.id}`}>{x.bacaan}{'. '}</span>)}</div>
          <div className="bacaan">{alifLamMin.ayats.filter(item => item.id === 500).map(x => <span key={`ayat-${x.id}`}>{x.bacaan}{'. '}</span>)}</div>
          <div className="bacaan">{alifLamMin.ayats.filter(item => item.id === 501).map(x => <span key={`ayat-${x.id}`}>{x.bacaan}{'. '}</span>)}</div>
          </React.Fragment>
        }

      </section>
      <style jsx>{`
        .ayat {
          font-family: 'lpmq';
          font-weight: 400;
          font-size: 1.6em;
          margin-top: 1.5em;
          direction: rtl;
          text-align: justify;
          text-align-last: center;
          margin-bottom: 1em;
        }

        .bacaan {
          color: #007000;
          text-align: justify;
          text-align-last: right;
          margin-bottom:16px;
        }

        .arti {
          color: #555;
          text-align: justify;
          margin-top: 16px;
        }      
        `}</style>
    </Layout>
  )
}