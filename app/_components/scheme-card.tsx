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
    <article
      data-reveal
      style={{ "--reveal-delay": delay } as CSSProperties}
      className="group flex h-full flex-col rounded-[30px] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(234,241,251,0.6))] p-6 shadow-[0_22px_56px_rgba(15,23,42,0.08)] transition-transform duration-500 ease-[var(--ease-premium)] hover:-translate-y-1"
    >
      <div className="inline-flex w-fit rounded-full border border-[var(--brand-accent)]/16 bg-[var(--brand-accent-soft)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-accent-dark)]">
        {scheme.category}
      </div>

      <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-[var(--brand-primary-dark)]">
        {scheme.title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
        {scheme.shortDescription}
      </p>

      <div className="mt-6 grid gap-3 border-t border-[var(--border)] pt-4 text-sm text-[var(--text-secondary)] sm:grid-cols-2">
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

      <div className="mt-auto flex flex-wrap gap-3 pt-6">
        <CTAButton
          href={`/skema-sertifikasi/${scheme.slug}`}
          size="sm"
          className="border-[var(--brand-primary)] bg-[var(--brand-primary)] text-white hover:border-[var(--brand-primary-dark)] hover:bg-[var(--brand-primary-dark)] hover:text-white"
        >
          Lihat Detail Skema
        </CTAButton>
        {variant === "listing" ? (
          <Link
            href={`/skema-sertifikasi/${scheme.slug}`}
            className="inline-flex items-center gap-3 text-sm font-semibold text-[var(--brand-primary)] transition-colors duration-300 hover:text-[var(--brand-accent-dark)]"
          >
            Rincian skema
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--brand-primary)]/18 bg-[var(--brand-primary-soft)] transition-all duration-300 group-hover:translate-x-1">
              <ArrowUpRight size={16} weight="bold" />
            </span>
          </Link>
        ) : null}
      </div>
    </article>
  );
}

export const SchemeCard = CertificationSchemeCard;
