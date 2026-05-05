"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/app/_lib/cn";

export function ParticleCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let mouse = { x: -1000, y: -1000, radius: 100 };

    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      color: string;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = Math.random() * 1.4 + 0.4;
        this.density = Math.random() * 12 + 2;
        
        // Stars: white with slight warm/cool tint variation
        const r = Math.floor(220 + Math.random() * 35);
        const g = Math.floor(220 + Math.random() * 35);
        const b = Math.floor(230 + Math.random() * 25);
        this.color = `rgb(${r}, ${g}, ${b})`;
      }

      draw() {
        if (!ctx) return;
        // Glow effect
        ctx.save();
        ctx.shadowColor = 'rgba(200, 220, 255, 0.9)';
        ctx.shadowBlur = this.size * 6;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        // Brighter core
        ctx.shadowBlur = this.size * 2;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 0.45, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }

      update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius && distance > 0) {
           let forceDirectionX = dx / distance;
           let forceDirectionY = dy / distance;
           // Softer force: weaker at edges, stronger at center
           let force = (mouse.radius - distance) / mouse.radius;
           force = force * force; // quadratic falloff for gentleness
           
           let directionX = forceDirectionX * force * this.density;
           let directionY = forceDirectionY * force * this.density;

           // Gently repel away from cursor
           this.x -= directionX;
           this.y -= directionY;
        }

        // Spring back to base position smoothly
        this.x += (this.baseX - this.x) * 0.04;
        this.y += (this.baseY - this.y) * 0.04;
        this.draw();
      }
    }

    const init = (width: number, height: number) => {
      particles = [];
      const numParticles = Math.min((width * height) / 5000, 500); 
      for (let i = 0; i < numParticles; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;
        particles.push(new Particle(x, y));
      }
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      
      init(rect.width, rect.height);
    };

    const animate = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      
      // Connect nearby particles with thin lines
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          let dx = particles[a].x - particles[b].x;
          let dy = particles[a].y - particles[b].y;
          let distSq = dx * dx + dy * dy;

          if (distSq < 8000) {
            let opacity = (1 - distSq / 8000) * 0.22;
            ctx.strokeStyle = `rgba(180, 200, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    resize();
    animate();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none absolute inset-0 block h-full w-full opacity-70", className)}
    />
  );
}
