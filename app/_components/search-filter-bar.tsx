"use client";

import { startTransition } from "react";

type FilterOption = {
  label: string;
  value: string;
};

type FilterField = {
  label: string;
  value: string;
  options: FilterOption[];
  onChange: (value: string) => void;
};

type SearchFilterBarProps = {
  query?: string;
  onQueryChange?: (value: string) => void;
  searchPlaceholder?: string;
  filters?: FilterField[];
  resultsLabel?: string;
};

export function SearchFilterBar({
  query,
  onQueryChange,
  searchPlaceholder = "Cari data...",
  filters = [],
  resultsLabel,
}: SearchFilterBarProps) {
  const hasSearch = query !== undefined && onQueryChange !== undefined;

  return (
    <div className="rounded-[28px] border border-[var(--border)] bg-white p-4 shadow-[0_18px_56px_rgba(15,23,42,0.06)] sm:p-5">
      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns:
            hasSearch || filters.length > 1 ? "repeat(auto-fit, minmax(200px, 1fr))" : undefined,
        }}
      >
        {hasSearch ? (
          <label className="grid gap-2 text-sm font-medium text-[var(--text-primary)]">
            <span>Cari</span>
            <input
              type="search"
              value={query}
              onChange={(event) => {
                startTransition(() => {
                  onQueryChange(event.target.value);
                });
              }}
              placeholder={searchPlaceholder}
              className="h-12 rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)] px-4 text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-muted)] focus:border-[var(--brand-primary)]"
            />
          </label>
        ) : null}

        {filters.map((filter) => (
          <label
            key={filter.label}
            className="grid gap-2 text-sm font-medium text-[var(--text-primary)]"
          >
            <span>{filter.label}</span>
            <select
              value={filter.value}
              onChange={(event) => {
                startTransition(() => {
                  filter.onChange(event.target.value);
                });
              }}
              className="h-12 rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)] px-4 text-sm text-[var(--text-primary)] outline-none transition-colors focus:border-[var(--brand-primary)]"
            >
              {filter.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        ))}
      </div>

      {resultsLabel ? (
        <p className="mt-3 text-sm text-[var(--text-secondary)]">{resultsLabel}</p>
      ) : null}
    </div>
  );
}
