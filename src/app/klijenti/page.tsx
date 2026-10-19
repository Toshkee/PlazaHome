import { Cta } from "@/components/cta";
import { Icon } from "@/components/icon";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { Picture } from "@/components/picture";
import { Testimonial } from "@/components/testimonial";
import { clients } from "@/content/clients";
import { pageMetadata } from "@/lib/metadata";
import { vars } from "@/lib/style";

export const metadata = pageMetadata({
  title: "Klijenti",
  description:
    "Za koga radimo: vile, stanovi i kuće, hoteli i etno sela, restorani i poslovni prostori širom Crne Gore. Utisak etno sela Dolina Pive.",
  path: "/klijenti",
});

export default function ClientsPage() {
  return (
    <PageShell>
      <PageHero
        label="Klijenti"
        title={clients.title}
        lead={clients.lead}
        image={{ name: "restoran-lucni-prozori", alt: "Restoran sa tamnoplavim draperijama na lučnim prozorima" }}
      >
        <p className="enter-up mt-5 flex gap-2.5 text-sm text-white/85" style={vars({ "--delay": "0.45s" })}>
          <Icon name="mapPin" className="mt-0.5 size-4 text-gold-light" />
          <span>
            <span className="sr-only">Gdje smo radili: </span>
            {clients.places.join(", ")}
          </span>
        </p>
      </PageHero>

      {/* Vrste klijenata: na desktopu dvije veće kartice, pa tri manje. */}
      <section aria-labelledby="vrste-title" className="py-section">
        <div className="container-page">
          <div data-reveal>
            <h2 id="vrste-title" className="text-2xl">
              Za koga radimo
            </h2>
          </div>
          <ul className="mt-10 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-6 lg:gap-x-8 lg:gap-y-16">
            {clients.segments.map((segment, i) => (
              <li
                key={segment.name}
                className={i < 2 ? "lg:col-span-3" : "lg:col-span-2"}
                style={vars({ "--delay": `${(i < 2 ? i : i - 2) * 0.1}s` })}
              >
                <div className={`overflow-clip bg-sand ${i < 2 ? "aspect-4/3" : "aspect-4/3 lg:aspect-4/5"}`} data-reveal="image">
                  <Picture
                    name={segment.image.name}
                    alt={segment.image.alt}
                    sizes={i < 2 ? "(min-width: 80rem) 38rem, (min-width: 40rem) 47vw, 100vw" : "(min-width: 80rem) 25rem, (min-width: 64rem) 31vw, (min-width: 40rem) 47vw, 100vw"}
                    className="size-full object-cover"
                  />
                </div>
                <h3 className="mt-5 text-xl">{segment.name}</h3>
                <p className="mt-1.5 max-w-md text-muted">{segment.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="utisak-title" className="bg-sand py-section">
        <div className="container-page">
          <h2 id="utisak-title" className="sr-only">
            Utisak klijenta
          </h2>
          <Testimonial />
        </div>
      </section>

      <Cta />
    </PageShell>
  );
}
