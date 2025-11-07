"use client";

import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.2, // Increased from 0.5 to 1.2 for medium speed
        vy: (Math.random() - 0.5) * 1.2, // Increased from 0.5 to 1.2 for medium speed
        size: Math.random() * 2 + 1,
      });
    }

    let mouseX = 0;
    let mouseY = 0;
    let scrollY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const isDarkMode = document.documentElement.classList.contains("dark");
      
      particles.forEach((particle, index) => {
        // Update position with base velocity
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Add subtle drift based on scroll
        const scrollInfluence = Math.sin(scrollY * 0.002 + index * 0.1) * 0.5; // Increased scroll influence
        particle.x += scrollInfluence;
        particle.y += Math.cos(scrollY * 0.002 + index * 0.1) * 0.4; // Increased scroll influence

        // Mouse interaction with stronger effect
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
          const force = (200 - distance) / 200;
          particle.vx -= (dx / distance) * force * 0.15;
          particle.vy -= (dy / distance) * force * 0.15;
        }

        // Boundary check with wrapping
        if (particle.x < -10) particle.x = canvas.width + 10;
        if (particle.x > canvas.width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = canvas.height + 10;
        if (particle.y > canvas.height + 10) particle.y = -10;

        // Damping
        particle.vx *= 0.98;
        particle.vy *= 0.98;

        // Draw particle with pulsing effect
        const pulseSize = particle.size + Math.sin(Date.now() * 0.002 + index) * 0.5;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2);
        
        if (isDarkMode) {
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, pulseSize * 3
          );
          gradient.addColorStop(0, "rgba(209, 213, 219, 1)");
          gradient.addColorStop(0.4, "rgba(156, 163, 175, 0.8)");
          gradient.addColorStop(1, "rgba(107, 114, 128, 0)");
          ctx.fillStyle = gradient;
        } else {
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, pulseSize * 3
          );
          gradient.addColorStop(0, "rgba(75, 85, 99, 1)");
          gradient.addColorStop(0.4, "rgba(107, 114, 128, 0.7)");
          gradient.addColorStop(1, "rgba(156, 163, 175, 0)");
          ctx.fillStyle = gradient;
        }
        
        ctx.fill();
        
        // Add glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = isDarkMode ? "rgba(209, 213, 219, 0.6)" : "rgba(75, 85, 99, 0.5)";
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw connections
        particles.slice(index + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            const opacity = (1 - distance / 120) * 0.8; // Increased from 0.5 to 0.8
            ctx.strokeStyle = isDarkMode
              ? `rgba(209, 213, 219, ${opacity})` // Brighter: gray-300
              : `rgba(75, 85, 99, ${opacity})`; // Brighter: gray-600
            ctx.lineWidth = 1.5; // Increased from 1 to 1.5
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particle-canvas opacity-70 dark:opacity-60"
    />
  );
}
