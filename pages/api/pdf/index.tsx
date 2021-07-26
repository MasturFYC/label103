import type { NextApiRequest, NextApiResponse } from 'next'
import PDFDocument from 'pdfkit';
import { iPeople } from '../../../constants/interfaces'

const mmToPt = (mm: number): number => {
  return mm * 2.83465;
}


export default async function categoryHandler(req: NextApiRequest, res: NextApiResponse) {
  const body = JSON.parse(req.body);
  const { config } = body;
  const peoples: iPeople[] = body.data;
  let j: number = 0;
  const cols: number = config.labelCount.column;
  const rows: number = config.labelCount.row;
  const labelCount: number = cols * rows;
  let y: number = mmToPt(config.topMargin);
  let x: number = mmToPt(config.leftMargin);
  const colWidth = mmToPt(config.pageSize.width) - (x + y);
  const space = mmToPt(config.pitch.horizontal)

  const doc = new PDFDocument({
    compress: true,
    margins: {
      top: mmToPt(config.topMargin),
      bottom: mmToPt(config.topMargin),
      left: mmToPt(config.leftMargin),
      right: mmToPt(config.leftMargin),
    },
    size: [mmToPt(config.pageSize.width), mmToPt(config.pageSize.height)]
  });
  const id = req.query && +req.query.id || 0;

  res.writeHead(200, {
    'Content-Type': 'application/pdf',
    'Access-Control-Allow-Origin': '*'
  });

  doc.pipe(res);

  y = doc.y



  let c = 0;
  let r = 0;

  const textOptions = {
    align: 'center',
    columns: cols,
    width: colWidth,
    lineBreak: true
  }


  peoples && peoples.map((people, i) => {


    if (c === cols) {
      x = mmToPt(config.leftMargin);
      y += mmToPt(config.labelSize.height) + + mmToPt(config.pitch.vertical)
      c = 0;
    }

    if (r === labelCount) {
      doc.addPage()
      x = mmToPt(config.leftMargin);
      y = mmToPt(config.topMargin);
      r = 0;
    }

    const txt = {
      name:  `${people.name1}${people.name2 && ` / ${people.name2}`}`,
      address: `${people.post && `(${people.post})\n`||''}${people.street && `${people.street} - `||''}${people.city}`
    }
    
    const textHeight = doc.heightOfString(txt.address, { ...textOptions, paragraphGap: 4 });
    const nameHeight = doc.heightOfString(txt.name, {...textOptions, paragraphGap: 3});
    const ny: number = (y + space) + ((mmToPt(config.labelSize.height - space) - (textHeight + nameHeight)) / 2)
    //console.log(mmToPt(config.labelSize.height), '-', textHeight)

    doc
      .fontSize(13)
      .font('Times-Bold')
      .text(txt.name,
        //        `${people.name1}${people.name2 && `\n / ${people.name2}`}`,
        x + space,
        ny + space,
        {...textOptions, paragraphGap: 4})
      .font('Times-Roman')
      .text(txt.address,
        { ...textOptions, paragraphGap: 4})
    // .text(`${people.post && `(${people.post})` || ''}`,
    // x + space,
    // y + mmToPt(11),
    // textOptions)
    // .text(`${people.street && `${people.street} - `} ${people.city}`,
    // x + space,
    // y + mmToPt(18),
    // textOptions)

    doc.rect(x, y, mmToPt(config.labelSize.width), mmToPt(config.labelSize.height)).stroke();

    //console.log(x + mmToPt(config.labelSize.width) + mmToPt(config.leftMargin))
    x = mmToPt(config.labelSize.width) + x + space
    r++;
    c++;
  })

  //doc.text(test);

  doc.end();

}