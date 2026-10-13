import { Cta } from "@/components/cta";
import { CountUp } from "@/components/count-up";
import { Lines } from "@/components/lines";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { Picture } from "@/components/picture";
import { Statement } from "@/components/statement";
import { about } from "@/content/about";
import { pageMetadata } from "@/lib/metadata";
import { vars } from "@/lib/style";

export const metadata = pageMetadata({
  title: "O nama",
  description:
    "Plaza Home oprema stanove, kuće, vile, hotele i restorane u Crnoj Gori već 30 godina: savjetovanje, mjerenje, šivenje i montaža zavjesa i draperija.",
  path: "/o-nama",
});

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        label="O nama"
        title={about.title}
        accent={about.accent}
        image={{ name: "vila-salon-sumrak", alt: "Salon vile sa zaobljenom sofom i visokim draperijama u sumrak" }}
      />

      {/* Priča i činjenice. */}
      <section aria-labelledby="prica-title" className="on-light py-section">
        <div className="container-page">
          <h2 id="prica-title" className="label text-petrol" data-reveal="fade">
            Ko smo
          </h2>
          <Statement text={about.paragraphs[0]} className="mt-8 max-w-5xl" />

          <div className="mt-20 grid gap-14 lg:grid-cols-12 lg:gap-x-12">
            <p className="max-w-xl text-lg lg:col-span-6" data-reveal="up">
              {about.paragraphs[1]}
            </p>
            <dl className="border-t border-ink/15 lg:col-span-5 lg:col-start-8">
              {about.facts.map((fact, i) => (
                <div
                  key={fact.label}
                  className="grid grid-cols-5 gap-4 border-b border-ink/15 py-4"
                  data-reveal="up"
                  style={vars({ "--delay": `${i * 0.08}s` })}
                >
                  <dt className="col-span-2 text-sm text-muted">{fact.label}</dt>
                  <dd className="col-span-3 font-medium">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Brojke preko fotografije. */}
      <section aria-label="Plaza Home u brojkama" className="relative overflow-clip">
        <div className="relative h-[80svh] min-h-[32rem] overflow-clip" data-reveal="curtain">
          <Picture
            name="vila-salon"
            alt="Salon vile sa prozorima u dvije visine i draperijama, u zalazak sunca"
            sizes="100vw"
            className="parallax"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-ink/55" />
        </div>
        {/* Podloga ispod brojki (hero-copy) drži kontrast i preko svijetlih prozora. */}
        <div className="hero-copy absolute inset-x-0 bottom-0">
          <dl className="container-page relative grid grid-cols-3 gap-x-4 pb-12 sm:gap-x-8 lg:pb-16">
            {about.numbers.map((item, i) => (
              <div key={item.label} className="border-t border-bone/30 pt-5" data-reveal="up" style={vars({ "--delay": `${0.4 + i * 0.12}s` })}>
                <dt className="sr-only">{item.label}</dt>
                <dd>
                  <span className="display block text-[clamp(3rem,2rem+4.5vw,7rem)] leading-none whitespace-nowrap">
                    {item.prefix && <span className="accent text-[0.45em]">{item.prefix}</span>}
                    <CountUp value={item.value} />
                    {item.suffix && <span className="text-[0.45em]">{item.suffix}</span>}
                  </span>
                  <span aria-hidden="true" className="mt-3 block text-sm text-bone/85 sm:text-base">
                    {item.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Kako radimo: kartice se slažu jedna preko druge dok se skroluje. */}
      <section aria-labelledby="koraci-title" className="py-section">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-[calc(var(--spacing-header)+2rem)]">
              <p className="label text-gold" data-reveal="fade">
                Kako radimo
              </p>
              <h2 id="koraci-title" className="display mt-5 text-2xl" data-reveal="lines">
                <Lines lines={["Od mjerenja", "do montaže"]} accent={[1]} />
              </h2>
            </div>
          </div>

          <ol className="lg:col-span-8">
            {about.steps.map((step, i) => (
              <li
                key={step.title}
                className="sticky mb-6 border-t border-bone/15 bg-ink-soft p-6 sm:p-10"
                style={{ top: `calc(var(--spacing-header) + 1rem + ${i * 1.25}rem)` }}
              >
                <div className="flex min-h-[16rem] flex-col justify-between gap-10 sm:min-h-[20rem]">
                  <span className="display text-[clamp(4rem,3rem+5vw,8rem)] leading-none text-gold" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="display text-xl">{step.title}</h3>
                    <p className="mt-3 max-w-md text-stone">{step.text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Cta />
    </PageShell>
  );
}
