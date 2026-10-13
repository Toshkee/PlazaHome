"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { navigation } from "@/content/navigation";
import { contactLinks, site } from "@/content/site";
import { Icon } from "./icon";

/**
 * Meni na telefonu: <dialog> preko cijelog ekrana (fokus ostaje unutra,
 * Escape zatvara i vraća fokus na dugme). Spušta se kao zavjesa.
 */
export function MobileMenu({ logo }: { logo: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    dialogRef.current?.close();
  }, [pathname]);

  const close = () => dialogRef.current?.close();

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-haspopup="dialog"
        onClick={() => dialogRef.current?.showModal()}
        className="-mr-2 inline-flex min-h-11 items-center gap-3 px-2 text-sm font-medium"
      >
        Meni
        <span aria-hidden="true" className="flex w-6 flex-col gap-1.5">
          <span className="h-px w-full bg-current" />
          <span className="h-px w-2/3 self-end bg-current" />
        </span>
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Meni"
        className="menu-dialog m-0 h-dvh max-h-none w-full max-w-none bg-ink p-0 text-bone"
      >
        <div className="flex h-full flex-col">
          <div className="container-page flex h-header shrink-0 items-center justify-between">
            <Link href="/" onClick={close} className="block py-1">
              {logo}
            </Link>
            <button
              type="button"
              onClick={close}
              autoFocus
              className="-mr-2 inline-flex min-h-11 items-center gap-3 px-2 text-sm font-medium"
            >
              Zatvori
              <Icon name="close" className="size-5" />
            </button>
          </div>

          <nav aria-label="Glavna navigacija" className="container-page flex flex-1 flex-col justify-center">
            <ul className="border-t border-bone/10">
              {navigation.map((item, i) => (
                <li key={item.href} className="border-b border-bone/10">
                  <Link
                    href={item.href}
                    onClick={close}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className="flex items-baseline justify-between gap-4 py-3 aria-[current=page]:text-gold"
                  >
                    <span className="display line text-[clamp(2.5rem,11vw,3.5rem)] leading-none">
                      <span style={{ "--i": i } as CSSProperties}>{item.label}</span>
                    </span>
                    <span className="label menu-fade text-stone" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="container-page menu-fade safe-bottom shrink-0 pb-6">
            <div className="flex flex-wrap gap-x-6 gap-y-1 border-t border-bone/10 pt-4 text-sm">
              <a href={contactLinks.tel} className="inline-flex min-h-11 items-center gap-2">
                <Icon name="phone" className="size-4 text-gold" />
                {site.phone.display}
              </a>
              <a href={contactLinks.whatsapp} className="inline-flex min-h-11 items-center gap-2">
                <Icon name="whatsapp" className="size-4 text-gold" />
                WhatsApp
              </a>
              <a href={contactLinks.instagram} className="inline-flex min-h-11 items-center gap-2">
                <Icon name="instagram" className="size-4 text-gold" />
                {site.instagram.handle}
              </a>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
