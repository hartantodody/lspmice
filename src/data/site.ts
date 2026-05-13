import type {
  HeroSlide,
  HomePageContent,
  NavigationItem,
  SpotlightItem,
} from "@/src/data/types";

export const siteConfig = {
  name: "LSP MICE",
  legalName: "LSP MICE Pertemuan Perjalanan Insentif Konvensi dan Pameran",
  tagline:
    "Lembaga Sertifikasi Profesi yang mendukung peningkatan kompetensi tenaga kerja di bidang Meeting, Incentive, Convention, and Exhibition.",
  description:
    "Informasi layanan, skema sertifikasi, data pemegang sertifikat, berita, dan dokumentasi kegiatan LSP MICE.",
};

export const siteNavigation: NavigationItem[] = [
  { label: "Home", href: "/", exact: true },
  {
    label: "Tentang Kami",
    href: "/tentang-kami",
    matchPrefixes: ["/tentang-kami"],
  },
  {
    label: "Skema Sertifikasi",
    href: "/skema-sertifikasi",
    matchPrefixes: ["/skema-sertifikasi"],
  },
  {
    label: "Data Pemegang Sertifikat",
    href: "/data-pemegang-sertifikat",
    matchPrefixes: ["/data-pemegang-sertifikat"],
  },
  {
    label: "Berita",
    href: "/berita",
    matchPrefixes: ["/berita"],
  },
  { label: "Foto", href: "/foto", matchPrefixes: ["/foto"] },
  { label: "Kontak", href: "/kontak", matchPrefixes: ["/kontak"] },
];

export const homeHeroSlides: HeroSlide[] = [
  {
    image: "/dummy/hero1.jpeg",
    alt: "Dokumentasi kegiatan sertifikasi profesi bidang MICE",
    eyebrow: "PENGUATAN SDM MICE",
    title: "Pengakuan kompetensi",
    accent: "sesuai standar yang berlaku.",
    description:
      "Melalui skema sertifikasi berbasis klaster, LSP MICE mendukung peningkatan kualitas sumber daya manusia yang bekerja di bidang Meeting, Incentive, Convention, and Exhibition.",
    caption:
      "LSP MICE mendukung peningkatan kompetensi tenaga kerja melalui proses sertifikasi yang profesional, terukur, dan terpercaya.",
  },
  {
    image: "/dummy/hero2.jpeg",
    alt: "Koordinasi kegiatan layanan dan asesmen kompetensi bidang MICE",
    eyebrow: "PENGUATAN SDM MICE",
    title: "Pengakuan kompetensi",
    accent: "sesuai standar yang berlaku.",
    description:
      "Melalui skema sertifikasi berbasis klaster, LSP MICE mendukung peningkatan kualitas sumber daya manusia yang bekerja di bidang Meeting, Incentive, Convention, and Exhibition.",
    caption:
      "Skema sertifikasi disusun untuk menjawab kebutuhan kompetensi pada berbagai fungsi kerja di bidang MICE.",
  },
  {
    image: "/dummy/hero3.jpeg",
    alt: "Peserta kegiatan pembekalan kompetensi bidang MICE",
    eyebrow: "PENGUATAN SDM MICE",
    title: "Pengakuan kompetensi",
    accent: "sesuai standar yang berlaku.",
    description:
      "Melalui skema sertifikasi berbasis klaster, LSP MICE mendukung peningkatan kualitas sumber daya manusia yang bekerja di bidang Meeting, Incentive, Convention, and Exhibition.",
    caption:
      "Skema sertifikasi disusun untuk mendukung kebutuhan kompetensi pada berbagai fungsi kerja bidang MICE.",
  },
];

export const homeHighlights: SpotlightItem[] = [
  {
    title: "Dalam praktiknya",
    description:
      "Kegiatan MICE membutuhkan tenaga kerja yang mampu mengelola registrasi, komunikasi, logistik, venue, pemasaran, hingga koordinasi teknis acara secara terencana dan bertanggung jawab.",
  },
  {
    title: "Mengapa butuh sertifikasi MICE?",
    description:
      "Sertifikasi membantu memastikan tenaga kerja MICE memiliki kompetensi yang terukur dan dapat dipertanggungjawabkan. Dengan sertifikasi, pelaku industri memiliki acuan yang lebih jelas terhadap standar kemampuan kerja di bidang MICE.",
  },
  {
    title: "Apa fungsi LSP MICE?",
    description:
      "LSP MICE berperan dalam menyelenggarakan proses sertifikasi kompetensi, menyiapkan perangkat asesmen, mendukung pelaksanaan uji kompetensi, serta membantu meningkatkan standar profesional tenaga kerja di bidang MICE.",
  },
];

