import type { CSSProperties } from 'react'

import { cn } from '@/app/_lib/cn'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  accent?: string
  description: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = 'left',
  className
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl space-y-4',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      <p
        data-reveal
        style={{ '--reveal-delay': '0ms' } as CSSProperties}
        className='text-[11px] font-semibold uppercase tracking-[0.34em] text-[var(--brand-accent-dark)]'
      >
        {eyebrow}
      </p>

      <div className='space-y-1'>
        <h2
          data-reveal
          style={{ '--reveal-delay': '80ms' } as CSSProperties}
          className='text-balance text-3xl font-semibold tracking-[-0.04em] text-[var(--brand-primary-dark)] sm:text-4xl lg:text-5xl'
        >
          {title}
        </h2>

        {accent ? (
          <p
            data-reveal
            style={{ '--reveal-delay': '160ms' } as CSSProperties}
            className='text-balance text-2xl font-semibold leading-tight tracking-[-0.03em] text-[var(--brand-primary)] sm:text-3xl lg:text-4xl'
          >
            {accent}
          </p>
        ) : null}
      </div>

      <p
        data-reveal
        style={{ '--reveal-delay': '240ms' } as CSSProperties}
        className={cn(
          'max-w-2xl text-base leading-8 text-[var(--text-secondary)]',
          align === 'center' && 'mx-auto'
        )}
      >
        {description}
      </p>
    </div>
  )
}

export const SectionHeader = SectionHeading
