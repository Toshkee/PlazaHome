import Link from "next/link";
import { contactLinks } from "@/content/site";
import { Icon } from "./icon";
import { Picture } from "./picture";

/** Završni poziv na dnu stranica, preko fotografije u boji brenda. */
export function Cta() {
  return (
    <section aria-labelledby="cta-title" className="on-dark relative overflow-clip bg-petrol text-white">
      {/* Fotografija samo kao tekstura: tonirana u petrolej, ispod podloge od 80 %. */}
      <Picture name="drvena-kuca" alt="" sizes="100vw" className="parallax opacity-40 mix-blend-luminosity" />
      <div aria-hidden="true" className="absolute inset-0 bg-petrol/85" />

      <div className="relative container-page grid gap-10 py-[calc(var(--spacing-section)*1.15)] xl:grid-cols-12 xl:items-end xl:gap-x-12">
        <div className="xl:col-span-7" data-reveal>
          <p className="eyebrow text-gold-light">Kontakt</p>
          <h2 id="cta-title" className="mt-5 max-w-2xl text-3xl lg:mt-7">
            Dogovorimo dolazak i mjerenje
          </h2>
          <p className="mt-6 max-w-xl text-white/85 lg:text-lg">
            Pozovite, pišite na WhatsApp ili Viber, ili pošaljite upit preko forme. Dolazimo na adresu i mjerimo svaki
            prozor.
          </p>
        </div>
        <div className="grid gap-3 sm:flex sm:flex-wrap xl:col-span-5 xl:justify-end" data-reveal>
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
