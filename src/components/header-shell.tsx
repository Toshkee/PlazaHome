"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";
import { heroPages } from "@/content/navigation";

/**
 * Zaglavlje je zakačeno za vrh. Na stranicama sa velikim kadrom na vrhu je providno
 * (`data-overlay`), a čim se skroluje dobija svijetlu podlogu i liniju (`data-solid`).
 * Sklanja se pri skrolu nadolje i vraća pri skrolu nagore.
 */
export function HeaderShell({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const overHero = heroPages.includes(pathname);

  useEffect(() => {
    const header = ref.current;
    if (!header) return;

    let lastY = window.scrollY;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      header.toggleAttribute("data-solid", y > 8);
      header.toggleAttribute("data-overlay", overHero && y <= 8);
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
  }, [overHero]);

  return (
    <header
      ref={ref}
      data-overlay={overHero ? "" : undefined}
      className="group sticky top-0 z-50 border-b border-transparent bg-paper/95 backdrop-blur-md transition-[translate,background-color,border-color,color] duration-300 ease-out data-hidden:not-focus-within:-translate-y-full data-overlay:bg-transparent data-overlay:text-white data-overlay:backdrop-blur-none data-overlay:[--focus-color:var(--color-white)] data-solid:border-line"
    >
      {children}
    </header>
  );
}
