import { iDoa, iContents, iAyat } from "../ayat-interface";


export function zikirSetelahSholatWitir(): iAyat[] {
  const _doa = doa();
  return [
    {
      id: 1,
      ayat: _doa.map(o => o.ayat).join(". "),
      bacaan: _doa.map(o => o.bacaan).join(". "),
      arti: _doa.map(o => o.arti).join(". "),
      reference: {
        id: 0,
        surat: "H.R. Abu Dawud"
      }
    }
  ]
}

export default function doa(): iAyat[] {
  return [
    {
      id: 1,
      ayat: `سُبْحَانَ الْمَلِكِ الْقُدُّوسِ`,
      bacaan: `Subhaanal malikil qudduus. (Dibaca 3x)`,
      arti: `Mahasuci Tuhan yang kudus`,
      reference: {
        id: 0,
        surat: "H.R. Nasai"
      }
    },
    {
      id: 2,
      ayat: ` ِسُبُّوْحٌ قُدُّوْسٌ رَبُّنَا وَرَبُّ المَلَائِكَةِ وَالرُّوْح`,
      bacaan: `Subbuuhun, quddusun, rabbunaa wa rabbul malaaikati war ruuhi`,
      arti: `Suci dan qudus Tuhan kami, Tuhan para malaikat dan ruh Jibril`,
      reference: {
        id: 0,
        surat: "H.R. Al-Baihaqi dan Ad-Daruqutni"
      }
    },
    {
      id: 3,
      ayat: `اللَّهُمَّ إِنِّي أَعُوذُ بِرِضَاكَ مِنْ سَخَطِكَ وَبِمُعَافَاتِكَ مِنْ عُقُوبَتِكَ وَأَعُوذُ بِكَ مِنْكَ لاَ أُحْصِى ثَنَاءً عَلَيْكَ أَنْتَ كَمَا أَثْنَيْتَ عَلَى نَفْسِكَ`,
      bacaan: `Allahumma innii a’uudzu bika bi ridhaaka min sakhatika wa bi mu’aafaatika min ‘uquubatika, wa a’uudzu bika minka laa uhshii tsanaa-an ‘alaika, anta kamaa atsnaita ‘alaa nafsik`,
      arti: `Ya Allah, aku berlindung dengan keridhaan-Mu dari kemarahan-Mu, dan dengan keselamatan-Mu dari hukuman-Mu dan aku berlindung kepada-Mu dari siksa-Mu. Aku tidak mampu menghitung pujian dan sanjungan kepada-Mu. Engkau adalah sebagaimana yang Engkau sanjukan kepada diri-Mu sendiri`,
      reference: {
        id: 0,
        surat: "H.R. Abu Dawud"
      }
    }
  ]

}