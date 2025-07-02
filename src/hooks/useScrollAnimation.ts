import { useScrollReveal } from './useScrollReveal';

/**
 * Re‑uses the single global IntersectionObserver from useScrollReveal.
 * Keeps the same API signature (selector, threshold) but no longer
 * returns a Set because we don’t need per‑frame React state updates.
 */
export function useScrollAnimation(
  selector: string = '[data-scroll-animation]',
  threshold: number = 0.15
) {
  useScrollReveal(selector, threshold);
}
