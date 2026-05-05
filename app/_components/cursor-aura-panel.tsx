"use client";

import { useEffect, useRef, useState, type CSSProperties, type PointerEvent, type ReactNode } from "react";

import { cn } from "@/app/_lib/cn";

type CursorAuraPanelProps = {
  className?: string;
  children: ReactNode;
};

export function CursorAuraPanel({ className, children }: CursorAuraPanelProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => {
      setReducedMotion(media.matches);
    };

    syncPreference();
    media.addEventListener("change", syncPreference);

    return () => {
      media.removeEventListener("change", syncPreference);
    };
  }, []);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reducedMotion) {
      return;
    }

    const node = ref.current;

    if (!node) {
      return;
    }

    const rect = node.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    node.style.setProperty("--aura-x", `${x}%`);
    node.style.setProperty("--aura-y", `${y}%`);
  };

  const handlePointerLeave = () => {
    const node = ref.current;

    if (!node) {
      return;
    }

    node.style.setProperty("--aura-x", "50%");
    node.style.setProperty("--aura-y", "50%");
  };

  return (
    <div
      ref={ref}
      className={cn("group/aura relative overflow-hidden", className)}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={
        {
          "--aura-x": "50%",
          "--aura-y": "50%",
        } as CSSProperties
      }
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-[var(--ease-premium)]"
        style={
          reducedMotion
            ? undefined
            : ({
                background: `
                  radial-gradient(circle at var(--aura-x) var(--aura-y), rgba(18, 62, 117, 0.16), transparent 18%),
                  radial-gradient(circle at var(--aura-x) var(--aura-y), rgba(193, 18, 31, 0.18), transparent 32%),
                  radial-gradient(circle at var(--aura-x) var(--aura-y), rgba(234, 241, 251, 0.94), transparent 54%)
                `,
              } as CSSProperties)
        }
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-90"
        style={
          {
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.96), rgba(248,250,252,0.94) 44%, rgba(234,241,251,0.9) 100%)",
          } as CSSProperties
        }
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
