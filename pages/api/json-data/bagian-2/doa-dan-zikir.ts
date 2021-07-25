import { iDoa, iContents, iAyat } from "../ayat-interface";

const doaDanZikir: iDoa = {
  id: 35,
  title: "Doa dan Zikir dalam Keadaan Tertentu",
  phar: [""],
  contents: isiDoa(),
}

export default doaDanZikir;

function isiDoa(): iContents[] {
  return [
    {
      subTitle: "Doa Awal Tahun",
      id: 1,
      phar: [""],
      ayats: doaAwalTahun(),
    },
    {
      id: 1,
      subTitle: "Doa Asyura",
      ayats: doaAsyura(),
    },
    {
      id: 3,
      subTitle: "Doa Istighfar Rajab",
      ayats: doaRajab()
    },
    {
      id: 4,
      subTitle: "Doa Nisfu Sa'ban",
      ayats: doaNisfuSaban(),
      sources: "https://islam.nu.or.id/post/read/89717/doa-malam-nisfu-syaban"
    },
    {
      id: 5,
      subTitle: "Doa Bulan Ramadhan",
      ayats: doaBulanRamadhan()
    },
    {
      id: 6,
      subTitle: "Doa Akhir Tahun",
      ayats: doaAkhirTahun()
    },
    {
      id: 7,
      subTitle: "Zikir Pagi Sore",
      ayats: zikirPagiSore()
    },
    {
      id: 8,
      subTitle: "Zikir dalam Perkara",
      ayats: zikirDalamPerkara()
    }, {
      id: 9,
      subTitle: "Zikir Dibebaskan Utang",
      ayats: zikirBebasUtang()
    }, {
      id: 10,
      subTitle: "Doa Menjenguk Orang Sakit",
      ayats: doaJengukOrangSakit()
    }, {
      id: 11,
      subTitle: "Doa untuk Orang Sakit",
      ayats: doaUntukOrangSakit()
    }, {
      id: 12,
      subTitle: "Doa Ketika Mendapat Musibah",
      ayats: doaKetikaMendapatMusibah()
    }, {
      id: 13,
      subTitle: "Doa Ketenangan Jiwa",
      ayats: doaKetenanganJiwa()
    }, {
      id: 14,
      subTitle: "Doa untuk Pengantin Baru",
      ayats: doaPengantinBaru()
    }, {
      id: 15,
      subTitle: "Doa Hendak Bersetubuh",
      ayats: doaBersetubuh()
    }, {
      id: 16,
      subTitle: "Doa Ketika Mengetahui Kehamilan",
      ayats: doaHamil()
    }, {
      id: 17,
      subTitle: "Doa Memohon Dianugerahi Anak Saleh",
      ayats: doaAnakSaleh()
    },
    {
      id: 18,
      subTitle: "Doa Nabi Ibrahim",
      ayats: doaNabiIbrahim()
    },
    {
      id: 19,
      subTitle: "Doa Nabi Musa 'AS",
      ayats: doaNabiMusa()
    },
    {
      id: 20,
      subTitle: "Doa Anak Baru Lahir",
      ayats: doaAnakLahir()
    },
    {
      id: 21,
      subTitle: "Doa Memohon Hujan",
      sources: 'https://nikmatislam.com/doa-minta-hujan/',
      ayats: doaMohonHujan()
    },
    {
      id: 22,
      subTitle: "Doa Saat Hujan",
      ayats: doaSaatHujan()
    },
    {
      id: 23,
      subTitle: "Doa Menghilangkan Kemarahan",
      ayats: doaAtasiMarah()
    }
  ]
}

function doaAtasiMarah(): iAyat[] {
  return [
    {
      id: 1,
      ayat: `اَللّٰهُمَّ اغْفِرْلِىْ ذَنْبِىْ وَاذْهِبْ غَيْظَ قَلْبِىْ وَاَجِرْنِىْ مِنَ الشَّيْطَانِ`,
      arti: `Ya Allah, ampunilah dosa-dosaku, hilangkanlah kemarahan hatiku dan selamatkanlah aku dari kejahatan syaitan`,
      bacaan: `Allohummaghfir lii dzambii wadzhib ghoidzho qolbii wa ajirnii minasy syaithooni`
    }
  ]
}

function doaSaatHujan(): iAyat[] {
  return [
    {
      id: 1,
      ayat: `اللَّهُمَّ صَيِبًا نَافِعًا`,
      arti: `Ya Allah, turunkanlah kami hujan yang bermanfaat untuk kami`,
      bacaan: "Allahumma shoyyiban nafi’an",
      reference: {
        id: 0,
        surat: "HR. Ahmad Bukhari"
      }
    }
  ]
}

function doaMohonHujan(): iAyat[] {
  return [
    {
      id: 1,
      ayat: `اللّهُمَّ إِنّاَ نَسْتَغْفِرُكَ إِنَّكَ كُنْتَ غَفَّاراً، فَأَرْسِلِ السَّمَاءَ عَلَيْنَا مِدْرَاراً.`,
      arti: `Ya Allah Sesungguhnya kami beristigfar mohon ampun kepada-Mu,
      sesungguhnya Engkaulah penerima ampunan, turunkanlah hujan dari
      langit yang terus menerus memberikan kebaikan kepada kami.`,
      bacaan: `Allâhumma innâ nastaghfiruka innaka kunta ghaffâra, fa-arsili s-sam’a ‘alaynâ midrâra.`,
      reference: {
        id: 0,
        surat: 'HR. Baihaqi'
      }
    },
    {
      id: 1,
      ayat: `اللّهُمَّ اسْقِنَا غِيَاثاً مُغِيثًا هَنِيئًا مَرِيئاً مَرِيعاً غَدْقاً مجللا عَاماً طَبْقاً دَائِماً.`,
      bacaan: `Allâhumma s-qinâ ghiyâtsan mughîtsan hanî’an marî’an marî‘an ghadqan mujallalan ‘âmman thabqan dâ’iman.`,
      arti: `Ya Allah. Siramilah kami dengan hujan yang menolong, mudah, menyenangkan, lebat, merata, banyak, dan lama.`,
      reference: {
        id: 0,
        surat: "HR. Abu Daud"
      }
    }

  ]
}

function doaAnakLahir(): iAyat[] {
  return [
    {
      id: 1,
      ayat: `اِنِّيْۤ أُعِيذُكِ بِكَلِمَاتِ اللَّهِ التَّامَّةِ، مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ، وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ.`,
      bacaan: `inni u’iidzuki bikalimaatillaahit-tammati min kulli syaithoonin wa hammatin wa min kulli 'ainil lammah`,
      arti: `Aku berlindung kepada Allah untukmu berdua dengan kalimat-kalimat Allah
      yang sempurna, dari godaan segala setan, gangguan binatang yang berbisa dan
      pandangan mata yang jahat.`,
      riwayat: `Abu Daud`,
      reference: {
        id: 3371,
        surat: `Al-Bukhari`
      }
    }
  ]
}
function doaNabiMusa(): iAyat[] {
  return [
    {
      id: 1,
      ayat: `رَبِّ اشْرَحْ لِي صَدْرِي،`,
      bacaan: `Robbis rohlii shodrii,`,
      arti: `Ya Tuhanku, lapangkanlah dadaku,`,
      riwayat: `Doa menghadapi urusan penting`,
      reference: {
        id: 25,
        surat: 'Thaha'
      }
    },
    {
      id: 2,
      ayat: `وَيَسِّرْ لِي أَمْرِي,`,
      bacaan: `wa yassirlii amrii`,
      arti: `dan mudahkanlah untukku urusanku,`,
      reference: {
        id: 26,
        surat: 'Thaha'
      }
    },
    {
      id: 3,
      ayat: 'وَاحۡلُلۡ عُقۡدَةً مِّنۡ لِّسَانِیْ,',
      bacaan: `Wahlul 'uqdatam milli saanii,`,
      arti: `dan lepaskanlah kekakuan dari lidahku,`,
      reference: {
        id: 27,
        surat: 'Thaha'
      }
    },
    {
      id: 4,
      ayat: `يَفۡقَهُوۡا قَوۡلِیْ.`,
      bacaan: `Yafqahuu qawlii.`,
      arti: `agar mereka mengerti perkataanku.`,
      reference: {
        id: 28,
        surat: 'Thaha'
      }
    }
  ]
}

