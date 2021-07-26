
export function doaSetelahShalatIstikarah(): import("../../../../constants/ayat-interface").iAyat[] | undefined {
  const _doa = doa();
  return [
    {
      id: 1,
      ayat: _doa.map(o => o.ayat).join(". "),
      bacaan: _doa.map(o => o.bacaan).join(". "),
      arti: _doa.map(o => o.arti).join(" "),
      reference: {
        id: 104,
        surat: "Syekh Nawawi Banten, Nihayatuz Zain, [Beirut, Darul Kutub Al-Ilmiyah: 2004 M/1422 H]"
      }
    }
  ]
}

export default function doa(): import("../../../../constants/ayat-interface").iAyat[] {
  return [
    {
      id: 1,
      ayat: `اللَّهُمَّ إِنِّيْ أَسْتَخِيْرُكَ بِعِلْمِكَ، وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ، وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيْمِ، فَإِنَّكَ تَقْدِرُ وَلاَ أَقْدِرُ، وَتَعْلَمُ وَلاَ أَعْلَمُ، وَأَنْتَ عَلاَّمُ الْغُيُوْبِ`,
      bacaan: `Allaahumma inni astakhiiruka bi'ilmika wa astaqdiruka biqudratika wa as aluka min fadlikal 
      'aziimi fa innaka taqdiru wa laa aqdiru wa laa a'lamu wa anta 'allaamul guyuub`,
      arti: `Ya Allah, sungguh aku meminta pilihan yang tepat kepada-Mu dengan ilmu 
      pengetahuan-Mu dan aku mohon kuasa-Mu (atas masalahku) dengan kuasa-Mu. Aku 
      mohon sebagian dari karunia-Mu yang agung karena sungguh Engkau Mahakuasa, 
      sedang aku tidak kuasa, Engkau mengetahui, sedang aku tidak mengetahuinya. 
      Engkau maha mengetahui hal yang gaib`
    },
    {
      id: 2,
      ayat: `اَللَّهُمَّ إِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا اْلأَمْرَ ... وَيُسَمَّى حَاجَتَهُ ... خَيْرٌ لِيْ فِيْ دِيْنِيْ وَمَعَاشِيْ وَعَاقِبَةِ أَمْرِيْ فَاقْدُرْهُ لِيْ وَيَسِّرْهُ لِيْ ثُمَّ بَارِكْ لِيْ فِيْهِ، وَإِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا اْلأَمْرَ شَرٌّ لِيْ فِيْ دِيْنِيْ وَدُنْيَايَ وَمَعَاشِيْ وَعَاقِبَةِ أَمْرِيْ عَاجِلِهِ وَآجِلِهِ فَاصْرِفْهُ عَنِّيْ وَاصْرِفْنِيْ عَنْهُ وَاقْدُرْ لِيَ الْخَيْرَ حَيْثُ كَانَ ثُمَّ رَضِّنِيْ بِهِ`,
      bacaan: `Allaahumma in kunta ta'lamu anna haadzal amro (.....) 
      khairul lii fii diinii wa ma'aasyi faqdurhu lii wa yassirhu lii 
      tsumma baarik lii fii hi wa in kunta ta'lamu anna haadzal amro 
      syarrun lii fii diinii wa ma'aasyii wa 'aaqibati amrii wa 'aajlihii fashrifhu 
      'annii wasrifnii 'anhu waqdurhu liyal-khaira haitsu kaana tsumma rodh-dhinii bihi`,
      arti: `Ya Allah, apabila Engkau mengetahui bahwa urusan ini  ... sebutkan masalah yang dihadapinya ... 
      lebih baik dalam agamaku, kehidupanku, dan akibatnya terhadap diriku,
      takdirkan ia untukku, mudahkan jalannya, dan berilah berkah. Sebaliknya,
      jika Engkau mengetahui bahwa persoalan ini lebih berbahaya bagiku dalam 
      agama, dunia, kehidupan, dan akibatnya terhadap diriku baik seketika 
      maupun suatu ketika nanti, maka singkirkan persoalan itu, dan jauhkan aku
      darinya. Takdirkanlah bagiku kebaikan di mana saja berada, dan berilah
      ridha-Mu untukku`
    }
  ];
}
