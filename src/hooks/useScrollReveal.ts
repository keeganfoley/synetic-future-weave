
import { useEffect, useState } from 'react';

export const useScrollReveal = (threshold = 0.15) => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set(prev).add(entry.target.id));
            // Add visible class to trigger CSS animations
            entry.target.classList.add('visible');
          }
        });
      },
      { 
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all elements with scroll animation classes
    const elements = document.querySelectorAll('.scroll-fade-in, .scroll-slide-left, .scroll-slide-right');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold]);

  return visibleElements;
};
