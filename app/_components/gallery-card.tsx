import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

import { formatDate } from "@/app/_lib/format-date";
import type { GalleryAlbum } from "@/src/data/types";

type GalleryAlbumCardProps = {
  album: GalleryAlbum;
  delay?: string;
  variant?: "preview" | "listing";
};

export function GalleryAlbumCard({
  album,
  delay = "0ms",
  variant = "listing",
}: GalleryAlbumCardProps) {
  return (
    <article
      data-reveal
      style={{ "--reveal-delay": delay } as CSSProperties}
      className="group overflow-hidden rounded-[30px] border border-[var(--border)] bg-white shadow-[0_22px_64px_rgba(15,23,42,0.08)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={album.coverImage}
          alt={album.title}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-[1600ms] ease-[var(--ease-premium)] group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(11,37,69,0.55))]" />
      </div>

      <div className="p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--brand-accent-dark)]">
          {album.year} | {album.location}
        </p>
        <h3 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-[var(--brand-primary-dark)]">
          {album.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
          {variant === "preview" ? album.caption : `Kegiatan pada ${formatDate(album.eventDate)}`}
        </p>
        <div className="mt-5">
          <Link
            href={`/foto/${album.slug}`}
            className="text-sm font-semibold text-[var(--brand-primary)] transition-colors hover:text-[var(--brand-accent-dark)]"
          >
            Lihat Album
          </Link>
        </div>
      </div>
    </article>
  );
}

export const GalleryCard = GalleryAlbumCard;
