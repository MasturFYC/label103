import type { NextApiRequest, NextApiResponse } from 'next'
import { readFileSync } from 'fs';
import path from 'path';
//import FadilahHariJumat from '../../json-data/bagian-1/fadilah-hari-jumat.json'
//import FadilahMembacaAlquran from '../../json-data/bagian-1/fadilah-membaca-alquran.json'
import AdabMembacaAlquran from '../../json-data/bagian-1/adab-membaca-alquran.json'
import SuratAlFatihah from '../../json-data/al-fatihah.json'
import SuratYasin from '../../json-data/yasin.json'

export default async function yasiinHandler(req: NextApiRequest, res: NextApiResponse) {
  // const file = path.join(path.join(__dirname, '../public/json-data', 'yasin.json'));
  // const result = JSON.parse(readFileSync (file, "utf8"));

  // console.log(result)

  //    if(result) {
  res.status(200).json({
    adabMembacaAlquran: AdabMembacaAlquran,
    suratAlFatihah: SuratAlFatihah.ayats,
    suratYasin: SuratYasin.ayats,

  });
  //  } else {
  //res.status(404).json({error: "Data not found"})
  //}
}