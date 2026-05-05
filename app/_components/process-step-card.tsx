import type { CSSProperties } from "react";

type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

type ProcessStepCardProps = {
  item: ProcessStep;
  delay: string;
};

export function ProcessStepCard({ item, delay }: ProcessStepCardProps) {
  return (
    <article
      data-reveal
      style={{ "--reveal-delay": delay } as CSSProperties}
      className="relative rounded-[30px] border border-white/14 bg-[rgba(255,255,255,0.06)] p-6 text-white/82 shadow-[0_24px_64px_rgba(3,5,20,0.18)] backdrop-blur-sm"
    >
      <div className="absolute left-6 top-0 h-16 w-px bg-gradient-to-b from-[var(--brand-accent)] to-transparent" />
      <p className="pl-4 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand-accent)]">
        {item.step}
      </p>
      <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-white">
        {item.title}
      </h3>
      <p className="mt-4 max-w-sm text-sm leading-7 text-white/68">
        {item.description}
      </p>
    </article>
  );
}
