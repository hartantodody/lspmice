"use client";

import Image from "next/image";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { cn } from "@/app/_lib/cn";
import { registrationWhatsappHref } from "@/src/data/contact";
import { siteNavigation } from "@/src/data/site";

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
    "text-[var(--brand-primary-dark)] shadow-[0_18px_52px_rgba(15,23,42,0.12)] backdrop-blur-2xl",
    homeOverlay
      ? "border-white/14 bg-[rgba(11,37,69,0.38)] text-white"
      : "border-[var(--border)] bg-white/94"
  );

  const navSurfaceClass = cn(
    "shadow-[0_18px_52px_rgba(15,23,42,0.08)] backdrop-blur-2xl",
    homeOverlay
      ? "border-white/14 bg-[rgba(11,37,69,0.28)]"
      : "border-[var(--border)] bg-white/92",
    isElevated && "bg-white/96"
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
            className="h-8 w-auto max-w-[10.75rem] min-w-0 object-contain sm:h-9 sm:max-w-[12.5rem] lg:h-10 lg:max-w-none"
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

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                    isActive
                      ? homeOverlay
                        ? "bg-[rgba(193,18,31,0.2)] text-white ring-1 ring-white/14"
                        : "bg-[var(--brand-accent-soft)] text-[var(--brand-accent-dark)]"
                      : homeOverlay
                        ? "text-white/84 hover:bg-white/12 hover:text-white"
                        : "text-[var(--text-secondary)] hover:bg-[var(--brand-primary-soft)] hover:text-[var(--brand-accent-dark)]"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="ml-auto hidden sm:block">
          <Link
            href={registrationWhatsappHref}
            className="inline-flex items-center justify-center rounded-full border border-[var(--brand-accent)] bg-[var(--brand-accent)] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(193,18,31,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--brand-accent-dark)] hover:bg-[var(--brand-accent-dark)]"
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
                        : "text-[var(--text-secondary)] hover:bg-[var(--brand-primary-soft)] hover:text-[var(--brand-accent-dark)]"
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
