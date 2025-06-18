
import { useEffect, useRef } from 'react';

export const useGoldenLines = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createHorizontalLine = () => {
      const line = document.createElement('div');
      line.className = 'elegant-golden-line';
      
      const opacity = Math.random() * 0.4 + 0.2; // More consistent opacity
      const duration = Math.random() * 15 + 20; // Slower, more peaceful
      const delay = Math.random() * 3;
      
      line.style.cssText = `
        position: absolute;
        width: 100vw;
        height: 1px;
        left: -100vw;
        top: ${Math.random() * 100}%;
        background: rgba(212, 175, 55, ${opacity});
        animation: elegantHorizontalFlow ${duration}s linear infinite;
        animation-delay: ${delay}s;
        pointer-events: none;
        z-index: 1;
      `;
      
      container.appendChild(line);
      
      setTimeout(() => {
        if (container.contains(line)) {
          container.removeChild(line);
        }
      }, (duration + delay) * 1000);
    };

    const createVerticalLine = () => {
      const line = document.createElement('div');
      line.className = 'elegant-golden-line';
      
      const opacity = Math.random() * 0.4 + 0.2; // More consistent opacity
      const duration = Math.random() * 18 + 25; // Slower vertical drift
      const delay = Math.random() * 3;
      
      line.style.cssText = `
        position: absolute;
        width: 1px;
        height: 100vh;
        left: ${Math.random() * 100}%;
        top: -100vh;
        background: rgba(212, 175, 55, ${opacity});
        animation: elegantVerticalFlow ${duration}s linear infinite;
        animation-delay: ${delay}s;
        pointer-events: none;
        z-index: 1;
      `;
      
      container.appendChild(line);
      
      setTimeout(() => {
        if (container.contains(line)) {
          container.removeChild(line);
        }
      }, (duration + delay) * 1000);
    };

    // Create initial lines - fewer for cleaner look
    for (let i = 0; i < 4; i++) {
      setTimeout(() => createHorizontalLine(), i * 3000);
    }
    
    for (let i = 0; i < 3; i++) {
      setTimeout(() => createVerticalLine(), i * 4000 + 1000);
    }

    // Less frequent creation for peaceful effect
    const horizontalInterval = setInterval(createHorizontalLine, 8000);
    const verticalInterval = setInterval(createVerticalLine, 10000);

    return () => {
      clearInterval(horizontalInterval);
      clearInterval(verticalInterval);
    };
  }, []);

  return containerRef;
};
