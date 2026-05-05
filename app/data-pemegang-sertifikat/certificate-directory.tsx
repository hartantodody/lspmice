"use client";

import { useDeferredValue, useState } from "react";

import { CertificateDataTable } from "@/app/_components/certificate-data-table";
import { SearchFilterBar } from "@/app/_components/search-filter-bar";
import type { CertificateHolder } from "@/src/data/types";

type CertificateDirectoryProps = {
  holders: CertificateHolder[];
  years: readonly number[];
  schemes: string[];
};

export function CertificateDirectory({
  holders,
  years,
  schemes,
}: CertificateDirectoryProps) {
  const [query, setQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedScheme, setSelectedScheme] = useState("all");
  const deferredQuery = useDeferredValue(query);
  const normalizedQuery = deferredQuery.trim().toLowerCase();

  const filteredRows = [...holders]
    .filter((holder) => {
      const matchesQuery =
        !normalizedQuery ||
        holder.name.toLowerCase().includes(normalizedQuery) ||
        holder.registrationNumber.toLowerCase().includes(normalizedQuery);

      const matchesYear =
        selectedYear === "all" || String(holder.year) === selectedYear;

      const matchesScheme =
        selectedScheme === "all" || holder.scheme === selectedScheme;

      return matchesQuery && matchesYear && matchesScheme;
    })
    .sort((left, right) => {
      if (left.year !== right.year) {
        return right.year - left.year;
      }

      return right.certificateDate.localeCompare(left.certificateDate);
    });

  return (
    <div className="space-y-6">
      <SearchFilterBar
        query={query}
        onQueryChange={setQuery}
        searchPlaceholder="Cari nama atau nomor registrasi..."
        filters={[
          {
            label: "Tahun",
            value: selectedYear,
            onChange: setSelectedYear,
            options: [
              { label: "Semua tahun", value: "all" },
              ...years.map((year) => ({ label: String(year), value: String(year) })),
            ],
          },
          {
            label: "Skema",
            value: selectedScheme,
            onChange: setSelectedScheme,
            options: [
              { label: "Semua skema", value: "all" },
              ...schemes.map((scheme) => ({ label: scheme, value: scheme })),
            ],
          },
        ]}
        resultsLabel={`${filteredRows.length} data contoh ditemukan.`}
      />

      <CertificateDataTable rows={filteredRows} />
    </div>
  );
}
