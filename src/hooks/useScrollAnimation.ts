
import { useEffect, useState } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
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
      { threshold, rootMargin: '50px' }
    );

    // Observe all scroll-reveal elements
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => observer.observe(el));

    // Add scroll-based parallax effects
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('[data-parallax]');
      
      parallaxElements.forEach((element) => {
        const el = element as HTMLElement;
        const speed = parseFloat(el.dataset.parallax || '0.5');
        const yPos = -(scrolled * speed);
        el.style.transform = `translateY(${yPos}px) translateZ(0)`;
      });

      // Animate gold grid based on scroll
      const gridElements = document.querySelectorAll('[data-scroll-grid]');
      gridElements.forEach((element) => {
        const el = element as HTMLElement;
        const intensity = Math.min(scrolled / 1000, 1);
        el.style.opacity = (0.3 + intensity * 0.4).toString();
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
