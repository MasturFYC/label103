import data from 'shared/jsons/doa-setelah-makan.json';

export function doaSetelahMakan(): import("constants/ayat-interface").iAyat[] | undefined {
  const _doa = doa();
  return [
    {
      id: 1,
      ayat: _doa.map(o => o.ayat).join(". "),
      bacaan: _doa.map(o => o.bacaan).join(". "),
      arti: _doa.map(o => o.arti).join(" "),
    }
  ]
}

export default function doa(): import("constants/ayat-interface").iAyat[] {
  return data;
}
