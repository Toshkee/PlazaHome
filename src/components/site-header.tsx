import { navigation } from "@/content/navigation";
import { contactLinks, site } from "@/content/site";
import { Icon } from "./icon";
import { MobileMenu } from "./mobile-menu";
import { Picture } from "./picture";

export function SiteHeader() {
  return (
    <header className="on-dark sticky top-0 z-40 bg-primary text-primary-foreground">
      <div className="container-page flex h-header items-center justify-between gap-6">
        <a href="#pocetak" className="-mx-1 block rounded-base px-1 py-1">
          <Picture name="logo" alt={site.name} sizes="115px" className="h-11 w-auto" load="eager" />
        </a>

        <nav aria-label="Glavna navigacija" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-11 items-center text-sm font-medium tracking-wide underline-offset-8 hover:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={contactLinks.tel}
                className="inline-flex min-h-11 items-center gap-2 rounded-base border border-primary-foreground/60 px-4 text-sm font-medium hover:bg-primary-foreground hover:text-primary"
              >
                <Icon name="phone" />
                {site.phone.display}
              </a>
            </li>
          </ul>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
