import { Cta } from "@/components/cta";
import { Icon } from "@/components/icon";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { Picture } from "@/components/picture";
import { TestimonialCard } from "@/components/testimonial-card";
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
      <PageHero label="Klijenti" title={clients.title} lead={clients.lead}>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Gdje smo radili">
          {clients.places.map((place) => (
            <li key={place} className="inline-flex items-center gap-2 border border-line bg-white px-3 py-2 text-sm font-medium">
              <Icon name="mapPin" className="size-4 text-petrol" />
              {place}
            </li>
          ))}
        </ul>
      </PageHero>

      {/* Vrste klijenata: na desktopu dvije veće kartice, pa tri manje. */}
      <section aria-labelledby="vrste-title" className="py-section">
        <div className="container-page">
          <h2 id="vrste-title" className="text-2xl" data-reveal>
            Za koga radimo
          </h2>
          <ul className="mt-8 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-6 lg:gap-x-8 lg:gap-y-14">
            {clients.segments.map((segment, i) => (
              <li
                key={segment.name}
                className={i < 2 ? "lg:col-span-3" : "lg:col-span-2"}
                data-reveal
                style={vars({ "--delay": `${(i < 2 ? i : i - 2) * 0.06}s` })}
              >
                <div className={`overflow-clip bg-sand ${i < 2 ? "aspect-4/3" : "aspect-4/3 lg:aspect-4/5"}`}>
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
        <div className="container-page grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-x-12">
          <div className="lg:col-span-4" data-reveal>
            <p className="eyebrow text-petrol">Utisak klijenta</p>
            <h2 id="utisak-title" className="mt-3 text-2xl">
              Šta kažu o nama
            </h2>
          </div>
          <TestimonialCard className="bg-white lg:col-span-8" />
        </div>
      </section>

      <Cta />
    </PageShell>
  );
}
