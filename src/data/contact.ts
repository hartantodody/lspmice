import type { ContactActionCard, ContactInfo } from "@/src/data/types";

const whatsappNumberIntl = "628568444133";

export const contactInfo: ContactInfo = {
  officeName: "LSP MICE",
  address: "Gedung Permata Cikini Lt. 2, Jakarta Pusat",
  phone: "(021) 3901216",
  whatsapp: "0856 8444133",
  contactPerson: "Prima",
  email: "info@lspmice.org",
  officeHours: "Senin - Jumat, 9.00 - 17.00",
  // TODO: Ganti placeholder ini dengan embed atau titik peta resmi setelah alamat final diverifikasi.
  mapPlaceholder:
    "Peta lokasi kantor akan ditampilkan setelah alamat final dan titik lokasi resmi dikonfirmasi.",
};

export const registrationWhatsappHref = `https://wa.me/${whatsappNumberIntl}?text=Halo%2C%20saya%20ingin%20mendaftar%20sertifikasi%20LSP%20MICE.`;

export const inquiryWhatsappHref = `https://wa.me/${whatsappNumberIntl}?text=Halo%2C%20saya%20ingin%20bertanya%20mengenai%20sertifikasi%20LSP%20MICE.`;

export const contactActionCards: ContactActionCard[] = [
  {
    title: "Tanya Sertifikasi",
    description:
      "Hubungi tim layanan via WhatsApp untuk menanyakan skema sertifikasi, jadwal pelaksanaan, atau persyaratan awal peserta.",
    href: inquiryWhatsappHref,
    label: "Chat WhatsApp",
  },
  {
    title: "Daftar Online",
    description:
      "Kirim pendaftaran melalui email resmi LSP MICE untuk memperoleh arahan awal mengenai proses sertifikasi kompetensi.",
    href: `mailto:info@lspmice.org?subject=${encodeURIComponent("Pendaftaran Sertifikasi LSP MICE")}`,
    label: "Kirim Email",
  },
  {
    title: "Lihat Skema Sertifikasi",
    description:
      "Pelajari pilihan skema sertifikasi dan detail kompetensinya sebelum melanjutkan pendaftaran.",
    href: "/skema-sertifikasi",
    label: "Lihat Skema",
  },
];
