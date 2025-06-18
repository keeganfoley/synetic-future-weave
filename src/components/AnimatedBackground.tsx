
import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Smooth scroll-responsive parallax motion
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const lines = container.querySelectorAll('.futuristic-line');
      const glows = container.querySelectorAll('.ambient-glow');
      
      lines.forEach((line, index) => {
        const element = line as HTMLElement;
        const speed = 0.015 + (index * 0.008);
        const drift = scrollY * speed;
        element.style.transform = `translateY(${drift}px)`;
      });

      glows.forEach((glow, index) => {
        const element = glow as HTMLElement;
        const speed = 0.02 + (index * 0.01);
        element.style.transform = `translateY(${scrollY * speed}px) scale(${1 + scrollY * 0.00001})`;
      });
    };

    // Subtle mouse-responsive motion
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      const lines = container.querySelectorAll('.futuristic-line');
      
      lines.forEach((line, index) => {
        const element = line as HTMLElement;
        const strength = 0.02 + (index * 0.01);
        const offsetX = (mouseX - 0.5) * strength * 10;
        const offsetY = (mouseY - 0.5) * strength * 5;
        element.style.transform += ` translate(${offsetX}px, ${offsetY}px)`;
      });
    };

    // Create smooth horizontal lines
    const createHorizontalLine = (direction: 'left' | 'right') => {
      const line = document.createElement('div');
      line.className = `futuristic-line line-horizontal`;
      line.style.top = Math.random() * 100 + '%';
      line.style.left = direction === 'left' ? '-80vw' : '0';
      line.style.animation = direction === 'left' 
        ? `glide-horizontal-left ${20 + Math.random() * 10}s ease-in-out infinite`
        : `glide-horizontal-right ${20 + Math.random() * 10}s ease-in-out infinite`;
      line.style.animationDelay = Math.random() * 8 + 's';
      container.appendChild(line);

      setTimeout(() => {
        if (container.contains(line)) {
          container.removeChild(line);
        }
      }, 30000);
    };

    // Create smooth vertical lines
    const createVerticalLine = () => {
      const line = document.createElement('div');
      line.className = `futuristic-line line-vertical`;
      line.style.left = Math.random() * 100 + '%';
      line.style.top = '-60vh';
      line.style.animation = `glide-vertical-down ${25 + Math.random() * 10}s ease-in-out infinite`;
      line.style.animationDelay = Math.random() * 12 + 's';
      container.appendChild(line);

      setTimeout(() => {
        if (container.contains(line)) {
          container.removeChild(line);
        }
      }, 35000);
    };

    // Create smooth diagonal lines
    const createDiagonalLine = () => {
      const line = document.createElement('div');
      line.className = `futuristic-line line-diagonal`;
      line.style.left = '-120vw';
      line.style.top = Math.random() * 80 + 10 + '%';
      line.style.animation = `glide-diagonal-sweep ${30 + Math.random() * 15}s ease-in-out infinite`;
      line.style.animationDelay = Math.random() * 10 + 's';
      container.appendChild(line);

      setTimeout(() => {
        if (container.contains(line)) {
          container.removeChild(line);
        }
      }, 45000);
    };

    // Create ambient glow orbs
    const createAmbientGlow = () => {
      const glow = document.createElement('div');
      glow.className = 'ambient-glow';
      glow.style.left = Math.random() * 100 + '%';
      glow.style.top = Math.random() * 100 + '%';
      glow.style.animationDelay = Math.random() * 8 + 's';
      container.appendChild(glow);

      setTimeout(() => {
        if (container.contains(glow)) {
          container.removeChild(glow);
        }
      }, 20000);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    // Staggered, organic element creation with longer intervals for smoother experience
    const horizontalLeftInterval = setInterval(() => createHorizontalLine('left'), 15000);
    const horizontalRightInterval = setInterval(() => createHorizontalLine('right'), 18000);
    const verticalInterval = setInterval(createVerticalLine, 20000);
    const diagonalInterval = setInterval(createDiagonalLine, 25000);
    const glowInterval = setInterval(createAmbientGlow, 12000);

    // Initial ambient elements - fewer for cleaner look
    setTimeout(() => createHorizontalLine('left'), 2000);
    setTimeout(() => createHorizontalLine('right'), 5000);
    setTimeout(createVerticalLine, 8000);
    setTimeout(createDiagonalLine, 12000);
    setTimeout(createAmbientGlow, 3000);
    setTimeout(createAmbientGlow, 15000);

    return () => {
      clearInterval(horizontalLeftInterval);
      clearInterval(horizontalRightInterval);
      clearInterval(verticalInterval);
      clearInterval(diagonalInterval);
      clearInterval(glowInterval);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    >
      {/* Static base layer elements for consistent ambience */}
      <div className="futuristic-line line-horizontal" 
           style={{ 
             top: '25%', 
             left: '-80vw',
             animation: 'glide-horizontal-left 22s ease-in-out infinite',
             animationDelay: '0s' 
           }}>
      </div>
      
      <div className="futuristic-line line-vertical" 
           style={{ 
             left: '80%', 
             top: '-60vh',
             animation: 'glide-vertical-down 28s ease-in-out infinite',
             animationDelay: '-10s' 
           }}>
      </div>

      {/* Static ambient glows */}
      <div className="ambient-glow" style={{ left: '10%', top: '20%' }}></div>
      <div className="ambient-glow" style={{ left: '85%', top: '70%', animationDelay: '-15s' }}></div>
    </div>
  );
};

export default AnimatedBackground;
