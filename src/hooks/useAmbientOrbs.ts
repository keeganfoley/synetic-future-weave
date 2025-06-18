
import { useEffect } from 'react';

export const useAmbientOrbs = (containerRef: React.RefObject<HTMLDivElement>) => {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createAmbientOrb = () => {
      const orb = document.createElement('div');
      orb.className = 'ambient-light-orb';
      
      const size = Math.random() * 120 + 80;
      const opacity = Math.random() * 0.15 + 0.05;
      const duration = Math.random() * 20 + 25;
      const delay = Math.random() * 10;
      
      orb.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        background: radial-gradient(circle, 
          rgba(212, 175, 55, ${opacity}) 0%, 
          rgba(212, 175, 55, ${opacity * 0.6}) 25%, 
          rgba(212, 175, 55, ${opacity * 0.2}) 50%, 
          transparent 70%
        );
        border-radius: 50%;
        filter: blur(${Math.random() * 20 + 15}px);
        animation: ambientPulse ${duration}s ease-in-out ${delay}s infinite;
        pointer-events: none;
        z-index: 0;
      `;
      
      container.appendChild(orb);
      
      setTimeout(() => {
        if (container.contains(orb)) {
          container.removeChild(orb);
        }
      }, (duration + delay) * 1000);
    };

    const orbInterval = setInterval(createAmbientOrb, 18000);

    for (let i = 0; i < 3; i++) {
      setTimeout(() => createAmbientOrb(), i * 8000 + 3000);
    }

    return () => {
      clearInterval(orbInterval);
    };
  }, [containerRef]);
};
