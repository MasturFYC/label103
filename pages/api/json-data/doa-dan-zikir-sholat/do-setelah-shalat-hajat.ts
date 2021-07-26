
export function doaSetelahSholatHajat(): import("../ayat-interface").iAyat[] | undefined {
  const _doa = doa();
  return [
    {
      id: 1,
      ayat: _doa.map(o => o.ayat).join(". "),
      bacaan: _doa.map(o => o.bacaan).join(". "),
      arti: _doa.map(o => o.arti).join(". "),
      reference: {
        id: 0,
        surat: "HR. At Tirmidzi dan Ibnu Majah"
      }
    }
  ]
}

export default function doa(): import("../ayat-interface").iAyat[] {
  return [
    {
      id: 1,
      ayat: `اَ إِلَهَ إِلاَّ اللهُ الْحَلِيْمُ الْكَرِيْمُ سُبْحَانَ اللهِ رَبِّ الْعَرْشِ الْعَظِيْمِ. اَلْحَمْدُ ِللهِ رَبِّ الْعَالَمِيْنَ`,
      bacaan: `Laa ilaha iilallaahul haliimul kariimu subhaanallaahi rabbil ‘arsyil ‘adzhiim. 
      Alhamdu lillaahi rabbil ‘aalamiin.`,
      arti: `Tidak ada Tuhan selain Allah, Yang Maha Penyantun lagi Maha Mulia. Maha Suci Allah,
      Tuhan pemelihara alam Yang Agung`
    },
    {
      id: 2,
      ayat: `اَسْأَلُكَ مُوْجِبَاتِ رَحْمَتِكَ وَعَزَائِمَ مَغْفِرَتِكَ وَالْغَنِيْمَةَ مِنْ كُلِّ بِرٍّوَالسَّلاَمَةَ مِنْ كُلِّ إِثْمٍ لَاتَدَعْ لِيْ ذَنْبًا إِلاَّ غَفَرْتَهُ وَلاَ هَمًّا إِلاَّ فَرَّجْتَهُ وَلاَ حَاجَةً إِلاَّ هِيَ لَكَ رِضًا إِلاَّ قَضَيْتَهَا يَا أَرْحَمَ الرَّاحِمِيْنَ`,
      bacaan: `As aluka muujibaati rahmatika wa ‘azaa ima 
      maghfiratika wal ghaniimata min kulli birrin was 
      salaamata min kulli itsmin laa tada’ lii dzanban 
      illaa ghafartahu wa laa hamman illaa farajtahu wa 
      laa haajatan illaa hiya laka ridhan illaa 
      qadhaytahaa yaa arhamar raahimiin`,
      arti: `Segala puji bagi Allah, Tuhan semesta alam. Hanya kepada-Mu-lah aku 
      memohon sesuatu yang menyebabkan datangnya rahmat-Mu, dan sesuatu yang 
      mendatangkan ampunan-Mu, dan memperoleh keuntungan dari kebaikan dan 
      selamat dari segala dosa. Janganlah Engkau biarkan dosa (yang ada pada diriku) 
      melainkan Engkau ampuni dan tidak ada sesuatu kesusahan melainkan Engkau 
      memberi jalan keluar, dan tidak pula ada sesuatu hajat yang mendapat kerelaan-Mu, 
      melainkan Engkau kabulkan. Wahai Tuhan Yang Maha Pengasih lagi Maha Penyayang`
    }
  ];
}
