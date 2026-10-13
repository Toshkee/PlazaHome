import { ViewTransition, type ReactNode } from "react";

/**
 * Sadržaj stranice. Pri prelazu nova stranica se otvara od sredine kao zavjesa
 * (`page-in`), a stara se povlači (`page-out`); CSS je u globals.css.
 */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <ViewTransition enter="page-in" exit="page-out" default="none">
      <main id="sadrzaj">{children}</main>
    </ViewTransition>
  );
}
