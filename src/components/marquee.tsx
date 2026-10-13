import { ScrollProgress } from "./scroll-progress";

/**
 * Traka teksta koja klizi dok se skroluje (ne kreće se sama, pa ne smeta čitanju).
 * Stavke se ponavljaju da traka uvijek bude puna; ponavljanja su skrivena od čitača ekrana.
 */
export function Marquee({
  items,
  reverse = false,
  className = "",
  itemClassName = "",
}: {
  items: readonly string[];
  reverse?: boolean;
  className?: string;
  itemClassName?: string;
}) {
  const copies = [0, 1, 2, 3];
  return (
    <ScrollProgress className={`overflow-clip ${className}`}>
      <p className="sr-only">{items.join(", ")}</p>
      <div aria-hidden="true" className="marquee-track" data-reverse={reverse || undefined}>
        {copies.map((copy) =>
          items.map((item) => (
            <span key={`${copy}-${item}`} className={`flex shrink-0 items-center ${itemClassName}`}>
              {item}
              <span className="mx-[0.45em] inline-block size-[0.14em] rotate-45 bg-current opacity-60" />
            </span>
          )),
        )}
      </div>
    </ScrollProgress>
  );
}
