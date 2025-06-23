
import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create subtle starfield dots
    const createStarfieldDot = () => {
      const dot = document.createElement('div');
      dot.className = 'starfield-dot';
      dot.style.left = Math.random() * 100 + '%';
      dot.style.top = Math.random() * 100 + '%';
      dot.style.animationDelay = Math.random() * 4 + 's';
      container.appendChild(dot);

      // Remove after animation cycles
      setTimeout(() => {
        if (container.contains(dot)) {
          container.removeChild(dot);
        }
      }, 12000);
    };

    // Create elements periodically
    const dotInterval = setInterval(createStarfieldDot, 4000);

    // Initial elements
    for (let i = 0; i < 5; i++) {
      setTimeout(createStarfieldDot, i * 800);
    }

    return () => {
      clearInterval(dotInterval);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    >
      {/* Ambient floating glows */}
      <div className="absolute top-1/4 left-1/6 ambient-glow"></div>
      <div className="absolute bottom-1/3 right-1/5 ambient-glow" style={{ animationDelay: '-4s' }}></div>
      <div className="absolute top-2/3 left-2/3 ambient-glow" style={{ animationDelay: '-2s' }}></div>
    </div>
  );
};

export default AnimatedBackground;
