import type { Metadata } from "next";

import { Breadcrumbs } from "@/app/_components/breadcrumbs";
import { PageHeader } from "@/app/_components/page-header";
import { SiteShell } from "@/app/_components/site-shell";
import { GalleryDirectory } from "@/app/foto/gallery-directory";
import { galleryAlbums } from "@/src/data/gallery";

export const metadata: Metadata = {
  title: "Foto Kegiatan",
  description:
    "Galeri kegiatan LSP MICE dengan album dummy yang ditata lebih modern dan siap direview.",
};

export default function FotoPage() {
  return (
    <SiteShell>
      <main className="space-y-8 pb-16 pt-6 sm:space-y-10 sm:pb-20">
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1320px] space-y-5">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Foto" },
              ]}
            />
            <PageHeader
              eyebrow="Galeri Kegiatan"
              title="Album dokumentasi kegiatan dibuat lebih rapi dan mudah dijelajahi."
              description="Galeri ini menggunakan gambar contoh dari folder public proyek. Struktur halaman sudah siap untuk album listing, detail album, dan filter sederhana per tahun."
              meta={[
                { label: "Album", value: `${galleryAlbums.length} album dummy` },
                { label: "Sumber Aset", value: "Menggunakan aset lokal dari folder public" },
              ]}
            />
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1320px]">
            <GalleryDirectory albums={galleryAlbums} />
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
