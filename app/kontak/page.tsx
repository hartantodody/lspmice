import type { Metadata } from "next";
import {
  Clock,
  EnvelopeSimple,
  MapPin,
  Phone,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";

import { Breadcrumbs } from "@/app/_components/breadcrumbs";
import { CTAButton } from "@/app/_components/cta-button";
import { ContactCard } from "@/app/_components/contact-card";
import { PageHeader } from "@/app/_components/page-header";
import { SiteShell } from "@/app/_components/site-shell";
import { contactActionCards, contactInfo } from "@/src/data/contact";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Halaman kontak LSP MICE dengan placeholder alamat, telepon, WhatsApp, email, jam kerja, dan CTA layanan.",
};

export default function KontakPage() {
  return (
    <SiteShell>
      <main className="space-y-8 pb-16 pt-6 sm:space-y-10 sm:pb-20">
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1320px] space-y-5">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Kontak" },
              ]}
            />
            <PageHeader
              eyebrow="Kontak"
              title="Kanal komunikasi utama ditata agar lebih cepat ditemukan."
              description="Informasi kontak berikut masih bersifat placeholder untuk review frontend. Area ini siap diganti dengan data resmi, termasuk nomor WhatsApp, email, dan peta lokasi final."
              actions={
                <>
                  <CTAButton href="/daftar-online">Daftar Online</CTAButton>
                  <CTAButton href="/skema-sertifikasi" variant="secondary">
                    Lihat Skema Sertifikasi
                  </CTAButton>
                </>
              }
              meta={[
                { label: "Jam Layanan", value: contactInfo.officeHours },
                { label: "Kontak Person", value: contactInfo.contactPerson },
              ]}
            />
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-[1320px] gap-5 lg:grid-cols-2 xl:grid-cols-3">
            <ContactCard
              label="Alamat Kantor"
              value={contactInfo.address}
              helperText="Alamat perlu diverifikasi kembali sebelum integrasi peta resmi dilakukan."
              icon={<MapPin size={20} weight="fill" />}
            />
            <ContactCard
              label="Telepon"
              value={contactInfo.phone}
              href={`tel:${contactInfo.phone.replace(/[^\d+]/g, "")}`}
              helperText="Nomor telepon kantor placeholder untuk review layout."
              icon={<Phone size={20} weight="fill" />}
            />
            <ContactCard
              label="WhatsApp"
              value={contactInfo.whatsapp}
              href={`https://wa.me/${contactInfo.whatsapp.replace(/[^\d]/g, "")}`}
              helperText={`Kontak person: ${contactInfo.contactPerson}`}
              icon={<WhatsappLogo size={20} weight="fill" />}
            />
            <ContactCard
              label="Email"
              value={contactInfo.email}
              helperText="TODO: ganti dengan email resmi yang telah diverifikasi."
              icon={<EnvelopeSimple size={20} weight="fill" />}
            />
            <ContactCard
              label="Jam Operasional"
              value={contactInfo.officeHours}
              helperText="Jam layanan contoh untuk kebutuhan presentasi frontend."
              icon={<Clock size={20} weight="fill" />}
            />
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-[1320px] gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="rounded-[30px] border border-dashed border-[var(--brand-primary)]/20 bg-[var(--brand-primary-soft)] p-6 shadow-[0_18px_56px_rgba(15,23,42,0.05)] sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--brand-accent-dark)]">
                Placeholder Peta
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--brand-primary-dark)]">
                Lokasi kantor belum di-embed
              </h2>
              <p className="mt-5 text-sm leading-8 text-[var(--text-secondary)]">
                {contactInfo.mapPlaceholder}
              </p>
            </article>

            <div className="grid gap-4">
              {contactActionCards.map((item) => (
                <article
                  key={item.href}
                  className="rounded-[26px] border border-[var(--border)] bg-white p-5 shadow-[0_16px_48px_rgba(15,23,42,0.06)]"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--brand-accent-dark)]">
                    CTA
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-[var(--brand-primary-dark)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                    {item.description}
                  </p>
                  <div className="mt-5">
                    <CTAButton href={item.href} size="sm">
                      {item.label}
                    </CTAButton>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
