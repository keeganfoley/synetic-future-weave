
import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Enhanced scroll-responsive motion with atmospheric breathing
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const ambientGlows = container.querySelectorAll('.ambient-glow');
      const vaporWisps = container.querySelectorAll('.vapor-wisp');
      
      ambientGlows.forEach((glow, index) => {
        const element = glow as HTMLElement;
        const speed = 0.08 + (index * 0.03);
        const rotation = scrollY * 0.015;
        element.style.transform = `translateY(${scrollY * speed}px) rotate(${rotation}deg) scale(${1 + scrollY * 0.0001})`;
      });

      vaporWisps.forEach((wisp, index) => {
        const element = wisp as HTMLElement;
        const speed = 0.12 + (index * 0.04);
        element.style.transform = `translateY(${scrollY * speed}px) translateX(${scrollY * 0.02}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Create intelligent dust trails with neural-like behavior
    const createDustTrail = () => {
      const trail = document.createElement('div');
      trail.className = 'dust-trail';
      trail.style.left = Math.random() * 100 + '%';
      trail.style.top = Math.random() * 100 + '%';
      trail.style.animationDelay = Math.random() * 15 + 's';
      trail.style.animationDuration = (Math.random() * 20 + 25) + 's';
      container.appendChild(trail);

      setTimeout(() => {
        if (container.contains(trail)) {
          container.removeChild(trail);
        }
      }, 45000);
    };

    // Create floating neural wisps
    const createNeuralWisp = () => {
      const wisp = document.createElement('div');
      wisp.className = 'neural-wisp';
      wisp.style.left = Math.random() * 100 + '%';
      wisp.style.top = Math.random() * 100 + '%';
      wisp.style.animationDelay = Math.random() * 8 + 's';
      container.appendChild(wisp);

      setTimeout(() => {
        if (container.contains(wisp)) {
          container.removeChild(wisp);
        }
      }, 30000);
    };

    // Create shimmer veins (like marble cracks)
    const createShimmerVein = () => {
      const vein = document.createElement('div');
      vein.className = 'shimmer-vein';
      vein.style.left = Math.random() * 100 + '%';
      vein.style.top = Math.random() * 100 + '%';
      vein.style.transform = `rotate(${Math.random() * 360}deg)`;
      vein.style.animationDelay = Math.random() * 12 + 's';
      container.appendChild(vein);

      setTimeout(() => {
        if (container.contains(vein)) {
          container.removeChild(vein);
        }
      }, 35000);
    };

    // Staggered creation intervals for organic feel
    const dustInterval = setInterval(createDustTrail, 6000);
    const wispInterval = setInterval(createNeuralWisp, 4500);
    const veinInterval = setInterval(createShimmerVein, 8000);

    // Initial atmospheric elements
    for (let i = 0; i < 3; i++) {
      setTimeout(createDustTrail, i * 2000);
      setTimeout(createNeuralWisp, i * 1500);
    }
    for (let i = 0; i < 2; i++) {
      setTimeout(createShimmerVein, i * 4000);
    }

    return () => {
      clearInterval(dustInterval);
      clearInterval(wispInterval);
      clearInterval(veinInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    >
      {/* Atmospheric breathing glows - deeper, more refined */}
      <div className="absolute top-1/5 left-1/8 ambient-glow"></div>
      <div className="absolute bottom-1/4 right-1/6 ambient-glow" style={{ animationDelay: '-6s' }}></div>
      <div className="absolute top-3/5 left-2/3 ambient-glow" style={{ animationDelay: '-3s' }}></div>
      <div className="absolute top-1/3 right-1/5 ambient-glow" style={{ animationDelay: '-9s' }}></div>
      <div className="absolute bottom-1/6 left-1/3 ambient-glow" style={{ animationDelay: '-12s' }}></div>

      {/* Vapor wisps for atmospheric depth */}
      <div className="absolute top-1/6 right-1/4 vapor-wisp"></div>
      <div className="absolute bottom-1/3 left-1/5 vapor-wisp" style={{ animationDelay: '-8s' }}></div>
      <div className="absolute top-2/3 right-1/3 vapor-wisp" style={{ animationDelay: '-4s' }}></div>
    </div>
  );
};

export default AnimatedBackground;
