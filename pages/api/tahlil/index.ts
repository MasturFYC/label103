import type { NextApiRequest, NextApiResponse } from 'next'
import PDFDocument from 'pdfkit';
//import fontkit from "fontkit";
const mmToPt = (mm: number): number => {
    return mm * 2.83465;
}

export default async function tahlilHandler(req: NextApiRequest, res: NextApiResponse) {

    const margin = { top: mmToPt(15), right: mmToPt(15), bottom: mmToPt(20), left: mmToPt(25) }
    const pageSize = { width: mmToPt(148.5), height: mmToPt(215) }
    const lpmqFont = 'public/fonts/lpmq.dfont';
    const lpmq = 'Lpmq';
    const helvetica = 'Helvetica';
    let y: number = margin.left;
    let x: number = margin.top;
    const space = mmToPt(6);

    const doc = new PDFDocument({
        compress: true,
        margins: margin,
        size: [pageSize.width, pageSize.height]
    });
    const id = req.query && +req.query.id || 0;

    const textOptions = {
        align: 'center',
        columns: 1,
        width: pageSize.width - (margin.left + margin.right),
        lineBreak: true
    }

    res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Access-Control-Allow-Origin': '*'
    });

    doc.pipe(res)


    doc.font(helvetica)
        .text('Al-Fatiha', { ...textOptions, align: 'left' })
        .font('Times-Roman')
        .rtl(true)
        .text('بِـــسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ', { ...textOptions })

    doc.end();
}