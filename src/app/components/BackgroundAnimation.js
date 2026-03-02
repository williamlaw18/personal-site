'use client';
import { useLayoutEffect, useRef } from 'react';

export default function BackgroundAnimation() {
  const canvasRef = useRef();

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    // Base twinkling particles
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1.5,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      phase: Math.random() * Math.PI * 2,
      gray: 160 + Math.random() * 40,
    }));

    // Mouse bubble particles
    const bubbles = [];
    let t = 0;
    let lastBubbleTime = 0;

    const animate = () => {
      t += 0.03;

      // Draw gradient background
      const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      grad.addColorStop(0, '#0f2027');
      grad.addColorStop(1, '#2c5364');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw twinkling particles
      particles.forEach(p => {
        const alpha = 0.2 + 0.3 * Math.sin(t + p.phase);
        const radius = p.r + 0.3 * Math.sin(t + p.phase);

        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.gray},${p.gray},${p.gray},${alpha})`;
        ctx.shadowColor = `rgba(${p.gray},${p.gray},${p.gray},${alpha * 1.5})`;
        ctx.shadowBlur = 3;
        ctx.fill();
        ctx.shadowBlur = 0;

        p.x = (p.x + p.dx + canvas.width) % canvas.width;
        p.y = (p.y + p.dy + canvas.height) % canvas.height;
      });

      // Draw bubble particles
      for (let i = bubbles.length - 1; i >= 0; i--) {
        const b = bubbles[i];
        b.x += b.dx;
        b.y += b.dy;
        b.alpha -= 0.005; // fade out

        if (b.alpha <= 0) {
          bubbles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${b.gray},${b.gray},${b.gray},${b.alpha})`;
        ctx.shadowColor = `rgba(${b.gray},${b.gray},${b.gray},${b.alpha * 1.5})`;
        ctx.shadowBlur = 3;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      requestAnimationFrame(animate);
    };

    // Mouse movement spawns bubbles slowly
    const handleMouseMove = (e) => {
      const now = performance.now();
      if (now - lastBubbleTime < 30) return; // spawn max every 150ms
      lastBubbleTime = now;

      bubbles.push({
        x: e.clientX + (Math.random() - 0.5) * 20,
        y: e.clientY + (Math.random() - 0.5) * 20,
        r: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        gray: 180 + Math.random() * 20,
        alpha: 0.3 + Math.random() * 0.2,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resize);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}