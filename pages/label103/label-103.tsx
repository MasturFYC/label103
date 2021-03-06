import Head from 'next/head'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import labelStyles from '../../styles/label.module.css'
import { useState } from 'react'
import {iGroup, iPeople} from '../../constants/interfaces'

interface iPageSize {
  width: number,
  height: number
}
interface iLabelPitch {
  horizontal: number,
  vertical: number
}
interface iLabelSize extends iPageSize { }
interface iLabelCount {
  column: number,
  row: number
}

const mmToPx = (n: number) => {
  return n * 3.7795275590551;
}

const pageSizeInit: iPageSize = {
  width: 200,
  height: 137
}
const labelSizeInit: iLabelSize = {
  width: 64,
  height: 32
}
const labelCountInit: iLabelCount = {
  column: 3,
  row: 4
}
const labelPitchInit: iLabelPitch = {
  horizontal: 1.5,
  vertical: 1.5
}

const initSample: iPeople[] = [];
//   { people_id: 1, name1: 'Doni Armadi', name2: 'Unknown', city: 'Telukagung' },
//   { people_id: 2, name1: 'Saita', post: 'Direktur', street: 'Blok Lapangan RT. 02 / RW. 01', city: 'Plumbon' },
// ]

const initText: string = `1;Doni Armadi;Unknown;Telukagung\n2;Saita;Direktur;Blok Lapangan RT. 02 / RW. 01;Plumbon`;


export default function Label103() {
  const [pageSize, setPageSize] = useState<iPageSize>(pageSizeInit)
  const [labelSize, setLabelSize] = useState<iLabelSize>(labelSizeInit)
  const [labelCount, setLabelCount] = useState<iLabelCount>(labelCountInit)
  const [labelPitch, setLabelPitch] = useState<iLabelPitch>(labelPitchInit)
  const [leftMargin, setLeftMargin] = useState<number>(2)
  const [topMargin, setTopMargin] = useState<number>(2)
  const [sampleData, setSampleData] = useState(initText)

  const onTextAreaChange = (e: string) => {
    setSampleData(e);
  }

  return (
    <Layout>
      <Head>
        <title>Label 103</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Label 103</p>
      </section>
      <section>
        <div className={labelStyles.sectionBorder}>
          <div className={labelStyles.leftInput}>
            <table>
              <tbody>
                <tr style={{ verticalAlign: 'top' }}>
                  <td><strong>Page size</strong></td>
                  <td>Width:</td>
                  <td><input className={labelStyles.labelInput} type="text" value={pageSize.width} onChange={e => setPageSize({ ...pageSize, width: parseInt(e.target.value) || 0 })} /></td>
                </tr>
                <tr>
                  <td />
                  <td>Height:</td>
                  <td><input className={labelStyles.labelInput} type="text" value={pageSize.height} onChange={e => setPageSize({ ...pageSize, height: parseInt(e.target.value) || 0 })} /></td>
                </tr>
                <tr style={{ verticalAlign: 'top' }}>
                  <td><strong>Label size</strong></td>
                  <td>Width:</td>
                  <td><input className={labelStyles.labelInput} type="text" value={labelSize.width} onChange={e => setLabelSize({ ...labelSize, width: parseInt(e.target.value) || 0 })} /></td>
                </tr>
                <tr>
                  <td />
                  <td>Height:</td>
                  <td><input className={labelStyles.labelInput} type="text" value={labelSize.height} onChange={e => setLabelSize({ ...labelSize, height: parseInt(e.target.value) || 0 })} /></td>
                </tr>
                <tr style={{ verticalAlign: 'top' }}>
                  <td><strong>Label count</strong></td>
                  <td>Number accros:</td>
                  <td><input className={labelStyles.labelInput} type="text" value={labelCount.column} onChange={e => setLabelCount({ ...labelCount, column: parseInt(e.target.value) || 0 })} /></td>
                </tr>
                <tr>
                  <td />
                  <td>Number down:</td>
                  <td><input className={labelStyles.labelInput} type="text" value={labelCount.row} onChange={e => setLabelCount({ ...labelCount, row: parseInt(e.target.value) || 0 })} /></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={labelStyles.rightInput}>
            <table>
              <tbody>
                <tr>
                  <td>Side margins:</td>
                  <td />
                  <td><input className={labelStyles.labelInput} type="text" value={leftMargin} onChange={e => setLeftMargin(parseInt(e.target.value) || 0)} /></td>
                </tr>
                <tr>
                  <td>Top margins:</td>
                  <td />
                  <td><input className={labelStyles.labelInput} type="text" value={topMargin} onChange={e => setTopMargin(parseInt(e.target.value) || 0)} /></td>
                </tr>
                <tr>
                  <td>Horizontal pitch:</td>
                  <td />
                  <td><input className={labelStyles.labelInput} type="text" value={labelPitch.horizontal} onChange={e => setLabelPitch({ ...labelPitch, horizontal: parseFloat(e.target.value) || 0 })} /></td>
                </tr>
                <tr>
                  <td>Vertical pitch:</td>
                  <td />
                  <td><input className={labelStyles.labelInput} type="text" value={labelPitch.vertical} onChange={e => setLabelPitch({ ...labelPitch, vertical: parseFloat(e.target.value) || 0 })} /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section>
        <div className={labelStyles.pageWidth}
          style={{
            width: mmToPx(pageSize.width),
            height: mmToPx(pageSize.height),
            paddingRight: 0,
            paddingBottom: 0,
            paddingLeft: mmToPx(leftMargin),
            paddingTop: mmToPx(topMargin)
          }}
        >
          <ShowLabel
            labelPitch={labelPitch}
            labelCount={labelCount}
            labelSize={labelSize}
            peoples={sampleData}
          />
        </div>
      </section>
      <section style={{marginTop: '25px'}}>        
      Sample Data: {'{ id; name1; name2; position; street; city }'}<br />
        { /* sampleData &&
          <ShowSample peoples={sampleData} saveChange={onTextAreaChange} />
        */ }
      </section>
    </Layout>
  )
}

