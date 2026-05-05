import type { ReactNode } from "react";

import { cn } from "@/app/_lib/cn";
import { SiteFooter } from "@/app/_components/site-footer";
import { SiteHeader } from "@/app/_components/site-header";

type SiteShellProps = {
  children: ReactNode;
  overlayHeader?: boolean;
  className?: string;
};

export function SiteShell({
  children,
  overlayHeader = false,
  className,
}: SiteShellProps) {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <div className="fixed inset-x-0 top-0 z-[90] px-4 pt-4 sm:px-6 sm:pt-6 lg:px-8 lg:pt-8">
        <SiteHeader overlay={overlayHeader} />
      </div>
      <div
        className={cn(
          overlayHeader ? undefined : "pt-[6.75rem] sm:pt-[7.5rem] lg:pt-[8.5rem]",
          className
        )}
      >
        {children}
      </div>
      <SiteFooter />
    </div>
  );
}
