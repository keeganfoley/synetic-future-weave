
import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    if (!container) return;

    // Create fewer, simpler elements
    const createStarfieldDot = () => {
      const dot = document.createElement('div');
      dot.className = 'starfield-dot';
      dot.style.left = Math.random() * 100 + '%';
      dot.style.top = Math.random() * 100 + '%';
      dot.style.animationDelay = Math.random() * 4 + 's';
      container.appendChild(dot);

      // Remove after shorter duration
      setTimeout(() => {
        if (container.contains(dot)) {
          container.removeChild(dot);
        }
      }, 8000);
    };

    // Create elements less frequently
    const dotInterval = setInterval(createStarfieldDot, 8000);

    // Create fewer initial elements
    for (let i = 0; i < 3; i++) {
      setTimeout(createStarfieldDot, i * 2000);
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
      {/* Simplified ambient glows */}
      <div className="absolute top-1/4 left-1/6 ambient-glow"></div>
      <div className="absolute bottom-1/3 right-1/5 ambient-glow" style={{ animationDelay: '-4s' }}></div>
    </div>
  );
};

export default AnimatedBackground;
