import type { CertificationScheme } from "@/src/data/types";

export const certificationSchemes: CertificationScheme[] = [
  {
    title: "Certified Event Registration",
    slug: "certified-event-registration",
    category: "Operasional Event",
    shortDescription:
      "Skema untuk kompetensi pengelolaan proses registrasi peserta, pendataan, alur kedatangan, dan kebutuhan administrasi acara.",
    description:
      "Skema ini ditujukan untuk personel yang menangani proses registrasi peserta, verifikasi identitas, distribusi informasi awal, serta koordinasi alur kedatangan dalam kegiatan MICE.",
    targetParticipants: [
      "Staf registrasi acara dan tim front desk event",
      "PIC penyambutan peserta, delegasi, atau tamu undangan",
      "Tenaga kerja operasional yang ingin memvalidasi kompetensi layanan awal acara",
    ],
    competencyScope: [
      "Pengelolaan alur registrasi dan check-in peserta",
      "Validasi data peserta dan dokumen pendukung",
      "Koordinasi pelayanan informasi awal dan penanganan antrean",
      "Penerapan standar layanan peserta secara profesional",
    ],
    requirements: [
      "Memiliki pengalaman kerja atau pelatihan relevan pada fungsi registrasi event",
      "Memahami alur pelayanan peserta dan penggunaan dokumen registrasi",
      "Bersedia mengikuti tahapan asesmen sesuai jadwal LSP MICE",
    ],
    requiredDocuments: [
      "KTP atau identitas resmi",
      "CV singkat atau riwayat pengalaman kerja",
      "Pas foto terbaru",
      "Bukti pelatihan atau surat pengalaman kerja jika tersedia",
    ],
    assessmentProcess: [
      "Verifikasi administrasi dan kelengkapan dokumen",
      "Asesmen portofolio atau bukti kerja",
      "Wawancara teknis dan/atau observasi simulasi layanan registrasi",
      "Keputusan hasil sertifikasi dan tindak lanjut administratif",
    ],
    duration: "1 hari",
    isFeatured: true,
  },
  {
    title: "Certified Event Liaison Officer",
    slug: "certified-event-liaison-officer",
    category: "Layanan Delegasi",
    shortDescription:
      "Skema untuk kompetensi penghubung acara yang bertugas mendampingi, mengoordinasikan, dan memastikan kebutuhan pihak terkait berjalan dengan baik.",
    description:
      "Skema ini mengukur kompetensi koordinasi delegasi, pelayanan tamu penting, komunikasi lintas pihak, dan tindak lanjut kebutuhan operasional selama kegiatan berlangsung.",
    targetParticipants: [
      "Liaison officer untuk tamu VIP, pembicara, atau delegasi",
      "Tim protokol dan pendamping kegiatan kelembagaan",
      "Profesional yang ingin memperkuat standar komunikasi dan layanan tamu",
    ],
    competencyScope: [
      "Koordinasi kebutuhan delegasi sebelum, saat, dan setelah acara",
      "Komunikasi profesional dengan peserta prioritas dan pemangku kepentingan",
      "Pengaturan agenda singkat, mobilitas, dan informasi kegiatan",
      "Penanganan perubahan kebutuhan layanan secara cepat dan tepat",
    ],
    requirements: [
      "Memiliki pengalaman pendampingan tamu atau koordinasi acara",
      "Memahami etika layanan, komunikasi, dan pencatatan kebutuhan tamu",
      "Siap mengikuti asesmen berbasis wawancara dan observasi",
    ],
    requiredDocuments: [
      "Identitas resmi",
      "CV atau profil pengalaman kerja",
      "Portofolio kegiatan atau surat tugas pendampingan jika ada",
      "Pas foto terbaru",
    ],
    assessmentProcess: [
      "Pemeriksaan dokumen administrasi",
      "Penelaahan pengalaman kerja dan bukti tugas",
      "Wawancara kompetensi dan observasi simulasi koordinasi tamu",
      "Finalisasi hasil asesmen dan rekomendasi sertifikasi",
    ],
    duration: "1 hari",
    isFeatured: true,
  },
  {
    title: "Certified Event Venue Management",
    slug: "certified-event-venue-management",
    category: "Venue dan Operasional",
    shortDescription:
      "Skema untuk kompetensi pengelolaan venue acara, termasuk kesiapan lokasi, fasilitas, alur penggunaan ruang, dan koordinasi operasional.",
    description:
      "Skema ini ditujukan untuk personel yang memastikan venue siap dipakai, aman, fungsional, dan mendukung kelancaran operasional kegiatan MICE dari awal hingga akhir acara.",
    targetParticipants: [
      "Tim pengelola venue dan operasional gedung acara",
      "Koordinator fasilitas dan tata ruang kegiatan",
      "Personel teknis yang terlibat dalam kesiapan ruang dan layanan venue",
    ],
    competencyScope: [
      "Perencanaan kesiapan ruang acara dan fasilitas pendukung",
      "Koordinasi dengan vendor teknis, keamanan, dan kebersihan",
      "Pemantauan standar layanan dan keselamatan area kegiatan",
      "Penanganan kendala operasional venue selama event berlangsung",
    ],
    requirements: [
      "Memiliki pengalaman kerja relevan pada pengelolaan venue atau operasional acara",
      "Memahami standar dasar keselamatan, tata ruang, dan layanan fasilitas",
      "Mampu menunjukkan bukti keterlibatan pada kegiatan serupa",
    ],
    requiredDocuments: [
      "Identitas resmi",
      "CV atau daftar pengalaman kerja",
      "Dokumen pendukung proyek/venue jika tersedia",
      "Pas foto terbaru",
    ],
    assessmentProcess: [
      "Verifikasi administrasi peserta",
      "Telaah portofolio atau pengalaman kerja yang relevan",
      "Wawancara teknis dan observasi pemahaman operasional venue",
      "Penyampaian hasil asesmen dan tindak lanjut",
    ],
    duration: "1-2 hari",
    isFeatured: true,
  },
  {
    title: "Certified Event Marketing Communication",
    slug: "certified-event-marketing-communication",
    category: "Pemasaran dan Komunikasi",
    shortDescription:
      "Skema untuk kompetensi komunikasi pemasaran acara, penyusunan pesan promosi, pengelolaan kanal informasi, dan dukungan publikasi kegiatan.",
    description:
      "Skema ini mengukur kemampuan perencanaan pesan promosi, koordinasi materi komunikasi, serta evaluasi aktivitas pemasaran untuk acara atau program MICE.",
    targetParticipants: [
      "Tim promosi, publikasi, dan komunikasi pemasaran event",
      "Koordinator kampanye kegiatan, expo, atau konferensi",
      "Profesional komunikasi yang ingin menguatkan validasi kompetensi event marketing",
    ],
    competencyScope: [
      "Penyusunan pesan komunikasi dan promosi kegiatan",
      "Koordinasi materi kampanye, publikasi, dan kanal komunikasi",
      "Pemantauan konsistensi brand event dan kebutuhan stakeholder",
      "Evaluasi efektivitas komunikasi pemasaran kegiatan",
    ],
    requirements: [
      "Memiliki pengalaman kerja atau pelatihan komunikasi pemasaran",
      "Mampu menunjukkan contoh materi atau keterlibatan kampanye",
      "Siap mengikuti asesmen berbasis wawancara dan penelaahan portofolio",
    ],
    requiredDocuments: [
      "Identitas resmi",
      "CV atau profil pengalaman kerja",
      "Portofolio materi komunikasi atau promosi bila tersedia",
      "Pas foto terbaru",
    ],
    assessmentProcess: [
      "Pemeriksaan dokumen dan portofolio",
      "Wawancara kompetensi terkait strategi komunikasi",
      "Observasi atau studi kasus singkat pemasaran event",
      "Rekapitulasi hasil dan rekomendasi asesmen",
    ],
    duration: "1 hari",
    isFeatured: true,
  },
  {
    title: "Certified Event Logistic",
    slug: "certified-event-logistic",
    category: "Logistik Event",
    shortDescription:
      "Skema untuk kompetensi pengelolaan logistik event, termasuk perencanaan kebutuhan, distribusi, koordinasi perlengkapan, dan dukungan teknis acara.",
    description:
      "Skema ini difokuskan pada perencanaan kebutuhan logistik, distribusi perlengkapan, pengendalian material, dan sinkronisasi dukungan operasional selama pelaksanaan event.",
    targetParticipants: [
      "Koordinator logistik dan perlengkapan event",
      "Tim gudang, distribusi, dan operasional pendukung acara",
      "Personel yang menangani mobilisasi material kegiatan",
    ],
    competencyScope: [
      "Perencanaan kebutuhan logistik berdasarkan rundown kegiatan",
      "Pengendalian stok, distribusi, dan penerimaan material",
      "Koordinasi vendor atau tim pendukung logistik",
      "Pencatatan dan evaluasi penggunaan logistik kegiatan",
    ],
    requirements: [
      "Memiliki pengalaman atau pelatihan relevan dalam logistik event",
      "Memahami alur distribusi dan pencatatan material kerja",
      "Siap mengikuti asesmen administrasi dan teknis",
    ],
    requiredDocuments: [
      "Identitas resmi",
      "CV atau riwayat kerja",
      "Surat pengalaman kerja atau portofolio proyek bila ada",
      "Pas foto terbaru",
    ],
    assessmentProcess: [
      "Verifikasi administrasi peserta",
      "Review pengalaman kerja atau portofolio logistik",
      "Wawancara teknis serta observasi pemahaman distribusi material",
      "Penyusunan hasil asesmen",
    ],
    duration: "1 hari",
    isFeatured: true,
  },
  {
    title: "Certified Stand Building",
    slug: "certified-stand-building",
    category: "Exhibition Support",
    shortDescription:
      "Skema untuk kompetensi perencanaan dan pelaksanaan pembangunan stand pameran sesuai kebutuhan desain, teknis, dan standar penyelenggaraan.",
    description:
      "Skema ini menilai kemampuan dalam menyiapkan stand pameran, mengoordinasikan pekerjaan vendor, memastikan spesifikasi teknis terpenuhi, dan menjaga kesiapan area pameran.",
    targetParticipants: [
      "Tim stand contractor, vendor booth, dan pengawas lapangan",
      "Personel pameran yang menangani instalasi dan pembongkaran stand",
      "Koordinator teknis area expo atau exhibition",
    ],
    competencyScope: [
      "Persiapan spesifikasi dan kebutuhan pembangunan stand",
      "Koordinasi vendor, material, dan jadwal pekerjaan",
      "Pengawasan kepatuhan teknis, keselamatan, dan kerapian area",
      "Final check kesiapan stand sebelum kegiatan dimulai",
    ],
    requirements: [
      "Memiliki pengalaman kerja relevan pada proyek stand atau pameran",
      "Memahami alur kerja vendor dan persiapan area display",
      "Bersedia mengikuti asesmen lapangan atau simulasi",
    ],
    requiredDocuments: [
      "Identitas resmi",
      "CV atau profil kerja",
      "Dokumentasi proyek atau surat pengalaman kerja",
      "Pas foto terbaru",
    ],
    assessmentProcess: [
      "Verifikasi dokumen administrasi",
      "Telaah portofolio atau pengalaman teknis",
      "Wawancara dan observasi kompetensi pembangunan stand",
      "Penetapan rekomendasi hasil asesmen",
    ],
    duration: "1-2 hari",
    isFeatured: true,
  },
  {
    title: "Certified Destination Bidding",
    slug: "certified-destination-bidding",
    category: "Strategi Bisnis MICE",
    shortDescription:
      "Skema untuk kompetensi penyusunan dan pengelolaan proses bidding destinasi dalam kegiatan MICE, termasuk penyiapan proposal dan koordinasi pemangku kepentingan.",
    description:
      "Skema ini ditujukan bagi profesional yang terlibat dalam pengembangan proposal bidding, penyelarasan data destinasi, dan presentasi penawaran kegiatan MICE kepada calon penyelenggara.",
    targetParticipants: [
      "Tim convention bureau, sales destination, atau business development",
      "Koordinator proposal bidding kegiatan MICE",
      "Profesional yang menangani kolaborasi promosi destinasi dan event",
    ],
    competencyScope: [
      "Pengumpulan data destinasi dan nilai jual kegiatan",
      "Koordinasi stakeholder untuk proposal bidding",
      "Penyusunan narasi penawaran dan presentasi destinasi",
      "Evaluasi kesiapan destinasi untuk kebutuhan event berskala lebih besar",
    ],
    requirements: [
      "Memiliki pengalaman kerja atau keterlibatan pada proposal/bidding kegiatan",
      "Memahami elemen promosi destinasi dan kebutuhan event organizer",
      "Siap mengikuti asesmen portofolio dan presentasi singkat",
    ],
    requiredDocuments: [
      "Identitas resmi",
      "CV atau riwayat pengalaman kerja",
      "Contoh proposal atau bukti keterlibatan bidding jika tersedia",
      "Pas foto terbaru",
    ],
    assessmentProcess: [
      "Review dokumen administrasi dan portofolio",
      "Wawancara kompetensi terkait strategi bidding",
      "Presentasi singkat atau studi kasus penawaran destinasi",
      "Penetapan hasil dan tindak lanjut sertifikasi",
    ],
    duration: "1 hari",
    isFeatured: true,
  },
];

export const featuredCertificationSchemes = certificationSchemes.filter(
  (scheme) => scheme.isFeatured
);

export function getCertificationSchemeBySlug(slug: string) {
  return certificationSchemes.find((scheme) => scheme.slug === slug);
}
