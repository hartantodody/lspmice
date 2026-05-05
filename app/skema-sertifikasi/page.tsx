import type { Metadata } from "next";

import { Breadcrumbs } from "@/app/_components/breadcrumbs";
import { CTAButton } from "@/app/_components/cta-button";
import { PageHeader } from "@/app/_components/page-header";
import { SiteShell } from "@/app/_components/site-shell";
import { SchemeDirectory } from "@/app/skema-sertifikasi/scheme-directory";
import { certificationSchemes } from "@/src/data/certification-schemes";

export const metadata: Metadata = {
  title: "Skema Sertifikasi",
  description:
    "Daftar skema sertifikasi LSP MICE dengan data dummy terstruktur untuk kebutuhan review desain dan konten.",
};

export default function SkemaSertifikasiPage() {
  return (
    <SiteShell>
      <main className="space-y-8 pb-16 pt-6 sm:space-y-10 sm:pb-20">
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1320px] space-y-5">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Skema Sertifikasi" },
              ]}
            />
            <PageHeader
              eyebrow="Skema Sertifikasi"
              title="Skema Sertifikasi Prioritas Bidang MICE"
              description="LSP MICE menyediakan berbagai skema sertifikasi yang dirancang secara khusus untuk memenuhi kebutuhan industri Meeting, Incentive, Convention, and Exhibition (MICE). Pilih skema yang sesuai dengan bidang keahlian Anda untuk mendapatkan pengakuan kompetensi resmi."
              actions={
                <>
                  <CTAButton href="/daftar-online">Daftar Online</CTAButton>
                  <CTAButton href="/kontak" variant="secondary">
                    Hubungi Kami
                  </CTAButton>
                </>
              }
              meta={[
                { label: "Standar Uji", value: "Berbasis Kompetensi Kerja" },
                { label: "Lisensi", value: "Diakui secara Nasional" },
              ]}
            />
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1320px]">
            <SchemeDirectory schemes={certificationSchemes} />
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
