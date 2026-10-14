import Link from "next/link";
import { clients } from "@/content/clients";
import { vars } from "@/lib/style";
import { Icon } from "../icon";
import { Testimonial } from "../testimonial";

/** Utisak klijenta, pa vrste klijenata kao spisak sa tankim linijama. */
export function ClientsSection() {
  return (
    <section aria-labelledby="klijenti-title" className="py-section">
      <div className="container-page">
        <Testimonial />

        <div className="mt-20 grid gap-10 border-t border-line pt-14 lg:mt-36 lg:grid-cols-12 lg:gap-x-12 lg:pt-28">
          <div className="lg:col-span-5" data-reveal>
            <p className="eyebrow text-petrol">Klijenti</p>
            <h2 id="klijenti-title" className="mt-5 text-2xl lg:mt-7">
              Za koga radimo
            </h2>
            <p className="mt-5 max-w-md text-muted lg:text-lg">{clients.lead}</p>
            <p className="mt-5 flex gap-2.5 text-sm text-muted">
              <Icon name="mapPin" className="mt-0.5 size-4 text-petrol" />
              {clients.places.join(", ")}
            </p>
            <Link href="/klijenti" className="link-arrow mt-4">
              O klijentima
              <Icon name="arrowRight" className="size-4" />
            </Link>
          </div>
          <ul className="grid grid-cols-2 gap-x-6 border-t border-line sm:gap-x-8 lg:col-span-6 lg:col-start-7 lg:self-end">
            {clients.kinds.map((kind, i) => (
              <li
                key={kind}
                className="border-b border-line py-4 sm:text-lg lg:py-5"
                data-reveal
                style={vars({ "--delay": `${(i % 2) * 0.06}s` })}
              >
                {kind}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
