import { navigation } from "@/content/navigation";
import { contactLinks, site } from "@/content/site";
import { Picture } from "./picture";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark bg-primary text-primary-foreground">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-12">
        <div className="lg:col-span-5">
          <Picture name="logo" alt={site.name} sizes="125px" className="h-12 w-auto" />
          <p className="mt-6 max-w-xs">
            Zavjese, draperije i zaštita od sunca po mjeri. {site.experience}.
          </p>
        </div>

        <nav aria-label="Podnožje" className="lg:col-span-3">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="inline-flex min-h-11 items-center underline-offset-4 hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="space-y-1 lg:col-span-4">
          <li>
            <a href={contactLinks.tel} className="inline-flex min-h-11 items-center underline-offset-4 hover:underline">
              {site.phone.display}
            </a>
          </li>
          <li>
            <a href={contactLinks.email} className="inline-flex min-h-11 items-center break-all underline-offset-4 hover:underline">
              {site.email}
            </a>
          </li>
          <li>
            <a href={contactLinks.instagram} className="inline-flex min-h-11 items-center underline-offset-4 hover:underline">
              Instagram {site.instagram.handle}
            </a>
          </li>
        </ul>
      </div>

      <div className="container-page">
        <div className="flex flex-col gap-2 border-t border-primary-foreground/20 py-6 text-sm sm:flex-row sm:justify-between">
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
