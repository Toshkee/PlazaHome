"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";

/**
 * Zaglavlje je zakačeno za vrh: dobija liniju čim se skroluje,
 * sklanja se pri skrolu nadolje i vraća pri skrolu nagore.
 */
export function HeaderShell({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const header = ref.current;
    if (!header) return;

    let lastY = window.scrollY;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      header.toggleAttribute("data-solid", y > 8);
      if (y <= 320 || y < lastY - 6) header.removeAttribute("data-hidden");
      else if (y > lastY + 6) header.setAttribute("data-hidden", "");
      if (Math.abs(y - lastY) > 6) lastY = y;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  return (
    <header
      ref={ref}
      className="sticky top-0 z-50 border-b border-transparent bg-paper/95 backdrop-blur-md transition-[translate,border-color] duration-300 ease-out data-hidden:not-focus-within:-translate-y-full data-solid:border-line"
    >
      {children}
    </header>
  );
}
