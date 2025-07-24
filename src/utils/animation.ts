/**
 * Animation performance utilities
 */

/**
 * Checks if the user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Creates a debounced animation frame callback
 */
export const createAnimationFrame = (
  callback: (timestamp: number) => void,
  fps: number = 60
): {
  start: () => void;
  stop: () => void;
} => {
  let animationId: number | null = null;
  let lastTime = 0;
  const frameInterval = 1000 / fps;

  const animate = (timestamp: number) => {
    if (timestamp - lastTime >= frameInterval) {
      callback(timestamp);
      lastTime = timestamp;
    }
    animationId = requestAnimationFrame(animate);
  };

  return {
    start: () => {
      if (!animationId && !prefersReducedMotion()) {
        animationId = requestAnimationFrame(animate);
      }
    },
    stop: () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    }
  };
};

/**
 * Pauses animations when tab is not visible
 */
export const useVisibilityPause = (
  onVisible: () => void,
  onHidden: () => void
): void => {
  const handleVisibilityChange = () => {
    if (document.hidden) {
      onHidden();
    } else {
      onVisible();
    }
  };

  document.addEventListener('visibilitychange', handleVisibilityChange);
  
  return () => {
    document.removeEventListener('visibilitychange', handleVisibilityChange);
  };
};