"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { vars } from "@/lib/style";
import { Icon } from "../icon";

type Item = { slug: string; name: string; text: string; image?: ReactNode; thumb?: ReactNode };

/**
 * Spisak proizvoda kao veliki tipografski redovi. Na desktopu desno stoji slika
 * reda preko kojeg je miš ili fokus; na telefonu svaki red ima svoju sličicu.
 */
export function ServicesList({ items }: { items: Item[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-12">
      <ul className="border-t border-ink/15 lg:col-span-7">
        {items.map((item, i) => (
          <li key={item.slug} className="border-b border-ink/15" data-reveal="up" style={vars({ "--delay": `${i * 0.06}s` })}>
            <Link
              href={`/proizvodi#${item.slug}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className="group flex items-center gap-4 py-5 sm:gap-6 lg:py-6"
            >
              <span className="label w-6 shrink-0 text-muted">{String(i + 1).padStart(2, "0")}</span>
              <span className="min-w-0 flex-1">
                <span className="display block text-[clamp(1.75rem,1.3rem+2vw,3.25rem)] leading-[1.05] transition-[translate,color] duration-700 ease-film group-hover:translate-x-2 group-hover:text-petrol">
                  {item.name}
                </span>
                <span className="mt-1 block text-sm text-muted lg:hidden">{item.text}</span>
              </span>
              {item.thumb && (
                <span className="relative block aspect-4/5 w-16 shrink-0 overflow-clip bg-ink/10 sm:w-20 lg:hidden">
                  {item.thumb}
                </span>
              )}
              <span className="hidden size-11 shrink-0 items-center justify-center rounded-full border border-ink/20 transition-colors duration-500 group-hover:border-petrol group-hover:bg-petrol group-hover:text-bone lg:inline-flex">
                <Icon name="arrowRight" className="size-4" />
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div aria-hidden="true" className="hidden lg:col-span-5 lg:block">
        <div className="sticky top-[calc(var(--spacing-header)+2rem)] aspect-4/5 overflow-clip bg-ink/10">
          {items.map((item, i) =>
            item.image ? (
              <div
                key={item.slug}
                className={`absolute inset-0 transition-[clip-path,scale] duration-[1.1s] ease-curtain ${
                  i === active ? "z-10 scale-100 [clip-path:inset(0_0_0_0)]" : "z-0 scale-105 [clip-path:inset(100%_0_0_0)]"
                }`}
              >
                {item.image}
              </div>
            ) : null,
          )}
          <p className="absolute bottom-0 left-0 z-20 max-w-xs bg-paper/90 px-4 py-3 text-sm text-ink">
            {items[active].text}
          </p>
        </div>
      </div>
    </div>
  );
}
