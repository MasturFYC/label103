import React from "react";
//import { iSurat, iText } from 'constants/ayat-interface'
import { Bismillah, isString, PageTitle, Surat } from 'components/books'

interface iIntro {
  id: number;
  title: string;
}

interface iPhar {
  id: number;
  text: string;
  bacaan?: string;
  arti?: string;
  isAyat?: boolean;
}

interface iOl {
  isOl?: boolean;
  type: string;
  start: number;
  list: iList[]
}

interface iAyat {
  text: string;
  arab: string;
  bacaan: string;
  arti: string;
}

interface iList {
  id: number;
  text: iAyat | string;
}

interface iPharagraph {
  id: number;
  text: string;
  ol?: iOl;
}

interface iPage {
  intro: iIntro;
  pharagraph: iPharagraph[];
}

/**
 * 
 * @returns type guard
 */
function isAyat(data: string | iAyat): data is iAyat {
  return (data as iAyat).text !== undefined;
}

const SheetPage = () => {
  const [page, setPage] = React.useState<iPage>({} as iPage);

  React.useEffect(() => {
    let isLoaded = false;

    const loadData = async () => {
      const data = (await import('shared/jsons/menyolatkan-jenazah.json')).default;
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
      {page.intro && <PageTitle intro={page.intro} />}
      <Bismillah/>
      {page.pharagraph && page.pharagraph.map(phar =>
        <React.Fragment key={`phar-${phar.id}`}>
          <div className='phar'>{phar.text}</div>
          {phar.ol &&
            <React.Fragment>
              {phar.ol.isOl
                ?
                <ol className='ol-inside' start={phar.ol.start} type={phar.ol.type === "a" ? "a" : "1"}>
                  {phar.ol.list.map(o =>
                    <li key={`ol-${o.id}`}>
                      {isAyat(o.text) ?
                        <div>
                          <div>{o.text.text}</div>
                          <div className='ayat'>{o.text.arab}</div>
                        </div>
                        : <div>{o.text}</div>}
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
        direction: rtl;
        text-align: justify;
        text-align-last: center;
      }
      `}</style>
    </React.Fragment>
  )
}


export default SheetPage;