const combinePeopleProperty = (people: iPeople) => {
  return Object.entries(people).map(item => item[1]).join(';'); // people.join(';'); //.name1 + `;` + (people.name2 ? people.name2 : '') + `;` + (people.position ? people.position : '') + `;` + (people.block ? people.block : '') + `;` + people.city;
}


type ShowSampleType = {
  peoples: string,
  saveChange: Function
}

const ShowSample = ({ peoples, saveChange }: ShowSampleType) => {
  return (
    <textarea
      onChange={e => saveChange(e.target.value)}
      value={peoples}
      style={{ width: '100%' }}
      rows={12}
    />
  )
}

type showLabelType = {
  labelCount: iLabelCount,
  labelSize: iLabelSize,
  labelPitch: iLabelPitch,
  peoples: string
}

const escapeRegExp = (txt: string): string => {
  return txt.replace(/[;\t]/gi, '|')
}

const ShowLabel = ({
  labelCount,
  labelSize,
  labelPitch,
  peoples
}: showLabelType) => {
  const divItems = [];
  const lines = peoples?.split('\n');
  const data: iPeople[] = [];
/*
  if (lines.length > 0) {    
    
    let n = 0;
    lines.map(item => {
      n++;
      const s = escapeRegExp(item).split('|');
      // console.log("x", s.length);
      if(s.length >= 3) {
        if(s.length === 3) {
          data.push({
            people_id: n,
            name1: s[1],
            city: s[2]
          })
        } else if(s.length === 4) {
          data.push({
            id: n,
            name1: s[1],
            block: s[2],
            city: s[3]
          })
        } else if(s.length === 5) {
          data.push({
            id: n,
            name1: s[1],
            name2: s[2],
            block: s[3],
            city: s[4]
          })
        } else if(s.length <= 6) {
          data.push({
            id: n,
            name1: s[1],
            name2: s[2],
            position: s[3],
            block: s[4],
            city: s[5]
          })
        }
      }
    })
  }
  */
  let n = 0;
    for (var j = 0; j < labelCount.row; ++j) {
      for (var c = 0; c < labelCount.column; ++c) {
        const people = data.filter((o, index) => index === n)[0]
        divItems.push(<div
          key={`div_${n}`}
          className={labelStyles.labelBox}
          style={{
            marginRight: (c === labelCount.column - 1) ? 0 : mmToPx(labelPitch.horizontal),
            marginBottom: mmToPx(labelPitch.vertical),
            width: mmToPx(labelSize.width),
            height: mmToPx(labelSize.height),
            clear: (c === 0) ? 'left' : 'right',
          }}>
          {people &&
            <div className={labelStyles.center}>
              <div className={labelStyles.labelName}>{people.name1 + (people.name2 ? ' / ' + people.name2 : '')}</div>
              {people.post && <div className={labelStyles.labelPosition}>({people.post})</div>}
              <div className={labelStyles.labelStreet}>
                {people.street ? people.street + ' - ' : ''}
                {people.city}</div>
            </div>}
        </div>);
        n++;
      }
    }
  return (
    <div style={{ lineHeight: 1.25 }}>
      { divItems.map((item) => item)}
    </div>
  )
}