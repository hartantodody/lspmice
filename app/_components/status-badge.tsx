import { cn } from "@/app/_lib/cn";
import type { CertificateHolderStatus } from "@/src/data/types";

type StatusBadgeProps = {
  status: CertificateHolderStatus;
  className?: string;
};

const statusStyles: Record<CertificateHolderStatus, string> = {
  Active:
    "border border-emerald-200 bg-emerald-50 text-emerald-700",
  Expired:
    "border border-red-200 bg-red-50 text-red-700",
  "Pending Verification":
    "border border-amber-200 bg-amber-50 text-amber-700",
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
