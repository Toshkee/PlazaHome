import Link from "next/link";
import { contactLinks, site } from "@/content/site";
import { Picture } from "./picture";

const quietLink =
  "inline-flex min-h-11 items-center text-white underline decoration-white/35 underline-offset-[0.35em] transition-colors hover:decoration-white";

/** Završni poziv na dnu stranica, preko fotografije u boji brenda: jedno dugme, a direktni kontakt tiho ispod. */
export function Cta() {
  return (
    <section aria-labelledby="cta-title" className="on-dark relative overflow-clip bg-petrol text-white">
      {/* Fotografija samo kao tekstura: tonirana u petrolej, ispod podloge od 80 %. */}
      <Picture name="drvena-kuca" alt="" sizes="100vw" className="parallax opacity-40 mix-blend-luminosity" />
      <div aria-hidden="true" className="absolute inset-0 bg-petrol/85" />

      <div className="relative container-page grid gap-10 py-[calc(var(--spacing-section)*1.15)] xl:grid-cols-12 xl:items-end xl:gap-x-12">
        <div className="xl:col-span-7" data-reveal>
          <h2 id="cta-title" className="max-w-2xl text-3xl">
            Dogovorimo dolazak i mjerenje
          </h2>
          <p className="mt-6 max-w-xl text-white/85 lg:text-lg">
            Javite nam adresu i šta vam treba, pa se dogovorimo kad da dođemo na mjerenje.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 xl:col-span-5 xl:items-end" data-reveal>
          <Link href="/kontakt" className="btn btn-outline">
            Zakažite konsultaciju
          </Link>
          <p className="flex flex-wrap items-center gap-x-3 text-sm text-white/90">
            ili direktno:
            <a href={contactLinks.whatsapp} className={quietLink}>
              WhatsApp
            </a>
            <span aria-hidden="true">·</span>
            <a href={contactLinks.tel} className={quietLink}>
              {site.phone.display}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
