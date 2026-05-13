import type {
  CertificateHolder,
  CertificateHolderStatus,
} from "@/src/data/types";

export function deriveCertificateStatus(
  holder: CertificateHolder,
  now: Date = new Date(),
): CertificateHolderStatus {
  if (holder.status === "Pending Verification") {
    return "Pending Verification";
  }

  const expiry = new Date(holder.validUntil);
  if (Number.isNaN(expiry.getTime())) {
    return holder.status;
  }

  return expiry.getTime() < now.getTime() ? "Expired" : "Active";
}

export function withDerivedStatus(
  holders: CertificateHolder[],
  now: Date = new Date(),
): CertificateHolder[] {
  return holders.map((holder) => ({
    ...holder,
    status: deriveCertificateStatus(holder, now),
  }));
}
