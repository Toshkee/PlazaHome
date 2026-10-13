import { Cta } from "@/components/cta";
import { Marquee } from "@/components/marquee";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { Picture } from "@/components/picture";
import { Quote } from "@/components/quote";
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
      <PageHero label="Klijenti" title={clients.title} accent={clients.accent} lead={clients.lead} />

      <section aria-labelledby="mjesta-title" className="border-y border-bone/10 py-6">
        <h2 id="mjesta-title" className="sr-only">
          Gdje smo radili
        </h2>
        <Marquee items={clients.places} className="display text-[clamp(3rem,2rem+6vw,8rem)] leading-[1.1]" />
      </section>

      {/* Vrste klijenata: svaka sa svojom fotografijom, naizmjenično lijevo i desno. */}
      <section aria-labelledby="vrste-title" className="on-light py-section">
        <div className="container-page">
          <h2 id="vrste-title" className="label text-petrol" data-reveal="fade">
            Za koga radimo
          </h2>
          <ol className="mt-12">
            {clients.segments.map((segment, i) => {
              const flip = i % 2 === 1;
              return (
                <li key={segment.name} className="grid items-center gap-8 border-t border-ink/15 py-12 lg:grid-cols-12 lg:gap-x-12 lg:py-16">
                  <div
                    className={`relative aspect-4/3 overflow-clip bg-ink/10 lg:col-span-6 ${flip ? "lg:col-start-7" : ""}`}
                    data-reveal="curtain"
                  >
                    <Picture name={segment.image.name} alt={segment.image.alt} sizes="(min-width: 64rem) 45vw, 100vw" className="parallax" />
                  </div>
                  <div
                    className={`lg:col-span-5 ${flip ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-8"}`}
                    data-reveal="up"
                    style={vars({ "--delay": "0.15s" })}
                  >
                    <span className="label text-muted">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="display mt-4 text-2xl">{segment.name}</h3>
                    <p className="mt-4 max-w-sm text-lg text-muted">{segment.text}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section aria-labelledby="utisak-title" className="py-section">
        <div className="container-page">
          <h2 id="utisak-title" className="label text-gold" data-reveal="fade">
            Utisak klijenta
          </h2>
          <Quote className="mt-10 max-w-5xl" />
        </div>
      </section>

      <Cta />
    </PageShell>
  );
}
