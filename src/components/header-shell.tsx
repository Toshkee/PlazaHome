"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";

/**
 * Zaglavlje je providno preko vrha stranice, dobija podlogu čim se skroluje,
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
      header.toggleAttribute("data-solid", y > 24);
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
      style={{ viewTransitionName: "site-header" }}
      className="fixed inset-x-0 top-0 z-50 transition-[translate,background-color,backdrop-filter] duration-500 ease-film data-hidden:not-focus-within:-translate-y-full data-solid:bg-ink/85 data-solid:backdrop-blur-md"
    >
      {children}
    </header>
  );
}
