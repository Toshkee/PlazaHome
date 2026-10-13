"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Pali `[data-reveal]` elemente kad uđu u ekran (CSS u globals.css).
 * Pri prvom pokretanju ono što je već na ekranu ostaje vidljivo, pa tek onda
 * `reveal-ready` sakriva ostatak; bez JavaScripta se ništa ne sakriva.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.documentElement;
    const pending = [...document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-shown])")];

    if (!root.classList.contains("reveal-ready")) {
      for (const el of pending) {
        if (el.getBoundingClientRect().top < window.innerHeight) el.dataset.shown = "";
      }
      root.classList.add("reveal-ready");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.shown = "";
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    for (const el of pending) {
      if (!("shown" in el.dataset)) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
