"use client";

import Image from "next/image";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { cn } from "@/app/_lib/cn";
import { registrationWhatsappHref } from "@/src/data/contact";
import { siteNavigation } from "@/src/data/site";
import { certificationSchemes } from "@/src/data/certification-schemes";

type SiteHeaderProps = {
  overlay?: boolean;
};

function isActivePath(
  pathname: string,
  item: (typeof siteNavigation)[number]
) {
  if (item.exact) {
    return pathname === item.href;
  }

  if (pathname === item.href) {
    return true;
  }

  return item.matchPrefixes?.some((prefix) => pathname.startsWith(prefix)) ?? false;
}

export function SiteHeader({ overlay = false }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isElevated, setIsElevated] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setIsElevated(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const homeOverlay = overlay && pathname === "/" && !isElevated;
  const surfaceClass = cn(
    "shadow-[0_18px_52px_rgba(15,23,42,0.12)] backdrop-blur-2xl transition-all duration-500 ease-[var(--ease-premium)]",
    homeOverlay
      ? "border-white/20 bg-[rgba(0,37,58,0.45)] text-white"
      : "border-white/40 bg-white/70 text-[var(--brand-primary-dark)]"
  );

  const navSurfaceClass = cn(
    "shadow-[0_18px_52px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition-all duration-500 ease-[var(--ease-premium)]",
    homeOverlay
      ? "border-white/20 bg-[rgba(0,37,58,0.35)]"
      : "border-white/50 bg-white/60",
    isElevated && !homeOverlay && "bg-white/80"
  );

  return (
    <header className="pointer-events-auto">
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className={cn(
            "flex min-w-0 items-center rounded-full border px-3 py-2.5 backdrop-blur-xl transition-all duration-500 ease-[var(--ease-premium)] sm:px-4 sm:py-3",
            surfaceClass
          )}
        >
          <Image
            src="/dummy/LOGO_PT_LSP-NEW.png"
            alt="Logo LSP MICE"
            width={664}
            height={175}
            priority
            className={cn(
              "h-8 w-auto max-w-[10.75rem] min-w-0 object-contain transition-all duration-500 sm:h-9 sm:max-w-[12.5rem] lg:h-10 lg:max-w-none",
              homeOverlay && "brightness-0 invert"
            )}
          />
        </Link>

        <div className="hidden flex-1 justify-center lg:flex">
          <nav
            className={cn(
              "flex items-center gap-1 rounded-full border px-1.5 py-1.5 backdrop-blur-xl transition-all duration-500 ease-[var(--ease-premium)]",
              navSurfaceClass
            )}
          >
            {siteNavigation.map((item) => {
              const isActive = isActivePath(pathname, item);

              const isDropdown = item.label === "Skema Sertifikasi";

              const LinkElement = (
                <Link
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 inline-flex items-center gap-1.5",
                    isActive
                      ? homeOverlay
                        ? "bg-[rgba(200,16,46,0.3)] text-white ring-1 ring-white/20"
                        : "bg-[var(--brand-accent-soft)] text-[var(--brand-accent-dark)]"
                      : homeOverlay
                        ? "text-white/84 hover:bg-white/12 hover:text-white"
                        : "text-[var(--brand-primary-dark)] hover:bg-[var(--brand-primary-soft)] hover:text-[var(--brand-primary-dark)]"
                  )}
                >
                  {item.label}
                  {isDropdown && (
                    <svg className="w-3.5 h-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
              );

              if (isDropdown) {
                return (
                  <div key={item.href} className="group relative">
                    {LinkElement}
                    <div className="absolute left-1/2 top-full mt-2 w-[320px] -translate-x-1/2 rounded-2xl border border-[var(--border)] bg-white/95 p-3 shadow-[0_24px_54px_rgba(0,37,58,0.12)] backdrop-blur-xl transition-all duration-300 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
                      <div className="grid gap-1">
                        {certificationSchemes.map((scheme) => (
                          <Link
                            key={scheme.slug}
                            href={`/skema-sertifikasi/${scheme.slug}`}
                            className="block rounded-xl px-4 py-2.5 transition-colors hover:bg-[var(--brand-primary-soft)] group/link"
                          >
                            <p className="text-sm font-semibold text-[var(--brand-primary-dark)] group-hover/link:text-[var(--brand-primary)]">
                              {scheme.title}
                            </p>
                            <p className="mt-0.5 text-xs text-[var(--text-secondary)] line-clamp-1">
                              {scheme.shortDescription}
                            </p>
                          </Link>
                        ))}
                        <Link
                          href="/skema-sertifikasi"
                          className="mt-2 block rounded-xl border border-[var(--brand-accent)]/20 bg-[var(--brand-accent-soft)] px-4 py-2 text-center text-xs font-semibold text-[var(--brand-accent-dark)] transition-colors hover:bg-[var(--brand-accent)] hover:text-white"
                        >
                          Lihat Semua Skema
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }

              return <div key={item.href}>{LinkElement}</div>;
            })}
          </nav>
        </div>

        <div className="ml-auto hidden sm:block">
          <Link
            href={registrationWhatsappHref}
            className="inline-flex items-center justify-center rounded-full border border-[var(--brand-accent)] bg-[var(--brand-accent)] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(200,16,46,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--brand-accent-dark)] hover:bg-[var(--brand-accent-dark)]"
          >
            Daftar Sekarang
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label="Buka menu navigasi"
          className={cn(
            "ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-xl lg:hidden",
            surfaceClass
          )}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={cn(
          "grid overflow-hidden transition-all duration-500 ease-[var(--ease-premium)] lg:hidden",
          isOpen ? "grid-rows-[1fr] pt-3" : "grid-rows-[0fr]"
        )}
      >
        <div className="min-h-0">
          <div className="rounded-[18px] border border-[var(--border)] bg-white/96 p-3 shadow-[0_18px_52px_rgba(15,23,42,0.14)] backdrop-blur-2xl">
            <nav className="grid gap-2">
              {siteNavigation.map((item) => {
                const isActive = isActivePath(pathname, item);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-[12px] px-4 py-3 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-[var(--brand-accent-soft)] text-[var(--brand-accent-dark)]"
                        : "text-[var(--brand-primary-dark)] hover:bg-[var(--brand-primary-soft)] hover:text-[var(--brand-primary-dark)]"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href={registrationWhatsappHref}
                className="mt-1 inline-flex items-center justify-center rounded-full bg-[var(--brand-accent)] px-4 py-3 text-sm font-semibold text-white"
                onClick={() => setIsOpen(false)}
              >
                Daftar Sekarang
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
