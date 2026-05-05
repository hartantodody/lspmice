"use client";

import { useDeferredValue, useState } from "react";

import { EmptyState } from "@/app/_components/empty-state";
import { SearchFilterBar } from "@/app/_components/search-filter-bar";
import { CertificationSchemeCard } from "@/app/_components/scheme-card";
import type { CertificationScheme } from "@/src/data/types";

type SchemeDirectoryProps = {
  schemes: CertificationScheme[];
};

export function SchemeDirectory({ schemes }: SchemeDirectoryProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const deferredQuery = useDeferredValue(query);

  const categories = ["all", ...new Set(schemes.map((scheme) => scheme.category))];
  const normalizedQuery = deferredQuery.trim().toLowerCase();

  const filteredSchemes = schemes.filter((scheme) => {
    const matchesQuery =
      !normalizedQuery ||
      scheme.title.toLowerCase().includes(normalizedQuery) ||
      scheme.shortDescription.toLowerCase().includes(normalizedQuery) ||
      scheme.description.toLowerCase().includes(normalizedQuery);

    const matchesCategory = category === "all" || scheme.category === category;

    return matchesQuery && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <SearchFilterBar
        query={query}
        onQueryChange={setQuery}
        searchPlaceholder="Cari nama skema atau kata kunci kompetensi..."
        filters={[
          {
            label: "Kategori",
            value: category,
            onChange: setCategory,
            options: categories.map((item) => ({
              label: item === "all" ? "Semua kategori" : item,
              value: item,
            })),
          },
        ]}
        resultsLabel={`${filteredSchemes.length} skema ditampilkan.`}
      />

      {filteredSchemes.length ? (
        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {filteredSchemes.map((scheme, index) => (
            <CertificationSchemeCard
              key={scheme.slug}
              scheme={scheme}
              variant="listing"
              delay={`${index * 80 + 80}ms`}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          title="Skema yang Anda cari belum tersedia"
          message="Ubah kata kunci atau kategori filter untuk melihat data dummy skema sertifikasi yang tersedia saat ini."
          actionHref="/kontak"
          actionLabel="Hubungi Kami"
        />
      )}
    </div>
  );
}
