import Link from "next/link";
import { clients } from "@/content/clients";
import { Icon } from "../icon";
import { TestimonialCard } from "../testimonial-card";

/** Vrste klijenata, mjesta i utisak klijenta. */
export function ClientsSection() {
  return (
    <section aria-labelledby="klijenti-title" className="py-section">
      <div className="container-page grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-x-12">
        <div className="lg:col-span-5" data-reveal>
          <p className="eyebrow text-petrol">Klijenti</p>
          <h2 id="klijenti-title" className="mt-3 text-2xl">
            Za koga radimo
          </h2>
          <p className="mt-4 text-muted lg:text-lg">{clients.lead}</p>
          <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3">
            {clients.kinds.map((kind) => (
              <li key={kind} className="flex items-center gap-2.5">
                <Icon name="check" className="size-4 text-petrol" />
                {kind}
              </li>
            ))}
          </ul>
          <p className="mt-6 flex gap-2.5 text-sm text-muted">
            <Icon name="mapPin" className="mt-0.5 size-4" />
            {clients.places.join(", ")}
          </p>
          <Link href="/klijenti" className="link-arrow mt-3">
            O klijentima
            <Icon name="arrowRight" className="size-4" />
          </Link>
        </div>
        <TestimonialCard className="lg:col-span-6 lg:col-start-7" />
      </div>
    </section>
  );
}
