import Link from "next/link";

import type { BreadcrumbItem } from "@/src/data/types";

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="overflow-x-auto">
      <ol className="flex min-w-max items-center gap-2 text-sm text-[var(--text-secondary)]">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 ? <span className="text-[var(--brand-accent-dark)]">/</span> : null}
            {item.href ? (
              <Link
                href={item.href}
                className="transition-colors hover:text-[var(--brand-primary)]"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-[var(--text-primary)]">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
