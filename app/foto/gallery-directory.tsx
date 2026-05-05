"use client";

import { useState } from "react";

import { EmptyState } from "@/app/_components/empty-state";
import { GalleryAlbumCard } from "@/app/_components/gallery-card";
import { SearchFilterBar } from "@/app/_components/search-filter-bar";
import type { GalleryAlbum } from "@/src/data/types";

type GalleryDirectoryProps = {
  albums: GalleryAlbum[];
};

export function GalleryDirectory({ albums }: GalleryDirectoryProps) {
  const [year, setYear] = useState("all");

  const availableYears = ["all", ...new Set(albums.map((album) => String(album.year)))];
  const filteredAlbums = [...albums]
    .filter((album) => year === "all" || String(album.year) === year)
    .sort((left, right) => right.eventDate.localeCompare(left.eventDate));

  return (
    <div className="space-y-6">
      <SearchFilterBar
        filters={[
          {
            label: "Filter Tahun",
            value: year,
            onChange: setYear,
            options: availableYears.map((item) => ({
              label: item === "all" ? "Semua tahun" : item,
              value: item,
            })),
          },
        ]}
        resultsLabel={`${filteredAlbums.length} album kegiatan ditampilkan.`}
      />

      {filteredAlbums.length ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredAlbums.map((album, index) => (
            <GalleryAlbumCard
              key={album.slug}
              album={album}
              variant="listing"
              delay={`${index * 90 + 80}ms`}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          title="Album tidak ditemukan"
          message="Coba pilih tahun lain untuk melihat dokumentasi kegiatan dummy yang tersedia."
          actionHref="/kontak"
          actionLabel="Hubungi Kami"
        />
      )}
    </div>
  );
}
