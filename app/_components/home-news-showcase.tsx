"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useRef, useState } from "react";

import { CTAButton } from "@/app/_components/cta-button";
import { cn } from "@/app/_lib/cn";
import type { NewsPost } from "@/src/data/types";

type HomeNewsShowcaseProps = {
  featuredPosts: NewsPost[];
  archivePosts: NewsPost[];
  ctaLabel: string;
};

export function HomeNewsShowcase({
  featuredPosts,
  archivePosts,
  ctaLabel,
}: HomeNewsShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activePost = featuredPosts[activeIndex] ?? featuredPosts[0];

  const handleSelect = (index: number) => {
    if (index === activeIndex || animating) return;
    setPrevIndex(activeIndex);
    setAnimating(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveIndex(index);
      setAnimating(false);
      setPrevIndex(null);
    }, 260);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (!activePost) return null;

  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
      {/* Featured / Pengumuman card */}
      <article className="relative flex flex-col overflow-hidden rounded-[32px] border border-[var(--brand-primary)]/12 bg-[linear-gradient(135deg,#00253A_0%,#003B5C_100%)] p-6 text-white shadow-[0_24px_72px_rgba(0,37,58,0.2)] sm:p-8">
        {/* Background image with transition */}
        <div
          className={cn(
            "pointer-events-none absolute inset-x-0 top-0 h-[140px] overflow-hidden rounded-t-[32px] transition-opacity duration-300",
            animating ? "opacity-0" : "opacity-100"
          )}
        >
          <Image
            src={activePost.image}
            alt={activePost.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#00253A_10%,transparent_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,#00253A_10%,transparent_100%)]" />
        </div>

        {/* Content with fade+slide transition */}
        <div
          className={cn(
            "relative z-10 flex h-full flex-col max-w-[34rem] transition-all duration-300",
            animating
              ? "opacity-0 translate-y-3"
              : "opacity-100 translate-y-0"
          )}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[var(--brand-accent-soft)]">
            {activePost.category}
          </p>
          <p className="mt-3 text-sm text-white/62">{activePost.displayDate}</p>
          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
            {activePost.title}
          </h3>
          <p className="mt-5 text-sm leading-8 text-white/74">{activePost.excerpt}</p>
          <div className="mt-6 rounded-[24px] border border-white/12 bg-white/8 p-4 text-sm leading-7 text-white/72">
            {activePost.content[0]}
          </div>
          <div className="mt-auto flex flex-wrap items-center gap-4 pt-7">
            <CTAButton
              href={`/berita#${activePost.slug}`}
              variant="secondary"
              className="border-white bg-white text-[var(--brand-primary-dark)] hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent-dark)]"
            >
              {ctaLabel}
            </CTAButton>
            <div className="flex items-center gap-2">
              {featuredPosts.map((post, index) => (
                <button
                  key={post.slug}
                  type="button"
                  aria-label={`Tampilkan berita ${index + 1}`}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    index === activeIndex
                      ? "w-9 bg-[var(--brand-accent)]"
                      : "w-2 bg-white/32 hover:bg-white/52"
                  )}
                  onClick={() => handleSelect(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Archive card */}
      <article className="rounded-[32px] border border-[var(--border)] bg-white p-6 shadow-[0_24px_64px_rgba(15,23,42,0.06)] sm:p-8">
        <h3 className="text-3xl font-semibold tracking-[-0.03em] text-[var(--brand-primary-dark)]">
          Arsip Berita
        </h3>
        <div className="mt-6 space-y-4">
          {archivePosts.map((post, idx) => (
            <Link
              key={post.slug}
              href={`/berita#${post.slug}`}
              data-reveal
              style={{ "--reveal-delay": `${idx * 80}ms` } as React.CSSProperties}
              className="group flex items-start gap-4 rounded-[24px] border border-[var(--border)] bg-[var(--surface-muted)]/52 p-4 transition-all duration-300 hover:border-[var(--brand-accent)]/20 hover:bg-white hover:shadow-[0_18px_44px_rgba(15,23,42,0.06)]"
            >
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[18px] bg-[var(--brand-primary-soft)]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="80px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-accent-dark)]">
                  {post.category}
                </p>
                <p className="mt-1 text-sm text-[var(--text-muted)]">{post.displayDate}</p>
                <h4 className="mt-2 text-base font-semibold leading-7 text-[var(--brand-primary-dark)] transition-colors group-hover:text-[var(--brand-accent-dark)]">
                  {post.title}
                </h4>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-[var(--text-secondary)]">
                  {post.excerpt}
                </p>
              </div>
              <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--brand-accent)]/14 bg-[var(--brand-accent-soft)] text-[var(--brand-accent-dark)] transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight size={16} weight="bold" />
              </span>
            </Link>
          ))}
        </div>
      </article>
    </div>
  );
}
