interface iAyat {
  id: number;
  arab: string;
  bacaan?: string;
  arti?: string;
}

interface iContents {
  id: number;
  subTitle: string;
  phar?: string | string[];
  ayats?: iAyat[];
  sources?: string;
}

interface iDoa {
  id: number;
  title: string;
  phar?: string | string[];
  contents: iContents[];
}

const doaAwalTahun: iAyat[] = [
  {
    id: 1,
    arab: "وَصَلَّى اللهُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى اَلِهِ وَصَحْبِهِ وَسَلَّمَ",
  },
  {
    id: 2,
    arab: `اَللَّهُمَّ اَنْتَ اْلاَ بَدِيُّ الْقَدِيْمُ اْلاَوَّلُ وَعَلَى 
    فَضْلِكَ الْعَظِيْمِ وَجُوْدِكَ الْمُعَوَّلِ وَهَذَا عَامٌ جَدِيْدٌ قَدْ 
    اَقْبَلَ اَسْأَلُكَ الْعِصْمَةَ فِيْهِ مِنَ الشَّيْطَانِ وَ`,
  },
  {
    id: 3,
    arab: `اَوْلِيَائِهِ وَجُنُوْدِهٖ وَالْعَوْنَ عَلَى هَذِهِ النَّفْسِ 
    اْلاَمَّارَةِ بِالسُّوْٓءِ وَاْلاِشْتِغَالِ بِمَا يُقَرِّبُنِآ 
    اِلَيْكَ يَاذَالْجَلاَلِ وَاْلاِكْرَامِ  يَآاَرَحْمَ الرّٰحِمِيْنَ`
  },
  {
    id: 4,
    arab: "وَصَلَى اللهُ عَلَى سَيِّدِنَاوَمَوْلٰنَامُحَمَّدٍ وَعَلَى اٰلِهٖ وَاصْحٰبِهِ وَسَلَّمَ"
  },
  {
    id: 5,
    arab: "اَمِيْنَ"
  }
]

const doaAsyura: iAyat[] = [
  {
    id: 1,
    arab: `اَللّٰهُمَّ يَامُفَرِّجَ كُلِّ كَرْبٍ وَّيَامُخْرِجَ ذِى النُّوْنِ يَوْمَ عَاشُوْرَآءَ. وَيَاجَامِعَ شَمْلِ يَعْقُوْبَ يَوْمَ عَاشُوْرَآءَ. 
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
    arab: `وَيَارَحْمٰنَ الدُّنْيَاوَاْلاٰخِرَةِ وَاَطِلْ عُمْرِيْ فِيْ طَاعِتِكَ وَمُحَبَّتِكَ 
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
    arab: "وَصَلَّى اللهُ عَلٰى سَيِّدِنَا مُحَمَّدٍ وَعَلٰٓى اٰلِهٖ وَصَحْبِهٖ وَسَلَّمَ وَالْحَمْدُلِلّٰهِ رَبِّ اْلعٰا لَمِيْنَ",
    bacaan: `Wa sallallaahu 'alaa sayyidinaa Muhammadiw wa 'alaa aalihii wa sahbihii wa sallam, 
    wal-hamdu lillaahi rabbil-'aalamiin.`,
    arti: `Dan semoga Allah melimpahkan rahmat dan salam kepada junjungan kami Nabi Muhammad 
    beserta keluarga dan para sahabatnya, dan segala puji bagi Allah Tuhan semesta alam.`
  }
]

