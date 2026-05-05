import type { CSSProperties } from "react";

type NewsPreview = {
  title: string;
  excerpt: string;
  date: string;
  category: string;
};

type NewsCardProps = {
  item: NewsPreview;
  delay: string;
};

export function NewsCard({ item, delay }: NewsCardProps) {
  return (
    <article
      data-reveal
      style={{ "--reveal-delay": delay } as CSSProperties}
      className="rounded-[30px] border border-[var(--border)] bg-white/86 p-6 shadow-[0_20px_56px_rgba(18,22,52,0.08)]"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full border border-[var(--brand-accent)]/30 bg-[var(--brand-accent-soft)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-accent-dark)]">
          {item.category}
        </span>
        <span className="text-sm text-[var(--text-muted)]">{item.date}</span>
      </div>

      <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-[var(--brand-primary-dark)]">
        {item.title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
        {item.excerpt}
      </p>
    </article>
  );
}
