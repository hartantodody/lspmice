import type { CSSProperties } from "react";

type Metric = {
  value: string;
  label: string;
  detail: string;
};

type MetricCardProps = {
  metric: Metric;
  delay: string;
};

export function MetricCard({ metric, delay }: MetricCardProps) {
  return (
    <article
      data-reveal
      style={{ "--reveal-delay": delay } as CSSProperties}
      className="rounded-[28px] border border-[var(--border)] bg-white/86 p-6 shadow-[0_18px_56px_rgba(18,22,52,0.08)] backdrop-blur-sm"
    >
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--text-muted)]">
        {metric.label}
      </p>
      <p className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-[var(--brand-primary-dark)] sm:text-4xl">
        {metric.value}
      </p>
      <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
        {metric.detail}
      </p>
    </article>
  );
}
