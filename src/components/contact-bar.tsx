"use client";

import { useEffect, useState } from "react";
import { contactLinks } from "@/content/site";
import { Icon, type IconName } from "./icon";

const actions: { icon: IconName; label: string; href: string }[] = [
  { icon: "phone", label: "Pozovi", href: contactLinks.tel },
  { icon: "whatsapp", label: "WhatsApp", href: contactLinks.whatsapp },
  { icon: "viber", label: "Viber", href: contactLinks.viber },
];

/**
 * Donja traka na telefonu: kontakt na jedan dodir. Izlazi tek kad posjetilac
 * skroluje ispod vrha stranice, da ne pokriva uvodni kadar.
 */
export function ContactBar() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Brzi kontakt"
      className={`safe-bottom fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 backdrop-blur-md transition-transform duration-500 ease-out lg:hidden ${shown ? "translate-y-0" : "translate-y-full focus-within:translate-y-0"}`}
    >
      <ul className="grid h-bar grid-cols-3 divide-x divide-line">
        {actions.map((action) => (
          <li key={action.label}>
            <a href={action.href} className="flex h-full items-center justify-center gap-2 text-sm font-semibold">
              <Icon name={action.icon} className="size-[1.125rem] text-petrol" />
              {action.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
