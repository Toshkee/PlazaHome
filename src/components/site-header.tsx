import Link from "next/link";
import { contactLinks, site } from "@/content/site";
import { HeaderShell } from "./header-shell";
import { Icon } from "./icon";
import { MobileMenu } from "./mobile-menu";
import { NavLinks } from "./nav-links";
import { Picture } from "./picture";

function Logo() {
  return <Picture name="logo-mark" alt={site.name} sizes="110px" className="h-10 w-auto" load="eager" />;
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

        <a href={contactLinks.tel} className="btn btn-ghost hidden min-h-11 text-sm lg:inline-flex">
          <Icon name="phone" className="size-4" />
          {site.phone.display}
        </a>

        <MobileMenu logo={<Logo />} />
      </div>
    </HeaderShell>
  );
}
