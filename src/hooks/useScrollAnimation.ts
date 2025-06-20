
import { useEffect, useState } from 'react';

export const useScrollAnimation = (threshold = 0.15) => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            element.classList.add('visible');
            setVisibleElements(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold, rootMargin: '80px' }
    );

    // Observe all scroll-reveal elements
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => observer.observe(el));

    // Precision scroll-based effects
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      
      // Parallax background layers
      const parallaxElements = document.querySelectorAll('[data-parallax]');
      parallaxElements.forEach((element) => {
        const el = element as HTMLElement;
        const speed = parseFloat(el.dataset.parallax || '0.3');
        const yPos = -(scrolled * speed);
        el.style.transform = `translateY(${yPos}px) translateZ(0)`;
      });

      // Dynamic grid intensity
      const gridElements = document.querySelectorAll('[data-scroll-grid]');
      gridElements.forEach((element) => {
        const el = element as HTMLElement;
        const intensity = Math.min(scrolled / 800, 1);
        el.style.opacity = (0.4 + intensity * 0.3).toString();
      });

      // Floating elements physics
      const floatingElements = document.querySelectorAll('[data-float]');
      floatingElements.forEach((element) => {
        const el = element as HTMLElement;
        const floatSpeed = parseFloat(el.dataset.float || '0.2');
        const rotation = Math.sin(scrolled * 0.001) * 2;
        const yOffset = Math.sin(scrolled * 0.002) * 10;
        el.style.transform = `translateY(${yOffset * floatSpeed}px) rotateX(${rotation}deg)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return visibleElements;
};
