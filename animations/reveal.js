"use client";
import { useEffect, useRef } from "react";

/**
 * useReveal — attaches an IntersectionObserver to a ref,
 * adding .visible to every .reveal / .reveal-left / .reveal-right child
 * with optional stagger delay.
 */
export function useReveal(options = {}) {
  const ref = useRef(null);
  const { threshold = 0.08, stagger = 100 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targets = entry.target.querySelectorAll(
              ".reveal, .reveal-left, .reveal-right, .reveal-scale"
            );
            targets.forEach((t, i) => {
              setTimeout(() => t.classList.add("visible"), i * stagger);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, stagger]);

  return ref;
}

/**
 * RevealWrapper — a component that wraps children and triggers reveal animations
 */
export function RevealWrapper({ children, className = "", stagger = 100, threshold = 0.08 }) {
  const ref = useReveal({ stagger, threshold });
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
