import Link from "next/link";
import { navigation } from "@/content/navigation";
import { contactLinks, site } from "@/content/site";
import { Picture } from "./picture";

const contactClass =
  "inline-flex min-h-11 items-center text-white underline decoration-white/0 underline-offset-[0.3em] transition-colors hover:decoration-white/60";
const smallLinkClass = "inline-flex min-h-11 items-center transition-colors hover:text-white";

/**
 * Podnožje: znak i kontakt velikim, tankim slovima, a stranice u jednom redu ispod.
 * Bez kolona sa spiskom proizvoda: to ponavlja meni i čini podnožje šablonskim.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark bg-night pb-bar text-white/70 lg:pb-0">
      <div className="container-page grid gap-12 pt-16 pb-12 lg:grid-cols-12 lg:gap-x-12 lg:pt-24 lg:pb-20">
        <div className="lg:col-span-5">
          <Picture name="logo-mark" alt={site.name} sizes="130px" className="h-12 w-auto" />
          <p className="mt-5 max-w-xs">Zavjese i draperije po mjeri, {site.country}.</p>
        </div>

        <div className="grid gap-x-12 sm:grid-cols-2 lg:col-span-7">
          <h2 className="sr-only">Kontakt</h2>
          <ul className="text-xl font-light tracking-[-0.01em]">
            <li>
              <a href={contactLinks.tel} className={contactClass}>
                {site.phone.display}
              </a>
            </li>
            <li>
              <a href={contactLinks.telSecondary} className={contactClass}>
                {site.phoneSecondary.display}
              </a>
            </li>
          </ul>
          <ul className="text-xl font-light tracking-[-0.01em]">
            <li>
              <a href={contactLinks.email} className={`${contactClass} break-all`}>
                {site.email}
              </a>
            </li>
            <li>
              <a href={contactLinks.instagram} className={contactClass}>
                Instagram {site.instagram.handle}
              </a>
            </li>
            {site.address && (
              <li>
                <a href={site.address.mapsUrl} className={contactClass}>
                  {site.address.street}, {site.address.city}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="container-page">
        <div className="flex flex-col gap-2 border-t border-white/10 py-5 text-sm lg:flex-row lg:items-center lg:justify-between">
          <nav aria-label="Stranice u podnožju">
            <ul className="flex flex-wrap gap-x-6">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={`caps ${smallLinkClass}`}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className="flex flex-wrap items-center gap-x-2">
            <span>
              © {year} {site.legalName}
            </span>
            <span aria-hidden="true">·</span>
            <span>
              Video:{" "}
              <a href={site.videoCredit.url} className="inline-flex min-h-11 items-center underline underline-offset-4 hover:text-white">
                {site.videoCredit.name}
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
