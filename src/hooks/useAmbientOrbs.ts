
import { useEffect } from 'react';

export const useAmbientOrbs = (containerRef: React.RefObject<HTMLDivElement>) => {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createAmbientOrb = () => {
      const orb = document.createElement('div');
      orb.className = 'ambient-light-orb';
      
      const size = Math.random() * 80 + 60; // Smaller, more subtle orbs
      const opacity = Math.random() * 0.08 + 0.02; // Much more subtle
      const duration = Math.random() * 30 + 40; // Slower, more peaceful
      const delay = Math.random() * 15;
      
      orb.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        background: radial-gradient(circle, 
          rgba(212, 175, 55, ${opacity}) 0%, 
          rgba(212, 175, 55, ${opacity * 0.5}) 30%, 
          rgba(212, 175, 55, ${opacity * 0.1}) 60%, 
          transparent 80%
        );
        border-radius: 50%;
        filter: blur(${Math.random() * 25 + 20}px);
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

    // Much less frequent orb creation for subtlety
    const orbInterval = setInterval(createAmbientOrb, 25000);

    // Create fewer initial orbs
    for (let i = 0; i < 2; i++) {
      setTimeout(() => createAmbientOrb(), i * 12000 + 5000);
    }

    return () => {
      clearInterval(orbInterval);
    };
  }, [containerRef]);
};
