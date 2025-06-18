
import { LineType } from './types';

export const createFloatingLine = (type: LineType, container: HTMLDivElement): void => {
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
  const duration = getLineDuration(type);
  
  setTimeout(() => {
    if (container.contains(line)) {
      container.removeChild(line);
    }
  }, duration);
};

const getLineDuration = (type: LineType): number => {
  switch(type) {
    case 'horizontal': return 25000;
    case 'vertical': return 30000;
    case 'diagonal': return 35000;
    case 'approach': return 20000;
    case 'recede': return 28000;
    default: return 25000;
  }
};

export const getLineConfig = (): Record<LineType, { interval: number; initialCount: number; delay: number }> => ({
  horizontal: { interval: 8000, initialCount: 2, delay: 4000 },
  vertical: { interval: 12000, initialCount: 2, delay: 6000 },
  diagonal: { interval: 15000, initialCount: 0, delay: 0 },
  approach: { interval: 10000, initialCount: 3, delay: 3000 },
  recede: { interval: 14000, initialCount: 3, delay: 5000 }
});