function doaNabiIbrahim(): iAyat[] {
  return [
    {
      id: 1,
      ayat: `رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِنْ ذُرِّيَّتِي ۚ رَبَّنَا وَتَقَبَّلْ دُعَاءِ`,
      bacaan: `Rabbiij’alnii muqiimash-shalaati wamin dzurrii-yatii rabbanaa wataqabbal du’aa-(i).`,
      arti: `Ya Tuhanku, jadikanlah aku dan anak cucuku orang-orang yang tetap mendirikan
        shalat, ya Tuhan kami, perkenankanlah doaku.`,
      riwayat: 'Tetap melaksanakan Sholat',
      reference: {
        id: 40,
        surat: "Ibrahim",
      }
    },
    {
      id: 2,
      ayat: `رَبِّ هَبْ لِي مِنَ الصَّالِحِينَ`,
      bacaan: `Robbi hab lii minash-shoolihiin.`,
      arti: `Ya Tuhanku, anugrahkanlah kepadaku (seorang anak) yang termasuk orang-orang yang saleh.`,
      riwayat: 'Dianugerahi keturunan Sholeh',
      reference: {
        id: 100,
        surat: "Ash-Shaffaat",
      }
    },
    {
      id: 3,
      ayat: ` ۪رَبَّنَا وَٱجۡعَلۡنَا مُسۡلِمَيۡنِ لَكَ وَمِن ذُرِّيَّتِنَآ أُمَّةٗ مُّسۡلِمَةٗ لَّكَ`,
      bacaan: `Rabbanaa waaj’alnaa muslimaini laka wamin dzurrii-yatinaa ummatan muslimatan laka.`,
      arti: `Ya Tuhan kami, jadikanlah kami berdua orang yang 
      tunduk patuh kepada Engkau, dan (jadikanlah) di an­tara 
      anak cucu kami umat yang tunduk patuh kepada Engkau.`,
      riwayat: 'Dijadikan Muslim Sejati',
      reference: {
        id: 128,
        surat: "Al-Baqarah"
      }
    }
  ]
}

function doaAnakSaleh(): iAyat[] | undefined {
  return [
    {
      id: 1,
      ayat: `رَبَّنَا هَبۡ لَـنَا مِنۡ اَزۡوَاجِنَا وَذُرِّيّٰتِنَا قُرَّةَ اَعۡيُنٍ وَّاجۡعَلۡنَا لِلۡمُتَّقِيۡنَ اِمَامًا`,
      bacaan: `Rabbanaa hab lanaa min azwaajinaa wa zurriyaatinaa qurrata a'yuninw waj 'alnaa lilmuttaqiina Imaamaa`,
      arti: `Ya Tuhan kami, anugerahkanlah kepada kami istri-istri kami dan keturunan kami sebagai penyenang hati (kami), dan jadikanlah kami imam bagi orang-orang yang bertakwa.`,
      reference: { id: 74, surat: 'Al-Furqan' }
    }
  ]
}

function doaHamil(): iAyat[] | undefined {
  return [
    {
      id: 1,
      ayat: `رَبِّ إِنِّى نَذَرْتُ لَكَ مَا فِى بَطْنِى مُحَرَّرًا فَتَقَبَّلْ مِنِّىٓ ۖ إِنَّكَ أَنتَ ٱلسَّمِيعُ ٱلْعَلِيمُ.`,
      bacaan: `Rabbi innii nazartu laka maa fii batnii muharraran 
        fa taqabbal minnii, innaka antas samii'ul 'aliim.`,
      arti: `Ya Tuhanku, sesungguhnya aku menazarkan kepada Engkau
        anak yang dalam kandunganku menjadi hamba yang saleh dan 
        berkhidmat (di Baitul Maqdis). Karena itu terimalah (nazar)
        itu dari padaku. Sesungguhnya Engkaulah Yang Maha Mendengar 
        lagi Maha Mengetahui.`,
    },
    {
      id: 2,
      ayat: `اللّهُمَّ اجْعَلْ ماَ فِيْ بَطْنِيْ هَذَا ذُرِّيَّةً مُسْلِمًا وَمُؤْمِنًا وَصَالِحًا 
      وَصَابِرًا وَنَشأَ فِيْ طَاعَتِكَ وَاجْعَلْهُ لِوَالِدَيْهَا أَجْرًا حَسَنًا`,
      bacaan: ``,
      arti: `Ya Allah, jadikanlah anak yang ada di dalam perutku ini keturunan yang Islam,
      beriman, saleh, dan sabar, serta tumbuh dalam taat pada-Mu dan berikanlah untuk 
      kedua orang tuanya pahala yang baik.`,
      reference: {
        id: 352,
        surat: "Syaikh Sulaiman Al Bujairami"
      }
    },
  ]
}

function doaKetikaMendapatMusibah(): iAyat[] | undefined {
  return [
    {
      id: 1,
      ayat: `إنّاَ للهِ وَإنَّۤاۤ إِلَيْهِ رَاجِعُوْنَ
          اَللّٰهُمَّ أجِرْنِيْ فِيْ مُصِيبَتِيْ وَأَخْلِفْ لِيْ خَيْراً مِّنْهَا.`,
      bacaan: `Innâ lillâhi wa innâ ilaihi râji‘un.
          Allâhumma ajirnî fîmushîbatî wa akhlif lî khairan minhâ.`,
      arti: `Sesungguhnya kami adalah milik Allah, dan sungguh 
          hanya kepada- Nya kami akan kembali.Ya Allah, karuniakanlah
          padaku pahala dalam musibah yang menimpaku dan berilah aku
          ganti yang lebih baik daripadanya.`
    }
  ]
}

