import type { ReactNode } from "react";

import { cn } from "@/app/_lib/cn";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
  meta?: Array<{ label: string; value: string }>;
  className?: string;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
  meta,
  className,
}: PageHeaderProps) {
  return (
    <section className={cn("px-4 sm:px-6 lg:px-8", className)}>
      <div className="mx-auto max-w-[1320px]">
        <div className="premium-grid overflow-hidden rounded-[34px] border border-[var(--brand-primary)]/10 bg-[linear-gradient(135deg,#0B2545_0%,#123E75_58%,#164C8F_100%)] px-6 py-8 text-white shadow-[0_26px_90px_rgba(11,37,69,0.22)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#f8c6cb]">
                {eyebrow}
              </p>
              <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-[3.75rem]">
                {title}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-white/76">{description}</p>
              {actions ? <div className="mt-7 flex flex-wrap gap-3">{actions}</div> : null}
            </div>

            {meta?.length ? (
              <div className="grid gap-3 sm:grid-cols-2">
                {meta.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[24px] border border-white/12 bg-white/8 p-4 backdrop-blur-sm"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#f8c6cb]">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-white/82">{item.value}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
