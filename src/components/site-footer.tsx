import Link from "next/link";
import { navigation } from "@/content/navigation";
import { contactLinks, site } from "@/content/site";
import { Picture } from "./picture";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-clip border-t border-bone/10 bg-ink">
      <div className="container-page grid gap-12 pt-16 pb-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-12">
        <div className="lg:col-span-5">
          <Picture name="logo-mark" alt={site.name} sizes="140px" className="h-14 w-auto" />
          <p className="mt-6 max-w-xs text-stone">
            Zavjese, draperije i zaštita od sunca po mjeri. {site.experience}.
          </p>
        </div>

        <nav aria-label="Podnožje" className="lg:col-span-3">
          <p className="label text-stone">Stranice</p>
          <ul className="mt-4">
            <li>
              <Link href="/" className="inline-flex min-h-11 items-center">
                <span className="hover-line">Početna</span>
              </Link>
            </li>
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-11 items-center">
                  <span className="hover-line">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-4">
          <p className="label text-stone">Kontakt</p>
          <ul className="mt-4">
            <li>
              <a href={contactLinks.tel} className="inline-flex min-h-11 items-center">
                <span className="hover-line">{site.phone.display}</span>
              </a>
            </li>
            <li>
              <a href={contactLinks.email} className="inline-flex min-h-11 items-center break-all">
                <span className="hover-line">{site.email}</span>
              </a>
            </li>
            <li>
              <a href={contactLinks.instagram} className="inline-flex min-h-11 items-center">
                <span className="hover-line">Instagram {site.instagram.handle}</span>
              </a>
            </li>
            {site.address && (
              <li>
                <a href={site.address.mapsUrl} className="inline-flex min-h-11 items-center">
                  <span className="hover-line">
                    {site.address.street}, {site.address.city}
                  </span>
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Veliki potpis preko cijele širine; ime je već u logotipu iznad, pa je ovo ukras. */}
      <div aria-hidden="true" className="container-page" data-reveal="lines">
        <p className="display line text-[21vw] leading-[0.8] whitespace-nowrap text-bone/90">
          <span>
            Plaza <span className="accent">Home</span>
          </span>
        </p>
      </div>

      <div className="container-page">
        <div className="flex flex-col gap-1 border-t border-bone/10 py-6 text-sm text-stone sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}, {site.country}
          </p>
          <p>
            Video:{" "}
            <a href={site.videoCredit.url} className="inline-flex min-h-11 items-center underline underline-offset-4">
              {site.videoCredit.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
