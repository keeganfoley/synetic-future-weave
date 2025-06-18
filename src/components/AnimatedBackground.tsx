
import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Enhanced scroll-responsive motion
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const ambientGlows = container.querySelectorAll('.ambient-glow');
      
      ambientGlows.forEach((glow, index) => {
        const element = glow as HTMLElement;
        const speed = 0.1 + (index * 0.05);
        element.style.transform = `translateY(${scrollY * speed}px) rotate(${scrollY * 0.02}deg)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Create constellation lines with enhanced motion
    const createConstellationLine = () => {
      const line = document.createElement('div');
      line.className = 'constellation-line';
      line.style.left = Math.random() * 100 + '%';
      line.style.animationDelay = Math.random() * 20 + 's';
      container.appendChild(line);

      // Remove after animation
      setTimeout(() => {
        if (container.contains(line)) {
          container.removeChild(line);
        }
      }, 20000);
    };

    // Create floating matrix dots with scroll-responsive motion
    const createMatrixDot = () => {
      const dot = document.createElement('div');
      dot.className = 'matrix-dot scroll-responsive';
      dot.style.left = Math.random() * 100 + '%';
      dot.style.top = Math.random() * 100 + '%';
      dot.style.animationDelay = Math.random() * 3 + 's';
      container.appendChild(dot);

      // Remove after animation cycles
      setTimeout(() => {
        if (container.contains(dot)) {
          container.removeChild(dot);
        }
      }, 12000);
    };

    // Create elements periodically
    const lineInterval = setInterval(createConstellationLine, 4000);
    const dotInterval = setInterval(createMatrixDot, 2500);

    // Initial elements
    for (let i = 0; i < 4; i++) {
      setTimeout(createConstellationLine, i * 1000);
      setTimeout(createMatrixDot, i * 500);
    }

    return () => {
      clearInterval(lineInterval);
      clearInterval(dotInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    >
      {/* Enhanced ambient floating glows with scroll motion */}
      <div className="absolute top-1/4 left-1/6 ambient-glow"></div>
      <div className="absolute bottom-1/3 right-1/5 ambient-glow" style={{ animationDelay: '-4s' }}></div>
      <div className="absolute top-2/3 left-2/3 ambient-glow" style={{ animationDelay: '-2s' }}></div>
      <div className="absolute top-1/2 right-1/4 ambient-glow" style={{ animationDelay: '-6s' }}></div>
    </div>
  );
};

export default AnimatedBackground;
