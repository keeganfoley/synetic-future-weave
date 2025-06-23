
import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  prevZ: number;
  size: number;
  opacity: number;
  originalX: number;
  originalY: number;
}

const GalacticBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars = useRef<Star[]>([]);
  const animationFrame = useRef<number>();
  const mouse = useRef({ x: 0, y: 0 });

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

    // Mouse tracking for parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 0.5;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 0.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Initialize stars for enhanced galactic effect
    const initStars = () => {
      stars.current = [];
      const starCount = Math.floor((window.innerWidth * window.innerHeight) / 20000);
      
      for (let i = 0; i < starCount; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        stars.current.push({
          x,
          y,
          originalX: x,
          originalY: y,
          z: Math.random() * 1000,
          prevZ: Math.random() * 1000,
          size: Math.random() * 1.2 + 0.3,
          opacity: Math.random() * 0.2 + 0.03
        });
      }
    };

    initStars();

    const animate = () => {
      ctx.fillStyle = 'rgba(14, 14, 14, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      stars.current.forEach((star, index) => {
        star.prevZ = star.z;
        star.z -= 0.15;

        // Add mouse parallax effect
        const parallaxStrength = (1 - star.z / 1000) * 50;
        star.x = star.originalX + mouse.current.x * parallaxStrength * (index % 3 + 1);
        star.y = star.originalY + mouse.current.y * parallaxStrength * (index % 3 + 1);

        if (star.z <= 0) {
          star.x = star.originalX = (Math.random() - 0.5) * 2000;
          star.y = star.originalY = (Math.random() - 0.5) * 2000;
          star.z = 1000;
          star.prevZ = 1000;
        }

        const x = (star.x / star.z) * 120 + centerX;
        const y = (star.y / star.z) * 120 + centerY;
        const prevX = (star.x / star.prevZ) * 120 + centerX;
        const prevY = (star.y / star.prevZ) * 120 + centerY;

        const size = (1 - star.z / 1000) * star.size * 2.5;
        const opacity = (1 - star.z / 1000) * star.opacity;

        if (x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height) {
          ctx.save();
          ctx.globalAlpha = opacity;
          
          // Enhanced star trail with glow
          const gradient = ctx.createLinearGradient(prevX, prevY, x, y);
          gradient.addColorStop(0, 'transparent');
          gradient.addColorStop(1, '#d2af61');
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = Math.max(size * 0.6, 0.1);
          ctx.shadowBlur = size * 3;
          ctx.shadowColor = '#d2af61';
          ctx.beginPath();
          ctx.moveTo(prevX, prevY);
          ctx.lineTo(x, y);
          ctx.stroke();

          // Enhanced star with multiple glow layers
          const starGradient = ctx.createRadialGradient(x, y, 0, x, y, size * 2);
          starGradient.addColorStop(0, '#ffffff');
          starGradient.addColorStop(0.3, '#d2af61');
          starGradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = starGradient;
          ctx.shadowBlur = size * 4;
          ctx.shadowColor = '#d2af61';
          ctx.beginPath();
          ctx.arc(x, y, Math.max(size, 0.8), 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      });

      animationFrame.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
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

export default GalacticBackground;
