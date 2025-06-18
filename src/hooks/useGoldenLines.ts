
import { useEffect, useRef } from 'react';

export const useGoldenLines = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createFlowingLine = (direction: 'horizontal' | 'vertical') => {
      const line = document.createElement('div');
      line.className = 'elegant-golden-line';
      
      const thickness = Math.random() * 1.5 + 0.3;
      const opacity = Math.random() * 0.4 + 0.15;
      const duration = Math.random() * 15 + 20;
      const delay = Math.random() * 8;
      const blur = Math.random() * 2;
      
      if (direction === 'horizontal') {
        line.style.cssText = `
          position: absolute;
          width: 100vw;
          height: ${thickness}px;
          left: -100vw;
          top: ${Math.random() * 100}%;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(212, 175, 55, ${opacity * 0.2}) 15%, 
            rgba(212, 175, 55, ${opacity}) 50%, 
            rgba(212, 175, 55, ${opacity * 0.2}) 85%, 
            transparent 100%
          );
          filter: blur(${blur}px);
          box-shadow: 0 0 ${blur * 3}px rgba(212, 175, 55, ${opacity * 0.3});
          animation: elegantHorizontalFlow ${duration}s ease-in-out ${delay}s infinite;
          pointer-events: none;
          z-index: 1;
        `;
      } else {
        line.style.cssText = `
          position: absolute;
          width: ${thickness}px;
          height: 100vh;
          left: ${Math.random() * 100}%;
          top: -100vh;
          background: linear-gradient(180deg, 
            transparent 0%, 
            rgba(212, 175, 55, ${opacity * 0.2}) 15%, 
            rgba(212, 175, 55, ${opacity}) 50%, 
            rgba(212, 175, 55, ${opacity * 0.2}) 85%, 
            transparent 100%
          );
          filter: blur(${blur}px);
          box-shadow: 0 0 ${blur * 3}px rgba(212, 175, 55, ${opacity * 0.3});
          animation: elegantVerticalFlow ${duration}s ease-in-out ${delay}s infinite;
          pointer-events: none;
          z-index: 1;
        `;
      }
      
      container.appendChild(line);
      
      setTimeout(() => {
        if (container.contains(line)) {
          container.removeChild(line);
        }
      }, (duration + delay) * 1000);
    };

    const horizontalInterval = setInterval(() => createFlowingLine('horizontal'), 6000);
    const verticalInterval = setInterval(() => createFlowingLine('vertical'), 8000);

    for (let i = 0; i < 6; i++) {
      setTimeout(() => createFlowingLine('horizontal'), i * 3000);
      setTimeout(() => createFlowingLine('vertical'), i * 4000 + 1500);
    }

    return () => {
      clearInterval(horizontalInterval);
      clearInterval(verticalInterval);
    };
  }, []);

  return containerRef;
};
