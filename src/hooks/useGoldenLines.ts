
import { useEffect, useRef } from 'react';

export const useGoldenLines = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createHorizontalLine = () => {
      const line = document.createElement('div');
      line.className = 'elegant-golden-line';
      
      const thickness = Math.random() * 0.8 + 0.4; // Very thin lines like in reference
      const opacity = Math.random() * 0.3 + 0.1; // Subtle opacity
      const duration = Math.random() * 25 + 30; // Slower, more peaceful
      const delay = Math.random() * 5;
      const blur = Math.random() * 1.5 + 0.5; // Gentle blur for depth
      
      line.style.cssText = `
        position: absolute;
        width: 100vw;
        height: ${thickness}px;
        left: -100vw;
        top: ${Math.random() * 100}%;
        background: linear-gradient(90deg, 
          transparent 0%, 
          rgba(212, 175, 55, ${opacity * 0.1}) 10%, 
          rgba(212, 175, 55, ${opacity}) 50%, 
          rgba(212, 175, 55, ${opacity * 0.1}) 90%, 
          transparent 100%
        );
        filter: blur(${blur}px);
        box-shadow: 0 0 ${blur * 2}px rgba(212, 175, 55, ${opacity * 0.2});
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
      
      const thickness = Math.random() * 0.8 + 0.4; // Very thin lines like in reference
      const opacity = Math.random() * 0.3 + 0.1; // Subtle opacity
      const duration = Math.random() * 30 + 35; // Slower vertical drift
      const delay = Math.random() * 5;
      const blur = Math.random() * 1.5 + 0.5; // Gentle blur for depth
      
      line.style.cssText = `
        position: absolute;
        width: ${thickness}px;
        height: 100vh;
        left: ${Math.random() * 100}%;
        top: -100vh;
        background: linear-gradient(180deg, 
          transparent 0%, 
          rgba(212, 175, 55, ${opacity * 0.1}) 10%, 
          rgba(212, 175, 55, ${opacity}) 50%, 
          rgba(212, 175, 55, ${opacity * 0.1}) 90%, 
          transparent 100%
        );
        filter: blur(${blur}px);
        box-shadow: 0 0 ${blur * 2}px rgba(212, 175, 55, ${opacity * 0.2});
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

    // Create initial lines to match reference density
    for (let i = 0; i < 8; i++) {
      setTimeout(() => createHorizontalLine(), i * 4000);
    }
    
    for (let i = 0; i < 6; i++) {
      setTimeout(() => createVerticalLine(), i * 5000 + 2000);
    }

    // Continuous creation intervals - less frequent for peaceful effect
    const horizontalInterval = setInterval(createHorizontalLine, 12000);
    const verticalInterval = setInterval(createVerticalLine, 15000);

    return () => {
      clearInterval(horizontalInterval);
      clearInterval(verticalInterval);
    };
  }, []);

  return containerRef;
};
