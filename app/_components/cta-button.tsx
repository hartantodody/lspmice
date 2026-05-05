import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/app/_lib/cn";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md";
  className?: string;
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
        size === "sm" ? "px-4 py-2.5 text-sm" : "px-5 py-3 text-sm sm:text-base",
        variant === "primary" &&
          "border border-[var(--brand-primary)] bg-[var(--brand-primary)] text-white shadow-[0_16px_32px_rgba(18,62,117,0.22)] hover:-translate-y-0.5 hover:bg-[var(--brand-primary-dark)] hover:border-[var(--brand-primary-dark)]",
        variant === "secondary" &&
          "border border-[var(--border)] bg-white text-[var(--brand-primary-dark)] hover:-translate-y-0.5 hover:border-[var(--brand-accent)]/24 hover:text-[var(--brand-accent-dark)]",
        variant === "accent" &&
          "border border-[var(--brand-accent)]/18 bg-[var(--brand-accent-soft)] text-[var(--brand-accent-dark)] hover:-translate-y-0.5 hover:border-[var(--brand-accent)]/30",
        className
      )}
    >
      {children}
    </Link>
  );
}
