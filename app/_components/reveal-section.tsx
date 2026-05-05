'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

import { cn } from '@/app/_lib/cn'

type RevealSectionProps = {
  id?: string
  className?: string
  variant?: 'rise' | 'left' | 'right' | 'mask'
  children: ReactNode
}

export function RevealSection({
  id,
  className,
  variant = 'rise',
  children
}: RevealSectionProps) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const node = ref.current

    if (!node) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -4% 0px'
      }
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        'section-reveal scroll-mt-36 sm:scroll-mt-40 lg:scroll-mt-44',
        className
      )}
      data-variant={variant}
      data-visible={visible ? 'true' : 'false'}
    >
      {children}
    </section>
  )
}
