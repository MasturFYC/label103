import { iAyat } from "./ayat-interface";

export interface iGroup {
  group_id: number;
  name: string;
  peoples: iPeople[];
}

export interface iPeople {
  people_id: number;
  name1: string;
  name2?: string;
  post?: string;
  street?: string;
  city: string;
  group_id: number;
  group?: iGroup;
}

export interface iPenutup {
  title: string;
  ayats: iAyat[]
}
export interface iSurat {
  intro: iIntro;
  ayats: iAyat[];
  penutup: iPenutup;
}

export interface iText {
  id: number;
  text: string;
}

export interface iIntro {
  id: number;
  title: string;
  descriptions?: iText[];
}
