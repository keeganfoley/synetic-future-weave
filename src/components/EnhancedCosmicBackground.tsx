
import { useEffect, useRef } from 'react';

const EnhancedCosmicBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const activeElements = new Set<HTMLElement>();

    // Create floating stars
    const createStar = () => {
      const star = document.createElement('div');
      star.className = 'cosmic-star';
      
      const size = Math.random() * 3 + 1;
      const opacity = Math.random() * 0.6 + 0.2;
      const duration = Math.random() * 40 + 20;
      
      star.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(212, 175, 55, ${opacity});
        border-radius: 50%;
        left: ${Math.random() * 100}vw;
        top: ${Math.random() * 100}vh;
        animation: starDrift ${duration}s linear infinite;
        pointer-events: none;
        z-index: -10;
        box-shadow: 0 0 ${size * 2}px rgba(212, 175, 55, ${opacity * 0.8});
      `;
      
      container.appendChild(star);
      activeElements.add(star);
      
      setTimeout(() => {
        if (container.contains(star)) {
          container.removeChild(star);
          activeElements.delete(star);
        }
      }, duration * 1000);
    };

    // Create gold glare effects
    const createGoldGlare = () => {
      const glare = document.createElement('div');
      glare.className = 'gold-glare';
      
      const size = Math.random() * 200 + 100;
      const opacity = Math.random() * 0.15 + 0.05;
      const duration = Math.random() * 30 + 15;
      
      glare.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, rgba(212, 175, 55, ${opacity}) 0%, transparent 70%);
        border-radius: 50%;
        left: ${Math.random() * 120}vw;
        top: ${Math.random() * 120}vh;
        animation: glareFloat ${duration}s ease-in-out infinite;
        pointer-events: none;
        z-index: -9;
        filter: blur(20px);
      `;
      
      container.appendChild(glare);
      activeElements.add(glare);
      
      setTimeout(() => {
        if (container.contains(glare)) {
          container.removeChild(glare);
          activeElements.delete(glare);
        }
      }, duration * 1000);
    };

    // Create cosmic rays
    const createCosmicRay = () => {
      const ray = document.createElement('div');
      ray.className = 'cosmic-ray';
      
      const length = Math.random() * 300 + 200;
      const opacity = Math.random() * 0.3 + 0.1;
      const duration = Math.random() * 25 + 15;
      const angle = Math.random() * 360;
      
      ray.style.cssText = `
        position: absolute;
        width: ${length}px;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(212, 175, 55, ${opacity}), transparent);
        left: ${Math.random() * 100}vw;
        top: ${Math.random() * 100}vh;
        transform: rotate(${angle}deg);
        animation: rayTravel ${duration}s linear infinite;
        pointer-events: none;
        z-index: -10;
        filter: blur(0.5px);
      `;
      
      container.appendChild(ray);
      activeElements.add(ray);
      
      setTimeout(() => {
        if (container.contains(ray)) {
          container.removeChild(ray);
          activeElements.delete(ray);
        }
      }, duration * 1000);
    };

    // Initial creation
    for (let i = 0; i < 30; i++) {
      setTimeout(() => createStar(), i * 200);
    }
    
    for (let i = 0; i < 8; i++) {
      setTimeout(() => createGoldGlare(), i * 1000);
    }
    
    for (let i = 0; i < 12; i++) {
      setTimeout(() => createCosmicRay(), i * 800);
    }

    // Continuous creation with performance limits
    const starInterval = setInterval(() => {
      if (activeElements.size < 50) createStar();
    }, 2000);

    const glareInterval = setInterval(() => {
      if (activeElements.size < 50) createGoldGlare();
    }, 4000);

    const rayInterval = setInterval(() => {
      if (activeElements.size < 50) createCosmicRay();
    }, 3000);

    return () => {
      clearInterval(starInterval);
      clearInterval(glareInterval);
      clearInterval(rayInterval);
      activeElements.forEach(element => {
        if (container.contains(element)) {
          container.removeChild(element);
        }
      });
    };
  }, []);

  return (
    <>
      <div 
        ref={containerRef}
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ zIndex: -10 }}
      />
      <style>{`
        @keyframes starDrift {
          0% { transform: translateX(0) translateY(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(-100vw) translateY(-50vh); opacity: 0; }
        }
        
        @keyframes glareFloat {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
          50% { transform: translateY(-30px) scale(1.2); opacity: 0.8; }
        }
        
        @keyframes rayTravel {
          0% { transform: translateX(0) rotate(var(--rotation, 0deg)) scaleX(0); opacity: 0; }
          20% { transform: translateX(0) rotate(var(--rotation, 0deg)) scaleX(1); opacity: 1; }
          80% { transform: translateX(150vw) rotate(var(--rotation, 0deg)) scaleX(1); opacity: 1; }
          100% { transform: translateX(150vw) rotate(var(--rotation, 0deg)) scaleX(0); opacity: 0; }
        }
      `}</style>
    </>
  );
};

export default EnhancedCosmicBackground;
