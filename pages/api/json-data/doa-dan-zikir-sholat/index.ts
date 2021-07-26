import { iDoa } from "../ayat-interface";
import doaSetelahTahajud from './doa-setelah-tahajud'
import { zikirSetelahSholatWitir } from './zikir-setelah-witir'
import { doaSetelahSholatTarawih } from './doa-setelah-tarawih'
import doaSetelahShalatDuha from "./do-setelah-shalat-duha";
import doaSetelahShalatIstikarah from "./do-setelah-shalat-istikarah";
import { doaSetelahSholatHajat } from './do-setelah-shalat-hajat'

export default function doaDanZikir(): iDoa {

  return {
    id: 36,
    title: "Doa dan Zikir Sholat Tatowwu",
    phar: [""],
    contents: [
      {
        id: 1,
        subTitle: "Doa setelah Shalat Tahajjud",
        ayats: doaSetelahTahajud()
      },
      {
        id: 2,
        subTitle: "Zikir Setelah Sholat Witir",
        ayats: zikirSetelahSholatWitir()
      },
      {
        id: 3,
        subTitle: "Doa Setelah Sholat Tarawih",
        sources: "https://islam.nu.or.id/post/read/68880/doa-kamilin-dibaca-sesudah-shalat-tarawih",
        ayats: doaSetelahSholatTarawih()
      },
      {
        id: 4,
        subTitle: "Doa Setelah Sholat Duha",
        sources: "https://islam.nu.or.id/post/read/70828/ini-doa-lengkap-shalat-dhuha",
        ayats: doaSetelahShalatDuha()
      },
      {
        id: 5,
        subTitle: "Doa Setelah Sholat Istikarah",
        sources: "https://www.doaharianislami.com/2017/07/doa-setelah-sholat-istikharah-lengkap.html",
        ayats: doaSetelahShalatIstikarah()
      },
      {
        id: 6,
        subTitle: "Doa Setelah Sholat Hajat",
        sources: "",
        ayats: doaSetelahSholatHajat()
      }
    ]
  }
}