function doaKetenanganJiwa(): iAyat[] | undefined {
  return [
    {
      id: 1,
      ayat: `رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ
        اَ قْدَامَنَا وَانصُرْنَا عَلَى القَوْمِ الكَافِرِينَ.`,
      bacaan: `Rabhanaa afrigh 'alaynaa shabran wa tsabbit
          aqdaamanaa wahshurnaa 'alal qawmil kaafirina`,
      arti: `Ya Tuhan kami, limpahkanlah kesabaran kepada kami, 
          kukuhkanlah langkah kami dan tolonglah kami menghadapi
          orang-orang kafir.`
    },
    {
      id: 2,
      ayat: `رَبَّنَا لاَ تُزِغْ قُلُوبَنَا
          بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ
          رَحْمَةً إِنَّكَ أَنتَ الْوَهَّابُ.`,
      bacaan: `Rabbanaa laa tuzigh quluubanaa
          ba'da idz hadaytana wa hablanaa min ladunka
          rahmatan innaka antal wahhaabu.`,
      arti: `Ya Tuhan kami, janganlah Engkau palingkan hati kami setelah 
          Engkau tunjuki dan berilah kami dari hadirat-Mu Rahmat, karena 
          Engkau adalah Yang Maha Pemberi.`
    },
    {
      id: 3,
      ayat: `اَللّٰهُمَّ ثَبِّتْنِيْ اَنْ اَزِلَّ وَا هْدِ نِيْ اَنْ اَضِلَّ.`,
      bacaan: `Allaahumma tsabbitnii an azilla wahdinii an adhilla.`,
      arti: `Ya Allah kokohkanlah aku dari kemungkinan terpelesetnya
          iman, dan berilah aku petunjuk dari kemungkinan sesat.`
    },
    {
      id: 4,
      ayat: `ااَللّٰهُمَّ كَمَا حُلْتَ بَيْنِيْ وَ بَيْنَ قَلْبِيْ 
          فَحُلْ بَيْنِيْ وَ بَيْنَ ا لشَّيْطَانِ وَعَمَلِهِ.`,
      bacaan: `Allahumma kamaa hulta baynii wa bayna qalbii,
          fahul baynii wa baynasy syaythaani wa 'amalihi. `,
      arti: `Ya Allah sebagaimana Engkau telah memberi penghalang
          antara aku dan hatiku, maka berilah penghalang
          antaraku dan antara syaitan serta perbuatannya.`
    },
    {
      id: 5,
      ayat: `اَللَّهُمَّ إِنِّي أَسْأَلُكَ نَفْسًا بِكَ 
          مُطْمَئِنَّةً، تُؤْمِنُ بِلِقَائِكَ، وَتَرْضَى 
          بِقَضَائِكَ، وَتَقْنَعُ بِعَطَائِكَ`,
      bacaan: `Allaahumma innii as-aluka nafsan bika
          muthma 'innatan tu'minu biliqaa'ika wa tardhaa
          biqadhaa'ika wa taqna'u bi'athaa'ika.`,
      arti: `Ya Allah aku mohonkan pada-Mu jiwa
          yang tenang tenteram, yang percaya pada
          pertemuan dengan-Mu dan ridha atas keputusan-Mu
          serta merasa cukup puas dengan pemberian-Mu.`,
      reference: {
        id: 0,
        surat: "Al-Majmu'ul Ali Majmu' Syarif Kamil, 2003"
      }
    }
  ]
}

function doaPengantinBaru(): iAyat[] | undefined {
  return [
    {
      id: 1,
      ayat: `بَارَكَ اللهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِيْ خَيْرٍ.`,
      bacaan: `Barakallahu laka, wa baraka 'alaika wa jama'a bainakuma fii khair.`,
      arti: `Mudah-mudahan Allah memberkahimu, baik ketika senang maupun
        susah dan selalu mengumpulkan kamu berdua pada kebaikan.`,
      reference: {
        id: 0,
        surat: `HR. Abu Dawud`
      }
    }
  ]
}

function zikirDalamPerkara(): iAyat[] | undefined {
  return [
    {
      id: 1,
      ayat: `حَسْبِيَ اللهُ لِدِيْنِيْ حَسْبِيَ اللهُ لِدُنْيَايَ حَسْبِيَ اللهُ
      لِمَا اَهَمَّنِيْ حَسْبِيَ اللهُ لِمَنْ بَغَاعَلَيَّ حَسْبِيَ اللهُ لِمَنْ
      كَادَنِيْ بِسُوْءٍ وَلَاحَوْلَ وَلَاقُوَّةَ اِلَّابِاللهِ
      `,
      bacaan: `Hasbiyallahu lidiini hasbiyallahu lidun yaa yahasbiyallahu limaa ahammanii
      hasbiyallahu limam baghoo 'alayya hasbiyallahu liman kaadanii bisuuin walaa haula
      walaa quwwata illaa billaah.`,
      arti: `Cukuplah Allah bagi agamaku, cukuplah Allah bagi duniaku, Allah mencukupi 
      bagi apa yang menyusahkanku, Allah mencukupi bagi yang menganiaya aku, Allah 
      mencukupi bagi yang berniat jahat kepadaku, tidak ada daya upaya dan tidak ada 
      tenaga melainkan pertolongan Allah.`,
      reference: {
        id: 240,
        surat: "Majmu' Syarif"
      }
    },
  ]
}

function doaJengukOrangSakit(): iAyat[] | undefined {
  return [
    {
      id: 1,
      ayat: `اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبْ الْبَاسَ اشْفِهِ وَأَنْتَ الشَّافِي لَا شِفَاءَ إِلَّا شِفَاؤُكَ شِفَاءً لَا يُغَادِرُ سَقَمًا.`,
      bacaan: `Allahumma rabbannaasi adzhibil ba’sa isyfihi wa antas syafi laa syifaa’a illa
    syifaauka syifaa’an laa yughadiru saqaman.`,
      arti: `Ya Allah Rabb manusia, dzat yang menghilangkan rasa sakit, 
    sembuhkanlah sesungguhnya Engkau Dzat yang Maha menyembuhkan, tidak ada kesembuhan 
    melainkan dari kesembuhan-Mu, yaitu kesembuhan yang tidak menyisakan rasa sakit.`,
      reference: {
        id: 0,
        surat: "HR. Bukhari Muslim"
      }
    },
    {
      id: 2,
      ayat: `امْسَحْ الْبَاسَ رَبَّ النَّاسِ بِيَدِكَ الشِّفَاءُ لَا كَاشِفَ لَهُ إِلَّا أَنْتَ.`,
      bacaan: `Amsihil ba’sa rabbannaasi biyadikas syifaa’u laa kaasyifa lahu illa anta.`,
      arti: `"Hilangkanlah rasa sakit wahai Rabb manusia, di tangan-Mu lah segala kesembuhan, dan tidak ada yang dapat menyingkap penyakit tersebut melainkan Engkau.`,
      reference: {
        id: 0,
        surat: "HR. Bukhari Muslim"
      }
    },
    {
      id: 3,
      ayat: `أَسْأَلُ الله الْعَظِيمَ رَبَّ الْعَرْشِ الْعَظِيمِ أَنْ يَشْفِيَكَ.`,
      bacaan: `Amsihil ba’sa rabbannaasi biyadikas syifaa’u laa kaasyifa lahu illa anta.`,
      arti: `Hilangkanlah rasa sakit wahai Rabb manusia, di tangan-Mu lah segala kesembuhan, dan tidak ada yang dapat menyingkap penyakit tersebut melainkan Engkau.`,
      reference: {
        id: 0,
        surat: 'HR. Buhari Muslim'
      }
    }
  ]
}

function doaUntukOrangSakit(): iAyat[] | undefined {
  return [
    {
      id: 1,
      ayat: `بِـــسْمِ اﷲِالرَّحْمٰنِ الرَّحِيْمِ.`,
      bacaan: `Bismillaahir Rahmaanir Rahiim.`,
      arti: `Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.`,
      reference: {
        id: 1,
        surat: 'Al-Fatihah'
      }
    }, {
      id: 2,
      ayat: `أَعُوذُ بِاَللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ.`,
      bacaan: `A'ūdzu billāhi wa qudratihī min syarri mā ajidu wa uhādziru. (dibaca 7 kali)`,
      arti: `Aku berlindung kepada Allah dan kuasa-Nya dari keburukan apa yang kurasakan dan kukhawatirkan.`,
      reference: {
        id: 0,
        surat: `Abu Abdilllah Utsman bin Abu al-Ash`
      }
    }
  ]
}

