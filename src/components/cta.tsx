import Link from "next/link";
import { contactLinks } from "@/content/site";
import { Icon } from "./icon";

/** Završni poziv na dnu stranica: dolazak i mjerenje, tri načina da se javi. */
export function Cta() {
  return (
    <section aria-labelledby="cta-title" className="on-dark bg-petrol text-white">
      <div className="container-page grid gap-8 py-section xl:grid-cols-12 xl:items-end xl:gap-x-12">
        <div className="xl:col-span-6" data-reveal>
          <p className="eyebrow text-gold-light">Kontakt</p>
          <h2 id="cta-title" className="mt-3 text-2xl">
            Dogovorimo dolazak i mjerenje
          </h2>
          <p className="mt-4 max-w-xl text-white/80 lg:text-lg">
            Pozovite, pišite na WhatsApp ili Viber, ili pošaljite upit preko forme. Dolazimo na adresu i mjerimo svaki
            prozor.
          </p>
        </div>
        <div className="grid gap-3 sm:flex sm:flex-wrap xl:col-span-6 xl:justify-end" data-reveal>
          <a href={contactLinks.whatsapp} className="btn btn-light">
            <Icon name="whatsapp" />
            Pišite na WhatsApp
          </a>
          <a href={contactLinks.tel} className="btn btn-outline">
            <Icon name="phone" />
            Pozovite
          </a>
          <Link href="/kontakt" className="btn btn-outline">
            Pošaljite upit
            <Icon name="arrowRight" />
          </Link>
        </div>
      </div>
    </section>
  );
}
