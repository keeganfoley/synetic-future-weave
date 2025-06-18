
import { useEffect } from 'react';

export const useAnimationEffects = (containerRef: React.RefObject<HTMLDivElement>) => {
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

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [containerRef]);
};
