import type { Metadata } from "next";

import { Breadcrumbs } from "@/app/_components/breadcrumbs";
import { PageHeader } from "@/app/_components/page-header";
import { SiteShell } from "@/app/_components/site-shell";
import { CertificateDirectory } from "@/app/data-pemegang-sertifikat/certificate-directory";
import { withDerivedStatus } from "@/app/_lib/certificate-status";
import {
  certificateHolders,
  certificateSchemeOptions,
  certificateYears,
} from "@/src/data/certificate-holders";

export const metadata: Metadata = {
  title: "Data Pemegang Sertifikat",
  description:
    "Halaman verifikasi data pemegang sertifikat dengan dummy data tahun 2023 sampai 2026.",
};

export default function DataPemegangSertifikatPage() {
  return (
    <SiteShell>
      <main className="space-y-8 pb-16 pt-6 sm:space-y-10 sm:pb-20">
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1320px] space-y-5">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Data Pemegang Sertifikat" },
              ]}
            />
            <PageHeader
              eyebrow="Data Pemegang Sertifikat"
              title="Data Pemegang Sertifikat Kompetensi"
              description="Halaman ini menampilkan data pemegang sertifikat kompetensi yang diterbitkan oleh LSP MICE beserta status dan masa berlakunya. Masukkan nomor registrasi atau nama untuk mencari data pemegang sertifikat."
              meta={[
                { label: "Pembaruan Terakhir", value: "Real-time Update" },
                { label: "Validasi", value: "Otoritas LSP MICE" },
              ]}
            />
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1320px] rounded-[28px] border border-[var(--brand-accent)]/14 bg-[var(--brand-accent-soft)] px-5 py-4 text-sm leading-7 text-[var(--text-secondary)] shadow-[0_12px_36px_rgba(15,23,42,0.04)] sm:px-6">
            Data yang ditampilkan di bawah ini merupakan data resmi pemegang sertifikat kompetensi bidang MICE yang diterbitkan oleh LSP MICE.
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1320px]">
            <CertificateDirectory
              holders={withDerivedStatus(certificateHolders)}
              years={certificateYears}
              schemes={certificateSchemeOptions}
            />
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
