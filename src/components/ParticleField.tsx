
import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
  pulsePhase: number;
}

const ParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationFrame = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize atmospheric particles with neural-like behavior
    const initParticles = () => {
      particles.current = [];
      const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 50000);
      
      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.03,
          vy: (Math.random() - 0.5) * 0.03,
          size: Math.random() * 0.6 + 0.2,
          opacity: Math.random() * 0.08 + 0.02,
          life: Math.random() * 800 + 400,
          pulsePhase: Math.random() * Math.PI * 2
        });
      }
    };

    initParticles();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw intelligent connection networks
      particles.current.forEach((particle, i) => {
        particles.current.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 140) {
            ctx.save();
            const connectionOpacity = (140 - distance) / 140 * 0.012;
            ctx.globalAlpha = connectionOpacity;
            ctx.strokeStyle = '#b48b3c';
            ctx.lineWidth = 0.4;
            ctx.shadowBlur = 2;
            ctx.shadowColor = '#b48b3c';
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      // Update and draw atmospheric particles
      particles.current.forEach((particle, index) => {
        // Autonomous neural motion
        particle.x += particle.vx + Math.sin(particle.pulsePhase) * 0.01;
        particle.y += particle.vy + Math.cos(particle.pulsePhase) * 0.01;
        particle.pulsePhase += 0.02;
        particle.life--;

        // Intelligent edge wrapping
        if (particle.x < -10) particle.x = canvas.width + 10;
        if (particle.x > canvas.width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = canvas.height + 10;
        if (particle.y > canvas.height + 10) particle.y = -10;

        // Regenerate particle with new neural characteristics
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = Math.random() * 800 + 400;
          particle.opacity = Math.random() * 0.08 + 0.02;
          particle.pulsePhase = Math.random() * Math.PI * 2;
        }

        // Draw refined atmospheric particle
        const pulseOpacity = particle.opacity * (0.8 + 0.4 * Math.sin(particle.pulsePhase));
        ctx.save();
        ctx.globalAlpha = pulseOpacity;
        ctx.fillStyle = '#b48b3c';
        ctx.shadowBlur = 6;
        ctx.shadowColor = '#b48b3c';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationFrame.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default ParticleField;
