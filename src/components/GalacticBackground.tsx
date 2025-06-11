
import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  prevZ: number;
  size: number;
  opacity: number;
}

const GalacticBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars = useRef<Star[]>([]);
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

    // Initialize stars for galactic effect
    const initStars = () => {
      stars.current = [];
      const starCount = Math.floor((window.innerWidth * window.innerHeight) / 25000);
      
      for (let i = 0; i < starCount; i++) {
        stars.current.push({
          x: (Math.random() - 0.5) * 2000,
          y: (Math.random() - 0.5) * 2000,
          z: Math.random() * 1000,
          prevZ: Math.random() * 1000,
          size: Math.random() * 0.8 + 0.2,
          opacity: Math.random() * 0.15 + 0.02
        });
      }
    };

    initStars();

    const animate = () => {
      ctx.fillStyle = 'rgba(14, 14, 14, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      stars.current.forEach((star) => {
        star.prevZ = star.z;
        star.z -= 0.1;

        if (star.z <= 0) {
          star.x = (Math.random() - 0.5) * 2000;
          star.y = (Math.random() - 0.5) * 2000;
          star.z = 1000;
          star.prevZ = 1000;
        }

        const x = (star.x / star.z) * 100 + centerX;
        const y = (star.y / star.z) * 100 + centerY;
        const prevX = (star.x / star.prevZ) * 100 + centerX;
        const prevY = (star.y / star.prevZ) * 100 + centerY;

        const size = (1 - star.z / 1000) * star.size * 2;
        const opacity = (1 - star.z / 1000) * star.opacity;

        if (x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height) {
          ctx.save();
          ctx.globalAlpha = opacity;
          
          // Draw star trail
          ctx.strokeStyle = '#d2af61';
          ctx.lineWidth = Math.max(size * 0.5, 0.1);
          ctx.beginPath();
          ctx.moveTo(prevX, prevY);
          ctx.lineTo(x, y);
          ctx.stroke();

          // Draw star
          ctx.fillStyle = '#d2af61';
          ctx.shadowBlur = size * 2;
          ctx.shadowColor = '#d2af61';
          ctx.beginPath();
          ctx.arc(x, y, Math.max(size, 0.5), 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
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

export default GalacticBackground;
