
import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create constellation lines
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

    // Create matrix dots
    const createMatrixDot = () => {
      const dot = document.createElement('div');
      dot.className = 'matrix-dot';
      dot.style.left = Math.random() * 100 + '%';
      dot.style.top = Math.random() * 100 + '%';
      dot.style.animationDelay = Math.random() * 3 + 's';
      container.appendChild(dot);

      // Remove after animation cycles
      setTimeout(() => {
        if (container.contains(dot)) {
          container.removeChild(dot);
        }
      }, 9000);
    };

    // Create elements periodically
    const lineInterval = setInterval(createConstellationLine, 3000);
    const dotInterval = setInterval(createMatrixDot, 2000);

    // Initial elements
    for (let i = 0; i < 3; i++) {
      setTimeout(createConstellationLine, i * 1000);
      setTimeout(createMatrixDot, i * 500);
    }

    return () => {
      clearInterval(lineInterval);
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
