import Link from "next/link";
import type { ReactNode } from "react";

type ContactCardProps = {
  label: string;
  value: string;
  helperText?: string;
  href?: string;
  icon?: ReactNode;
};

export function ContactCard({
  label,
  value,
  helperText,
  href,
  icon,
}: ContactCardProps) {
  const content = href ? (
    <Link
      href={href}
      className="text-base font-semibold text-[var(--brand-primary-dark)] transition-colors hover:text-[var(--brand-primary)]"
    >
      {value}
    </Link>
  ) : (
    <p className="text-base font-semibold text-[var(--brand-primary-dark)]">{value}</p>
  );

  return (
    <article className="rounded-[26px] border border-[var(--border)] bg-white p-5 shadow-[0_16px_48px_rgba(15,23,42,0.06)]">
      <div className="flex items-start gap-3">
        {icon ? (
          <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--brand-primary-soft)] text-[var(--brand-primary)]">
            {icon}
          </div>
        ) : null}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--brand-accent-dark)]">
            {label}
          </p>
          <div className="mt-3">{content}</div>
          {helperText ? (
            <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">{helperText}</p>
          ) : null}
        </div>
      </div>
    </article>
  );
}
