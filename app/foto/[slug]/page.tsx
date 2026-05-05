import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/app/_components/breadcrumbs";
import { CTAButton } from "@/app/_components/cta-button";
import { EmptyState } from "@/app/_components/empty-state";
import { PageHeader } from "@/app/_components/page-header";
import { SiteShell } from "@/app/_components/site-shell";
import { formatDate } from "@/app/_lib/format-date";
import { galleryAlbums, getGalleryAlbumBySlug } from "@/src/data/gallery";

type GalleryDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return galleryAlbums.map((album) => ({ slug: album.slug }));
}

export async function generateMetadata({
  params,
}: GalleryDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const album = getGalleryAlbumBySlug(slug);

  if (!album) {
    return { title: "Album Tidak Ditemukan" };
  }

  return {
    title: album.title,
    description: album.caption,
  };
}

export default async function GalleryDetailPage({
  params,
}: GalleryDetailPageProps) {
  const { slug } = await params;
  const album = getGalleryAlbumBySlug(slug);

  if (!album) {
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
                { label: "Foto", href: "/foto" },
                { label: album.title },
              ]}
            />
            <PageHeader
              eyebrow="Detail Album"
              title={album.title}
              description={album.caption}
              actions={
                <>
                  <CTAButton href="/foto" variant="secondary">
                    Kembali ke Foto
                  </CTAButton>
                  <CTAButton href="/kontak">Hubungi Kami</CTAButton>
                </>
              }
              meta={[
                { label: "Tanggal Kegiatan", value: formatDate(album.eventDate) },
                { label: "Lokasi", value: album.location },
              ]}
            />
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1320px]">
            {album.images.length ? (
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {album.images.map((image) => (
                  <figure
                    key={`${album.slug}-${image.src}-${image.caption}`}
                    className="overflow-hidden rounded-[28px] border border-[var(--border)] bg-white shadow-[0_20px_64px_rgba(15,23,42,0.06)]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="p-5 text-sm leading-7 text-[var(--text-secondary)]">
                      {image.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            ) : (
              <EmptyState
                title="Album belum memiliki foto"
                message="Data album sudah dibuat, tetapi gambar contoh belum ditambahkan pada tahap ini."
              />
            )}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
