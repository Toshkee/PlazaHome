import type { CSSProperties, ReactNode } from "react";

/**
 * Naslov razbijen na redove u „maski”. Roditelj određuje kako redovi ulaze:
 * klasa `enter-lines` (pri učitavanju) ili `data-reveal="lines"` (na skrol).
 * Razmak između redova ostaje u tekstu, da čitači ekrana ne spoje riječi.
 */
export function Lines({ lines, accent = [] }: { lines: readonly string[]; accent?: readonly number[] }) {
  const out: ReactNode[] = [];
  lines.forEach((line, i) => {
    if (i > 0) out.push(" ");
    out.push(
      <span key={i} className="line">
        <span className={accent.includes(i) ? "accent" : undefined} style={{ "--i": i } as CSSProperties}>
          {line}
        </span>
      </span>,
    );
  });
  return out;
}
