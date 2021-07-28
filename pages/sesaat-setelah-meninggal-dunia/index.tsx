import React from "react";
//import { iSurat, iText } from 'constants/ayat-interface'
import { angka, Bismillah, PageTitle } from '../../components/books'

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
  id: number;
  text: string;
  phar?: iPhar[];
  isUl?: boolean;
}

interface iPharagraph {
  id: number;
  text: string;
  ol?: iOl[];
}

interface iPage {
  intro: iIntro;
  pharagraph: iPharagraph[];
}


const SheetPage = () => {
  const [page, setPage] = React.useState<iPage>({} as iPage);

  React.useEffect(() => {
    let isLoaded = false;

    const loadData = async () => {
      const data = (await import('shared/jsons/memandikan-jenazah.json')).default;
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
      {page.pharagraph && page.pharagraph.map(phar => {
        return (
          <React.Fragment key={`phar-${phar.id}`}>
            <div className='phar'>{phar.text}</div>
            {phar.ol &&
              <React.Fragment>
                <ol className='ol-inside'>
                  {phar.ol.map(o =>
                    <React.Fragment key={`ol-${o.id}`}>
                      {o.text && <li>{o.text}
                        {o.isUl
                          ? <ol type={'a'} className='ol-inside'>{
                            o.phar && o.phar.map(p =>
                              <li key={`li-${p.id}`}>{p.text}</li>
                            )
                          }</ol>
                          : o.phar && o.phar.map(u =>
                            <React.Fragment key={`u-${u.id}`}>
                              <div className='div-li'>{u.text}</div>
                            </React.Fragment>
                          )}
                      </li>}
                    </React.Fragment>
                  )
                  }
                </ol>
              </React.Fragment>
            }
          </React.Fragment>
        )
      })}

      <style jsx>{`
      .phar {
        text-align: justify;
        margin-top: 10px;
      }
      .ol-inside {
        margin-top: 0;
        list-style-position: outside;
        margin-left:0px;
        padding-left:15px;
        text-align: justify;
      }
      .div-li {
        margin-top: 3px;
      }
      li {
        margin-top: 3px;
        padding-left: 10px;
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

      .page-desc {
        margin: 25px 0;
        text-align: right;
      }

      .page-title {
        font-weight: bold;
        font-size: 16pt;
        text-align: right;
        margin-top: 16px;
      }`}</style>
    </React.Fragment>
  )
}


export default SheetPage;
