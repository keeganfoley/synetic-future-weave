import { useEffect } from 'react';

/* ───────────── Shared IntersectionObserver ───────────── */
let sharedObserver: IntersectionObserver | null = null;

function getObserver(threshold: number) {
  if (sharedObserver) return sharedObserver;

  sharedObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');   // add once
          sharedObserver?.unobserve(entry.target); // stop tracking
        }
      });
    },
    {
      threshold,
      rootMargin: '0px 0px -10% 0px',             // reveal a bit earlier
    }
  );

  return sharedObserver;
}

/**
 * Attaches a one‑time reveal to any elements that match `selector`.
 * Uses ONE global observer for the whole site, so no per‑component overhead.
 */
export function useScrollReveal(
  selector = '.scroll-fade-in, .scroll-slide-left, .scroll-slide-right',
  threshold = 0.15
) {
  useEffect(() => {
    const observer = getObserver(threshold);
    const els = Array.from(document.querySelectorAll<HTMLElement>(selector));
    els.forEach(el => observer.observe(el));

    return () => els.forEach(el => observer.unobserve(el));
  }, [selector, threshold]);
}
