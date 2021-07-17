import type { NextApiRequest, NextApiResponse } from 'next'
//import { readFileSync } from 'fs';
//import path from 'path';
import AlFatihah from '../json-data/al-fatihah.json'
import AlIkhlas from '../json-data/al-ikhlas.json'
import AlFalaq from '../json-data/al-falaq.json'
import AnNas from '../json-data/an-nas.json'
import DoaTahlil from '../json-data/doa-tahlil.json'

export default async function tahlilHandler(req: NextApiRequest, res: NextApiResponse) {

    const data = {
        bismillah: AlFatihah.ayat.filter(o => o.id === 1)[0],
        alIkhlas: AlIkhlas,
        alFalaq: AlFalaq,
        anNas: AnNas,
        alFatihah: AlFatihah,
        // doaTahlil: DoaTahlil,        
    }

    //console.log('DATA:',data);

    res.status(200).json(data);
}