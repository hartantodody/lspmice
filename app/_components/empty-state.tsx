import { CTAButton } from "@/app/_components/cta-button";

type EmptyStateProps = {
  title: string;
  message: string;
  actionHref?: string;
  actionLabel?: string;
};

export function EmptyState({
  title,
  message,
  actionHref,
  actionLabel,
}: EmptyStateProps) {
  return (
    <div className="rounded-[30px] border border-dashed border-[var(--border)] bg-white px-6 py-10 text-center shadow-[0_18px_48px_rgba(15,23,42,0.05)]">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand-accent-dark)]">
        Tidak ada data
      </p>
      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--brand-primary-dark)]">
        {title}
      </h3>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--text-secondary)]">
        {message}
      </p>
      {actionHref && actionLabel ? (
        <div className="mt-6">
          <CTAButton href={actionHref} variant="secondary">
            {actionLabel}
          </CTAButton>
        </div>
      ) : null}
    </div>
  );
}
