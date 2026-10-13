import type { CSSProperties } from "react";

/** Inline CSS promjenljive za animacije, npr. `vars({ "--delay": "0.2s" })`. */
export function vars(values: Record<`--${string}`, string | number>): CSSProperties {
  return values as CSSProperties;
}
