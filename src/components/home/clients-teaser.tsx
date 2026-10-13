import Link from "next/link";
import { clients } from "@/content/clients";
import { Icon } from "../icon";
import { Lines } from "../lines";
import { Marquee } from "../marquee";
import { Quote } from "../quote";

export function ClientsTeaser() {
  return (
    <section aria-labelledby="klijenti-title" className="overflow-clip py-section">
      <div className="container-page">
        <p className="label text-gold" data-reveal="fade">
          Klijenti
        </p>
        <h2 id="klijenti-title" className="display mt-5 text-2xl" data-reveal="lines">
          <Lines lines={["Za koga", "radimo"]} accent={[1]} />
        </h2>
      </div>

      <div className="mt-14 border-y border-bone/10 py-6">
        <Marquee items={clients.kinds} className="display text-[clamp(3rem,2rem+6vw,8rem)] leading-[1.1]" />
        <Marquee
          items={clients.places}
          reverse
          className="mt-3 text-stone"
          itemClassName="label text-[clamp(0.8125rem,0.7rem+0.5vw,1.125rem)]"
        />
      </div>

      <div className="container-page mt-20 grid gap-12 lg:grid-cols-12 lg:gap-x-12">
        <Quote className="lg:col-span-9" />
        <div className="self-end lg:col-span-3 lg:justify-self-end" data-reveal="fade">
          <Link href="/klijenti" className="link-line">
            O klijentima
            <Icon name="arrowRight" />
          </Link>
        </div>
      </div>
    </section>
  );
}
