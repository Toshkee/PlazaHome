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
              className="relative inline-flex min-h-11 items-center text-[0.9375rem] font-medium text-ink/75 transition-colors hover:text-ink aria-[current=page]:text-ink"
            >
              {item.label}
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 bottom-1.5 h-0.5 bg-petrol transition-transform duration-300 ${current ? "scale-x-100" : "scale-x-0"}`}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
