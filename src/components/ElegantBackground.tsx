
import { useEffect, useRef } from 'react';

const ElegantBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create a flowing golden line element
    const createFlowingLine = () => {
      const line = document.createElement('div');
      line.className = 'flowing-golden-line';
      
      // Random properties for natural variation
      const isVertical = Math.random() > 0.4;
      const thickness = Math.random() * 2 + 0.5; // 0.5px to 2.5px
      const opacity = Math.random() * 0.4 + 0.1; // 0.1 to 0.5
      const duration = Math.random() * 20 + 15; // 15-35 seconds
      const delay = Math.random() * 10; // 0-10 seconds delay
      
      if (isVertical) {
        // Vertical lines
        line.style.cssText = `
          position: absolute;
          width: ${thickness}px;
          height: 100vh;
          left: ${Math.random() * 100}%;
          top: -100vh;
          background: linear-gradient(180deg, 
            transparent 0%, 
            rgba(212, 175, 55, ${opacity * 0.3}) 20%, 
            rgba(212, 175, 55, ${opacity}) 50%, 
            rgba(212, 175, 55, ${opacity * 0.3}) 80%, 
            transparent 100%
          );
          filter: blur(${Math.random() * 1.5}px);
          animation: verticalFlow ${duration}s ease-in-out ${delay}s infinite;
          pointer-events: none;
        `;
      } else {
        // Horizontal lines
        line.style.cssText = `
          position: absolute;
          width: 100vw;
          height: ${thickness}px;
          left: -100vw;
          top: ${Math.random() * 100}%;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(212, 175, 55, ${opacity * 0.3}) 20%, 
            rgba(212, 175, 55, ${opacity}) 50%, 
            rgba(212, 175, 55, ${opacity * 0.3}) 80%, 
            transparent 100%
          );
          filter: blur(${Math.random() * 1.5}px);
          animation: horizontalFlow ${duration}s ease-in-out ${delay}s infinite;
          pointer-events: none;
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

    // Create diagonal flowing lines
    const createDiagonalLine = () => {
      const line = document.createElement('div');
      line.className = 'diagonal-golden-line';
      
      const thickness = Math.random() * 1.5 + 0.5;
      const opacity = Math.random() * 0.3 + 0.1;
      const duration = Math.random() * 25 + 20;
      const delay = Math.random() * 8;
      const angle = Math.random() * 60 - 30; // -30 to 30 degrees
      
      line.style.cssText = `
        position: absolute;
        width: 150vw;
        height: ${thickness}px;
        left: -75vw;
        top: ${Math.random() * 100}%;
        background: linear-gradient(90deg, 
          transparent 0%, 
          rgba(212, 175, 55, ${opacity * 0.2}) 30%, 
          rgba(212, 175, 55, ${opacity}) 50%, 
          rgba(212, 175, 55, ${opacity * 0.2}) 70%, 
          transparent 100%
        );
        filter: blur(${Math.random() * 1}px);
        transform: rotate(${angle}deg);
        animation: diagonalFlow ${duration}s ease-in-out ${delay}s infinite;
        pointer-events: none;
      `;
      
      container.appendChild(line);
      
      setTimeout(() => {
        if (container.contains(line)) {
          container.removeChild(line);
        }
      }, (duration + delay) * 1000);
    };

    // Create glowing orbs that fade in and out
    const createGlowingOrb = () => {
      const orb = document.createElement('div');
      orb.className = 'glowing-orb';
      
      const size = Math.random() * 100 + 50; // 50-150px
      const opacity = Math.random() * 0.2 + 0.05;
      const duration = Math.random() * 15 + 10;
      const delay = Math.random() * 5;
      
      orb.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        background: radial-gradient(circle, 
          rgba(212, 175, 55, ${opacity}) 0%, 
          rgba(212, 175, 55, ${opacity * 0.5}) 30%, 
          transparent 70%
        );
        border-radius: 50%;
        filter: blur(${Math.random() * 15 + 10}px);
        animation: orbPulse ${duration}s ease-in-out ${delay}s infinite;
        pointer-events: none;
      `;
      
      container.appendChild(orb);
      
      setTimeout(() => {
        if (container.contains(orb)) {
          container.removeChild(orb);
        }
      }, (duration + delay) * 1000);
    };

    // Create lines at different intervals for natural flow
    const verticalInterval = setInterval(createFlowingLine, 8000);
    const horizontalInterval = setInterval(createFlowingLine, 6000);
    const diagonalInterval = setInterval(createDiagonalLine, 12000);
    const orbInterval = setInterval(createGlowingOrb, 15000);

    // Create initial elements
    for (let i = 0; i < 5; i++) {
      setTimeout(() => createFlowingLine(), i * 2000);
      setTimeout(() => createDiagonalLine(), i * 3000 + 1000);
    }
    for (let i = 0; i < 3; i++) {
      setTimeout(() => createGlowingOrb(), i * 5000 + 2000);
    }

    return () => {
      clearInterval(verticalInterval);
      clearInterval(horizontalInterval);
      clearInterval(diagonalInterval);
      clearInterval(orbInterval);
    };
  }, []);

  return (
    <>
      <div 
        ref={containerRef}
        className="fixed inset-0 overflow-hidden"
        style={{ zIndex: 0 }}
      />
      
      {/* Add the keyframe animations via style tag */}
      <style>{`
        @keyframes verticalFlow {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
          }
        }
        
        @keyframes horizontalFlow {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(100vw) translateY(${Math.random() * 50 - 25}px);
            opacity: 0;
          }
        }
        
        @keyframes diagonalFlow {
          0% {
            transform: translateX(-20vw) translateY(0) rotate(${Math.random() * 60 - 30}deg);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            transform: translateX(20vw) translateY(${Math.random() * 100 - 50}px) rotate(${Math.random() * 60 - 30}deg);
            opacity: 0;
          }
        }
        
        @keyframes orbPulse {
          0%, 100% {
            transform: scale(0.8);
            opacity: 0;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default ElegantBackground;
