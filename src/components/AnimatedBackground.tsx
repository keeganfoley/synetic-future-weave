
import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Enhanced scroll-responsive motion with neural filament behavior
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const neuralFilaments = container.querySelectorAll('.neural-filament');
      const ambientPulses = container.querySelectorAll('.ambient-pulse');
      
      neuralFilaments.forEach((filament, index) => {
        const element = filament as HTMLElement;
        const speed = 0.05 + (index * 0.02);
        const drift = scrollY * speed;
        element.style.transform = `translateX(${drift}px) translateY(${drift * 0.3}px) rotate(${scrollY * 0.01}deg)`;
      });

      ambientPulses.forEach((pulse, index) => {
        const element = pulse as HTMLElement;
        const speed = 0.08 + (index * 0.03);
        element.style.transform = `translateY(${scrollY * speed}px) scale(${1 + scrollY * 0.00005})`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Create flowing neural filaments
    const createNeuralFilament = () => {
      const filament = document.createElement('div');
      filament.className = 'neural-filament';
      filament.style.left = Math.random() * 100 + '%';
      filament.style.top = Math.random() * 100 + '%';
      filament.style.transform = `rotate(${Math.random() * 180}deg)`;
      filament.style.animationDelay = Math.random() * 20 + 's';
      container.appendChild(filament);

      setTimeout(() => {
        if (container.contains(filament)) {
          container.removeChild(filament);
        }
      }, 45000);
    };

    // Create ambient depth pulses
    const createAmbientPulse = () => {
      const pulse = document.createElement('div');
      pulse.className = 'ambient-pulse';
      pulse.style.left = Math.random() * 100 + '%';
      pulse.style.top = Math.random() * 100 + '%';
      pulse.style.animationDelay = Math.random() * 15 + 's';
      container.appendChild(pulse);

      setTimeout(() => {
        if (container.contains(pulse)) {
          container.removeChild(pulse);
        }
      }, 40000);
    };

    // Create digital thread wisps
    const createDigitalWisp = () => {
      const wisp = document.createElement('div');
      wisp.className = 'digital-wisp';
      wisp.style.left = Math.random() * 100 + '%';
      wisp.style.top = Math.random() * 100 + '%';
      wisp.style.animationDelay = Math.random() * 12 + 's';
      container.appendChild(wisp);

      setTimeout(() => {
        if (container.contains(wisp)) {
          container.removeChild(wisp);
        }
      }, 35000);
    };

    // Staggered creation for organic neural network feel
    const filamentInterval = setInterval(createNeuralFilament, 8000);
    const pulseInterval = setInterval(createAmbientPulse, 6000);
    const wispInterval = setInterval(createDigitalWisp, 10000);

    // Initial neural elements
    for (let i = 0; i < 4; i++) {
      setTimeout(createNeuralFilament, i * 2500);
      setTimeout(createAmbientPulse, i * 3000);
    }
    for (let i = 0; i < 2; i++) {
      setTimeout(createDigitalWisp, i * 5000);
    }

    return () => {
      clearInterval(filamentInterval);
      clearInterval(pulseInterval);
      clearInterval(wispInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    >
      {/* Static neural filaments for base structure */}
      <div className="absolute top-1/6 left-1/8 neural-filament" style={{ transform: 'rotate(25deg)' }}></div>
      <div className="absolute bottom-1/4 right-1/6 neural-filament" style={{ animationDelay: '-8s', transform: 'rotate(-15deg)' }}></div>
      <div className="absolute top-3/5 left-2/3 neural-filament" style={{ animationDelay: '-4s', transform: 'rotate(45deg)' }}></div>
      <div className="absolute top-1/3 right-1/5 neural-filament" style={{ animationDelay: '-12s', transform: 'rotate(-30deg)' }}></div>

      {/* Ambient depth pulses */}
      <div className="absolute top-1/5 right-1/4 ambient-pulse"></div>
      <div className="absolute bottom-1/3 left-1/5 ambient-pulse" style={{ animationDelay: '-10s' }}></div>
      <div className="absolute top-2/3 right-1/3 ambient-pulse" style={{ animationDelay: '-6s' }}></div>
    </div>
  );
};

export default AnimatedBackground;
