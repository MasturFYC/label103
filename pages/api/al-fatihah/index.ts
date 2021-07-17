import type { NextApiRequest, NextApiResponse } from 'next'
import { readFileSync } from 'fs';
import path from 'path';
import data from '../json-data/al-fatihah.json'

export default async function yasiinHandler(req: NextApiRequest, res: NextApiResponse) {
    // const file = path.join(path.join(__dirname, '../public/json-data', 'yasin.json'));
    // const result = JSON.parse(readFileSync (file, "utf8"));

    // console.log(result)

    //    if(result) {
    res.status(200).json(data);
    //  } else {
    //res.status(404).json({error: "Data not found"})
    //}
}