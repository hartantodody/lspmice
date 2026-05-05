import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/app/_components/breadcrumbs";
import { CTAButton } from "@/app/_components/cta-button";
import { PageHeader } from "@/app/_components/page-header";
import { SiteShell } from "@/app/_components/site-shell";
import {
  certificationSchemes,
  getCertificationSchemeBySlug,
} from "@/src/data/certification-schemes";

type SchemeDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return certificationSchemes.map((scheme) => ({ slug: scheme.slug }));
}

export async function generateMetadata({
  params,
}: SchemeDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const scheme = getCertificationSchemeBySlug(slug);

  if (!scheme) {
    return {
      title: "Skema Tidak Ditemukan",
    };
  }

  return {
    title: scheme.title,
    description: scheme.shortDescription,
  };
}

export default async function SchemeDetailPage({
  params,
}: SchemeDetailPageProps) {
  const { slug } = await params;
  const scheme = getCertificationSchemeBySlug(slug);

  if (!scheme) {
    notFound();
  }

  return (
    <SiteShell>
      <main className="space-y-8 pb-16 pt-6 sm:space-y-10 sm:pb-20">
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1320px] space-y-5">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Skema Sertifikasi", href: "/skema-sertifikasi" },
                { label: scheme.title },
              ]}
            />
            <PageHeader
              eyebrow="Detail Skema"
              title={scheme.title}
              description={scheme.description}
              actions={
                <>
                  <CTAButton href="/daftar-online">Daftar Online</CTAButton>
                  <CTAButton href="/kontak" variant="secondary">
                    Hubungi Kami
                  </CTAButton>
                </>
              }
              meta={[
                { label: "Kategori", value: scheme.category },
                { label: "Durasi", value: scheme.duration },
              ]}
            />
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-[1320px] gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <aside className="rounded-[30px] border border-[var(--border)] bg-[var(--brand-primary-soft)] p-6 shadow-[0_20px_64px_rgba(15,23,42,0.05)] sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--brand-accent-dark)]">
                Ringkasan Skema
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--brand-primary-dark)]">
                Sasaran peserta
              </h2>
              <ul className="mt-6 space-y-3 text-sm leading-8 text-[var(--text-secondary)]">
                {scheme.targetParticipants.map((participant) => (
                  <li key={participant} className="rounded-2xl bg-white px-4 py-3">
                    {participant}
                  </li>
                ))}
              </ul>
            </aside>

            <div className="grid gap-6">
              <article className="rounded-[30px] border border-[var(--border)] bg-white p-6 shadow-[0_20px_64px_rgba(15,23,42,0.06)] sm:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--brand-accent-dark)]">
                  Ruang Lingkup Kompetensi
                </p>
                <ul className="mt-6 grid gap-3 text-sm leading-8 text-[var(--text-secondary)]">
                  {scheme.competencyScope.map((item) => (
                    <li key={item} className="rounded-2xl bg-[var(--surface-muted)] px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>

              <div className="grid gap-6 lg:grid-cols-2">
                <article className="rounded-[30px] border border-[var(--border)] bg-white p-6 shadow-[0_20px_64px_rgba(15,23,42,0.06)] sm:p-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--brand-accent-dark)]">
                    Persyaratan
                  </p>
                  <ul className="mt-6 space-y-3 text-sm leading-8 text-[var(--text-secondary)]">
                    {scheme.requirements.map((item) => (
                      <li key={item} className="rounded-2xl bg-[var(--surface-muted)] px-4 py-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="rounded-[30px] border border-[var(--border)] bg-white p-6 shadow-[0_20px_64px_rgba(15,23,42,0.06)] sm:p-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--brand-accent-dark)]">
                    Dokumen yang Dibutuhkan
                  </p>
                  <ul className="mt-6 space-y-3 text-sm leading-8 text-[var(--text-secondary)]">
                    {scheme.requiredDocuments.map((item) => (
                      <li key={item} className="rounded-2xl bg-[var(--surface-muted)] px-4 py-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>

              <article className="rounded-[30px] border border-[var(--border)] bg-white p-6 shadow-[0_20px_64px_rgba(15,23,42,0.06)] sm:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--brand-accent-dark)]">
                  Proses Asesmen
                </p>
                <ol className="mt-6 grid gap-3 text-sm leading-8 text-[var(--text-secondary)]">
                  {scheme.assessmentProcess.map((item, index) => (
                    <li key={item} className="rounded-2xl bg-[var(--surface-muted)] px-4 py-3">
                      {index + 1}. {item}
                    </li>
                  ))}
                </ol>
              </article>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1320px] rounded-[32px] border border-[var(--brand-primary)]/14 bg-[linear-gradient(135deg,#0B2545_0%,#123E75_100%)] p-6 text-white shadow-[0_24px_72px_rgba(11,37,69,0.2)] sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#f8c6cb]">
              CTA Lanjutan
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
              Siap melanjutkan ke pendaftaran?
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-white/78">
              Halaman detail ini masih memakai konten contoh, tetapi struktur final untuk ringkasan
              skema, persyaratan, dokumen, dan proses asesmen sudah siap direview bersama klien.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <CTAButton href="/daftar-online">Daftar Online</CTAButton>
              <CTAButton href="/kontak" variant="secondary">
                Hubungi LSP MICE
              </CTAButton>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
