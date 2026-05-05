import Link from "next/link";

type HomePriorityCard = {
  title: string;
  description: string;
  href: string;
  label: string;
  meta: string;
};

type PriorityLinkCardProps = {
  item: HomePriorityCard;
};

export function PriorityLinkCard({ item }: PriorityLinkCardProps) {
  return (
    <article className="group h-full rounded-[28px] border border-[var(--border)] bg-white p-6 shadow-[0_18px_56px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1">
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--brand-accent-dark)]">
        {item.meta}
      </p>
      <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[var(--brand-primary-dark)]">
        {item.title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">{item.description}</p>
      <div className="mt-6">
        <Link
          href={item.href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)] transition-colors hover:text-[var(--brand-accent-dark)]"
        >
          {item.label}
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--brand-accent)]/16 bg-[var(--brand-accent-soft)] text-[var(--brand-accent-dark)]">
            +
          </span>
        </Link>
      </div>
    </article>
  );
}
