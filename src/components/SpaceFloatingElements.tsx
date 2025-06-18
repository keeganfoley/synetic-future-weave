
import { useEffect, useRef } from 'react';

const SpaceFloatingElements = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const activeElements = new Set<HTMLElement>();

    const createFloatingOrb = () => {
      const orb = document.createElement('div');
      orb.className = 'space-floating-orb';
      
      const size = Math.random() * 4 + 2; // 2-6px
      const opacity = Math.random() * 0.3 + 0.1; // 0.1-0.4
      const duration = Math.random() * 60 + 40; // 40-100 seconds
      const delay = Math.random() * 10;
      
      orb.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, rgba(212, 175, 55, ${opacity}) 0%, rgba(212, 175, 55, ${opacity * 0.3}) 70%, transparent 100%);
        border-radius: 50%;
        left: ${Math.random() * 100}vw;
        top: ${Math.random() * 100}vh;
        animation: spaceOrbitFloat ${duration}s linear infinite;
        animation-delay: ${delay}s;
        pointer-events: none;
        z-index: -8;
        filter: blur(${Math.random() * 2 + 0.5}px);
        box-shadow: 0 0 ${size * 3}px rgba(212, 175, 55, ${opacity * 0.4});
      `;
      
      container.appendChild(orb);
      activeElements.add(orb);
      
      setTimeout(() => {
        if (container.contains(orb)) {
          container.removeChild(orb);
          activeElements.delete(orb);
        }
      }, (duration + delay) * 1000);
    };

    const createFloatingWisp = () => {
      const wisp = document.createElement('div');
      wisp.className = 'space-floating-wisp';
      
      const width = Math.random() * 100 + 50; // 50-150px
      const height = Math.random() * 30 + 10; // 10-40px
      const opacity = Math.random() * 0.15 + 0.05; // 0.05-0.2
      const duration = Math.random() * 80 + 60; // 60-140 seconds
      const delay = Math.random() * 15;
      
      wisp.style.cssText = `
        position: absolute;
        width: ${width}px;
        height: ${height}px;
        background: linear-gradient(45deg, 
          transparent, 
          rgba(212, 175, 55, ${opacity}), 
          rgba(212, 175, 55, ${opacity * 0.6}),
          transparent
        );
        border-radius: 50%;
        left: ${Math.random() * 120}vw;
        top: ${Math.random() * 120}vh;
        animation: spaceWispDrift ${duration}s ease-in-out infinite;
        animation-delay: ${delay}s;
        pointer-events: none;
        z-index: -9;
        filter: blur(${Math.random() * 8 + 5}px);
        transform: rotate(${Math.random() * 360}deg);
      `;
      
      container.appendChild(wisp);
      activeElements.add(wisp);
      
      setTimeout(() => {
        if (container.contains(wisp)) {
          container.removeChild(wisp);
          activeElements.delete(wisp);
        }
      }, (duration + delay) * 1000);
    };

    // Create initial floating elements
    for (let i = 0; i < 15; i++) {
      setTimeout(() => createFloatingOrb(), i * 400);
    }
    
    for (let i = 0; i < 8; i++) {
      setTimeout(() => createFloatingWisp(), i * 800);
    }

    // Continuous creation
    const orbInterval = setInterval(() => {
      if (activeElements.size < 25) {
        createFloatingOrb();
      }
    }, 3000);

    const wispInterval = setInterval(() => {
      if (activeElements.size < 25) {
        createFloatingWisp();
      }
    }, 5000);

    return () => {
      clearInterval(orbInterval);
      clearInterval(wispInterval);
      activeElements.forEach(element => {
        if (container.contains(element)) {
          container.removeChild(element);
        }
      });
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden"
      style={{ zIndex: -8 }}
    />
  );
};

export default SpaceFloatingElements;
