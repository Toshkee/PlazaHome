import Link from "next/link";
import { contactLinks, site } from "@/content/site";
import { HeaderShell } from "./header-shell";
import { Icon } from "./icon";
import { MobileMenu } from "./mobile-menu";
import { NavLinks } from "./nav-links";
import { Picture } from "./picture";

function Logo() {
  return <Picture name="logo-mark-petrol" alt={site.name} sizes="(min-width: 64rem) 120px, 100px" className="h-9 w-auto lg:h-11" load="eager" />;
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

        <div className="hidden items-center gap-6 lg:flex">
          <a href={contactLinks.tel} className="hidden min-h-11 items-center gap-2 text-sm font-semibold xl:inline-flex">
            <Icon name="phone" className="size-4 text-petrol" />
            {site.phone.display}
          </a>
          <Link href="/kontakt" className="btn btn-primary min-h-11 text-sm">
            Zatražite ponudu
          </Link>
        </div>

        <MobileMenu logo={<Logo />} />
      </div>
    </HeaderShell>
  );
}
