import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import type { CSSProperties } from "react";

import { CTAButton } from "@/app/_components/cta-button";
import type { CertificationScheme } from "@/src/data/types";

type CertificationSchemeCardProps = {
  scheme: CertificationScheme;
  delay?: string;
  variant?: "featured" | "listing";
};

export function CertificationSchemeCard({
  scheme,
  delay = "0ms",
  variant = "listing",
}: CertificationSchemeCardProps) {
  return (
    <Link
      href={`/skema-sertifikasi/${scheme.slug}`}
      data-reveal
      style={{ "--reveal-delay": delay } as CSSProperties}
      className="group relative flex h-full flex-col rounded-[30px] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(234,241,251,0.6))] p-6 shadow-[0_22px_56px_rgba(15,23,42,0.08)] transition-all duration-500 ease-[var(--ease-premium)] hover:-translate-y-2 hover:border-[var(--brand-primary)]/40 hover:shadow-[0_32px_80px_rgba(0,59,92,0.14)]"
    >
      <div className="absolute inset-0 rounded-[30px] border-2 border-transparent transition-colors duration-500 ease-[var(--ease-premium)] group-hover:border-[var(--brand-primary)]/20 pointer-events-none" />

      <div className="inline-flex w-fit rounded-full border border-[var(--brand-accent)]/16 bg-[var(--brand-accent-soft)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-accent-dark)] relative z-10">
        {scheme.category}
      </div>

      <h3 className="relative z-10 mt-5 text-2xl font-semibold tracking-[-0.04em] text-[var(--brand-primary-dark)] transition-colors group-hover:text-[var(--brand-primary)]">
        {scheme.title}
      </h3>

      <p className="relative z-10 mt-4 text-sm leading-7 text-[var(--text-secondary)]">
        {scheme.shortDescription}
      </p>

      <div className="relative z-10 mt-6 grid gap-3 border-t border-[var(--border)] pt-4 text-sm text-[var(--text-secondary)] sm:grid-cols-2">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)]">
            Durasi
          </p>
          <p className="mt-1 leading-7">{scheme.duration}</p>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)]">
            Target
          </p>
          <p className="mt-1 leading-7">{scheme.targetParticipants[0]}</p>
        </div>
      </div>

      <div className="relative z-10 mt-auto flex items-center justify-between pt-6">
        <span className="text-sm font-semibold text-[var(--brand-primary)] transition-colors duration-300 group-hover:text-[var(--brand-accent-dark)]">
          Lihat Detail
        </span>
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--brand-primary)]/18 bg-[var(--brand-primary-soft)] text-[var(--brand-primary-dark)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-transparent group-hover:bg-[var(--brand-accent)] group-hover:text-white">
          <ArrowUpRight size={16} weight="bold" />
        </span>
      </div>
    </Link>
  );
}

export const SchemeCard = CertificationSchemeCard;
