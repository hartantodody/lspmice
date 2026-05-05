import type { GalleryAlbum } from "@/src/data/types";

export const galleryAlbums: GalleryAlbum[] = [
  {
    title: "Uji Sertifikasi Dinas 26 Februari 2026 - Batch 1",
    slug: "uji-sertifikasi-dinas-26-februari-2026-batch-1",
    year: 2026,
    eventDate: "2026-02-26",
    location: "Jakarta",
    coverImage: "/dummy/hero1.jpeg",
    caption:
      "Dokumentasi suasana asesmen kompetensi batch 1 dengan fokus layanan peserta dan koordinasi lapangan.",
    images: [
      {
        src: "/dummy/hero1.jpeg",
        alt: "Peserta asesmen batch 1 di area registrasi kegiatan",
        caption: "Pembukaan asesmen dan pengecekan administrasi peserta batch 1.",
      },
      {
        src: "/dummy/hero2.jpeg",
        alt: "Tim asesor dan panitia berdiskusi sebelum asesmen dimulai",
        caption: "Koordinasi singkat panitia dan asesor sebelum sesi observasi.",
      },
      {
        src: "/dummy/hero3.jpeg",
        alt: "Peserta mengikuti pengarahan asesmen kompetensi MICE",
        caption: "Sesi pengarahan teknis untuk memastikan peserta memahami alur asesmen.",
      },
    ],
  },
  {
    title: "Uji Sertifikasi Dinas 5 Maret 2026 - Batch 2",
    slug: "uji-sertifikasi-dinas-5-maret-2026-batch-2",
    year: 2026,
    eventDate: "2026-03-05",
    location: "Bandung",
    coverImage: "/dummy/hero2.jpeg",
    caption:
      "Dokumentasi batch lanjutan yang menampilkan koordinasi peserta, asesmen, dan rangkaian kegiatan sertifikasi.",
    images: [
      {
        src: "/dummy/hero2.jpeg",
        alt: "Delegasi peserta batch 2 berdiskusi dengan panitia",
        caption: "Koordinasi peserta dan panitia pada sesi awal batch 2.",
      },
      {
        src: "/dummy/hero3.jpeg",
        alt: "Peserta berada di ruang pelatihan selama asesmen",
        caption: "Suasana asesmen kompetensi di ruang pelatihan utama.",
      },
      {
        src: "/dummy/hero1.jpeg",
        alt: "Dokumentasi penutupan kegiatan batch 2",
        caption: "Dokumentasi penutupan dan evaluasi singkat kegiatan batch 2.",
      },
    ],
  },
  {
    title: "Kegiatan Asesmen Kompetensi MICE 2025",
    slug: "kegiatan-asesmen-kompetensi-mice-2025",
    year: 2025,
    eventDate: "2025-08-30",
    location: "Surabaya",
    coverImage: "/dummy/hero3.jpeg",
    caption:
      "Rangkaian dokumentasi asesmen kompetensi MICE 2025 dengan fokus operasional venue dan dukungan kegiatan.",
    images: [
      {
        src: "/dummy/hero3.jpeg",
        alt: "Peserta asesmen kompetensi MICE 2025 berada di ruang kelas",
        caption: "Sesi briefing peserta sebelum asesmen dimulai.",
      },
      {
        src: "/dummy/hero1.jpeg",
        alt: "Pengecekan dokumen peserta asesmen 2025",
        caption: "Verifikasi administrasi dan bukti pendukung peserta.",
      },
      {
        src: "/dummy/hero2.jpeg",
        alt: "Tim penyelenggara memantau jalannya asesmen kompetensi",
        caption: "Pemantauan kualitas layanan dan kelancaran operasional asesmen.",
      },
    ],
  },
  {
    title: "Workshop Sertifikasi Profesi MICE 2024",
    slug: "workshop-sertifikasi-profesi-mice-2024",
    year: 2024,
    eventDate: "2024-11-15",
    location: "Yogyakarta",
    coverImage: "/dummy/hero1.jpeg",
    caption:
      "Dokumentasi workshop sertifikasi profesi MICE yang memuat kegiatan sosialisasi, diskusi, dan penguatan pemahaman peserta.",
    images: [
      {
        src: "/dummy/hero1.jpeg",
        alt: "Pembicara workshop sertifikasi profesi MICE 2024",
        caption: "Sesi pembukaan workshop sertifikasi profesi MICE 2024.",
      },
      {
        src: "/dummy/hero2.jpeg",
        alt: "Peserta workshop berdiskusi dalam kelompok kecil",
        caption: "Diskusi kelompok mengenai kesiapan kompetensi dan skema sertifikasi.",
      },
      {
        src: "/dummy/hero3.jpeg",
        alt: "Dokumentasi peserta workshop sertifikasi profesi MICE",
        caption: "Dokumentasi kegiatan penutup workshop bersama peserta dan fasilitator.",
      },
    ],
  },
];

export function getGalleryAlbumBySlug(slug: string) {
  return galleryAlbums.find((album) => album.slug === slug);
}
