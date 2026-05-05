"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

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
  const activePost = featuredPosts[activeIndex] ?? featuredPosts[0];

  if (!activePost) {
    return null;
  }

  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
      <article className="relative overflow-hidden rounded-[32px] border border-[var(--brand-primary)]/12 bg-[linear-gradient(135deg,#0B2545_0%,#123E75_100%)] p-6 text-white shadow-[0_24px_72px_rgba(11,37,69,0.2)] sm:p-8">
        <div className="pointer-events-none absolute right-0 top-0 h-44 w-40 overflow-hidden rounded-bl-[28px] opacity-40 sm:h-52 sm:w-52">
          <Image
            src={activePost.image}
            alt={activePost.title}
            fill
            sizes="220px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,37,69,0.05),rgba(11,37,69,0.8))]" />
        </div>

        <div className="relative z-10 max-w-[34rem]">
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
          <div className="mt-7 flex flex-wrap items-center gap-4">
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
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </article>

      <article className="rounded-[32px] border border-[var(--border)] bg-white p-6 shadow-[0_24px_64px_rgba(15,23,42,0.06)] sm:p-8">
        <h3 className="text-3xl font-semibold tracking-[-0.03em] text-[var(--brand-primary-dark)]">
          Arsip Berita
        </h3>
        <div className="mt-6 space-y-4">
          {archivePosts.map((post) => (
            <Link
              key={post.slug}
              href={`/berita#${post.slug}`}
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
