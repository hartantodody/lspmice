import Image from "next/image";
import Link from "next/link";

import { contactActionCards, contactInfo } from "@/src/data/contact";
import { siteConfig, siteNavigation } from "@/src/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[var(--brand-primary-dark)] text-white/74">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.8fr_0.8fr_0.9fr] lg:px-8">
        <div>
          <Image
            src="/dummy/LOGO_PT_LSP-NEW.png"
            alt="Logo LSP MICE"
            width={664}
            height={175}
            className="h-9 w-auto object-contain brightness-0 invert"
          />
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
            {siteConfig.name}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/62">
            {siteConfig.tagline}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/62">
            Menyediakan informasi mengenai skema sertifikasi, layanan peserta, berita
            kelembagaan, data pemegang sertifikat, dan dokumentasi kegiatan bidang MICE.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/88">
            Navigasi
          </p>
          <div className="mt-4 grid gap-3">
            {siteNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/62 transition-colors hover:text-[var(--brand-accent-soft)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/88">
            Aksi Cepat
          </p>
          <div className="mt-4 grid gap-3">
            {contactActionCards.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/62 transition-colors hover:text-[var(--brand-accent-soft)]"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/88">
            Kontak
          </p>
          <div className="mt-4 space-y-3 text-sm leading-7 text-white/62">
            <p>{contactInfo.address}</p>
            <p>{contactInfo.phone}</p>
            <p>{contactInfo.email}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
