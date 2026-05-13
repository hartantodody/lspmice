"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/app/_lib/cn";

const MAX_PARTICLES = 90;
const PARTICLE_DENSITY_DIVISOR = 16000;
const LINK_DISTANCE = 110;
const LINK_DISTANCE_SQ = LINK_DISTANCE * LINK_DISTANCE;
const MOUSE_RADIUS = 100;
const SPRITE_RADIUS = 12;
const BREATH_SPEED = 0.0014;

export function ParticleCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const spriteCool = buildGlowSprite("cool");
    const spriteWarm = buildGlowSprite("warm");

    let particles: Particle[] = [];
    let animationFrameId = 0;
    let running = false;
    let visible = true;
    let parentWidth = 0;
    let parentHeight = 0;
    const mouse = { x: -1000, y: -1000 };

    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      phase: number;
      warm: boolean;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = Math.random() * 0.9 + 0.3;
        this.density = Math.random() * 12 + 2;
        this.phase = Math.random() * Math.PI * 2;
        this.warm = Math.random() < 0.25;
      }

      draw(time: number) {
        const breath = 0.78 + Math.sin(time * BREATH_SPEED + this.phase) * 0.22;
        const drawSize = this.size * SPRITE_RADIUS * (0.92 + breath * 0.18);
        ctx!.globalAlpha = 0.55 * breath;
        ctx!.drawImage(
          this.warm ? spriteWarm : spriteCool,
          this.x - drawSize,
          this.y - drawSize,
          drawSize * 2,
          drawSize * 2,
        );
      }

      update() {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < MOUSE_RADIUS * MOUSE_RADIUS && distSq > 0) {
          const distance = Math.sqrt(distSq);
          const forceDirX = dx / distance;
          const forceDirY = dy / distance;
          let force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS;
          force = force * force;

          this.x -= forceDirX * force * this.density;
          this.y -= forceDirY * force * this.density;
        }

        this.x += (this.baseX - this.x) * 0.04;
        this.y += (this.baseY - this.y) * 0.04;
      }
    }

    const init = (width: number, height: number) => {
      particles = [];
      const numParticles = Math.min(
        (width * height) / PARTICLE_DENSITY_DIVISOR,
        MAX_PARTICLES,
      );
      for (let i = 0; i < numParticles; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        particles.push(new Particle(x, y));
      }
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

      parentWidth = rect.width;
      parentHeight = rect.height;

      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      init(rect.width, rect.height);
    };

    const drawLines = () => {
      const cellSize = LINK_DISTANCE;
      const cols = Math.max(1, Math.ceil(parentWidth / cellSize));
      const rows = Math.max(1, Math.ceil(parentHeight / cellSize));
      const grid: number[][] = Array.from({ length: cols * rows }, () => []);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const cx = Math.min(cols - 1, Math.max(0, Math.floor(p.x / cellSize)));
        const cy = Math.min(rows - 1, Math.max(0, Math.floor(p.y / cellSize)));
        grid[cy * cols + cx].push(i);
      }

      ctx.lineWidth = 0.5;
      for (let cy = 0; cy < rows; cy++) {
        for (let cx = 0; cx < cols; cx++) {
          const cellIdx = cy * cols + cx;
          const cell = grid[cellIdx];
          if (!cell.length) continue;

          for (let nx = cx; nx <= cx + 1 && nx < cols; nx++) {
            for (let ny = cy; ny <= cy + 1 && ny < rows; ny++) {
              if (nx === cx && ny < cy) continue;
              const neighbor = grid[ny * cols + nx];
              if (!neighbor.length) continue;

              for (let a = 0; a < cell.length; a++) {
                const ia = cell[a];
                const startB = cellIdx === ny * cols + nx ? a + 1 : 0;
                for (let b = startB; b < neighbor.length; b++) {
                  const ib = neighbor[b];
                  const pa = particles[ia];
                  const pb = particles[ib];
                  const dx = pa.x - pb.x;
                  const dy = pa.y - pb.y;
                  const distSq = dx * dx + dy * dy;
                  if (distSq < LINK_DISTANCE_SQ) {
                    const opacity = (1 - distSq / LINK_DISTANCE_SQ) * 0.12;
                    ctx.strokeStyle = `rgba(180, 200, 255, ${opacity})`;
                    ctx.beginPath();
                    ctx.moveTo(pa.x, pa.y);
                    ctx.lineTo(pb.x, pb.y);
                    ctx.stroke();
                  }
                }
              }
            }
          }
        }
      }
    };

    const animate = (time: number) => {
      if (!running) return;

      ctx.clearRect(0, 0, parentWidth, parentHeight);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw(time);
      }

      ctx.globalAlpha = 1;
      drawLines();

      animationFrameId = requestAnimationFrame(animate);
    };

    const start = () => {
      if (running || !visible) return;
      running = true;
      animationFrameId = requestAnimationFrame(animate);
    };

    const stop = () => {
      running = false;
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = 0;
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stop();
      } else if (visible) {
        start();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !document.hidden) {
          start();
        } else {
          stop();
        }
      },
      { rootMargin: "200px 0px" },
    );

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    resize();
    observer.observe(canvas);

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseout", handleMouseLeave);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      stop();
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        "pointer-events-none absolute inset-0 block h-full w-full opacity-70",
        className,
      )}
    />
  );
}

function buildGlowSprite(tone: "cool" | "warm" = "cool"): HTMLCanvasElement {
  const size = SPRITE_RADIUS * 2;
  const sprite = document.createElement("canvas");
  sprite.width = size;
  sprite.height = size;
  const sctx = sprite.getContext("2d")!;

  const cx = size / 2;
  const cy = size / 2;

  const halo = sctx.createRadialGradient(cx, cy, 0, cx, cy, SPRITE_RADIUS);
  if (tone === "warm") {
    halo.addColorStop(0, "rgba(255, 248, 220, 0.78)");
    halo.addColorStop(0.22, "rgba(255, 224, 150, 0.32)");
    halo.addColorStop(0.55, "rgba(245, 180, 0, 0.12)");
    halo.addColorStop(1, "rgba(245, 180, 0, 0)");
  } else {
    halo.addColorStop(0, "rgba(255, 255, 255, 0.78)");
    halo.addColorStop(0.22, "rgba(220, 232, 255, 0.32)");
    halo.addColorStop(0.55, "rgba(190, 210, 255, 0.1)");
    halo.addColorStop(1, "rgba(190, 210, 255, 0)");
  }
  sctx.fillStyle = halo;
  sctx.beginPath();
  sctx.arc(cx, cy, SPRITE_RADIUS, 0, Math.PI * 2);
  sctx.fill();

  return sprite;
}
