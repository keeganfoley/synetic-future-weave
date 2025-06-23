
import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

const OptimizedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars = useRef<Star[]>([]);
  const animationFrame = useRef<number>();
  const lastTime = useRef<number>(0);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

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

    // Initialize fewer stars for better performance
    const initStars = () => {
      stars.current = [];
      const starCount = Math.min(50, Math.floor((window.innerWidth * window.innerHeight) / 50000));
      
      for (let i = 0; i < starCount; i++) {
        stars.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.3 + 0.1,
          speed: Math.random() * 0.2 + 0.1
        });
      }
    };

    initStars();

    const animate = (currentTime: number) => {
      // Limit to 30fps for better performance
      if (currentTime - lastTime.current < 33) {
        animationFrame.current = requestAnimationFrame(animate);
        return;
      }
      lastTime.current = currentTime;

      // Clear with slight transparency for trail effect
      ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw simplified stars
      stars.current.forEach((star) => {
        star.y += star.speed;
        
        // Reset star when it goes off screen
        if (star.y > canvas.height) {
          star.y = -star.size;
          star.x = Math.random() * canvas.width;
        }

        ctx.save();
        ctx.globalAlpha = star.opacity;
        ctx.fillStyle = '#d2af61';
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Check if tab is visible using document.hidden
      if (!document.hidden) {
        animationFrame.current = requestAnimationFrame(animate);
      }
    };

    // Start animation
    animationFrame.current = requestAnimationFrame(animate);

    // Pause/resume when tab visibility changes
    const handleVisibilityChange = () => {
      if (!document.hidden && !animationFrame.current) {
        animationFrame.current = requestAnimationFrame(animate);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0, willChange: 'transform' }}
    />
  );
};

export default OptimizedBackground;
