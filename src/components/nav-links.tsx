"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/content/navigation";

/** Glavni meni na desktopu; trenutna stranica je podvučena petrolej linijom. */
export function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-8">
      {navigation.map((item) => {
        const current = pathname === item.href;
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={current ? "page" : undefined}
              className="relative inline-flex min-h-11 items-center text-[0.9375rem] font-medium text-ink/75 transition-colors hover:text-ink aria-[current=page]:text-ink group-data-overlay:text-white/85 group-data-overlay:hover:text-white group-data-overlay:aria-[current=page]:text-white"
            >
              {item.label}
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 bottom-1.5 h-px bg-petrol transition-transform duration-300 group-data-overlay:bg-gold-light ${current ? "scale-x-100" : "scale-x-0"}`}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
