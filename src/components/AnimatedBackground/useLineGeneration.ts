
import { useEffect } from 'react';
import { createFloatingLine, getLineConfig } from './lineUtils';
import { LineType } from './types';

export const useLineGeneration = (containerRef: React.RefObject<HTMLDivElement>) => {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const lineConfig = getLineConfig();
    const intervals: NodeJS.Timeout[] = [];

    // Create interval for each line type
    Object.entries(lineConfig).forEach(([type, config]) => {
      const lineType = type as LineType;
      const interval = setInterval(() => createFloatingLine(lineType, container), config.interval);
      intervals.push(interval);
    });

    // Initial ambient lines
    for (let i = 0; i < lineConfig.horizontal.initialCount; i++) {
      setTimeout(() => createFloatingLine('horizontal', container), i * lineConfig.horizontal.delay);
      setTimeout(() => createFloatingLine('vertical', container), i * lineConfig.vertical.delay);
    }
    for (let i = 0; i < lineConfig.approach.initialCount; i++) {
      setTimeout(() => createFloatingLine('approach', container), i * lineConfig.approach.delay);
      setTimeout(() => createFloatingLine('recede', container), i * lineConfig.recede.delay);
    }

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [containerRef]);
};
