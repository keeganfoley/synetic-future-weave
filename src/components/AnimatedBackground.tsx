
import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Smooth scroll-responsive parallax motion
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const floatingLines = container.querySelectorAll('.floating-line');
      
      floatingLines.forEach((line, index) => {
        const element = line as HTMLElement;
        const speed = 0.01 + (index * 0.005);
        const drift = scrollY * speed;
        element.style.transform += ` translateY(${drift}px)`;
      });
    };

    // Smooth mouse-responsive motion for depth lines
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      const depthLines = container.querySelectorAll('.floating-line.approach, .floating-line.recede');
      
      depthLines.forEach((line, index) => {
        const element = line as HTMLElement;
        const strength = 0.03 + (index * 0.01);
        const offsetX = (mouseX - 0.5) * strength * 10;
        const offsetY = (mouseY - 0.5) * strength * 8;
        element.style.transform += ` translate(${offsetX}px, ${offsetY}px)`;
      });
    };

    // Create floating horizontal lines
    const createFloatingLine = (type: 'horizontal' | 'vertical' | 'diagonal' | 'approach' | 'recede') => {
      const line = document.createElement('div');
      line.className = `floating-line ${type}`;
      
      // Position based on type
      switch(type) {
        case 'horizontal':
          line.style.top = Math.random() * 100 + '%';
          line.style.left = '-40%';
          break;
        case 'vertical':
          line.style.left = Math.random() * 100 + '%';
          line.style.top = '-30%';
          break;
        case 'diagonal':
          line.style.top = Math.random() * 100 + '%';
          line.style.left = '-50%';
          break;
        case 'approach':
        case 'recede':
          line.style.left = Math.random() * 100 + '%';
          line.style.top = Math.random() * 100 + '%';
          break;
      }
      
      line.style.animationDelay = Math.random() * 15 + 's';
      container.appendChild(line);

      // Remove line after animation completes
      const duration = type === 'horizontal' ? 25000 : 
                     type === 'vertical' ? 30000 : 
                     type === 'diagonal' ? 35000 :
                     type === 'approach' ? 20000 : 28000;
      
      setTimeout(() => {
        if (container.contains(line)) {
          container.removeChild(line);
        }
      }, duration);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    // Staggered line creation for organic feel
    const horizontalInterval = setInterval(() => createFloatingLine('horizontal'), 8000);
    const verticalInterval = setInterval(() => createFloatingLine('vertical'), 12000);
    const diagonalInterval = setInterval(() => createFloatingLine('diagonal'), 15000);
    const approachInterval = setInterval(() => createFloatingLine('approach'), 10000);
    const recedeInterval = setInterval(() => createFloatingLine('recede'), 14000);

    // Initial ambient lines
    for (let i = 0; i < 2; i++) {
      setTimeout(() => createFloatingLine('horizontal'), i * 4000);
      setTimeout(() => createFloatingLine('vertical'), i * 6000);
    }
    for (let i = 0; i < 3; i++) {
      setTimeout(() => createFloatingLine('approach'), i * 3000);
      setTimeout(() => createFloatingLine('recede'), i * 5000);
    }

    return () => {
      clearInterval(horizontalInterval);
      clearInterval(verticalInterval);
      clearInterval(diagonalInterval);
      clearInterval(approachInterval);
      clearInterval(recedeInterval);
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
      {/* Static floating lines for base layer */}
      <div className="floating-line horizontal" style={{ top: '15%', animationDelay: '0s' }}></div>
      <div className="floating-line vertical" style={{ left: '20%', animationDelay: '-5s' }}></div>
      <div className="floating-line diagonal" style={{ top: '70%', animationDelay: '-8s' }}></div>
      <div className="floating-line approach" style={{ left: '60%', top: '40%', animationDelay: '-3s' }}></div>
      <div className="floating-line recede" style={{ left: '30%', top: '60%', animationDelay: '-10s' }}></div>
    </div>
  );
};

export default AnimatedBackground;
