import type { Metadata } from "next";

import { Breadcrumbs } from "@/app/_components/breadcrumbs";
import { CTAButton } from "@/app/_components/cta-button";
import { PageHeader } from "@/app/_components/page-header";
import { SectionHeader } from "@/app/_components/section-heading";
import { SiteShell } from "@/app/_components/site-shell";
import { aboutPageContent } from "@/src/data/about";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Profil LSP MICE, visi misi, tugas dan fungsi, serta legalitas kelembagaan.",
};

export default function TentangKamiPage() {
  return (
    <SiteShell>
      <main className="space-y-8 pb-16 pt-6 sm:space-y-10 sm:pb-20">
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1320px] space-y-5">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Tentang Kami" },
              ]}
            />
            <PageHeader
              eyebrow="Tentang Kami"
              title="Mengenal Lebih Dekat LSP MICE"
              description="Lembaga Sertifikasi Profesi yang berdedikasi untuk meningkatkan kualitas dan daya saing sumber daya manusia di industri Meeting, Incentive, Convention, and Exhibition (MICE)."
              actions={
                <>
                  <CTAButton href="/kontak">Hubungi Kami</CTAButton>
                  <CTAButton href="/daftar-online" variant="secondary">
                    Daftar Sertifikasi
                  </CTAButton>
                </>
              }
              meta={[
                { label: "Fokus Utama", value: "Sertifikasi Profesi Bidang MICE" },
                { label: "Dedikasi", value: "Peningkatan Kompetensi SDM" },
              ]}
            />
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-[1320px] gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="rounded-[30px] border border-[var(--border)] bg-white p-6 shadow-[0_20px_64px_rgba(15,23,42,0.06)] sm:p-8">
              <SectionHeader
                eyebrow={aboutPageContent.overviewTitle}
                title="Sekilas Tentang LSP MICE"
                description="Membangun standar kompetensi yang diakui secara nasional untuk memajukan industri pariwisata dan event."
              />
              <div className="mt-6 space-y-4 text-sm leading-8 text-[var(--text-secondary)]">
                {aboutPageContent.overviewParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>

            <article className="rounded-[30px] border border-[var(--border)] bg-[var(--brand-primary-soft)] p-6 shadow-[0_20px_64px_rgba(15,23,42,0.05)] sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--brand-accent-dark)]">
                Visi
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--brand-primary-dark)]">
                Membangun SDM Unggul
              </h2>
              <p className="mt-5 text-sm leading-8 text-[var(--text-secondary)]">
                {aboutPageContent.vision}
              </p>
            </article>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-[1320px] gap-6 lg:grid-cols-2">
            <article className="rounded-[30px] border border-[var(--border)] bg-white p-6 shadow-[0_20px_64px_rgba(15,23,42,0.06)] sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--brand-accent-dark)]">
                Visi dan Misi
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--brand-primary-dark)]">
                Komitmen Kami
              </h2>
              <ul className="mt-6 space-y-3 text-sm leading-8 text-[var(--text-secondary)]">
                {aboutPageContent.missions.map((mission) => (
                  <li key={mission} className="rounded-2xl bg-[var(--surface-muted)] px-4 py-3">
                    {mission}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-[30px] border border-[var(--border)] bg-white p-6 shadow-[0_20px_64px_rgba(15,23,42,0.06)] sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--brand-accent-dark)]">
                Tugas dan Fungsi
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--brand-primary-dark)]">
                Peran Kelembagaan
              </h2>
              <ul className="mt-6 space-y-3 text-sm leading-8 text-[var(--text-secondary)]">
                {aboutPageContent.functions.map((item) => (
                  <li key={item} className="rounded-2xl bg-[var(--surface-muted)] px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-[1320px] gap-6 lg:grid-cols-2">
            <article className="rounded-[30px] border border-[var(--border)] bg-white p-6 shadow-[0_20px_64px_rgba(15,23,42,0.06)] sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--brand-accent-dark)]">
                Landasan Kerja
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--brand-primary-dark)]">
                Standar Pelaksanaan Kerja
              </h2>
              <ul className="mt-6 space-y-3 text-sm leading-8 text-[var(--text-secondary)]">
                {aboutPageContent.workFoundations.map((item) => (
                  <li key={item} className="rounded-2xl bg-[var(--surface-muted)] px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-[30px] border border-dashed border-[var(--brand-primary)]/24 bg-[var(--brand-primary-soft)] p-6 shadow-[0_20px_64px_rgba(15,23,42,0.05)] sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--brand-accent-dark)]">
                Struktur Organisasi
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--brand-primary-dark)]">
                Struktur Kelembagaan
              </h2>
              <p className="mt-5 text-sm leading-8 text-[var(--text-secondary)]">
                {aboutPageContent.structurePlaceholder}
              </p>
            </article>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1320px] rounded-[32px] border border-[var(--brand-accent)]/14 bg-[var(--brand-accent-soft)] p-6 shadow-[0_20px_64px_rgba(15,23,42,0.05)] sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--brand-accent-dark)]">
              Legalitas dan Kredibilitas
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--brand-primary-dark)]">
              Pengakuan Formal dan Dasar Hukum
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-8 text-[var(--text-secondary)]">
              {aboutPageContent.legalNotes.map((item) => (
                <li key={item} className="rounded-2xl bg-white/78 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton href="/kontak">Hubungi LSP MICE</CTAButton>
              <CTAButton href="/skema-sertifikasi" variant="secondary">
                Lihat Skema Sertifikasi
              </CTAButton>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
