import Link from "next/link";
import { contactLinks } from "@/content/site";
import { Icon } from "./icon";
import { vars } from "@/lib/style";
import { Lines } from "./lines";

/** Završni poziv na dnu stranica: veliki naslov i tri načina da se javi. */
export function Cta() {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-clip border-t border-bone/10 py-section">
      <div className="container-page">
        <p className="label text-gold" data-reveal="fade">
          Kontakt
        </p>
        <h2 id="cta-title" className="display mt-6 text-3xl" data-reveal="lines">
          <Lines lines={["Dogovorimo", "dolazak", "i mjerenje"]} accent={[2]} />
        </h2>
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
          <p className="max-w-md text-lg text-stone lg:col-span-5" data-reveal="up">
            Pozovite, pišite na WhatsApp ili Viber, ili pošaljite upit preko forme.
          </p>
          <div className="flex flex-wrap gap-3 lg:col-span-7 lg:justify-end" data-reveal="up" style={vars({ "--delay": "0.1s" })}>
            <a href={contactLinks.whatsapp} className="btn btn-solid">
              <Icon name="whatsapp" />
              Pišite na WhatsApp
            </a>
            <a href={contactLinks.tel} className="btn btn-ghost">
              <Icon name="phone" />
              Pozovite
            </a>
            <Link href="/kontakt" className="btn btn-ghost">
              Pošaljite upit
              <Icon name="arrowRight" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
