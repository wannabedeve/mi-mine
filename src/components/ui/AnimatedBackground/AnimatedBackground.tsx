'use client'
import { useEffect, useRef } from 'react';

import gsap from 'gsap';
import './animatedbackground.scss';

type Speed = 'fast' | 'medium' | 'slow' | 'none';
type Density = 'high' | 'medium' | 'low' | number;
interface ParticleOptions {
  particleColor?: string;
  background?: string;
  speed?: Speed;
  density?: Density;
}

class Particle {
  x: number;
  y: number;
  velocity: { x: number; y: number };

  constructor(
    private canvas: HTMLCanvasElement,
    private ctx: CanvasRenderingContext2D,
    private color: string,
    speed: number
  ) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.velocity = {
      x: (Math.random() - 0.5) * speed,
      y: (Math.random() - 0.5) * speed,
    };
  }

  update() {
    if (this.x > this.canvas.width + 20 || this.x < -20) {
      this.velocity.x *= -1;
    }
    if (this.y > this.canvas.height + 20 || this.y < -20) {
      this.velocity.y *= -1;
    }

    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.globalAlpha = 0.7;
    this.ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2);
    this.ctx.fill();
  }
}

export default function ParticleNetwork({
  particleColor = '#888',
  speed = 'medium',
  density = 'high',
}: ParticleOptions) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);

  const resolveSpeed = () => {
    if (speed === 'fast') return 1;
    if (speed === 'slow') return 0.33;
    if (speed === 'none') return 0;
    return 0.66;
  };

  const resolveDensity = () => {
    if (density === 'high') return 5000;
    if (density === 'low') return 20000;
    return typeof density === 'number' ? density : 10000;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = '100%';
      canvas.style.height = '100%';

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    const particleCount =
      (canvas.width * canvas.height) / resolveDensity();

    particles.current = [];
    for (let i = 0; i < particleCount; i++) {
      particles.current.push(
        new Particle(canvas, ctx, particleColor, resolveSpeed())
      );
    }

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.current.length; i++) {
        const p = particles.current[i];
        p.update();
        p.draw();

        for (let j = i + 1; j < particles.current.length; j++) {
          const q = particles.current[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = particleColor;
            ctx.globalAlpha = (120 - dist) / 120;
            ctx.lineWidth = 0.7;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }
    };

    gsap.ticker.add(tick);

    gsap.fromTo(
      canvas,
      { opacity: 0 },
      { opacity: 1, duration: 1.2, ease: 'power2.out' }
    );

    return () => {
      gsap.ticker.remove(tick);
      window.removeEventListener('resize', resize);
    };
  }, [particleColor, speed, density]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        zIndex: 0,
      }}
    >
      {/* Background image */}
      <div className="particle-bg-image" aria-hidden />

      {/* Overlay */}
      <div className="particle-bg-overlay" aria-hidden />

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