function zikirBebasUtang(): iAyat[] | undefined {
  return [
    {
      id: 1,
      ayat: `سُبْحَانَ الْمُنَفِّسِ عَنْ كُلِّ مَدْيُوْنٍ، 
    سُبْحَانَ الْمُفَرِّجِ عَنْ كُلِّ مَحْزُوْنٍ، 
    سُبْحَانَ مَنْ كَانَ أَمْرُهُ بَيْنَ الْكَافِ وَالنُّوْنِ، 
    سُبْحَانَ مَنْ إِذَا أَرَادَ شَيْئًا أَنْ يَقُوْلَ لَهُ كُنْ فَيَكُوْنُ، 
    يَا مُفَرِّجِ الْهُمُوْمِ وَيَا حَيُّ يَا قَيُّوْمِ صَلِّ وَسَلِّمْ 
    عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى أَلِهِ وَصْحِبِهِ وَسَلِّمِ.`,
      bacaan: `Subhaanal munaffisi ‘an kulli madyuun, subhaanal mufarriji ‘an kulli mahzuum,
    subhaana man kaana amruhuu baynal kaafi wan nuun, subhaana man idzaa araada sya’an an
    yaquula lahuu kun fayakuun, yaa mufarrijil humuumi wa yaa hayyu yaa qayyuum, shalli wa
    sallim ‘alaa sayyidinaa muhammadiw wa ‘alaa aalihi wa shahbihii wa sallim.`,
      arti: `Mahasuci Zat, Yang bersih dari utang-piutang, Mahasuci Zat, Yang Melapangkan dari 
    segala kesedihan, Mahasuci Zat yang kekuasaan-Nya tak terbatas antara kaf dan nun (pada 
      kalimat kun fayakun), Mahasuci Zat Yang jika berkehendak sesuatu hanya dengan kalimat 
      kun fayakun,  wahai Zat Yang melapangkan kegelisahan, Wahai Zat Yang Mahahidup dan Kekal,
      semoga kesejahteraan dan salam atas penghulu kami, Nabi Muhammad, keluarga, serta
      sahabat-sahabatnya.`,
    }
  ]
}


function doaAwalTahun(): iAyat[] | undefined {
  return [
    {
      id: 1,
      ayat: "وَصَلَّى اللهُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى اَلِهِ وَصَحْبِهِ وَسَلَّمَ",
    },
    {
      id: 2,
      ayat: `اَللَّهُمَّ اَنْتَ اْلاَ بَدِيُّ الْقَدِيْمُ اْلاَوَّلُ وَعَلَى 
    فَضْلِكَ الْعَظِيْمِ وَجُوْدِكَ الْمُعَوَّلِ وَهَذَا عَامٌ جَدِيْدٌ قَدْ 
    اَقْبَلَ اَسْأَلُكَ الْعِصْمَةَ فِيْهِ مِنَ الشَّيْطَانِ وَ`,
    },
    {
      id: 3,
      ayat: `اَوْلِيَائِهِ وَجُنُوْدِهٖ وَالْعَوْنَ عَلَى هَذِهِ النَّفْسِ 
    اْلاَمَّارَةِ بِالسُّوْٓءِ وَاْلاِشْتِغَالِ بِمَا يُقَرِّبُنِآ 
    اِلَيْكَ يَاذَالْجَلاَلِ وَاْلاِكْرَامِ  يَآاَرَحْمَ الرّٰحِمِيْنَ`
    },
    {
      id: 4,
      ayat: "وَصَلَى اللهُ عَلَى سَيِّدِنَاوَمَوْلٰنَامُحَمَّدٍ وَعَلَى اٰلِهٖ وَاصْحٰبِهِ وَسَلَّمَ"
    },
    {
      id: 5,
      ayat: "اَمِيْنَ"
    }
  ]
}

