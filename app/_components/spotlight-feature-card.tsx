"use client";

import type { CSSProperties } from "react";

type SpotlightFeatureCardProps = {
  title: string;
  description: string;
  delay: string;
};

export function SpotlightFeatureCard({
  title,
  description,
  delay,
}: SpotlightFeatureCardProps) {
  return (
    <article
      data-reveal
      style={{ "--reveal-delay": delay } as CSSProperties}
      className="relative overflow-hidden rounded-[24px] border border-white/75 bg-white/72 p-7 shadow-[0_14px_44px_rgba(18,22,52,0.06)] backdrop-blur-md sm:p-8"
    >
      <div className="relative z-10 flex flex-col gap-4 sm:grid sm:grid-cols-[12.5rem_minmax(0,1fr)] sm:items-start sm:gap-6">
        <h3 className="max-w-[12ch] text-lg font-semibold tracking-[-0.03em] text-[var(--brand-primary-dark)] sm:max-w-none">
          {title}
        </h3>
        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          {description}
        </p>
      </div>
    </article>
  );
}
