"use client";

import { useEffect, useId, useRef, useState } from "react";
import { navigation } from "@/content/navigation";
import { Icon } from "./icon";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="-mr-3 inline-flex size-11 items-center justify-center rounded-base"
      >
        <Icon name={open ? "close" : "menu"} />
        <span className="sr-only">{open ? "Zatvori meni" : "Otvori meni"}</span>
      </button>

      <nav
        id={panelId}
        aria-label="Glavna navigacija"
        hidden={!open}
        className="absolute inset-x-0 top-full border-t border-primary-foreground/20 bg-primary"
      >
        <ul className="container-page py-3">
          {navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center border-b border-primary-foreground/15 text-lg"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