function doaAsyura(): iAyat[] | undefined {
  return [
    {
      id: 1,
      ayat: `اَللّٰهُمَّ يَامُفَرِّجَ كُلِّ كَرْبٍ وَّيَامُخْرِجَ ذِى النُّوْنِ يَوْمَ عَاشُوْرَآءَ. وَيَاجَامِعَ شَمْلِ يَعْقُوْبَ يَوْمَ عَاشُوْرَآءَ. 
      وَيَاغَافِرَذَنْـۢبِ دَاوٗدَ يَوْمَ عَاشُوْرَآءَ. وَيَا كَاشِفَ ضُرِّاَيُّوْبَ يَوْمَ عَاشُوْرَآءَ. وَيَاسَامِعَ دَعْوَةِ مُوْسٰى وَهَارُوْنَ يَوْمَ عَاشُوْرَآءَ. 
      وَيَاخَالِقَ رُوْحِ مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ يَوْمَ عَاشُوْرَآءَ`,
      bacaan: `Allaaamumma yaa mufarrija kulli karbin, wa yaa mukhrija zhi-nuuni yauma 'asyuuraa',
      wa yaa jaami'a syamsil Ya'quuba yauma 'asyuuraa', wa yaa gafiira zhambi Daawuuda yauma 'asyuuraa',
      wa yaa kaasyifa dzhurri Ayyuuba yauma 'asyuuraa', wa yaa saami'a da'wati Muusaa wa Haaruuna yauma
      'asyuuraa', wa yaa khaaliqa ruuhi Muhammadin shallallaahu 'alaihi wa sallama yauma 'asyuuraa'`,
      arti: `Ya Allah, wahai Yang memberikan jalan keluar dari segala kesusahan, wahai Yang mengeluarkan 
      Zun Nun pada hari Asyura, wahai Yang menghimpun semua keturunan Ya’qub pada hari Asyura, wahai Yang
      mengampuni dosa Daud pada hari Asyura, wahai Yang melengkapkan penyakit Ayyub pada hari Asyura, 
      wahai Yang mendengar seruan Musa dan Harun pada hari Asyura, wahai Yang menciptakan ruh Muhammad saw
      pada hari Asyura`
    },
    {
      id: 2,
      ayat: `وَيَارَحْمٰنَ الدُّنْيَاوَاْلاٰخِرَةِ وَاَطِلْ عُمْرِيْ فِيْ طَاعِتِكَ وَمُحَبَّتِكَ 
      وَرِضَاكَ يَآاَرْحَمَ الرّٰحِمِيْنَ وَاَحْيِنِيْ حَيَاةً طَيِّبَةً 
      وَّتَوَفَّنِيْ عَلَى اْلاِسْلَامِ وَاْلاِيْمَانِ يَآاَرْحَمَ الرَّحِمِيْنَ`,
      bacaan: `Yaa rahmaanad -dun-yaa wal-aakhirah, wa atil 'umrii fii taa'atika wa mahabbatika wa ridhaka
      ya arhamar-raahimiin, wa ahyinii hayaatan tayyibataw wa tawaffanii ‘alal-islaami wal-iimaani yaa 
      arhamar-raahimiin.`,
      arti: `Wahai Yang Maha Pemurah di dunia dan di akhirat, panjangkanlah usiaku dalam taat kepada-Mu,
      mencintai-Mu dan mendapat ridha-Mu wahai Yang Maha Penyayang di antara para penyayang. Hidupkanlah
      pula aku dalam kehidupan yang baik dan wafatkanlah aku dalam keadaan Islam dan iman. Wahai Yang
      Maha Penyayang di antara para penyayang.`
    },
    {
      id: 3,
      ayat: "وَصَلَّى اللهُ عَلٰى سَيِّدِنَا مُحَمَّدٍ وَعَلٰٓى اٰلِهٖ وَصَحْبِهٖ وَسَلَّمَ وَالْحَمْدُلِلّٰهِ رَبِّ اْلعٰا لَمِيْنَ",
      bacaan: `Wa sallallaahu 'alaa sayyidinaa Muhammadiw wa 'alaa aalihii wa sahbihii wa sallam, 
      wal-hamdu lillaahi rabbil-'aalamiin.`,
      arti: `Dan semoga Allah melimpahkan rahmat dan salam kepada junjungan kami Nabi Muhammad 
      beserta keluarga dan para sahabatnya, dan segala puji bagi Allah Tuhan semesta alam.`
    }
  ]
}
function doaRajab(): iAyat[] | undefined {
  return [
    {
      id: 1,
      ayat: "اَسْتَغْفِرُاللهَ اْلعَظِيْمَ",
      bacaan: "Astaghfirullahal 'adziim",
      arti: "Aku memohon ampun kepada Allah Yang Maha Agung"
    },
    {
      id: 2,
      ayat: `اَلَّذِيْ لَاإِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّوْمُ وَأَتُوْبُ إِلَيْهِ مِنْ جَمِيْعِ 
          الْمَعَاصِيْ وَالذُّنُوْبِ وَأَتُوْبُ إِلَيْهِ مِنْ جَمِيْعِ مَاكَرِهَ اللهُ قَوْلًا وَفِعْلًا وَسَمْعًا وَبَصَرًا وَحَاضِرًا`,
      bacaan: `Alladhi laa ilaaha illa huwal hayyul qayyuumu wa atuubu ilaaih,
        min jamii’il ma’aashii, wadh dhunuubi, wa atuubu ilaah, min jamii’i maa
        karihallaahu qaulan wa fi’lan, wa sam’an, wa basharan, wa hashiran`,
      arti: `Yang Tidak ada Tuhan selain Dia Yang Mahahidup lagi berdiri sendiri. 
        Aku bertobat kepada-Nya dari segala maksiat dan dosa. Aku bertobat kepada-Nya 
        dari segala yang Allah benci, baik berupa perkataan, perbuatan, pendengaran, 
        penglihatan, maupun perasaan`
    },
    {
      id: 3,
      ayat: `اَللَّهُمَّ إِنِّيْ اَسْتَغْفِرُكَ لِمَا قَدَّمْتُ وَمَا أَخَّرْتُ وَمَا أَسْرَفْتُ وَمَا أَسْرَرْتُ 
        وَمَاأَعْلَنْتُ وَمَاأَنْتَ أَعْلَمُ بِهِ مِنِّيْ أَنْتَ الْمُقَدِّمُ وَأَنْتَ الْمُؤَخِّرُ وَأَنْتَ عَلَى كُلِّ شَيْئٍ قَدِيْرٌ`,
      bacaan: `allaahumma inii astaghfiruka limaa qaddamtu, wa maa akhkhartu
        wa maa asraftu, wa maa asrartu, wa maa a’lantu, wa maa anta a’lamu
        bihii minnii, antal muqaddimu wa antal mu’akhkhiru, wa anta ‘alaa
        kulli sya’in qadiir`,
      arti: `Ya Allah, sesungguhnya aku memohon ampun terhadap apa-apa (dosa-dosa) yang telah 
        lalu maupun yang kemudian, baik (dosa yang aku perbuat) keterlaluan, (dosa) yang aku sembunyikan, 
        (dosa yang aku perbuat) secara terang-terangan, maupun apa-apa (dosa-dosa) yang Engkau lebih mengetahuinya 
        daripada aku. Engkau-lah Yang Maha Pemula, Engkau-lah Yang Mahaakhir, dan hanya Engkau-lah Yang Maha 
        Mengetahui atas segala sesuatu`
    },
    {
      id: 4,
      ayat: `اَللَّهُمَّ إِنَّيْ اَسْتَغْفِرُكَ مِنْ كُلِّ ذَنْبٍ تُبْتُ إِلَيْكَ مِنْهُ ثُمَّ عُدْتُ فِيْهِ 
        وَاَسْتَغْفِرُكَ بِمَاأَرَدْتُ بِهِ وَجْهَكَ الْكَرِيْمَ فَخَالَطْتُهُ بِمَا لَيْسَ لَكَ بِهِ رِضًى 
        وَاَسْتَغْفِرُكَ بِمَا وَعَدْتُكَ بِهِ نَفْسِيْ ثُمَّ اَخْلَفْتُكَ وَاَسْتَغْفِرُكَ بِمَادَعَالِيْ 
        إِلَيْهِ الْهَوَى مِنْ قَبْلِ الرُّخَصِ مِمَّا اشْتَبَهَ عَلَيَّ وَهُوَ عِنْدَكَ مَحْظُوْرٌ، 
        وَاَسْتَغْفِرُكَ مِنَ النِّعَمِ الَّتِيْ أَنْعَمْتَ بِهَاعَلَيَّ فَصَرَفْتُهَا وَتَقَوَّيْتُ 
        بِهَاعَلَى الْمَعَاصِيْ، وَاَسْتَغْفِرُكَ مِنَ الذُّنُوْبِ الَّتِيْ لَايَغْفِرُهَا 
        غَيْرُكَ وَلَايَطَّلِعُ عَلَيْهَا أَحَدٌ سِوَاكَ وَلَايَسَعُهَا إِلَّارَحْمَتُكَ وَحِلْمُكَ 
        وَلَايُنْجِيْ مِنْهَا إِلَّاعِفْوُكَ، وَاَسْتَغْفِرُكَ مِنْ كُلِّ يَمِيْنٍ حَلَفْتُ بِهَا 
        فَحَنَثْتُ فِيْهَا وَأَنَا عِنْدَكَ مَأْخُوْذٌ بِهَا، وَاَسْتَغْفِرُكَ يَالَا إِلَهَ إِلَّا 
        أَنْتَ سُبْحَانَكَ إِنِّيْ كُنْتُ مِنَ الظَّالِمِيْنَ`,
      bacaan: `allahumma inii astaghfiruka min kulli dhambin tubtu ilaika min hu,
        tsumma ‘udtu fiih. wa astaghfiruka bi maa ‘aradtu bihii wajhakal karima fa 
        khalathtuhu bimaa ‘alaihi sa’alaka bi hii ridlan. wa astaghfiruka bi maa 
        wa‘adtuka bihii nafsii tsumma akhlaftuka. wa astaghfiruka bi maa da’anii 
        ilaihil hawaa min qablir rukhashi min mastabaha ‘alayya, wa huwa ‘indaka 
        mahdluurun. wa astaghfiruka minan ni’amil latii an’amta bi haa ‘alayya fa 
        sharaftuhaa wa taqawwaitu bi haa ‘alal ma’aashii. wa astaghfiruka minadh 
        dhunuubil latii laa yaghfiruhaa ghairuka wa yaththali’u ‘alaihaa ahadun 
        siwaak, wa laa yasa’uhaa illa rahmatuka wa hilmuka wa laa yunjii min haa 
        illa ‘afwuka. wa astaghfiruka min kulli yamiinin halaftu bi haa fahanaftu 
        fii haa wa ana ‘indaka ma’khudum bihaa. wa astaghfiruka ya laa ilaahaa illaa 
        anta subhaanaka innii kuntu minadh dhaalimiin`,
      arti: `Ya Allah sesungguhnya aku memohon ampun kepada-Mu dari setiap dosa, 
        aku bertobat kepada-Mu dari dosa yang aku lakukan lagi. Aku memohon ampun 
        kepada-Mu terhadap apa-apa yang aku maksudkan untuk berbakti kepada-Mu, 
        Yang Mahamulia, namun tercemari oleh apa-apa yang tidak Engkau ridhai.`
    },
    {
      id: 5,
      ayat: `وَاَسْتَغْفِرُكَ يَا لَا إِلَهَ إِلَّا أَنْتَ عَالِمٌ الْغَيْبِ وَالشَّهَادَةَ مِنْ كُلِّ سَيِّئَةٍ 
        عَمِلْتُهَا فِيْ بَيَاضِ النَّهَارِ وَسَوَادِ اللَّيْلِ فِيْ مَلَإٍوَخَلَإٍ وَسِرٍّ 
        وَعَلَاِنيَةٍ وَأَنْتَ إِلَيَّ نَاظِرٌ إِذَا ارْتَكَبْتُهَا تَرَى مَا اَتَيْتُهُ 
        مِنَ الْعِصْيَانِ بِهِ عَمْدًا أَوْ خَطَأً أَوْ نِسْيَانًا يَا حَلِيْمُ يَاكَرِيْمُ، 
        وَاَسْتَغْفِرُكَ يَا لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّيْ كُنْتُ مِنَ الظَّالِمِيْنَ`,
      bacaan: `wa astaghfiruka ya laa ilaaha illaa anta, ‘aalimul ghaibi wasysyahaadati
        min kulli sya’atin ‘amiltuhaa fii bayadlin nahaari wasawaadil laili fii mala’in wa 
        khalain wa sirrin wa ‘alaniyyatin, wa anta ilayya nadziirun idartakabtuhaa taraa 
        maaaataituhu minal ‘ishyaani bihii ‘amdan aw khata’an aw nisyaanan yaa haliimu yaa 
        kariim, wa astaghfiruka yaa laa ilaaha illaa anta subhanaaka innii kuntu minadl dlaalimiin`,
      arti: `Aku memohon ampun kepada-Mu atas apa-apa yang telah aku janjikan kepada-Mu 
        kemudian aku khilaf kepada-Mu...`
    },
    {
      id: 6,
      ayat: `رَبِّ اغْفِرْلِيْ وَارْحَمْنِيْ 
        وَتُبْ عَلَيَّ وَأَنْتَ خَيْرٌ الرَّاحِمِيْنَ وَأَسْتَغْفِرُكَ مِنْ كُلِّ فَرِيْضَةٍ وَجَبَتْ عَلَيَّ فِيْ 
        أَنَاءَ اللَّيْلِ وَأَطْرَافَ النَّهَارِ فَتَرَكْتُهَا عَمْدًا أَوْ خَطَأً أَوْ نِسْيَانًا أَوْ 
        تَهَاوُنًا وَأَنَا مَسْئُوْلٌ بِهَا، وَمِنْ كُلَّ سَنَةٍ مِنْ سُنَنِ سَيِّدِ الْمُرْسَلِيْنَ وَخَاتِمِ 
        النَّبِيِّيْنَ مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمْ فَتَرَكْتُهَا غَفْلَةً أَوْ سَهْوًا أَوْ 
        جَهْلًا أَوْتَهَاوُنًا قَلَّتْ أَوْ كَثُرَتْ وَأَنَا عَائِدٌ بِهَا وَاَسْتَغْفِرُكَ يَالَا إِلَهَ 
        إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيْكَ لَكَ، سُبْحَانَكَ رَبِّ الْعَالَمِيْنَ لَكَ الْمُلْكُ وَلَكَ 
        الْحَمْدُ وَلَكَ الشُّكْرُ وَأَنْتَ حَسْبُنَا وَنِعْمَ الْوَكِيْلُ نِعْمَ الْمَوْلَى وَنِعْمَ 
        النَّصِيْرُ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ الْعَلِيِّ الْعَظِيْمِ وَصَلَّى اللهُ عَلَى
        سَيِّدِنَا مُحَمَّدٍ وَأَلِهِ وَصَحْبِهِ وَسَلَّمَ تَسْلِيْمًا كَثِيرْاً وَالْحَمْدُللهِ رَبِّ الْعَالَمِيْنَ`,
      bacaan: `rabbighfirlii warhamnii watub ‘alayya wa anta khairur raahimiin, wa astaghfiruka 
        min kulli faridhatin wajabat alayya fiiaanalil laili wa athraafan nahaari fa taraktuhaa 
        ‘amdan aw khata’an aw nis’yaanan aw tahaawunan wa ana mas’ulun bihaa wa min kulli sanatin 
        min sunani sayyidil mursaliina wakhaatimin nabiyyiina muhammadin shallallahu ‘alaihi 
        wasallam fataraktuha ghaflatan aw syahwan aw jahlan aw tahawunan qallat aw katsurat 
        wa ana ‘aaidum bi haa. wa astaghfiruka yaa laa ilaaha illaa anta wahdaka la syarikalak, 
        subhaanaka rabbal ‘alamiin. lakal mulku wa lakal hamdu walakasy syukru wa anta hasbunaa 
        wa ni’mal wakiil, ni’mal maulaa wani’man nashiir wa laa haula wa laa quwwata illaa 
        billahil ‘aliyyil ‘adhiim. wa shallaallahu ‘alaa sayyidinaa muhammadin wa aalhi 
        washahbiihi wa sallama tasliiman katsiraw wal hamdu lillaahi rabbil ‘aalamin`,
      arti: `Aku memohon ampun kepada-Mu atas apa-apa yang 
        Engkau serukan kepadaku, namun aku menyepelekannya, Aku mohon ampun kepada-Mu dari 
        segala nikmat yang Engkau limpahkan kepadaku namun aku menyalahgunakannya di jalan 
        maksiat. Aku memohon ampun kepada-Mu dari segala dosa yang tidak ada yang dapat 
        mengampuninya selain-Mu, dan janganlah memperlihatkannya kepada seorang pun selain-Mu,
        dan tidak ada yang dapat melapangkannya kecuali rahmat-Mu dan kesantunan-Mu, serta 
        tidak ada yang dapat selamat darinya kecuali ampunan-Mu. Shalawat dan salam semoga 
        terlimpah kepada junjungan kita, Nabi Muhammad saw., juga keluarganya, para sahabatnya,
        dengan keselamatan yang banyak. Segala puji bagi Allah, Rabb semesta alam`
    }
  ]
}
function doaNisfuSaban(): iAyat[] | undefined {
  return [
    {
      id: 1,
      ayat: `اَللّٰهُمَّ يَا ذَا الْمَنِّ وَلَا يُمَنُّ عَلَيْكَ يَا ذَا الْجَلَالِ وَالإِكْرَامِ يَا ذَا الطَوْلِ
    وَالإِنْعَامِ لَا إِلٰهَ إِلَّا أَنْتَ ظَهْرَ اللَّاجِيْنَ وَجَارَ المُسْتَجِيْرِيْنَ وَمَأْمَنَ الخَائِفِيْنَ `,
      bacaan: `Allâhumma yâ dzal manni wa lâ yumannu ‘alaik, yâ dzal jalâli wal ikrâm, yâ dzat thawli wal in‘âm, lâ ilâha illâ anta zhahral lâjîn wa jâral mustajîrîn wa ma’manal khâ’ifîn`,
      arti: `Wahai Tuhanku yang maha pemberi, engkau tidak diberi. Wahai Tuhan pemilik 
    kebesaran dan kemuliaan. Wahai Tuhan pemberi segala kekayaan dan segala nikmat. 
    Tiada tuhan selain Engkau, kekuatan orang-orang yang meminta pertolongan, lindungan 
    orang-orang yang mencari perlindungan, dan tempat aman orang-orang yang takut`
    },
    {
      id: 2,
      ayat: `اللّٰهُمَّ إِنْ كُنْتَ كَتَبْتَنِيْ عِنْدَكَ فِيْ أُمِّ الكِتَابِ شَقِيًّا أَوْ
     مَحْرُومًا أَوْ مُقْتَرًّا عَلَيَّ فِي الرِزْقِ، فَامْحُ اللّٰهُمَّ فِي أُمِّ الكِتَابِ شَقَاوَتِي
     وَحِرْمَانِي وَاقْتِتَارَ رِزْقِيْ، وَاكْتُبْنِيْ عِنْدَكَ سَعِيْدًا مَرْزُوْقًا مُوَفَّقًا لِلْخَيْرَاتِ
     فَإِنَّكَ قُلْتَ وَقَوْلُكَ الْحَقُّ فِيْ كِتَابِكَ المُنْزَلِ عَلَى لِسَانِ نَبِيِّكَ المُرْسَلِ
     "يَمْحُو اللهُ مَا يَشَاءُ وَيُثْبِتُ وَعِنْدَهُ أُمُّ الكِتَابِ" وَصَلَّى اللهُ
     عَلَى سَيِّدِنَا مُحَمـَّدٍ وَعَلَى اٰلِهِ وَصَحْبِهِ وَسَلَّمَ وَالْحَمْدُ لِلّٰهِ رَبِّ العَــالَمِيْنَ`,
      bacaan: `Allâhumma in kunta katabtanî ‘indaka fî ummil kitâbi syaqiyyan aw mahrûman aw muqtarran ‘alayya fir rizqi, famhullâhumma fî ummil kitâbi syaqâwatî wa hirmânî waqtitâra rizqî, waktubnî ‘indaka sa‘îdan marzûqan muwaffaqan lil khairât. Fa innaka qulta wa qawlukal haqqu fî kitâbikal munzal ‘alâ lisâni nabiyyikal mursal, “yamhullâhu mâ yasyâ’u wa yutsbitu, wa ‘indahû ummul kitâb” wa shallallâhu ‘alâ sayyidinâ muhammad wa alâ âlihî wa shahbihî wa sallama, walhamdu lillâhi rabbil ‘alamîn`
    }
  ]
}

