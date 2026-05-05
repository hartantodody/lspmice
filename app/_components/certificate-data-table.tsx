import { EmptyState } from "@/app/_components/empty-state";
import { StatusBadge } from "@/app/_components/status-badge";
import { formatDate } from "@/app/_lib/format-date";
import type { CertificateHolder } from "@/src/data/types";

type CertificateDataTableProps = {
  rows: CertificateHolder[];
};

export function CertificateDataTable({ rows }: CertificateDataTableProps) {
  if (!rows.length) {
    return (
      <EmptyState
        title="Data sertifikat tidak ditemukan"
        message="Coba ubah kata kunci pencarian atau pilih filter lain untuk melihat data contoh yang tersedia."
      />
    );
  }

  return (
    <>
      <div className="hidden overflow-hidden rounded-[30px] border border-[var(--border)] bg-white shadow-[0_24px_64px_rgba(15,23,42,0.06)] lg:block">
        <table className="min-w-full border-collapse">
          <thead className="bg-[var(--brand-primary-dark)] text-left text-sm text-white">
            <tr>
              <th className="px-6 py-4 font-semibold">Nama</th>
              <th className="px-6 py-4 font-semibold">No Registrasi</th>
              <th className="px-6 py-4 font-semibold">Sertifikasi</th>
              <th className="px-6 py-4 font-semibold">Tanggal Sertifikat</th>
              <th className="px-6 py-4 font-semibold">Masa Berlaku</th>
              <th className="px-6 py-4 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.registrationNumber}
                className="border-t border-[var(--border)] text-sm text-[var(--text-secondary)]"
              >
                <td className="px-6 py-4 font-semibold text-[var(--text-primary)]">{row.name}</td>
                <td className="px-6 py-4">{row.registrationNumber}</td>
                <td className="px-6 py-4">{row.scheme}</td>
                <td className="px-6 py-4">{formatDate(row.certificateDate)}</td>
                <td className="px-6 py-4">{formatDate(row.validUntil)}</td>
                <td className="px-6 py-4">
                  <StatusBadge status={row.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-4 lg:hidden">
        {rows.map((row) => (
          <article
            key={row.registrationNumber}
            className="rounded-[24px] border border-[var(--border)] bg-white p-5 shadow-[0_16px_48px_rgba(15,23,42,0.06)]"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-lg font-semibold text-[var(--brand-primary-dark)]">{row.name}</p>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  {row.registrationNumber}
                </p>
              </div>
              <StatusBadge status={row.status} />
            </div>

            <dl className="mt-4 grid gap-3 text-sm">
              <div>
                <dt className="text-[var(--text-muted)]">Sertifikasi</dt>
                <dd className="mt-1 font-medium text-[var(--text-primary)]">{row.scheme}</dd>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <dt className="text-[var(--text-muted)]">Tanggal Sertifikat</dt>
                  <dd className="mt-1 text-[var(--text-primary)]">
                    {formatDate(row.certificateDate)}
                  </dd>
                </div>
                <div>
                  <dt className="text-[var(--text-muted)]">Masa Berlaku</dt>
                  <dd className="mt-1 text-[var(--text-primary)]">
                    {formatDate(row.validUntil)}
                  </dd>
                </div>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </>
  );
}
