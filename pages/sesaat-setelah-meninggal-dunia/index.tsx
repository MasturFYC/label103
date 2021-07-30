import React from "react";
//import { iSurat, iText } from 'constants/ayat-interface'
import { PageTitle } from 'components/books'
import { iTitle } from "constants/interfaces";


interface iAyat {
  id: number;
  text?: string;
  arab?: string | undefined;
  bacaan?: string | undefined;
  arti?: string | undefined;
}

interface iList {
  id: number;
  text: string;
  phar?: iAyat[];
  ul?: {
    type: string;
    start: number;
    isOl: boolean;
    class: string;
    list: ({
      id: number;
      text: string;
    })[]
  }
}

interface iOl {
  isOl?: boolean;
  type: string;
  start: number;
  class: string;
  list: iList[];
}

interface iPharagraph {
  id: number;
  text: string;
  class?: string;
  ol?: iOl | undefined;
}

interface iPage {
  title: iTitle;
  pharagraph: iPharagraph[];
}

/**
 * 
 * @returns type guard
 */
function isAyat(data: string | iAyat): data is iAyat {
  return (data as iAyat).arab !== undefined;
}

const SheetPage = () => {
  const [page, setPage] = React.useState<iPage>({} as iPage);

  React.useEffect(() => {
    let isLoaded = false;

    const loadData = async () => {
        const data = (await import('shared/jsons/tahlilan.json')).default;
        //console.log(yasin.ayats)
        setPage(data)
    }

    if (!isLoaded) {
      loadData();
    }

    return () => { isLoaded = false }
  }, [])

  return (
    <React.Fragment>
      {page.title && <PageTitle title={page.title} />}
      {page.pharagraph && page.pharagraph.map(phar =>
        <React.Fragment key={`phar-${phar.id}`}>
          <div className={phar.class}>{phar.text}</div>
          {phar.ol &&
            <React.Fragment>
              {phar.ol.isOl
                ?
                <ol className={phar.ol.class} start={phar.ol.start} type={phar.ol.type === "a" ? "a" : "1"}>
                  {phar.ol.list.map(o =>
                    <li key={`ol-${o.id}`}>
                      <div>{o.text}</div>
                      {o.phar && o.phar.map(p => <div>
                        {p.arab ?
                          <div key={`o-${o.id}`} className='ayat phar'>{p.arab}</div> :
                          <div className='phar'>{p.text}</div>}
                      </div>)}
                      {o.ul && <ol className={o.ul.class} start={o.ul.start} type={o.ul.type === "1" ? '1' : 'a'}>
                        {o.ul.list.map((u) => <li key={`u-${u.id}`}>{u.text}</li>)}
                      </ol>}
                    </li>
                  )}
                </ol>
                :
                phar.ol.list.map(o =>
                  <div key={`phar-${o.id}`} className='div-li'>{o.text}</div>
                )
              }
            </React.Fragment>
          }
        </React.Fragment>
      )}
      <style jsx>{`
      .normal {
        text-align: justify;
        margin-top: 10px;
      }
      .phar {
        text-align: justify;
        margin-top: 10px;
      }
      .ol-inside {
        margin-top: 0;
        list-style-position: outside;
        margin-left:1.1em;
        padding-left:0;
        text-align: justify;
      }
      .div-li {
        margin-top: 3px;
      }
      li {
        margin-top: 3px;
        padding-left: 0.55em;
      }
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
        margin-top: 10px;
        direction: rtl;
        text-align: justify;
        text-align-last: center;
      }
      `}</style>
    </React.Fragment>
  )
}


export default SheetPage;