function doaBulanRamadhan(): iAyat[] | undefined {
  return [
    {
      id: 1,
      ayat: `إِلَهِيْ وَقَفَ السَّائِلُونَ بِبابِكَ،
      وَلَاذَ الفُقَراءُ بِجَنَابِكَ وَوَقَفَتْ سَفِينَةُ
      المَسَاكِينِ عَلَى سَاحِلِ بَحْرِ كَرَمِكَ يَرْجُونَ
      الجَوَازَ إِلى سَاحَةِ رَحْمَتِكَ وَنِعْمَتِكَ`,
      bacaan: `Ilâhî waqafas sâilûna bibâbika
      Wa lâdzal fuqarâu bijanâbika
      Wa waqafat safînatul masâkîni ‘alâ sâhili bahri karamik
      Yarjûnal jawâza ilâ sâhati rahmatika wa ni’matik`,
      arti: `Ilahi, para pengemis telah berdiri di pintu-Mu
      Orang-orang fakir telah berlindung di halaman-Mu
      Bahtera orang-orang miskin telah berlabuh
      di darmaga samudra kedermawan-Mu
      Mereka berharap mendapat izin untuk memasuki
      kawasan rahmat dan nikmat-Mu`
    },
    {
      id: 2,
      ayat: `إِلَهِي رَبِحَ الصَّائِمُونَ،
      وَفازَ القَائِمُونَ، وَنَجَى المُخْلِصُونَ،
      وَنَحْنُ عَبِيدُكَ المُذْنِبُونَ،
      فَارْحَمْنَا بِرَحْمَتِكَ وَجُدْ عَلَيْنَا بِفَضْلِكَ وَمِنَّتِكَ
      وَأِغْفِرْ لَنَا أَجْمَعِيْنَ بِرَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِيِن`,
      bacaan: `Ilâhî rabihash shâimûn
      Wa fâzal qâimûn
      Wa najal mukhlishûn
      Wa nahnu ‘abîdukal mudznibûna farhamna birahmatika
      Wa jud 'alaina bi fadlika wa minnatika
      Waghfir lanâ ajma'in birahmatika yâ Arhamar râhimîn`,
      arti: `Ilahi, beruntunglah orang-orang yang berpuasa
      Berbahagialah orang-orang yang melakukan qiyamul lail
      Dan selamatlah orang-orang yang tulus ilkhlas
      Sementara kami adalah hamba-Mu yang pedosa,
      maka sayangilah kami dengan rahmat-Mu
      Berilah kami kemurahan dengan keutamaan serta kebaikan-Mu
      Dan ampuni dosa-dosa kami semua
      wahai Yang Maha Pengasih semua yang mengasihi`
    }
  ]
}

