
export function doaSetelahShalatDuha(): import("../../../../constants/ayat-interface").iAyat[] | undefined {
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

export default function doa(): import("../../../../constants/ayat-interface").iAyat[] {
  return [
    {
      id: 1,
      ayat: `اَللَّهُمَّ إِنَّ الضُّحَاءَ ضُحَاؤُكَ وَالبَهَاءَ بَهَاؤُكَ وَالجَمَالَ جَمَالُكَ وَالقُوَّةَ قُوَّتُكَ وَالقُدْرَةَ قُدْرَتُكَ وَالعِصْمَةَ عِصْمَتُكَ اَللَّهُمَّ إِنْ كَانَ رِزْقِي فِي السَّمَاءِ فَأَنْزِلْهُ وَإِنْ كَانَ فِي الأَرْضِ فَأَخْرِجْهُ وَإِنْ كَانَ مُعْسِرًا فَيَسِّرْهُ وَإِنْ كَانَ حَرَامًا فَطَهِّرْهُ وَإِنْ كَانَ بَعِيْدًا فَقَرِّبْهُ بِحَقِّ ضُحَائِكَ وَبَهَائِكَ وَجَمَالِكَ وَقُوَّتِكَ وَقُدْرَتِكَ آتِنِي مَا آتَيْتَ عِبَادَكَ الصَّالِحِيْنَ`,
      bacaan: `Allâhumma innad dhuhâ’a dhuhâ’uka, wal bahâ’a bahâ’uka, wal jamâla jamâluka, wal quwwata quwwatuka, wal qudrata qudratuka, wal ‘ishmata ishmatuka. Allâhumma in kâna rizkî fis samâ’i, fa anzilhu. Wa in kâna fil ardhi, fa akhrijhu. Wa in kâna mu‘siron, fa yassirhu. Wa in kâna harâman, fa thahhirhu. Wa in kâna ba‘idan, fa qarribhu bi haqqi dhuhâ’ika, wa bahâ’ika, wa jamâlika, wa quwwatika, wa qudratika. Âtinî mâ âtaita ‘ibâakas shâlihîn`,
      arti: `Tuhanku, sungguh waktu dhuha adalah milik-Mu. Yang ada hanya keagungan-Mu. Tiada lagi selain keindahan-Mu. Hanya ada kekuatan-Mu. Yang ada hanya kuasa-Mu. Tidak ada yang lain kecuali lindungan-Mu. Tuhanku, kalau rezekiku di langit, turunkanlah. Kalau berada di bumi, keluarkanlah. Kalau sulit, mudahkanlah. Kalau haram, gantilah jadi yang suci. Bila jauh, dekatkanlah dengan hakikat dhuha, keagungan, kekuatan, kekuasaan-Mu. Tuhanku, berikanlah aku apa yang Kau anugerahkan kepada hamba-hamba-Mu yang saleh`
    },
    {
      id: 2,
      ayat: `اَللَّهُمَّ بِكَ أُصَاوِلُ وَبِكَ أُحَاوِلُ وَبِكَ أُقَاتِلُ  ثُمَّ يَقُوْلُ رَبِّ اغْفِرْ لِي وَارْحَمْنِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيْمُ`,
      bacaan: `Allâhumma bika ushâwilu, wa bika uhâwilu, wa bika uqâtilu. Rabbighfir lî, warhamnî, watub ‘alayya. Innaka antat tawwâbur rahîm. (40 atau 100 kali)`,
      arti: `Tuhanku, dengan-Mu aku bergerak. Dengan-Mu aku berusaha. Dengan-Mu, aku berjuang. Tuhanku, ampunilah segala dosaku. Turunkan rahmat-Mu kepadaku. Anugerahkanlah tobat-Mu untukku. Sungguh Engkau maha penerima tobat, lagi maha penyayang`
    }
  ];
}
