"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { contactLinks } from "@/content/site";
import { Icon, type IconName } from "./icon";

const actions: { icon: IconName; label: string; href: string }[] = [
  { icon: "phone", label: "Pozovite", href: contactLinks.tel },
  { icon: "whatsapp", label: "WhatsApp", href: contactLinks.whatsapp },
  { icon: "viber", label: "Viber", href: contactLinks.viber },
];

const PANEL_ID = "brzi-kontakt";

function closePanel() {
  const panel = document.getElementById(PANEL_ID);
  if (panel?.matches(":popover-open")) panel.hidePopover();
}

/**
 * Kontakt na telefonu: jedno diskretno dugme dolje desno, koje otvara Pozovite,
 * WhatsApp i Viber (HTML popover: zatvara se dodirom van panela i Escape-om).
 * Izlazi tek kad posjetilac skroluje ispod vrha stranice; na stranici Kontakt ga nema.
 */
export function QuickContact() {
  const pathname = usePathname();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > window.innerHeight * 0.6;
      if (!next) closePanel();
      setShown(next);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/kontakt") return null;

  return (
    <div
      className={`fixed right-gutter bottom-[calc(1rem+env(safe-area-inset-bottom))] z-40 transition-[opacity,translate] duration-500 ease-out lg:hidden ${shown ? "" : "pointer-events-none translate-y-4 opacity-0 focus-within:pointer-events-auto focus-within:translate-y-0 focus-within:opacity-100"}`}
    >
      <button
        type="button"
        popoverTarget={PANEL_ID}
        className="btn btn-primary shadow-[0_0.75rem_2rem_rgb(18_22_24/0.22)] ring-1 ring-white/25"
      >
        Kontakt
      </button>

      <div id={PANEL_ID} popover="auto" aria-label="Brzi kontakt" className="quick-contact">
        <ul className="divide-y divide-line">
          {actions.map((action) => (
            <li key={action.label}>
              <a href={action.href} onClick={closePanel} className="flex min-h-13 items-center gap-3.5 px-5 transition-colors hover:bg-paper">
                <Icon name={action.icon} className="size-[1.125rem] text-petrol" />
                {action.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
