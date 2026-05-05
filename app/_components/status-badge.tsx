import { cn } from "@/app/_lib/cn";
import type { CertificateHolderStatus } from "@/src/data/types";

type StatusBadgeProps = {
  status: CertificateHolderStatus;
  className?: string;
};

const statusStyles: Record<CertificateHolderStatus, string> = {
  Active:
    "border border-[var(--brand-primary)]/12 bg-[var(--brand-primary-soft)] text-[var(--brand-primary-dark)]",
  Expired:
    "border border-[var(--brand-accent)]/12 bg-[var(--brand-accent-soft)] text-[var(--brand-accent-dark)]",
  "Pending Verification":
    "border border-slate-300 bg-slate-100 text-slate-700",
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        statusStyles[status],
        className
      )}
    >
      {status}
    </span>
  );
}
