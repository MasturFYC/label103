export interface iAyat {
  id: number;
  /** @ayat dari surat, ayat, bacaan do'a*/
  ayat: string;
  bacaan?: string;
  arti?: string;
  /** @Referensi Surat atau Kitab */
  riwayat?: string;
  reference?: {
    /** No. ayat atau halaman kitab */
    id: number;
    /** Surat atau ayat */
    surat: string;
  };
}

export interface iContents {
  id: number;
  subTitle: string;
  phar?: string | string[];
  ayats?: iAyat[];
  sources?: string;
  references?: {
    id: number,
    surat: string
  }
}
export interface iDoa {
  id: number;
  title: string;
  phar?: string | string[];
  contents: iContents[];
}
