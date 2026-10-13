"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/content/navigation";

/** Glavni meni na desktopu; trenutna stranica ima zlatnu tačku. */
export function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-7">
      {navigation.map((item) => {
        const current = pathname === item.href;
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={current ? "page" : undefined}
              className="relative inline-flex min-h-11 items-center gap-2 text-sm font-medium"
            >
              <span
                aria-hidden="true"
                className={`size-1 rounded-full bg-gold transition-transform duration-500 ${current ? "scale-100" : "scale-0"}`}
              />
              <span className="hover-line pb-0.5">
                {item.label}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
