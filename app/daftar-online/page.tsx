import type { Metadata } from "next";

import { Breadcrumbs } from "@/app/_components/breadcrumbs";
import { CTAButton } from "@/app/_components/cta-button";
import { PageHeader } from "@/app/_components/page-header";
import { SiteShell } from "@/app/_components/site-shell";

export const metadata: Metadata = {
  title: "Daftar Online",
  description:
    "Placeholder halaman daftar online LSP MICE tanpa integrasi backend atau CMS.",
};

export default function DaftarOnlinePage() {
  return (
    <SiteShell>
      <main className="space-y-8 pb-16 pt-6 sm:space-y-10 sm:pb-20">
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1320px] space-y-5">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Daftar Online" },
              ]}
            />
            <PageHeader
              eyebrow="Daftar Online"
              title="Halaman pendaftaran awal disiapkan tanpa backend."
              description="Tahap ini sengaja dibuat sederhana untuk menunjukkan posisi CTA pendaftaran dalam struktur situs. Formulir resmi atau integrasi sistem dapat ditambahkan setelah alur bisnis disepakati."
              actions={
                <>
                  <CTAButton href="/skema-sertifikasi">Lihat Skema Sertifikasi</CTAButton>
                  <CTAButton href="/kontak" variant="secondary">
                    Hubungi Tim Layanan
                  </CTAButton>
                </>
              }
              meta={[
                { label: "Mode", value: "Frontend review / dummy content" },
                { label: "Integrasi", value: "Belum terhubung ke backend atau CMS" },
              ]}
            />
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-[1320px] gap-6 lg:grid-cols-3">
            {[
              {
                title: "Pilih skema",
                description:
                  "Arahkan calon peserta untuk memilih skema yang paling relevan sebelum mengirimkan formulir resmi.",
              },
              {
                title: "Siapkan dokumen",
                description:
                  "Tahap placeholder ini menampilkan kebutuhan umum tanpa menyimulasikan upload atau pengiriman data palsu.",
              },
              {
                title: "Lanjutkan ke kontak",
                description:
                  "Jika link form final belum siap, pengunjung masih bisa diteruskan ke kontak atau CTA layanan lain.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-[28px] border border-[var(--border)] bg-white p-6 shadow-[0_18px_56px_rgba(15,23,42,0.06)]"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--brand-accent-dark)]">
                  Placeholder
                </p>
                <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[var(--brand-primary-dark)]">
                  {item.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
