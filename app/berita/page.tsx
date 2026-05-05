import type { Metadata } from "next";
import Image from "next/image";

import { Breadcrumbs } from "@/app/_components/breadcrumbs";
import { PageHeader } from "@/app/_components/page-header";
import { SiteShell } from "@/app/_components/site-shell";
import { newsPosts } from "@/src/data/news";

export const metadata: Metadata = {
  title: "Berita",
  description:
    "Arsip berita dan informasi kegiatan LSP MICE yang disusun dalam format yang lebih rapi dan mudah dibaca.",
};

export default function BeritaPage() {
  return (
    <SiteShell>
      <main className="space-y-8 pb-16 pt-6 sm:space-y-10 sm:pb-20">
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1320px] space-y-5">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Berita" },
              ]}
            />
            <PageHeader
              eyebrow="Berita dan Informasi"
              title="Arsip berita LSP MICE"
              description="Kumpulan informasi kegiatan, pengumuman, dan program yang berkaitan dengan layanan sertifikasi profesi bidang MICE."
              meta={[
                { label: "Jumlah Arsip", value: `${newsPosts.length} berita` },
                { label: "Kategori", value: "Pengumuman, promo, dan kegiatan sertifikasi" },
              ]}
            />
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-[1320px] gap-6">
            {newsPosts.map((post) => (
              <article
                key={post.slug}
                id={post.slug}
                className="overflow-hidden rounded-[30px] border border-[var(--border)] bg-white shadow-[0_18px_56px_rgba(15,23,42,0.06)]"
              >
                <div className="grid gap-0 lg:grid-cols-[0.38fr_0.62fr]">
                  <div className="relative aspect-[4/3] lg:aspect-auto">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(min-width: 1024px) 30vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--brand-accent-dark)]">
                      {post.category}
                    </p>
                    <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[var(--brand-primary-dark)] sm:text-3xl">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm text-[var(--text-muted)]">{post.displayDate}</p>
                    <p className="mt-5 text-base leading-8 text-[var(--text-secondary)]">
                      {post.excerpt}
                    </p>
                    <div className="mt-6 space-y-3 text-sm leading-8 text-[var(--text-secondary)]">
                      {post.content.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