export const homePageContent: HomePageContent = {
  hero: {
    actions: [
      { label: "Daftar Sekarang", href: "#register-intent", variant: "primary" },
      {
        label: "Lihat Skema Sertifikasi",
        href: "/skema-sertifikasi",
        variant: "secondary",
      },
    ],
    contactLabel: "Informasi Kontak",
    hoursLabel: "Jam Layanan",
    scrollLabel: "Lihat Profil",
  },
  about: {
    eyebrow: "Apa Itu MICE?",
    title: "Apa itu MICE?",
    description:
      "Melalui skema sertifikasi berbasis kompetensi yang didukung oleh skema klaster dan okupasi, LSP MICE Pertemuan Perjalanan Insentif Konvensi dan Pameran memvalidasi keahlian SDM secara menyeluruh sesuai profil jabatan sekaligus memberikan fleksibilitas dalam penguasaan unit kompetensi spesifik di industri Meeting, Incentive, Convention, and Exhibition.",
  },
  aboutPanel: {
    eyebrow: "Landasan Kerja LSP MICE",
    title: "Pelaksanaan sertifikasi mengacu pada standar kompetensi kerja yang berlaku.",
    description:
      "Pelaksanaan sertifikasi mengacu pada standar kompetensi kerja dan ketentuan yang berlaku. Detail regulasi, nomor lisensi, dan rujukan hukum resmi perlu dikonfirmasi kembali sebelum publikasi final.",
    points: [
      "Sertifikasi dilaksanakan untuk mendukung peningkatan kompetensi tenaga kerja bidang MICE.",
      "Perangkat asesmen disiapkan sesuai skema sertifikasi dan kebutuhan uji kompetensi.",
      "Informasi resmi mengenai regulasi, lisensi, dan rujukan hukum perlu diverifikasi kembali sebelum publikasi final.",
    ],
  },
  certification: {
    eyebrow: "Skema Sertifikasi",
    title: "Skema Sertifikasi Uji Kompetensi",
    accent: "Berbasis Okupasi & Klaster",
    description:
      "Kami menyediakan skema sertifikasi berbasis okupasi dan klaster agar peserta dapat menyesuaikan uji kompetensi dengan peran jabatan saat ini atau penguasaan fungsi teknis tertentu di bidang pekerjaan masing-masing.",
    ctaLabel: "Lihat Semua Skema Sertifikasi",
  },
  news: {
    eyebrow: "Informasi dan Berita",
    title: "Informasi dan Berita",
    accent: "dari LSP MICE",
    description:
      "Ikuti informasi terbaru mengenai pendaftaran sertifikasi, kegiatan uji kompetensi, pengumuman layanan, dan agenda terkait pengembangan kompetensi di bidang MICE.",
    featuredEyebrow: "Informasi Terbaru",
    featuredNote:
      "Ikuti informasi pendaftaran sertifikasi, kegiatan uji kompetensi, pengumuman layanan, dan agenda lain melalui kanal berita LSP MICE.",
    archiveTitle: "Arsip Berita",
    ctaLabel: "Baca Berita",
  },
  contact: {
    eyebrow: "Kontak dan Pendaftaran",
    title: "Butuh informasi mengenai Sertifikasi MICE?",
    description:
      "Silakan mengajukan pertanyaan seputar sertifikasi dan layanan LSP MICE melalui nomor kantor atau contact person yang tersedia. Staf kami akan membantu menjawab pertanyaan Anda pada jam kerja.",
    actions: [
      { label: "Hubungi Kami", href: "/kontak", variant: "accent" },
      { label: "Daftar Sekarang", href: "#register-intent", variant: "primary" },
    ],
    infoCards: [
      { label: "Alamat", value: "Gedung Permata Cikini Lt. 2, Jakarta Pusat" },
      { label: "Office", value: "(021) 3901216" },
      { label: "Admin (WhatsApp)", value: "0856 8444133" },
      { label: "Office Hours", value: "Senin - Jumat, 9.00 - 17.00" },
    ],
  },
};
