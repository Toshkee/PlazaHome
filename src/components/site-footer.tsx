import Link from "next/link";
import { navigation } from "@/content/navigation";
import { products } from "@/content/products";
import { contactLinks, site } from "@/content/site";
import { Picture } from "./picture";

const linkClass = "inline-flex min-h-11 items-center transition-colors hover:text-white";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark bg-night pb-bar text-white/70 lg:pb-0">
      <div className="container-page grid grid-cols-2 gap-x-6 gap-y-10 pt-14 pb-8 lg:grid-cols-12 lg:gap-x-12 lg:pt-20">
        <div className="col-span-2 lg:col-span-4">
          <Picture name="logo-mark" alt={site.name} sizes="130px" className="h-12 w-auto" />
          <p className="mt-5 max-w-xs">Zavjese, draperije i zaštita od sunca po mjeri. {site.experience}.</p>
        </div>

        <nav aria-labelledby="footer-stranice" className="col-span-2 sm:col-span-1 lg:col-span-2 lg:col-start-5">
          <h2 id="footer-stranice" className="caps text-white">
            Stranice
          </h2>
          <ul className="mt-3 grid grid-cols-2 gap-x-6 sm:grid-cols-1">
            <li>
              <Link href="/" className={linkClass}>
                Početna
              </Link>
            </li>
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-proizvodi" className="hidden sm:block lg:col-span-3">
          <h2 id="footer-proizvodi" className="caps text-white">
            Proizvodi
          </h2>
          <ul className="mt-3">
            {products.map((product) => (
              <li key={product.slug}>
                <Link href={`/proizvodi#${product.slug}`} className={linkClass}>
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="col-span-2 lg:col-span-3">
          <h2 className="caps text-white">Kontakt</h2>
          <ul className="mt-3">
            <li>
              <a href={contactLinks.tel} className={linkClass}>
                {site.phone.display}
              </a>
            </li>
            <li>
              <a href={contactLinks.email} className={`${linkClass} break-all`}>
                {site.email}
              </a>
            </li>
            <li>
              <a href={contactLinks.instagram} className={linkClass}>
                Instagram {site.instagram.handle}
              </a>
            </li>
            {site.address && (
              <li>
                <a href={site.address.mapsUrl} className={linkClass}>
                  {site.address.street}, {site.address.city}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="container-page">
        <div className="flex flex-col gap-1 border-t border-white/10 py-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}, {site.country}
          </p>
          <p>
            Video:{" "}
            <a href={site.videoCredit.url} className="inline-flex min-h-11 items-center underline underline-offset-4 hover:text-white">
              {site.videoCredit.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
