// source: https://www.mushaf.id/

const haikalAyats = [
	{
		id: 1,
		name: "Haikal Pertama",
		surat: "Al-Baqarah: 255",
		ayats: [
			{
				id: 255,
				ayat: "اُعِيْذُ نَفْسِيْ بِااللّٰهِ الْعَلِيِّ الْعَظِيْمِ، اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
				bacaan: "U’izu nafsi billahil ‘aliyyil ‘azhim, allaahu laa ilaaha illaa huwa alhayyu alqayyuumu laa ta/khudzuhu sinatun walaa nawmun lahu maa fii alssamaawaati wamaa fii al-ardhi man dzaa alladzii yasyfa'u 'indahu illaa bi-idznihi ya'lamu maa bayna aydiihim wamaa khalfahum walaa yuhiithuuna bisyay-in min 'ilmihi illaa bimaa syaa-a wasi'a kursiyyuhu alssamaawaati waal-ardha walaa yauuduhu hifzhuhumaa wahuwa al'aliyyu al'azhiimu",
				arti: "Aku mohon perlindungan kepada Allah Yang Maha Tinggi lagi Maha Besar, Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa´at di sisi Allah tanpa izin-Nya? Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar."
			}
		]
	},
	{
		id: 2,
		name: "Haikal Kedua",
		surat: "Ali Imran: 35 dan Al-Isra': 77-80",
		ayats: [
			{
				id: 35,
				ayat: "اُعِيْذُ نَفْسِيْ بِااللّٰهِ الْعَلِيِّ الْعَظِيْمِ، إِذْ قَالَتِ امْرَأَتُ عِمْرَانَ رَبِّ إِنِّي نَذَرْتُ لَكَ مَا فِي بَطْنِي مُحَرَّرًا فَتَقَبَّلْ مِنِّي ۖ إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ",
				bacaan: "U’izu nafsi billahil ‘aliyyil ‘azhim, idz qaalati imra-atu 'imraana rabbi innii nadzartu laka maa fii bathnii muharraran fataqabbal minnii innaka anta alssamii'u al'aliimu",
				arti: "Aku mohon perlindungan kepada Allah Yang Maha Tinggi lagi Maha Besar, (Ingatlah), ketika isteri ´Imran berkata: \"Ya Tuhanku, sesungguhnya aku menazarkan kepada Engkau anak yang dalam kandunganku menjadi hamba yang saleh dan berkhidmat (di Baitul Maqdis). Karena itu terimalah (nazar) itu dari padaku. Sesungguhnya Engkaulah Yang Maha Mendengar lagi Maha Mengetahui\""
			},
			{
				id: 77,
				ayat: "إِنْ كَادُوا لَيَسْتَفِزُّونَكَ مِنَ الْأَرْضِ لِيُخْرِجُوكَ مِنْهَا ۖ وَإِذًا لَا يَلْبَثُونَ خِلَافَكَ إِلَّا قَلِيلًا",
				bacaan: "wa-in kaaduu layastafizzuunaka mina al-ardhi liyukhrijuuka minhaa wa-idzan laa yalbatsuuna khilaafaka illaa qaliilaan",
				arti: "Dan sesungguhnya benar-benar mereka hampir membuatmu gelisah di negeri (Mekah) untuk mengusirmu daripadanya dan kalau terjadi demikian, niscaya sepeninggalmu mereka tidak tinggal, melainkan sebentar saja."
			},
			{
				id: 78,
				ayat: "أَقِمِ الصَّلَاةَ لِدُلُوكِ الشَّمْسِ إِلَىٰ غَسَقِ اللَّيْلِ وَقُرْآنَ الْفَجْرِ ۖ إِنَّ قُرْآنَ الْفَجْرِ كَانَ مَشْهُودًا",
				bacaan: "aqimi alshshalaata liduluuki alsysyamsi ilaa ghasaqi allayli waqur-aana alfajri inna qur-aana alfajri kaana masyhuudaan",
				arti: "Dirikanlah shalat dari sesudah matahari tergelincir sampai gelap malam dan (dirikanlah pula shalat) subuh. Sesungguhnya shalat subuh itu disaksikan (oleh malaikat)."
			},
			{
				id: 79,
				ayat: "وَمِنَ اللَّيْلِ فَتَهَجَّدْ بِهِ نَافِلَةً لَكَ عَسَىٰ أَنْ يَبْعَثَكَ رَبُّكَ مَقَامًا مَحْمُودًا",
				bacaan: "wamina allayli fatahajjad bihi naafilatan laka 'asaa an yab'atsaka rabbuka maqaaman mahmuudaan",
				arti: "Dan pada sebahagian malam hari bersembahyang tahajudlah kamu sebagai suatu ibadah tambahan bagimu; mudah-mudahan Tuhan-mu mengangkat kamu ke tempat yang terpuji."
			},
			{
				id: 80,
				ayat: "وَقُلْ رَبِّ أَدْخِلْنِي مُدْخَلَ صِدْقٍ وَأَخْرِجْنِي مُخْرَجَ صِدْقٍ وَاجْعَلْ لِي مِنْ لَدُنْكَ سُلْطَانًا نَصِيرًا",
				bacaan: "waqul rabbi adkhilnii mudkhala shidqin wa-akhrijnii mukhraja shidqin waij'al lii min ladunka sulthaanan nashiiraan",
				arti: "Dan katakanlah: \"Ya Tuhan-ku, masukkanlah aku secara masuk yang benar dan keluarkanlah (pula) aku secara keluar yang benar dan berikanlah kepadaku dari sisi Engkau kekuasaan yang menolong.\""
			}
		]
	},
	{
		id: 3,
		name: "Haikal Ketiga",
		surat: "Al-Baqarah: 285 - 286",
		ayats: [
			{
				id: 285,
				ayat: "اُعِيْذُ نَفْسِيْ بِااللّٰهِ الْعَلِيِّ الْعَظِيْمِ، آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِنْ رُسُلِهِ ۚ وَقَالُوا سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ",
				bacaan: "U’izu nafsi billahil ‘aliyyil ‘azhim, aamana alrrasuulu bimaa unzila ilayhi min rabbihi waalmu/minuuna kullun aamana biallaahi wamalaa-ikatihi wakutubihi warusulihi laa nufarriqu bayna ahadin min rusulihi waqaaluu sami'naa wa-atha'naa ghufraanaka rabbanaa wa-ilayka almashiiru",
				arti: "Aku mohon perlindungan kepada Allah Yang Maha Tinggi lagi Maha Besar, Rasul telah beriman kepada Al Quran yang diturunkan kepadanya dari Tuhannya, demikian pula orang-orang yang beriman. Semuanya beriman kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya dan rasul-rasul-Nya. (Mereka mengatakan): \"Kami tidak membeda-bedakan antara seseorangpun (dengan yang lain) dari rasul-rasul-Nya\", dan mereka mengatakan: \"Kami dengar dan kami taat\". (Mereka berdoa): \"Ampunilah kami ya Tuhan kami dan kepada Engkaulah tempat kembali.\""
			},
			{
				id: 286,
				ayat: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ ۖ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا ۚ أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
				bacaan: "laa yukallifu allaahu nafsan illaa wus'ahaa lahaa maa kasabat wa'alayhaa maa iktasabat rabbanaa laa tu-aakhidznaa in nasiinaa aw akhtha/naa rabbanaa walaa tahmil 'alaynaa ishran kamaa hamaltahu 'alaa alladziina min qablinaa rabbanaa walaa tuhammilnaa maa laa thaaqata lanaa bihi wau'fu 'annaa waighfir lanaa wairhamnaa anta mawlaanaa faunshurnaa 'alaa alqawmi alkaafiriina",
				arti: "Allah tidak membebani seseorang melainkan sesuai dengan kesanggupannya. Ia mendapat pahala (dari kebajikan) yang diusahakannya dan ia mendapat siksa (dari kejahatan) yang dikerjakannya. (Mereka berdoa): \"Ya Tuhan kami, janganlah Engkau hukum kami jika kami lupa atau kami tersalah. Ya Tuhan kami, janganlah Engkau bebankan kepada kami beban yang berat sebagaimana Engkau bebankan kepada orang-orang sebelum kami. Ya Tuhan kami, janganlah Engkau pikulkan kepada kami apa yang tak sanggup kami memikulnya. Beri maaflah kami; ampunilah kami; dan rahmatilah kami. Engkaulah Penolong kami, maka tolonglah kami terhadap kaum yang kafir.\""
			},
		]
	},
	{
		id: 4,
		name: "Haikal Keempat",
		surat: "Al-Isra: 81 - 85",
		ayats: [
			{
				id: 81,
				ayat: "اُعِيْذُ نَفْسِيْ بِااللّٰهِ الْعَلِيِّ الْعَظِيْمِ، وَقُلْ جَاءَ الْحَقُّ وَزَهَقَ الْبَاطِلُ ۚ إِنَّ الْبَاطِلَ كَانَ زَهُوقًا",
				bacaan: "U’izu nafsi billahil ‘aliyyil ‘azhim, waqul jaa-a alhaqqu wazahaqa albaathilu inna albaathila kaana zahuuqaan",
				arti: "Aku mohon perlindungan kepada Allah Yang Maha Tinggi lagi Maha Besar, Dan katakanlah: \"Yang benar telah datang dan yang batil telah lenyap\". Sesungguhnya yang batil itu adalah sesuatu yang pasti lenyap.\""
			},
			{
				id: 82,
				ayat: "وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِلْمُؤْمِنِينَ ۙ وَلَا يَزِيدُ الظَّالِمِينَ إِلَّا خَسَارًا",
				bacaan: "wanunazzilu mina alqur-aani maa huwa syifaaun warahmatun lilmu/miniina walaa yaziidu alzhzhaalimiina illaa khasaaraan",
				arti: "Dan Kami turunkan dari Al Quran suatu yang menjadi penawar dan rahmat bagi orang-orang yang beriman dan Al Quran itu tidaklah menambah kepada orang-orang yang zalim selain kerugian."
			},
			{
				id: 83,
				ayat: "وَإِذَا أَنْعَمْنَا عَلَى الْإِنْسَانِ أَعْرَضَ وَنَأَىٰ بِجَانِبِهِ ۖ وَإِذَا مَسَّهُ الشَّرُّ كَانَ يَئُوسًا",
				bacaan: "wa-idzaa an'amnaa 'alaa al-insaani a'radha wanaaa bijaanibihi wa-idzaa massahu alsysyarru kaana yauusaan",
				arti: "Dan apabila Kami berikan kesenangan kepada manusia niscaya berpalinglah dia; dan membelakang dengan sikap yang sombong; dan apabila dia ditimpa kesusahan niscaya dia berputus asa."
			},
			{
				id: 84,
				ayat: "قُلْ كُلٌّ يَعْمَلُ عَلَىٰ شَاكِلَتِهِ فَرَبُّكُمْ أَعْلَمُ بِمَنْ هُوَ أَهْدَىٰ سَبِيلًا",
				bacaan: "qul kullun ya'malu 'alaa syaakilatihi farabbukum a'lamu biman huwa ahdaa sabiilaan",
				arti: "Katakanlah: \"Tiap-tiap orang berbuat menurut keadaannya masing-masing\". Maka Tuhanmu lebih mengetahui siapa yang lebih benar jalannya."
			},
			{
				id: 85,
				ayat: "وَيَسْأَلُونَكَ عَنِ الرُّوحِ ۖ قُلِ الرُّوحُ مِنْ أَمْرِ رَبِّي وَمَا أُوتِيتُمْ مِنَ الْعِلْمِ إِلَّا قَلِيلًا",
				bacaan: "wayas-aluunaka 'ani alrruuhi quli alrruuhu min amri rabbii wamaa uutiitum mina al'ilmi illaa qaliilaan",
				arti: "Dan mereka bertanya kepadamu tentang roh. Katakanlah: \"Roh itu termasuk urusan Tuhan-ku, dan tidaklah kamu diberi pengetahuan melainkan sedikit.\""
			}
		]
	},
	{
		id: 5,
		name: "Haikal Kelima",
		surat: "Maryam: 4 - 6 dan Al-Fath: 27",
		ayats: [
			{
				id: 4,
				ayat: "اُعِيْذُ نَفْسِيْ بِااللّٰهِ الْعَلِيِّ الْعَظِيْمِ، قَالَ رَبِّ إِنِّي وَهَنَ الْعَظْمُ مِنِّي وَاشْتَعَلَ الرَّأْسُ شَيْبًا وَلَمْ أَكُنْ بِدُعَائِكَ رَبِّ شَقِيًّا",
				bacaan: "U’izu nafsi billahil ‘aliyyil ‘azhim, qaala rabbi innii wahana al'azhmu minnii waisyta'ala alrra/su syayban walam akun bidu'aa-ika rabbi syaqiyyaan",
				arti: "Aku mohon perlindungan kepada Allah Yang Maha Tinggi lagi Maha Besar, Ia berkata \"Ya Tuhanku, sesungguhnya tulangku telah lemah dan kepalaku telah ditumbuhi uban, dan aku belum pernah kecewa dalam berdoa kepada Engkau, ya Tuhanku.\""
			},
			{
				id: 5,
				ayat: "وَإِنِّي خِفْتُ الْمَوَالِيَ مِنْ وَرَائِي وَكَانَتِ امْرَأَتِي عَاقِرًا فَهَبْ لِي مِنْ لَدُنْكَ وَلِيًّا",
				bacaan: "wa-innii khiftu almawaaliya min waraa-ii wakaanati imra-atii 'aaqiran fahab lii min ladunka waliyyaan",
				arti: "Dan sesungguhnya aku khawatir terhadap mawaliku sepeninggalku, sedang isteriku adalah seorang yang mandul, maka anugerahilah aku dari sisi Engkau seorang putera,"
			},
			{
				id: 6,
				ayat: "يَرِثُنِي وَيَرِثُ مِنْ آلِ يَعْقُوبَ ۖ وَاجْعَلْهُ رَبِّ رَضِيًّا",
				bacaan: "yaritsunii wayaritsu min aali ya'quuba waij'alhu rabbi radhiyyaan",
				arti: "yang akan mewarisi aku dan mewarisi sebahagian keluarga Ya´qub; dan jadikanlah ia, ya Tuhanku, seorang yang diridhai."
			}, {
				id: 27,
				ayat: "لَقَدْ صَدَقَ اللّٰهُ رَسُوْلَهُ الرُّءْيَا بِالْحَقِّ ۚ لَتَدْخُلُنَّ الْمَسْجِدَ الْحَرَامَ اِنْ شَاۤءَ اللّٰهُ اٰمِنِيْنَۙ مُحَلِّقِيْنَ رُءُوْسَكُمْ وَمُقَصِّرِيْنَۙ لَا تَخَافُوْنَ ۗفَعَلِمَ مَا لَمْ تَعْلَمُوْا فَجَعَلَ مِنْ دُوْنِ ذٰلِكَ فَتْحًا قَرِيْبًا",
				bacaan: "laqad shadaqa allaahu rasuulahu alrru/yaa bialhaqqi latadkhulunna almasjida alharaama in syaa-a allaahu aaminiina muhalliqiina ruuusakum wamuqashshiriina laa takhaafuuna fa'alima maa lam ta'lamuu faja'ala min duuni dzaalika fathan qariibaan",
				arti: "Sesungguhnya Allah akan membuktikan kepada Rasul-Nya, tentang kebenaran mimpinya dengan sebenarnya (yaitu) bahwa sesungguhnya kamu pasti akan memasuki Masjidil Haram, insya Allah dalam keadaan aman, dengan mencukur rambut kepala dan mengguntingnya, sedang kamu tidak merasa takut. Maka Allah mengetahui apa yang tiada kamu ketahui dan Dia memberikan sebelum itu kemenangan yang dekat."
			},
		]
	},
	{
		id: 6,
		name: "Haikal Keenam",
		surat: "Al-Jinn: 1 - 4",
		ayats: [
			{
				id: 1,
				ayat: "اُعِيْذُ نَفْسِيْ بِااللّٰهِ الْعَلِيِّ الْعَظِيْمِ، قُلْ أُوحِيَ إِلَيَّ أَنَّهُ اسْتَمَعَ نَفَرٌ مِنَ الْجِنِّ فَقَالُوا إِنَّا سَمِعْنَا قُرْآنًا عَجَبًا",
				bacaan: "U’izu nafsi billahil ‘aliyyil ‘azhim, qul uuhiya ilayya annahu istama'a nafarun mina aljinni faqaaluu innaa sami'naa qur-aanan 'ajabaan",
				arti: "Aku mohon perlindungan kepada Allah Yang Maha Tinggi lagi Maha Besar, Katakanlah (hai Muhammad): \"Telah diwahyukan kepadamu bahwasanya: telah mendengarkan sekumpulan jin (akan Al Quran), lalu mereka berkata: Sesungguhnya kami telah mendengarkan Al Quran yang menakjubkan,"
			},
			{
				id: 2,
				ayat: "يَهْدِي إِلَى الرُّشْدِ فَآمَنَّا بِهِ ۖ وَلَنْ نُشْرِكَ بِرَبِّنَا أَحَدًا",
				bacaan: "yahdii ilaa alrrusydi faaamannaa bihi walan nusyrika birabbinaa ahadaan",
				arti: "(yang) memberi petunjuk kapada jalan yang benar, lalu kami beriman kepadanya. Dan kami sekali-kali tidak akan mempersekutukan seseorangpun dengan Tuhan kami,"
			},
			{
				id: 3,
				ayat: "وَأَنَّهُ تَعَالَىٰ جَدُّ رَبِّنَا مَا اتَّخَذَ صَاحِبَةً وَلَا وَلَدًا",
				bacaan: "dan bahwasanya Maha Tinggi kebesaran Tuhan kami, Dia tidak beristeri dan tidak (pula) beranak.",
				arti: ""
			},
			{
				id: 4,
				ayat: "وَأَنَّهُ كَانَ يَقُولُ سَفِيهُنَا عَلَى اللَّهِ شَطَطًا",
				bacaan: "wa-annahu kaana yaquulu safiihunaa 'alaa allaahi syathathaan",
				arti: "Dan bahwasanya: orang yang kurang akal daripada kami selalu mengatakan (perkataan) yang melampaui batas terhadap Allah"
			},
		]
	},
	{
		id: 7,
		name: "Haikal Ketujuh",
		surat: "Al-Qalam: 51 - 52",
		ayats: [
			{
				id: 51,
				ayat: "اُعِيْذُ نَفْسِيْ بِااللّٰهِ الْعَلِيِّ الْعَظِيْمِ، وَإِنْ يَكَادُ الَّذِينَ كَفَرُوا لَيُزْلِقُونَكَ بِأَبْصَارِهِمْ لَمَّا سَمِعُوا الذِّكْرَ وَيَقُولُونَ إِنَّهُ لَمَجْنُونٌ",
				bacaan: "U’izu nafsi billahil ‘aliyyil ‘azhim, wa-in yakaadu alladziina kafaruu layuzliquunaka bi-abshaarihim lammaa sami'uu aldzdzikra wayaquuluuna innahu lamajnuunun",
				arti: "Aku mohon perlindungan kepada Allah Yang Maha Tinggi lagi Maha Besar, Dan sesungguhnya orang-orang kafir itu benar-benar hampir menggelincirkan kamu dengan pandangan mereka, tatkala mereka mendengar Al Quran dan mereka berkata: \"Sesungguhnya ia (Muhammad) benar-benar orang yang gila\""
			},
			{
				id: 52,
				ayat: "وَمَا هُوَ إِلَّا ذِكْرٌ لِلْعَالَمِينَ",
				bacaan: "wamaa huwa illaa dzikrun lil'aalamiina",
				arti: "Dan Al Quran itu tidak lain hanyalah peringatan bagi seluruh umat."
			}
		]
	}
];

export const Haikal = () => {
	return {
		id: 25,
		title: "Hayfat dan Haikal",
		phar: [],
		ayats: haikalAyats
	}
}