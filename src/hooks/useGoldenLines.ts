
import { useEffect, useRef } from 'react';

interface LineConfig {
  type: 'horizontal' | 'vertical' | 'diagonal';
  depth: 'cosmic' | 'distant' | 'nebula';
  length: 'full' | 'partial';
}

export const useGoldenLines = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const activeLines = new Set<HTMLElement>();

    const getLineConfig = (): LineConfig => {
      const types: LineConfig['type'][] = ['horizontal', 'vertical', 'diagonal'];
      const depths: LineConfig['depth'][] = ['cosmic', 'distant', 'nebula'];
      const lengths: LineConfig['length'][] = ['full', 'partial', 'full']; // Bias toward full

      return {
        type: types[Math.floor(Math.random() * types.length)],
        depth: depths[Math.floor(Math.random() * depths.length)],
        length: lengths[Math.floor(Math.random() * lengths.length)]
      };
    };

    const getDepthStyles = (depth: LineConfig['depth']) => {
      switch (depth) {
        case 'cosmic':
          return {
            opacity: Math.random() * 0.010 + 0.015, // 0.015-0.025 (barely visible)
            blur: '1px',
            thickness: '0.2px',
          };
        case 'distant':
          return {
            opacity: Math.random() * 0.008 + 0.010, // 0.010-0.018 (very faint)
            blur: '2px',
            thickness: '0.3px',
          };
        case 'nebula':
          return {
            opacity: Math.random() * 0.005 + 0.008, // 0.008-0.013 (extremely faint)
            blur: '3px',
            thickness: '0.4px',
          };
      }
    };

    const createLine = () => {
      const config = getLineConfig();
      const depthStyles = getDepthStyles(config.depth);
      const line = document.createElement('div');
      line.className = 'elegant-golden-line';
      
      const duration = Math.random() * 90 + 30; // 30-120 seconds (much slower)
      const delay = Math.random() * 5;
      
      let animationName = '';
      let positioning = '';
      
      if (config.type === 'horizontal') {
        const width = config.length === 'full' ? '150vw' : `${Math.random() * 80 + 70}vw`;
        animationName = 'elegantHorizontalFlow';
        positioning = `
          width: ${width};
          height: ${depthStyles.thickness};
          left: -${width};
          top: ${Math.random() * 150}vh;
        `;
      } else if (config.type === 'vertical') {
        const height = config.length === 'full' ? '150vh' : `${Math.random() * 80 + 70}vh`;
        animationName = 'elegantVerticalFlow';
        positioning = `
          width: ${depthStyles.thickness};
          height: ${height};
          left: ${Math.random() * 120}vw;
          top: -${height};
        `;
      } else { // diagonal
        const size = config.length === 'full' ? 180 : Math.random() * 80 + 100;
        animationName = 'elegantDiagonalFlow';
        positioning = `
          width: ${size}vw;
          height: ${depthStyles.thickness};
          left: -${size}vw;
          top: ${Math.random() * 120}vh;
          transform-origin: left center;
          transform: rotate(${Math.random() * 45 - 22.5}deg);
        `;
      }
      
      line.style.cssText = `
        position: absolute;
        ${positioning}
        background: rgba(212, 175, 55, ${depthStyles.opacity});
        animation: ${animationName} ${duration}s ease-in-out infinite;
        animation-delay: ${delay}s;
        pointer-events: none;
        z-index: -10;
        filter: blur(${depthStyles.blur});
      `;
      
      container.appendChild(line);
      activeLines.add(line);
      
      setTimeout(() => {
        if (container.contains(line)) {
          container.removeChild(line);
          activeLines.delete(line);
        }
      }, (duration + delay) * 1000);
    };

    // Create initial cosmic atmosphere
    for (let i = 0; i < 25; i++) {
      setTimeout(() => createLine(), i * 300);
    }

    // Continuous cosmic line creation
    const lineInterval = setInterval(() => {
      if (activeLines.size < 15) {
        createLine();
      } else if (Math.random() > 0.6) {
        createLine();
      }
    }, 2000);

    // Additional interval for space-like density
    const cosmicInterval = setInterval(createLine, 4000);

    return () => {
      clearInterval(lineInterval);
      clearInterval(cosmicInterval);
      activeLines.forEach(line => {
        if (container.contains(line)) {
          container.removeChild(line);
        }
      });
    };
  }, []);

  return containerRef;
};
