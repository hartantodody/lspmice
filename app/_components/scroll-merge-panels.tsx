'use client'

import {
  useEffect,
  useEffectEvent,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode
} from 'react'

import { cn } from '@/app/_lib/cn'

type ScrollMergePanelsProps = {
  className?: string
  leftClassName?: string
  rightClassName?: string
  left: ReactNode
  right: ReactNode
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

export function ScrollMergePanels({
  className,
  leftClassName,
  rightClassName,
  left,
  right
}: ScrollMergePanelsProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [progress, setProgress] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const syncPreference = () => {
      setReducedMotion(media.matches)
    }

    syncPreference()
    media.addEventListener('change', syncPreference)

    return () => {
      media.removeEventListener('change', syncPreference)
    }
  }, [])

  const syncProgress = useEffectEvent(() => {
    const node = ref.current

    if (!node) {
      return
    }

    if (reducedMotion || window.innerWidth < 1024) {
      setProgress(1)
      return
    }

    const rect = node.getBoundingClientRect()
    const viewportHeight = Math.max(window.innerHeight, 1)
    const start = viewportHeight * 0.94
    const end = viewportHeight * 0.26
    const raw = (start - rect.top) / (start - end)
    const next = clamp(raw, 0, 1)

    setProgress((current) =>
      Math.abs(current - next) > 0.003 ? next : current
    )
  })

  useEffect(() => {
    let frame = 0

    const onFrame = () => {
      syncProgress()
      frame = 0
    }

    const onScroll = () => {
      if (frame) {
        return
      }

      frame = window.requestAnimationFrame(onFrame)
    }

    frame = window.requestAnimationFrame(onFrame)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame)
      }

      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [reducedMotion])

  const easedProgress = reducedMotion ? 1 : 1 - (1 - progress) * (1 - progress)

  const leftStyle = reducedMotion
    ? undefined
    : ({
        transform: `translate3d(${(1 - easedProgress) * -188}px, ${(1 - easedProgress) * 14}px, 0) scale(${0.972 + easedProgress * 0.028})`,
        opacity: 0.42 + easedProgress * 0.58,
        filter: `blur(${(1 - easedProgress) * 10}px)`
      } as CSSProperties)

  const rightStyle = reducedMotion
    ? undefined
    : ({
        transform: `translate3d(${(1 - easedProgress) * 188}px, ${(1 - easedProgress) * 14}px, 0) scale(${0.972 + easedProgress * 0.028})`,
        opacity: 0.42 + easedProgress * 0.58,
        filter: `blur(${(1 - easedProgress) * 10}px)`
      } as CSSProperties)

  return (
    <div ref={ref} className={cn('grid overflow-visible', className)}>
      <div
        className={cn('will-change-transform', leftClassName)}
        style={leftStyle}
      >
        {left}
      </div>
      <div
        className={cn('will-change-transform', rightClassName)}
        style={rightStyle}
      >
        {right}
      </div>
    </div>
  )
}
