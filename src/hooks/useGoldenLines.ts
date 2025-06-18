
import { useEffect, useRef } from 'react';

interface LineConfig {
  type: 'horizontal' | 'vertical' | 'diagonal';
  depth: 'close' | 'medium' | 'far';
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
      const depths: LineConfig['depth'][] = ['close', 'medium', 'far'];
      const lengths: LineConfig['length'][] = ['full', 'partial', 'full']; // Bias toward full

      return {
        type: types[Math.floor(Math.random() * types.length)],
        depth: depths[Math.floor(Math.random() * depths.length)],
        length: lengths[Math.floor(Math.random() * lengths.length)]
      };
    };

    const getDepthStyles = (depth: LineConfig['depth']) => {
      switch (depth) {
        case 'close':
          return {
            opacity: Math.random() * 0.4 + 0.6, // 0.6-1.0
            blur: '0px',
            thickness: '1.5px',
            brightness: 1.2
          };
        case 'medium':
          return {
            opacity: Math.random() * 0.3 + 0.3, // 0.3-0.6
            blur: '0.5px',
            thickness: '1px',
            brightness: 1.0
          };
        case 'far':
          return {
            opacity: Math.random() * 0.2 + 0.15, // 0.15-0.35
            blur: '1px',
            thickness: '0.8px',
            brightness: 0.8
          };
      }
    };

    const createLine = () => {
      const config = getLineConfig();
      const depthStyles = getDepthStyles(config.depth);
      const line = document.createElement('div');
      line.className = 'elegant-golden-line';
      
      const duration = Math.random() * 32 + 8; // 8-40 seconds
      const delay = Math.random() * 2;
      
      let animationName = '';
      let positioning = '';
      
      if (config.type === 'horizontal') {
        const width = config.length === 'full' ? '100vw' : `${Math.random() * 60 + 40}vw`;
        animationName = 'elegantHorizontalFlow';
        positioning = `
          width: ${width};
          height: ${depthStyles.thickness};
          left: -${width};
          top: ${Math.random() * 100}%;
        `;
      } else if (config.type === 'vertical') {
        const height = config.length === 'full' ? '100vh' : `${Math.random() * 60 + 40}vh`;
        animationName = 'elegantVerticalFlow';
        positioning = `
          width: ${depthStyles.thickness};
          height: ${height};
          left: ${Math.random() * 100}%;
          top: -${height};
        `;
      } else { // diagonal
        const size = config.length === 'full' ? 140 : Math.random() * 60 + 80;
        animationName = 'elegantDiagonalFlow';
        positioning = `
          width: ${size}vw;
          height: ${depthStyles.thickness};
          left: -${size}vw;
          top: ${Math.random() * 100}%;
          transform-origin: left center;
          transform: rotate(${Math.random() * 30 - 15}deg);
        `;
      }
      
      line.style.cssText = `
        position: absolute;
        ${positioning}
        background: rgba(212, 175, 55, ${depthStyles.opacity});
        animation: ${animationName} ${duration}s linear infinite;
        animation-delay: ${delay}s;
        pointer-events: none;
        z-index: 1;
        filter: blur(${depthStyles.blur}) brightness(${depthStyles.brightness});
        box-shadow: 0 0 ${depthStyles.thickness === '1.5px' ? '8px' : '4px'} rgba(212, 175, 55, ${depthStyles.opacity * 0.3});
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

    // Create initial burst of lines
    for (let i = 0; i < 18; i++) {
      setTimeout(() => createLine(), i * 200);
    }

    // Continuous line creation
    const lineInterval = setInterval(() => {
      // Ensure we always have 10-15 lines active
      if (activeLines.size < 10) {
        createLine();
      } else if (Math.random() > 0.7) { // 30% chance to add even when we have enough
        createLine();
      }
    }, 1500);

    // Additional interval for more frequent spawning
    const frequentInterval = setInterval(createLine, 2500);

    return () => {
      clearInterval(lineInterval);
      clearInterval(frequentInterval);
      activeLines.forEach(line => {
        if (container.contains(line)) {
          container.removeChild(line);
        }
      });
    };
  }, []);

  return containerRef;
};
