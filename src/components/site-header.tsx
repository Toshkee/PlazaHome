import Link from "next/link";
import { site } from "@/content/site";
import { HeaderShell } from "./header-shell";
import { MobileMenu } from "./mobile-menu";
import { NavLinks } from "./nav-links";
import { Picture } from "./picture";

const logoClass = "h-9 w-auto transition-opacity duration-300 lg:h-11";
const logoSizes = "(min-width: 64rem) 120px, 100px";

/** Petrolej znak na svijetlom; preko velikog kadra zlatni. */
function Logo() {
  return (
    <span className="relative block">
      <Picture name="logo-mark-petrol" alt={site.name} sizes={logoSizes} className={`${logoClass} group-data-overlay:opacity-0`} load="eager" />
      <Picture
        name="logo-mark"
        alt=""
        sizes={logoSizes}
        className={`${logoClass} absolute inset-0 opacity-0 group-data-overlay:opacity-100`}
        load="eager"
      />
    </span>
  );
}

function MenuLogo() {
  return <Picture name="logo-mark-petrol" alt={site.name} sizes="100px" className="h-9 w-auto" load="eager" />;
}

export function SiteHeader() {
  return (
    <HeaderShell>
      <div className="container-page flex h-header items-center justify-between gap-6">
        <Link href="/" className="-mx-1 block px-1 py-1">
          <Logo />
        </Link>

        <nav aria-label="Glavna navigacija" className="hidden lg:block">
          <NavLinks />
        </nav>

        <Link href="/kontakt" className="btn btn-outline hidden min-h-11 text-petrol group-data-overlay:text-white lg:inline-flex">
          Konsultacija
        </Link>

        <MobileMenu logo={<MenuLogo />} />
      </div>
    </HeaderShell>
  );
}
