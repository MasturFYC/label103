import React from "react"
import { angka } from "./end-of-ayah"

export interface iAyat {
  id: number
  ayat: string
  name?:string;
  bacaan?: string
  arti?: string
}

interface iPenutup {
  title: string
  ayats: iAyat[]
}

export interface iSurat {
  id: number;
  title: string;
  descriptions?:string;
  pengantar: iAyat[];
  ayats: iAyat[];
  penutup?: iPenutup
}

export type suratType = {
  surat: iSurat;
  includeBacaan?: boolean;
  includePenutup?: boolean;
}
export const AlSurat: React.FC<suratType> =
  ({ surat, includeBacaan, includePenutup }) => {

    if (surat && surat.ayats) {
      return (
        <React.Fragment>
          <div className='ayat'>
            {surat.ayats.map(t => <span key={`s-${surat.id}-a-${t.id}`}>{t.ayat}{angka(t.id)}{' '}</span>)}
          </div>
          {
            includeBacaan && (
              <div>
                <div className='bacaan'>
                  {surat.ayats.map(t => <span key={`s-${surat.id}-a-${t.id}`}>{t.bacaan}{'. '}</span>)}
                </div>
                <div className='arti'>
                  {surat.ayats.map(t => <span key={`s-${surat.id}-a-${t.id}`}>{t.arti}{' '}</span>)}
                </div>
              </div>
            )
          }
          {
            includePenutup && (
              <React.Fragment>
                <div className='ayat'>
                  {surat.penutup && surat.penutup.ayats.map(t => <span key={`s-${surat.id}-a-${t.id}`}>{t.ayat}{'. '}</span>)}
                </div>
                {includeBacaan && (
                  <div>
                    <div className='bacaan'>
                      {surat.penutup && surat.penutup.ayats.map(t => <span key={`s-${surat.id}-a-${t.id}`}>{t.bacaan}{'. '}</span>)}
                    </div>
                    <div className='arti'>
                      {surat.penutup && surat.penutup.ayats.map(t => <span key={`s-${surat.id}-a-${t.id}`}>{t.arti}{' '}</span>)}
                    </div>
                  </div>
                )}
              </React.Fragment>
            )
          }

          <style jsx>{`
      .ayat {
        font-family: 'lpmq';
        font-weight: 400;
        font-size: 1.6em;
        margin-top: 1.5em;
        direction: rtl;
        text-align: justify;
        text-align-last: center;
        margin-bottom: 1em;
      }

        .bacaan {
          color: #007000;
          text-align: justify;
          text-align-last: right;
        }

        .arti {
          color: #555;
          text-align: justify;
          margin-top: 16px;
        }      
        `}</style>
        </React.Fragment>
      )
    }
    return null;

  }
