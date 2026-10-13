"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Red kartica. Na telefonu se lista prstom (scroll-snap). Na desktopu se sekcija
 * zakači za ekran, a vertikalni skrol pomjera red ulijevo; `--rail` (0–1) prati napredak.
 * Sa smanjenim kretanjem ostaje obična horizontalna lista.
 */
export function PinnedRail({ heading, children }: { heading: ReactNode; children: ReactNode }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const track = trackRef.current;
    if (!outer || !track) return;

    const query = window.matchMedia("(min-width: 64rem) and (prefers-reduced-motion: no-preference)");
    let distance = 0;
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = outer.getBoundingClientRect();
      const range = rect.height - window.innerHeight;
      const progress = range > 0 ? Math.min(1, Math.max(0, -rect.top / range)) : 0;
      track.style.transform = `translate3d(${(-progress * distance).toFixed(1)}px, 0, 0)`;
      outer.style.setProperty("--rail", progress.toFixed(4));
    };

    const measure = () => {
      if (!query.matches) {
        delete outer.dataset.pinned;
        outer.style.height = "";
        track.style.transform = "";
        return;
      }
      outer.dataset.pinned = "";
      distance = Math.max(0, track.scrollWidth - window.innerWidth);
      outer.style.height = `${window.innerHeight + distance}px`;
      update();
    };

    const onScroll = () => {
      if (query.matches && !frame) frame = requestAnimationFrame(update);
    };

    measure();
    const resize = new ResizeObserver(measure);
    resize.observe(track);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    query.addEventListener("change", measure);

    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      query.removeEventListener("change", measure);
    };
  }, []);

  return (
    <div ref={outerRef} className="relative">
      <div className="rail-frame">
        {heading}
        <ul ref={trackRef} className="rail-track">
          {children}
        </ul>
      </div>
    </div>
  );
}
