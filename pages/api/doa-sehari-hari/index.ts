import { iDoa, iContents } from "constants/ayat-interface";
import doaSebelumMakan from './doa-sebelum-makan'
import doaSetelahMakan from './doa-setelah-makan'
import doaSebelumTidur from 'shared/jsons/doa-sebelum-tidur.json';
import doaBangunTidur from 'shared/jsons/doa-setelah-tidur.json';
import doaMasukKamarMandi from 'shared/jsons/doa-masuk-kamar-mandi.json';
import doaKeluarKamarMandi from 'shared/jsons/doa-keluar-kamar-mandi.json';
import doaKeluarRumah from 'shared/jsons/doa-keluar-rumah.json';
import doaMasukRumah from 'shared/jsons/doa-masuk-rumah.json';
import doaMenujuMasjid from 'shared/jsons/doa-menuju-masjid.json';
import doaMasukMasjid from 'shared/jsons/doa-masuk-masjid.json';
import doaKeluarMasjid from 'shared/jsons/doa-keluar-masjid.json';
import doaBepergian from 'shared/jsons/doa-akan-bepergian.json';
import doaTibaDiTujuan from 'shared/jsons/doa-tiba-di-tujuan.json';
import doaBercemin from 'shared/jsons/doa-bercermin.json';
import doaMemakaiPakaian from 'shared/jsons/doa-memakai-pakaian.json';
import doaMembukaPakaian from 'shared/jsons/doa-membuka-pakaian.json';
import doaMasukPasar from 'shared/jsons/doa-masuk-pasar.json';

export default function doa(): iDoa {

  return {
    id: 37,
    title: "Doa Sehari-Hari",
    phar: [""],
    contents: [
      {
        id: 1,
        subTitle: "Doa Sebelum Makan",
        sources: "https://food.detik.com/info-kuliner/d-5265580/doa-sebelum-dan-sesudah-makan-lengkap-dengan-arab-dan-artinya",
        ayats: doaSebelumMakan()
      },
      {
        id: 2,
        subTitle: "Doa Setelah Makan",
        sources: "https://islam.nu.or.id/post/read/66592/doa-lengkap-sesudah-makan",
        ayats: doaSetelahMakan()
      },
      {
        id: doaSebelumTidur.id,
        subTitle: doaSebelumTidur.subTitle,
        ayats: [
          {
            id: 1,
            ayat: doaSebelumTidur.ayats.map(o => o.ayat).join(". "),
            arti: doaSebelumTidur.ayats.map(o => o.arti).join(". "),
            bacaan: doaSebelumTidur.ayats.map(o => o.bacaan).join(". "),
            reference: doaSebelumTidur.references
          }
        ]
      },
      {
        id: doaBangunTidur.id,
        subTitle: doaBangunTidur.subTitle,
        ayats: [
          {
            id: 1,
            ayat: doaBangunTidur.ayats.map(o => o.ayat).join(". "),
            arti: doaBangunTidur.ayats.map(o => o.arti).join(". "),
            bacaan: doaBangunTidur.ayats.map(o => o.bacaan).join(". "),
            reference: doaBangunTidur.references
          }
        ]
      },
      doaMasukKamarMandi,
      doaKeluarKamarMandi,
      {
        id: doaMasukRumah.id,
        subTitle: doaMasukRumah.subTitle,
        ayats: [
          {
            id: 1,
            ayat: doaMasukRumah.ayats.map(o => o.ayat).join(". "),
            arti: doaMasukRumah.ayats.map(o => o.arti).join(". "),
            bacaan: doaMasukRumah.ayats.map(o => o.bacaan).join(". "),
            reference: doaMasukRumah.references
          }
        ]
      },
      doaKeluarRumah,
      {
        id: doaMenujuMasjid.id,
        subTitle: doaMenujuMasjid.subTitle,
        ayats: [
          {
            id: 1,
            ayat: doaMenujuMasjid.ayats.map(o => o.ayat).join(". "),
            arti: doaMenujuMasjid.ayats.map(o => o.arti).join(". "),
            bacaan: doaMenujuMasjid.ayats.map(o => o.bacaan).join(". "),
            reference: doaMenujuMasjid.references
          }
        ]
      },
      doaMasukMasjid,
      doaKeluarMasjid,
      {
        id: doaBepergian.id,
        subTitle: doaBepergian.subTitle,
        ayats: [
          {
            id: 1,
            ayat: doaBepergian.ayats.map(o => o.ayat).join(". "),
            arti: doaBepergian.ayats.map(o => o.arti).join(". "),
            bacaan: doaBepergian.ayats.map(o => o.bacaan).join(". "),
            reference: doaBepergian.references
          }
        ]
      },
      doaTibaDiTujuan,
      doaBercemin,
      doaMemakaiPakaian,
      doaMembukaPakaian,
      doaMasukPasar
    ]
  }
}