function doaAkhirTahun(): iAyat[] | undefined {
  return [
    {
      id: 1,
      ayat: `وَصَلَّى اللّٰهُ عَلٰى سَيِّدِنَا مُحَمَّدٍ
      وَعَلٰۤى اَلِهِ وَصَحْبِهِ وَسَلَّمَ اَللّٰهُمَّ مَا عَمِلْتُ
      فِى هٰذِهِ السَّنَةِ مِمَّا نَهَيْتَنِى عَنْهُ فَلَمْ اَتُبْ
      مِنْهُ وَلَمْ تُرْضَهُ وَلَمْ تَنْسَهُ وَحَمِلْتَ عَلَيَّ
      بَعْدَ قُدْرَتِكَ عَلٰى عُقُوْبَتِيْ وَدَعَوْتَنِيْۤ اِلَى
      التَّوْبَةِ بَعْدَ جَرْاَ تِيْ عَلٰى مَعْصِيَتِكَ
      فَإِنِّيْۤ اَسْتَغْفِرُكَ فَاغْفِرْلِيْ وَمَا عَمِلْتُ فِيْهَا
      مِمَّا تَرْضَاهُ وَوَعَدْتَنِيْ عَلَيْهِ الثَّوَابَ
      فَاَسْأَلُكَ. اَللَٰهُمَّ يَاكَرِيْمُ يَاذَ الْجَلٰلِ
      وَاْلاِكْرَامِ اَنْ تَتَقَبَّلَهُ مِنِّيْ وَلاَ تَقْطَعْ
      رَجَاۤئِيْ مِنْكَ يَاكَرِيْمُ وَصَلَى اللّٰهُ
      عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلٰۤى اَلِهٖ وَصَحْبِهٖ
      وَسَلَّمَ`,
      bacaan: `Wa shallallaahu ‘ala sayyidinaa Muhammadin wa ‘alaa aalihi wa shahbihii 
      wa sallam. Allaahumma maa ‘amiltu fi haadzihis-sanati mimmaa nahaitani ‘anhu falam 
      atub minhu wa lam tardhahu wa lam tansahu wa halamta ‘alayya ba’da qudratika ‘alaa 
      uquubati wa da’autani ilattaubati minhu ba’da jur’ati alaa ma’siyatika fa inni 
      astaghfiruka fagfirlii wa maa ‘amiltu fiihaa mimma tardhaahu wa wa’adtani 
      ‘alaihits-tsawaaba fas’alukallahumma yaa kariimu yaa dzal-jalaali wal ikram an 
      tataqabbalahuu minni wa laa taqtha’ rajaai minka yaa karim, wa sallallaahu ‘alaa 
      sayyidinaa Muhammadin Nabiyyil ummiyyi wa ‘alaa ‘aalihii wa sahbihii wa sallam`,
      arti: `Semoga Allah tetap melimpahkan rahmat dan salam kepada junjungan dan penghulu
      kita Muhammad beserta keluarga dan sahabat beliau. Ya Allah, apa yang aku lakukan 
      pada tahun ini tentang sesuatu yang Engkau larang aku melakukannya, kemudian belum 
      bertaubat, padahal Engkau tidak meridloi (merelakannya), tidak melupakannya dan Engkau
      bersikap lembut kepadaku setelah Engkau berkuasa menyiksaku dan Engkau seru aku untuk 
      bertaubat setelah aku melakukan kedurhakaan kepada-Mu, maka sungguh aku mohon ampun 
      kepada-Mu, ampunilah aku! Dan apapun yang telah aku lakukan dari sesuatu yang Engkau 
      ridloi dan Engkau janjikan pahala kepadaku, maka aku mohon kepada-Mu ya Allah, Dzat 
      Yang Maha Pemurah, Dzat Yang Maha Luhur lagi Mulia, terimalah persembahanku dan 
      janganlah Engkau putus harapanku dari-Mu, wahai Dzat Yang Maha Pemurah! Semoga Allah 
      tetap melimpahkan rahmat dan salam kepada junjungan kita Muhammad beserta keluarga
      dan sahabat beliau.`
    }
  ]
}
function zikirPagiSore(): iAyat[] | undefined {
  return [
    {
      id: 1,
      ayat: `بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ، فِي الْأَرْضِ وَلَا فِي السَّمَاءِ، وَهُوَ السَّمِيعُ الْعَلِيمُ`,
      bacaan: `Bismillahilladzii laa yadhurru ma'asmihi syai-un fil ardhi wa laa fissamaa-i,
      wa huwassamii'ul 'alimm.`,
      arti: `(Aku berlindung) dengan Nama Allah yang bersama nama-Nya tidak ada sesuatu di bumi
      dan di langit yang bisa membahayakan. Dan Dia Maha Mendengar lagi Maha Mengetahui.`,
      reference: {
        id: 0,
        surat: "HR Abu Dawud dan At-Turmudzi"
      }
    },
    {
      id: 2,
      ayat: "وَسَبِّحْ بِحَمْدِ رَبِّكَ قَبْلَ طُلُوْعِ الشَّمْسِ وَقَبْلَ غُرُوْبِهَا ۚوَمِنْ اٰنَاۤئِ الَّيْلِ فَسَبِّحْ وَاَطْرَافَ النَّهَارِ لَعَلَّكَ تَرْضٰى",
      bacaan: `Wa Sabbiḥ Biḥamdi Rabbika Qabla Ṭulụ’isy-Syamsi Wa Qabla Gurụbiha,
    Wa Min Ana'Il- Laili Fa Sabbiḥ Wa Aṭrafan - Nahari La’allaka Tarḍa`,
      arti: `Dan bertasbihlah dengan memuji Tuhanmu, sebelum terbit matahari dan sebelum terbenamnya dan 
    bertasbih pulalah pada waktu-waktu di malam hari dan pada waktu-waktu di siang hari,
    supaya kamu merasa senang.`,
      reference: {
        id: 130,
        surat: "Thaha"
      }
    },
    {
      id: 3,
      ayat: "فَسُبْحٰنَ اللّٰهِ حِيْنَ تُمْسُوْنَ وَحِيْنَ تُصْبِحُوْنَ",
      bacaan: "Fa Subhaanal laahi hiina tumsuuna wa hiina tusbihuun.",
      arti: "Maka bertasbihlah kepada Allah di waktu kamu berada di petang hari dan waktu kamu berada di waktu subuh.",
      reference: {
        id: 17,
        surat: "Ar-Rum"
      }
    },
    {
      id: 4,
      ayat: "وَلَهُ الْحَمْدُ فِى السَّمٰوٰتِ وَالْاَرْضِ وَعَشِيًّا وَّحِيْنَ تُظْهِرُوْنَ",
      bacaan: "Wa lahul hamdu fis samaawaati wal ardi wa 'ashiyyanw wa hiina tuzhiruun",
      arti: "dan segala puji bagi-Nya baik di langit, di bumi, pada malam hari dan pada waktu zuhur (tengah hari).",
      reference: {
        id: 18,
        surat: "Ar-Rum"
      }
    },
    {
      id: 6,
      ayat: "اَللّٰهُمَّ بِكَ اَصْبَحْنَا وَبِكَ اَمْسَيْنَاوَبْكَ نَحْيَاوَبِكَ نَمُوْتُ وَاِلَيْكَ النُّشُوْرُ",
      bacaan: "Allahumma bika ash-bahnaa wa bika amsaynaa wa bika nahyaa wa bika namuutu wa ilaikan nusyuur.",
      arti: `Ya Allah, dengan rahmat dan pertolongan-Mu kami memasuki waktu pagi,
    dan dengan rahmat dan pertolongan-Mu kami memasuki waktu sore. Dengan rahmat
    dan kehendak-Mu kami hidup dan dengan rahmat dan kehendak-Mu kami mati.
    Dan kepada-Mu kebangkitan (bagi semua makhluk).`,
      reference: {
        id: 0,
        surat: "HR Abu Dawud, At-Turmudzi, Ibnu Majah, dll."
      }
    }

  ]
}

function doaBersetubuh(): iAyat[] | undefined {
  return [
    {
      id: 1,
      ayat: `بِسْمِ اللهِ اَللَّهُمَّ جَنِّبْنَا الشَّيْطَانَ وَجَنِّبِ الشَّيْطَانَ مَا رَزَقْتَنَا.`,
      arti: `Dengan menyebut nama Allah. Ya Allah jauhkanlah kami dari (gangguan) setan dan jauhkanlah setan dari rezeki yang Engkau anugerahkan kepada kami.`,
      bacaan: `Bismillahi, Allahumma jannibnasy syaithoona wa jannibisy syaithoona maa razaqtanaa.`,
      reference: {
        id: 0,
        surat: "H.R. Bukhari: 6/141 & Muslim: 2/1028"
      }
    }
  ]
}