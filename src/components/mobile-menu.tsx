"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";
import { navigation } from "@/content/navigation";
import { contactLinks, site } from "@/content/site";
import { Icon } from "./icon";

/**
 * Meni na telefonu: <dialog> preko cijelog ekrana (fokus ostaje unutra,
 * Escape zatvara i vraća fokus na dugme).
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
        className="-mr-2.5 inline-flex min-h-11 items-center gap-2.5 px-2.5 text-[0.9375rem] font-semibold"
      >
        Meni
        <Icon name="menu" className="size-5" />
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Meni"
        className="menu-dialog m-0 h-dvh max-h-none w-full max-w-none bg-paper p-0 text-ink"
      >
        <div className="flex h-full flex-col">
          <div className="container-page flex h-header shrink-0 items-center justify-between border-b border-line">
            <Link href="/" onClick={close} className="-mx-1 block px-1 py-1">
              {logo}
            </Link>
            <button
              type="button"
              onClick={close}
              autoFocus
              className="-mr-2.5 inline-flex min-h-11 items-center gap-2.5 px-2.5 text-[0.9375rem] font-semibold"
            >
              Zatvori
              <Icon name="close" className="size-5" />
            </button>
          </div>

          <nav aria-label="Glavna navigacija" className="container-page flex-1 overflow-y-auto pt-4">
            <ul>
              <li className="border-b border-line">
                <Link
                  href="/"
                  onClick={close}
                  aria-current={pathname === "/" ? "page" : undefined}
                  className="flex min-h-15 items-center justify-between gap-4 text-2xl font-medium aria-[current=page]:text-petrol"
                >
                  Početna
                  <Icon name="chevronRight" className="size-5 text-muted" />
                </Link>
              </li>
              {navigation.map((item) => (
                <li key={item.href} className="border-b border-line">
                  <Link
                    href={item.href}
                    onClick={close}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className="flex min-h-15 items-center justify-between gap-4 text-2xl font-medium aria-[current=page]:text-petrol"
                  >
                    {item.label}
                    <Icon name="chevronRight" className="size-5 text-muted" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="container-page safe-bottom shrink-0 pt-4 pb-5">
            <div className="grid grid-cols-2 gap-3">
              <a href={contactLinks.tel} className="btn btn-outline">
                <Icon name="phone" className="size-4" />
                Pozovite
              </a>
              <a href={contactLinks.whatsapp} className="btn btn-primary">
                <Icon name="whatsapp" className="size-4" />
                WhatsApp
              </a>
            </div>
            <div className="mt-3 flex flex-wrap justify-center gap-x-6 text-sm text-muted">
              <a href={contactLinks.email} className="inline-flex min-h-11 items-center gap-2">
                <Icon name="mail" className="size-4" />
                Email
              </a>
              <a href={contactLinks.instagram} className="inline-flex min-h-11 items-center gap-2">
                <Icon name="instagram" className="size-4" />
                {site.instagram.handle}
              </a>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
