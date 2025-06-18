
import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Smooth scroll-responsive parallax motion
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const silkLines = container.querySelectorAll('.neural-silk-line');
      const auroraCurrents = container.querySelectorAll('.aurora-current');
      const liquidOrbs = container.querySelectorAll('.liquid-light-orb');
      
      silkLines.forEach((line, index) => {
        const element = line as HTMLElement;
        const speed = 0.02 + (index * 0.01);
        const drift = scrollY * speed;
        element.style.transform = `translateX(${drift}px) translateY(${drift * 0.5}px) rotate(${scrollY * 0.005}deg)`;
      });

      auroraCurrents.forEach((current, index) => {
        const element = current as HTMLElement;
        const speed = 0.03 + (index * 0.015);
        element.style.transform = `translateY(${scrollY * speed}px) translateX(${scrollY * 0.01}px) scale(${1 + scrollY * 0.00002})`;
      });

      liquidOrbs.forEach((orb, index) => {
        const element = orb as HTMLElement;
        const speed = 0.025 + (index * 0.01);
        element.style.transform = `translateY(${scrollY * speed}px) rotate(${scrollY * 0.02}deg)`;
      });
    };

    // Smooth mouse-responsive motion
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      const wisps = container.querySelectorAll('.weightless-wisp');
      const beams = container.querySelectorAll('.ethereal-beam');
      
      wisps.forEach((wisp, index) => {
        const element = wisp as HTMLElement;
        const strength = 0.1 + (index * 0.05);
        const offsetX = (mouseX - 0.5) * strength * 20;
        const offsetY = (mouseY - 0.5) * strength * 15;
        element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });

      beams.forEach((beam, index) => {
        const element = beam as HTMLElement;
        const strength = 0.05 + (index * 0.02);
        const rotation = (mouseX - 0.5) * strength * 5;
        element.style.transform = `rotate(${rotation}deg)`;
      });
    };

    // Create flowing neural silk lines
    const createSilkLine = (type: 'horizontal' | 'diagonal') => {
      const line = document.createElement('div');
      line.className = `neural-silk-line ${type}`;
      line.style.top = Math.random() * 100 + '%';
      line.style.left = Math.random() * 20 - 10 + '%';
      line.style.animationDelay = Math.random() * 10 + 's';
      container.appendChild(line);

      setTimeout(() => {
        if (container.contains(line)) {
          container.removeChild(line);
        }
      }, type === 'horizontal' ? 25000 : 35000);
    };

    // Create aurora currents
    const createAuroraCurrent = () => {
      const current = document.createElement('div');
      current.className = 'aurora-current';
      current.style.left = Math.random() * 100 + '%';
      current.style.top = Math.random() * 100 + '%';
      current.style.animationDelay = Math.random() * 8 + 's';
      container.appendChild(current);

      setTimeout(() => {
        if (container.contains(current)) {
          container.removeChild(current);
        }
      }, 20000);
    };

    // Create liquid light orbs
    const createLiquidOrb = () => {
      const orb = document.createElement('div');
      orb.className = 'liquid-light-orb';
      orb.style.left = Math.random() * 100 + '%';
      orb.style.top = Math.random() * 100 + '%';
      orb.style.animationDelay = Math.random() * 6 + 's';
      container.appendChild(orb);

      setTimeout(() => {
        if (container.contains(orb)) {
          container.removeChild(orb);
        }
      }, 18000);
    };

    // Create weightless wisps
    const createWeightlessWisp = () => {
      const wisp = document.createElement('div');
      wisp.className = 'weightless-wisp';
      wisp.style.left = Math.random() * 100 + '%';
      wisp.style.top = Math.random() * 100 + '%';
      wisp.style.animationDelay = Math.random() * 5 + 's';
      container.appendChild(wisp);

      setTimeout(() => {
        if (container.contains(wisp)) {
          container.removeChild(wisp);
        }
      }, 15000);
    };

    // Create ethereal beams
    const createEtherealBeam = () => {
      const beam = document.createElement('div');
      beam.className = 'ethereal-beam';
      beam.style.left = Math.random() * 100 + '%';
      beam.style.top = Math.random() * 100 + '%';
      beam.style.transform = `rotate(${Math.random() * 180}deg)`;
      beam.style.animationDelay = Math.random() * 4 + 's';
      container.appendChild(beam);

      setTimeout(() => {
        if (container.contains(beam)) {
          container.removeChild(beam);
        }
      }, 12000);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    // Staggered, organic element creation
    const silkHorizontalInterval = setInterval(() => createSilkLine('horizontal'), 12000);
    const silkDiagonalInterval = setInterval(() => createSilkLine('diagonal'), 15000);
    const auroraInterval = setInterval(createAuroraCurrent, 8000);
    const orbInterval = setInterval(createLiquidOrb, 10000);
    const wispInterval = setInterval(createWeightlessWisp, 6000);
    const beamInterval = setInterval(createEtherealBeam, 7000);

    // Initial ambient elements
    for (let i = 0; i < 3; i++) {
      setTimeout(() => createSilkLine('horizontal'), i * 4000);
      setTimeout(() => createSilkLine('diagonal'), i * 5000);
      setTimeout(createAuroraCurrent, i * 3000);
      setTimeout(createLiquidOrb, i * 3500);
    }
    for (let i = 0; i < 5; i++) {
      setTimeout(createWeightlessWisp, i * 2000);
      setTimeout(createEtherealBeam, i * 2500);
    }

    return () => {
      clearInterval(silkHorizontalInterval);
      clearInterval(silkDiagonalInterval);
      clearInterval(auroraInterval);
      clearInterval(orbInterval);
      clearInterval(wispInterval);
      clearInterval(beamInterval);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    >
      {/* Static silk lines for base layer */}
      <div className="neural-silk-line horizontal" style={{ top: '20%', animationDelay: '0s' }}></div>
      <div className="neural-silk-line diagonal" style={{ top: '60%', animationDelay: '-8s' }}></div>
      <div className="neural-silk-line horizontal" style={{ top: '80%', animationDelay: '-4s' }}></div>

      {/* Static aurora currents */}
      <div className="aurora-current" style={{ left: '15%', top: '25%' }}></div>
      <div className="aurora-current" style={{ left: '75%', top: '70%', animationDelay: '-10s' }}></div>

      {/* Static liquid orbs */}
      <div className="liquid-light-orb" style={{ left: '10%', top: '50%' }}></div>
      <div className="liquid-light-orb" style={{ left: '85%', top: '30%', animationDelay: '-6s' }}></div>
    </div>
  );
};

export default AnimatedBackground;
