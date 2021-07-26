import { iAyat } from "../../../../constants/ayat-interface";

export function doaSetelahSholatTarawih(): iAyat[] {
  const _doa = doa();
  return [
    {
      id: 1,
      ayat: _doa.map(o => o.ayat).join(". "),
      bacaan: _doa.map(o => o.bacaan).join(". "),
      arti: _doa.map(o => o.arti).join(" "),
      reference: {
        id: 0,
        surat: "Sayyid Utsman bin Yahya"
      }
    }
  ]
}

export default function doa(): iAyat[] {
  return [
    { id: 1, ayat: `اَللهُمَّ اجْعَلْنَا بِالْإِيْمَانِ كَامِلِيْنَ`, bacaan: `Allâhummaj‘alnâ bil îmâni kâmilîn`, arti: `Yaa Allah, jadikanlah kami orang-orang yang sempurna imannya,` },
    { id: 2, ayat: `وَلِلْفَرَائِضِ مُؤَدِّيْنَ`, bacaan: `Wa lil farâidli muaddîn`, arti: `yang memenuhi kewajiban-kewajiban,` },
    { id: 3, ayat: `وَلِلصَّلاَةِ حَافِظِيْنَ`, bacaan: `Wa lish-shlâti hâfidhîn`, arti: `yang memelihara shalat,` },
    { id: 4, ayat: `وَلِلزَّكَاةِ فَاعِلِيْنَ`, bacaan: `Wa liz-zakâti fâ‘ilîn`, arti: `yang mengeluarkan zakat,` },
    { id: 5, ayat: `وَلِمَا عِنْدَكَ طَالِبِيْنَ`, bacaan: `Wa lima ‘indaka thâlibîn`, arti: `yang mencari apa yang ada di sisi-Mu,` },
    { id: 6, ayat: `وَلِعَفْوِكَ رَاجِيْنَ`, bacaan: `Wa li ‘afwika râjîn`, arti: `yang mengharapkan ampunan-Mu,` },
    { id: 7, ayat: `وَبِالْهُدَى مُتَمَسِّكِيْنَ`, bacaan: `Wa bil-hudâ mutamassikîn`, arti: `yang berpegang pada petunjuk,` },
    { id: 8, ayat: `وَعَنِ الَّلغْوِ مُعْرِضِيْنَ`, bacaan: `Wa ‘anil laghwi mu‘ridlîn`, arti: `yang berpaling dari kebatilan,` },
    { id: 9, ayat: `وَفِى الدُّنْيَا زَاهِدِيْنَ`, bacaan: `Wa fid-dunyâ zâhdîn`, arti: `yang zuhud di dunia,` },
    { id: 10, ayat: `وَفِى اْلآخِرَةِ رَاغِبِيْنَ`, bacaan: `Wa fil ‘âkhirati râghibîn`, arti: `yang menyenangi akhirat,` },
    { id: 11, ayat: `وَبَالْقَضَاءِ رَاضِيْنَ`, bacaan: `Wa bil-qadlâ’I râdlîn`, arti: `yang ridha dengan qadla-Mu (ketentuan-Mu),` },
    { id: 12, ayat: `وَلِلنَّعْمَاءِ شَاكِرِيْنَ`, bacaan: `Wa lin na‘mâ’I syâkirîn`, arti: `yang mensyukuri nikmat,` },
    { id: 13, ayat: `وَعَلَى الْبَلاَءِ صَابِرِيْنَ`, bacaan: `Wa ‘alal balâ’i shâbirîn`, arti: `yang sabar atas segala musibah,` },
    { id: 14, ayat: `وَتَحْتَ لِوَاءِ مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ يَوْمَ الْقِيَامَةِ سَائِرِيْنَ وَعَلَى الْحَوْضِ وَارِدِيْنَ`, bacaan: `Wa tahta liwâ’i muhammadin shallallâhu ‘alaihi wasallam yaumal qiyâmati sâ’irîna wa alal haudli wâridîn`, arti: `yang berada di bawah panji-panji junjungan kami, Nabi Muhammad, pada hari kiamat, yang mengunjungi telaga (Nabi Muhammad),` },
    { id: 15, ayat: `وَإِلَى الْجَنَّةِ دَاخِلِيْنَ`, bacaan: `Wa ilal jannati dâkhilîn`, arti: `yang masuk ke dalam surga,` },
    { id: 16, ayat: `وَمِنَ النَّارِ نَاجِيْنَ`, bacaan: `Wa minan nâri nâjîn`, arti: `yang selamat dari api neraka,` },
    { id: 17, ayat: `وَعَلى سَرِيْرِالْكَرَامَةِ قَاعِدِيْنَ`, bacaan: `Wa 'alâ sariirl karâmati qâ'idîn`, arti: `yang duduk di atas ranjang kemuliaan,` },
    { id: 18, ayat: `وَبِحُوْرٍعِيْنٍ مُتَزَوِّجِيْنَ`, bacaan: `Wa bi hûrun 'in mutazawwijîn`, arti: `yang menikah dengan para bidadari,` },
    { id: 19, ayat: `وَمِنْ سُنْدُسٍ وَاِسْتَبْرَقٍ وَدِيْبَاجٍ مُتَلَبِّسِيْنَ`, bacaan: `Wa min sundusin wa istabraqîn wadîbâjin mutalabbisîn`, arti: `yang mengenakan berbagai sutra,` },
    { id: 20, ayat: `وَمِنْ طَعَامِ الْجَنَّةِ آكِلِيْنَ`, bacaan: `Wa min tha‘âmil jannati âkilîn`, arti: `yang makan makanan surga,` },
    { id: 21, ayat: `وَمِنْ لَبَنٍ وَعَسَلٍ مُصَفًّى شَارِبِيْنَ`, bacaan: `Wa min labanin wa ‘asalin mushaffan syâribîn`, arti: `yang minum susu dan madu murni dengan gelas, cangkir, dan cawan,` },
    { id: 22, ayat: `بِأَكْوَابٍ وَّأَبَارِيْقَ وَكَأْسٍ مِّنْ مَعِيْن`, bacaan: `Bi akwâbin wa abârîqa wa ka‘sin min ma‘în`, arti: `bersama orang-orang yang Engkau beri nikmat,` },
    {
      id: 23, ayat: `مَعَ الَّذِيْنَ أَنْعَمْتَ عَلَيْهِمْ مِنَ النَّبِيِّيْنَ وَالصِّدِّيْقِيْنَ وَالشُّهَدَآءِ وَالصَّالِحِيْنَ وَحَسُنَ أُولئِكَ رَفِيْقًا`,
      bacaan: `Ma‘al ladzîna an‘amta ‘alaihim minan nabiyyîna wash shiddîqîna wasy syuhadâ’i wash shâlihîna wa hasuna ulâ’ika rafîqan`,
      arti: `dari kalangan para nabi, shiddiqin, syuhada dan orang-orang shalih, Mereka itulah teman yang terbaik.`
    },
    {
      id: 24, ayat: `ذلِكَ الْفَضْلُ مِنَ اللهِ وَكَفَى بِاللهِ عَلِيْمًا`, bacaan: `Dâlikal fadl-lu minallâhi wa kafâ billâhi ‘alîman`,
      arti: `Itulah keutamaan (anugerah) dari Allah dan cukuplah bahwa Allah Maha Mengetahui.`
    },
    {
      id: 25, ayat: `اَللهُمَّ اجْعَلْنَا فِى هٰذِهِ لَيْلَةِ الشَّهْرِالشَّرِيْفَةِ الْمُبَارَكَةِ مِنَ السُّعَدَاءِ الْمَقْبُوْلِيْنَ`, bacaan: `Allâhummaj‘alnâ fî hâdzihil lailatisy syahrisy syarîfail mubârakah minas su‘adâ’il maqbûlîn`,
      arti: `Ya Allah, jadikanlah kami pada malam yang mulia dan diberkahi ini termasuk orang-orang yang bahagia dan diterima amalnya,`
    },
    { id: 26, ayat: `وَلاَتَجْعَلْنَا مِنَ اْلأَشْقِيَاءِ الْمَرْدُوْدِيْنَ`, bacaan: `Wa lâ taj‘alnâ minal asyqiyâ’il mardûdîn`, arti: `dan janganlah Engkau jadikan kami tergolong orang-orang yang celaka dan ditolak amalnya.` },
    { id: 27, ayat: `وَصَلَّى اللهُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَآلِه وَصَحْبِه أَجْمَعِيْنَ`, bacaan: `Wa shallallâhu ‘alâ sayyidinâ muhammadin wa âlihi wa shahbihi ajma‘în`, arti: `Semoga Allah mencurahkan rahmat-Nya atas junjungan kami Muhammad, serta seluruh keluarga dan shahabat beliau.` },
    { id: 28, ayat: `بِرَحْمَتِكَ يَاأَرْحَمَ الرَّاحِمِيْنَ وَالْحَمْدُ لِلّهِ رَبِّ الْعَالَمِيْنَ`, bacaan: `Birahmatika yâ arhamar râhimîn wal hamdulillâhi rabbil ‘âlamîn`, arti: `Berkat rahmat-Mu, wahai Yang Paling Penyayang di antara yang penyayang. Segala puji bagi Allah Tuhan semesta alam` }
  ]
};