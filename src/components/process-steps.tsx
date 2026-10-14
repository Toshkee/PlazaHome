import { about } from "@/content/about";
import { vars } from "@/lib/style";
import { Icon } from "./icon";
import { SectionHeading } from "./section-heading";

/** „Kako radimo”: četiri koraka, od savjeta do montaže. `dark` je na petroleju, `light` na pijesku. */
export function ProcessSteps({ text, tone = "dark" }: { text?: string; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <section aria-labelledby="koraci-title" className={`py-section ${dark ? "on-dark bg-petrol text-white" : "bg-sand"}`}>
      <div className="container-page">
        <SectionHeading id="koraci-title" eyebrow="Kako radimo" title="Od mjerenja do montaže" text={text} tone={tone} />
        <ol className="mt-12 grid gap-x-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {about.steps.map((step, i) => (
            <li
              key={step.title}
              className={`grid grid-cols-[auto_1fr] gap-x-5 border-t py-7 lg:block lg:pt-9 lg:pb-0 ${dark ? "border-white/20" : "border-ink/15"}`}
              data-reveal
              style={vars({ "--delay": `${i * 0.08}s` })}
            >
              <span
                className={`inline-flex size-13 items-center justify-center rounded-full border ${dark ? "border-white/25 text-gold-light" : "border-ink/15 bg-white text-petrol"}`}
              >
                <Icon name={step.icon} className="size-6" stroke={1.25} />
              </span>
              <div className="lg:mt-8">
                <h3 className="text-xl">{step.title}</h3>
                <p className={`mt-2 ${dark ? "text-white/75" : "text-muted"}`}>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
