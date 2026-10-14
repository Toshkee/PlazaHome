import type { ReactNode } from "react";

/** Sadržaj stranice; `#sadrzaj` je cilj linka „Preskoči na sadržaj”. */
export function PageShell({ children }: { children: ReactNode }) {
  return <main id="sadrzaj">{children}</main>;
}
