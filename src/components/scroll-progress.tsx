"use client";

import { useEffect, useRef, type ComponentPropsWithoutRef } from "react";

/**
 * Postavlja `--progress` (0–1) na element dok prolazi kroz ekran:
 * 0 kad mu vrh uđe odozdo, 1 kad mu dno izađe gore. CSS odlučuje šta se pomjera.
 * Sa smanjenim kretanjem ne radi ništa, pa važe podrazumijevane vrijednosti iz CSS-a.
 */
export function ScrollProgress({ children, ...props }: ComponentPropsWithoutRef<"div">) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let visible = false;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const total = window.innerHeight + rect.height;
      const progress = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / total));
      el.style.setProperty("--progress", progress.toFixed(4));
    };
    const onScroll = () => {
      if (visible && !frame) frame = requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) update();
    });
    observer.observe(el);
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
}
