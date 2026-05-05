"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Clock,
  InstagramLogo,
  LinkedinLogo,
  MapPin,
  Phone,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import {
  startTransition,
  useEffect,
  useEffectEvent,
  useState,
  type CSSProperties,
} from "react";

import { cn } from "@/app/_lib/cn";
import { registrationWhatsappHref } from "@/src/data/contact";
import type { HeroSlide, HomeHeroContent } from "@/src/data/types";

type HeroContactProps = {
  address: string;
  phone: string;
  officeHours: string;
};

type HeroSlideshowProps = {
  slides: HeroSlide[];
  contact: HeroContactProps;
  hero: HomeHeroContent;
};

const heroSocialItems = [
  {
    label: "Instagram",
    href: "/kontak",
    icon: InstagramLogo,
  },
  {
    label: "WhatsApp",
    href: "/kontak",
    icon: WhatsappLogo,
  },
  {
    label: "LinkedIn",
    href: "/kontak",
    icon: LinkedinLogo,
  },
] as const;

export function HeroSlideshow({ slides, contact, hero }: HeroSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const activeSlide = slides[activeIndex];
  const actionLinks = hero.actions.map((action) =>
    action.href === "#register-intent"
      ? { ...action, href: registrationWhatsappHref }
      : action
  );

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const applyPreference = () => {
      setReducedMotion(media.matches);
    };

    applyPreference();
    media.addEventListener("change", applyPreference);

    return () => {
      media.removeEventListener("change", applyPreference);
    };
  }, []);

  const syncScrollProgress = useEffectEvent(() => {
    const viewportHeight = Math.max(window.innerHeight, 1);
    const next = Math.min(Math.max(window.scrollY / viewportHeight, 0), 1);
    setScrollProgress(next);
  });

  const advanceSlide = useEffectEvent(() => {
    if (reducedMotion || slides.length < 2) {
      return;
    }

    startTransition(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    });
  });

  useEffect(() => {
    if (reducedMotion || slides.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      advanceSlide();
    }, 6200);

    return () => {
      window.clearInterval(timer);
    };
  }, [reducedMotion, slides.length]);

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    let frame = 0;

    const onScroll = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        syncScrollProgress();
        frame = 0;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reducedMotion]);

  const mediaTrackStyle = reducedMotion
    ? undefined
    : ({
        transform: `translate3d(0, ${scrollProgress * 5}%, 0) scale(${1.03 + scrollProgress * 0.04})`,
      } as CSSProperties);

  const contentStyle = reducedMotion
    ? undefined
    : ({
        transform: `translate3d(0, ${scrollProgress * -36}px, 0)`,
        opacity: 1 - scrollProgress * 0.28,
      } as CSSProperties);

  return (
    <section
      id="hero"
      className="landing-snap-point relative isolate h-full min-h-[100svh] overflow-hidden bg-[var(--brand-primary-dark)]"
    >
      <div className="absolute inset-0">
        <div className="hero-media absolute inset-0">
          <div
            className="hero-media-track absolute inset-0 transition-transform duration-300 ease-linear"
            style={mediaTrackStyle}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.image}
                className={cn(
                  "absolute inset-0 transition-[opacity,transform] duration-[1600ms] ease-[var(--ease-premium)]",
                  index === activeIndex
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-[1.04]"
                )}
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className={cn(
                    "object-cover object-center transition-transform duration-[7600ms] ease-linear",
                    !reducedMotion && index === activeIndex && "scale-[1.06]"
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,37,58,0.78)_0%,rgba(0,37,58,0.32)_32%,transparent_64%,rgba(0,37,58,0.2)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,transparent_16%,transparent_48%,rgba(0,37,58,0.85)_100%)]" />

      <div className="relative z-10 flex min-h-[100svh] flex-col px-4 pb-5 pt-[6.5rem] sm:px-6 sm:pb-6 sm:pt-[7rem] lg:px-8 lg:pb-8 lg:pt-[8.2rem]">
        <div className="grid flex-1 gap-10 lg:grid-cols-[minmax(0,1fr)_6rem] lg:gap-6">
          <div
            key={activeSlide.image}
            className="flex min-h-[calc(100svh-12rem)] flex-col justify-end pb-3 sm:min-h-[calc(100svh-13rem)] lg:min-h-0 lg:justify-center lg:pb-0"
            style={contentStyle}
          >
            <div className="max-w-[44rem] space-y-6">
              <p
                className="hero-copy-line max-w-fit text-[11px] font-semibold uppercase tracking-[0.34em] text-[var(--brand-accent)]"
                style={{ "--delay": "80ms" } as CSSProperties}
              >
                {activeSlide.eyebrow}
              </p>

              <div className="space-y-2">
                <h1
                  className="hero-copy-line max-w-[12ch] text-balance text-4xl font-semibold leading-[1] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl lg:text-[5rem]"
                  style={{ "--delay": "150ms" } as CSSProperties}
                >
                  {activeSlide.title}
                </h1>
                {activeSlide.accent ? (
                  <p
                    className="hero-copy-line max-w-[14ch] text-balance text-4xl font-semibold leading-[1] tracking-[-0.05em] text-[var(--brand-accent-soft)] sm:text-5xl md:text-6xl lg:text-[4.5rem]"
                    style={{ "--delay": "240ms" } as CSSProperties}
                  >
                    {activeSlide.accent}
                  </p>
                ) : null}
              </div>

              <p
                className="hero-copy-line max-w-[34rem] text-sm leading-7 text-white/72 sm:text-base lg:text-lg lg:leading-8"
                style={{ "--delay": "330ms" } as CSSProperties}
              >
                {activeSlide.description}
              </p>

              <div
                className="hero-copy-line flex flex-col gap-3 pt-2 sm:flex-row"
                style={{ "--delay": "420ms" } as CSSProperties}
              >
                {actionLinks.map((action) => (
                  <Link
                    key={action.label}
                    href={action.href}
                    className={cn(
                      "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300",
                      action.variant === "primary" &&
                        "gap-3 border border-[var(--brand-accent)] bg-[var(--brand-accent)] text-white shadow-[0_16px_34px_rgba(200,16,46,0.28)] hover:-translate-y-0.5 hover:border-[var(--brand-accent-dark)] hover:bg-[var(--brand-accent-dark)]",
                      action.variant === "secondary" &&
                        "border border-white/50 bg-white/10 text-white shadow-[0_14px_28px_rgba(0,37,58,0.18)] hover:-translate-y-0.5 hover:border-white hover:bg-white/18 hover:text-white",
                      action.variant === "accent" &&
                        "border border-white bg-white text-[var(--brand-primary-dark)] shadow-[0_14px_28px_rgba(0,37,58,0.14)] hover:-translate-y-0.5 hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent-dark)]"
                    )}
                  >
                    {action.label}
                    {action.variant === "primary" ? (
                      <ArrowUpRight size={18} weight="bold" />
                    ) : null}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden lg:flex lg:flex-col lg:items-end lg:justify-center lg:gap-3">
            <div className="group/contact relative flex justify-end">
              <div className="pointer-events-none absolute right-[4.5rem] top-1/2 w-[20rem] -translate-y-1/2 translate-x-2 rounded-[16px] bg-[rgba(0,37,58,0.84)] p-4 opacity-0 shadow-[0_24px_64px_rgba(0,37,58,0.28)] backdrop-blur-2xl transition-all duration-300 group-hover/contact:pointer-events-auto group-hover/contact:translate-x-0 group-hover/contact:opacity-100 group-focus-within/contact:pointer-events-auto group-focus-within/contact:translate-x-0 group-focus-within/contact:opacity-100">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-accent)]">
                  {hero.contactLabel}
                </p>
                <div className="mt-3 flex items-start gap-3">
                  <MapPin size={18} weight="fill" className="mt-0.5 text-[var(--brand-accent)]" />
                  <p className="text-sm leading-7 text-white/72">{contact.address}</p>
                </div>
                <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-4">
                  <Phone size={18} weight="fill" className="text-[var(--brand-accent)]" />
                  <Link
                    href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
                    className="text-sm font-semibold text-white transition-colors hover:text-[var(--brand-accent)]"
                  >
                    {contact.phone}
                  </Link>
                </div>
              </div>

              <button
                type="button"
                aria-label="Lihat alamat dan nomor telepon"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-[var(--brand-primary-dark)] shadow-[0_16px_34px_rgba(0,37,58,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:text-[var(--brand-accent-dark)]"
              >
                <Phone size={18} weight="fill" />
              </button>
            </div>

            {heroSocialItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-[var(--brand-primary-dark)] shadow-[0_16px_34px_rgba(0,37,58,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:text-[var(--brand-accent-dark)]"
                >
                  <Icon size={18} weight="fill" />
                </Link>
              );
            })}

            <div className="mt-5 max-w-[6rem] text-right">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/56">
                {hero.hoursLabel}
              </p>
              <div className="mt-3 flex justify-end">
                <Clock size={16} weight="bold" className="text-white/54" />
              </div>
              <p className="mt-2 text-xs leading-6 text-white/60">{contact.officeHours}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-5 border-t border-white/10 pt-5 sm:mt-10 sm:flex-row sm:items-end sm:justify-between lg:mt-0">
          <div className="space-y-4">
            <p className="max-w-xl text-xs uppercase tracking-[0.22em] text-white/46">
              {activeSlide.caption}
            </p>

            <div className="flex items-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.image}
                  type="button"
                  aria-label={`Tampilkan slide ${index + 1}`}
                  className={cn(
                    "h-2 rounded-full transition-all duration-500 ease-[var(--ease-premium)]",
                    index === activeIndex
                      ? "w-10 bg-[var(--brand-accent)]"
                      : "w-2 bg-white/30 hover:bg-white/52"
                  )}
                  onClick={() => {
                    startTransition(() => {
                      setActiveIndex(index);
                    });
                  }}
                />
              ))}
            </div>

            <div className="flex items-center gap-3 lg:hidden">
              {heroSocialItems.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[var(--brand-primary-dark)] shadow-[0_12px_26px_rgba(0,37,58,0.14)] transition-colors hover:text-[var(--brand-accent-dark)]"
                  >
                    <Icon size={18} weight="fill" />
                  </Link>
                );
              })}
            </div>

            <div className="space-y-3 lg:hidden">
              <p className="text-xs leading-6 text-white/68">{contact.address}</p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/82">
                <Link href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`} className="font-semibold">
                  {contact.phone}
                </Link>
                <span className="text-white/50">|</span>
                <span>{contact.officeHours}</span>
              </div>
            </div>
          </div>

          <Link
            href="#tentang"
            className="inline-flex w-fit items-center gap-3 self-start rounded-full border border-white/14 bg-[rgba(0,37,58,0.38)] px-4 py-3 text-sm font-medium text-white/76 backdrop-blur-xl transition-all duration-300 hover:bg-[rgba(0,37,58,0.54)] sm:self-auto"
          >
            {hero.scrollLabel}
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/16 text-white/86">
              <ArrowDown size={16} weight="bold" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
