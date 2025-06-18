
import { useEffect, useRef } from 'react';

const ElegantBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create elegant flowing golden lines
    const createFlowingLine = (direction: 'horizontal' | 'vertical') => {
      const line = document.createElement('div');
      line.className = 'elegant-golden-line';
      
      // Varied properties for natural depth and movement
      const thickness = Math.random() * 1.5 + 0.3; // 0.3px to 1.8px
      const opacity = Math.random() * 0.4 + 0.15; // 0.15 to 0.55
      const duration = Math.random() * 15 + 20; // 20-35 seconds for smooth, cinematic movement
      const delay = Math.random() * 8; // 0-8 seconds delay
      const blur = Math.random() * 2; // 0-2px blur for depth
      
      if (direction === 'horizontal') {
        // Horizontal lines flowing left to right
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
        // Vertical lines flowing top to bottom
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
      
      // Remove line after animation completes
      setTimeout(() => {
        if (container.contains(line)) {
          container.removeChild(line);
        }
      }, (duration + delay) * 1000);
    };

    // Create ambient light orbs for depth
    const createAmbientOrb = () => {
      const orb = document.createElement('div');
      orb.className = 'ambient-light-orb';
      
      const size = Math.random() * 120 + 80; // 80-200px
      const opacity = Math.random() * 0.15 + 0.05; // Very subtle
      const duration = Math.random() * 20 + 25; // Slow, meditative movement
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

    // Create lines at different intervals for natural, organic flow
    const horizontalInterval = setInterval(() => createFlowingLine('horizontal'), 6000);
    const verticalInterval = setInterval(() => createFlowingLine('vertical'), 8000);
    const orbInterval = setInterval(createAmbientOrb, 18000);

    // Create initial elements with staggered timing
    for (let i = 0; i < 6; i++) {
      setTimeout(() => createFlowingLine('horizontal'), i * 3000);
      setTimeout(() => createFlowingLine('vertical'), i * 4000 + 1500);
    }
    for (let i = 0; i < 3; i++) {
      setTimeout(() => createAmbientOrb(), i * 8000 + 3000);
    }

    return () => {
      clearInterval(horizontalInterval);
      clearInterval(verticalInterval);
      clearInterval(orbInterval);
    };
  }, []);

  return (
    <>
      <div 
        ref={containerRef}
        className="fixed inset-0 overflow-hidden bg-gradient-to-br from-black via-gray-950 to-black"
        style={{ zIndex: 0 }}
      />
      
      {/* Elegant animation keyframes */}
      <style>{`
        @keyframes elegantHorizontalFlow {
          0% {
            transform: translateX(0);
            opacity: 0;
          }
          8% {
            opacity: 0.3;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          92% {
            opacity: 0.3;
          }
          100% {
            transform: translateX(100vw);
            opacity: 0;
          }
        }
        
        @keyframes elegantVerticalFlow {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          8% {
            opacity: 0.3;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          92% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
        
        @keyframes ambientPulse {
          0%, 100% {
            transform: scale(0.9);
            opacity: 0.1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.3;
          }
        }
        
        /* Subtle parallax effect on scroll */
        .elegant-golden-line {
          transition: transform 0.1s ease-out;
        }
      `}</style>
    </>
  );
};

export default ElegantBackground;