const doaRajab: iAyat[] = [
  {
    id: 1,
    arab: "اَسْتَغْفِرُاللهَ اْلعَظِيْمَ",
    bacaan: "Astaghfirullahal 'adziim",
    arti: "Aku memohon ampun kepada Allah Yang Maha Agung"
  },
  {
    id: 2,
    arab: `اَلَّذِيْ لَاإِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّوْمُ وَأَتُوْبُ إِلَيْهِ مِنْ جَمِيْعِ 
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
    arab: `اَللَّهُمَّ إِنِّيْ اَسْتَغْفِرُكَ لِمَا قَدَّمْتُ وَمَا أَخَّرْتُ وَمَا أَسْرَفْتُ وَمَا أَسْرَرْتُ 
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
    arab: `اَللَّهُمَّ إِنَّيْ اَسْتَغْفِرُكَ مِنْ كُلِّ ذَنْبٍ تُبْتُ إِلَيْكَ مِنْهُ ثُمَّ عُدْتُ فِيْهِ 
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
    arab: `وَاَسْتَغْفِرُكَ يَا لَا إِلَهَ إِلَّا أَنْتَ عَالِمٌ الْغَيْبِ وَالشَّهَادَةَ مِنْ كُلِّ سَيِّئَةٍ 
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
    kemudian aku khilaf kepada-Mu.`
  },
  {
    id: 6,
    arab: `رَبِّ اغْفِرْلِيْ وَارْحَمْنِيْ 
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
const doaNisfuSaban: iAyat[] = [
  {
    id: 1,
    arab: `اَللّٰهُمَّ يَا ذَا الْمَنِّ وَلَا يُمَنُّ عَلَيْكَ يَا ذَا الْجَلَالِ وَالإِكْرَامِ يَا ذَا الطَوْلِ
    وَالإِنْعَامِ لَا إِلٰهَ إِلَّا أَنْتَ ظَهْرَ اللَّاجِيْنَ وَجَارَ المُسْتَجِيْرِيْنَ وَمَأْمَنَ الخَائِفِيْنَ `,
    bacaan: `Allâhumma yâ dzal manni wa lâ yumannu ‘alaik, yâ dzal jalâli wal ikrâm, yâ dzat thawli wal in‘âm, lâ ilâha illâ anta zhahral lâjîn wa jâral mustajîrîn wa ma’manal khâ’ifîn`,
    arti: `Wahai Tuhanku yang maha pemberi, engkau tidak diberi. Wahai Tuhan pemilik 
    kebesaran dan kemuliaan. Wahai Tuhan pemberi segala kekayaan dan segala nikmat. 
    Tiada tuhan selain Engkau, kekuatan orang-orang yang meminta pertolongan, lindungan 
    orang-orang yang mencari perlindungan, dan tempat aman orang-orang yang takut`
  },
  {
    id: 2,
    arab: `اللّٰهُمَّ إِنْ كُنْتَ كَتَبْتَنِيْ عِنْدَكَ فِيْ أُمِّ الكِتَابِ شَقِيًّا أَوْ
     مَحْرُومًا أَوْ مُقْتَرًّا عَلَيَّ فِي الرِزْقِ، فَامْحُ اللّٰهُمَّ فِي أُمِّ الكِتَابِ شَقَاوَتِي
     وَحِرْمَانِي وَاقْتِتَارَ رِزْقِيْ، وَاكْتُبْنِيْ عِنْدَكَ سَعِيْدًا مَرْزُوْقًا مُوَفَّقًا لِلْخَيْرَاتِ
     فَإِنَّكَ قُلْتَ وَقَوْلُكَ الْحَقُّ فِيْ كِتَابِكَ المُنْزَلِ عَلَى لِسَانِ نَبِيِّكَ المُرْسَلِ
     "يَمْحُو اللهُ مَا يَشَاءُ وَيُثْبِتُ وَعِنْدَهُ أُمُّ الكِتَابِ" وَصَلَّى اللهُ
     عَلَى سَيِّدِنَا مُحَمـَّدٍ وَعَلَى اٰلِهِ وَصَحْبِهِ وَسَلَّمَ وَالْحَمْدُ لِلّٰهِ رَبِّ العَــالَمِيْنَ`,
    bacaan: `Allâhumma in kunta katabtanî ‘indaka fî ummil kitâbi syaqiyyan aw mahrûman aw muqtarran ‘alayya fir rizqi, famhullâhumma fî ummil kitâbi syaqâwatî wa hirmânî waqtitâra rizqî, waktubnî ‘indaka sa‘îdan marzûqan muwaffaqan lil khairât. Fa innaka qulta wa qawlukal haqqu fî kitâbikal munzal ‘alâ lisâni nabiyyikal mursal, “yamhullâhu mâ yasyâ’u wa yutsbitu, wa ‘indahû ummul kitâb” wa shallallâhu ‘alâ sayyidinâ muhammad wa alâ âlihî wa shahbihî wa sallama, walhamdu lillâhi rabbil ‘alamîn`
  },
  {
    id: 3,
    arab: "",
    bacaan: "",
    arti: ""
  },
  {
    id: 4,
    arab: "",
    bacaan: "",
    arti: ""
  },
  {
    id: 5,
    arab: "",
    bacaan: "",
    arti: ""
  },
]

const contents: iContents[] = [
  {
    id: 1,
    subTitle: "Doa Awal Tahun",
    phar: [""],
    ayats: doaAwalTahun,
  },
  {
    id: 1,
    subTitle: "Doa Asyura",
    ayats: doaAsyura,
  },
  {
    id: 3,
    subTitle: "Doa Istighfar Rajab",
    ayats: doaRajab
  },
  {
    id: 4,
    subTitle: "Doa Nisfu Sa'ban",
    ayats: doaNisfuSaban,
    sources: "https://islam.nu.or.id/post/read/89717/doa-malam-nisfu-syaban"
  }
]

const Doa: iDoa = {
  id: 35,
  title: "Doa dan Zikir dalam Keadaan Tertentu",
  phar: [""],
  contents: contents,
}

export default Doa;