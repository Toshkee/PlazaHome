import { about } from "@/content/about";
import { vars } from "@/lib/style";

/**
 * „Kako radimo”: kratak tekst u prvom licu lijevo, a četiri koraka desno kao miran spisak,
 * bez ikonica i kartica. `dark` je na petroleju, `light` na pijesku.
 */
export function ProcessSteps({ tone = "dark" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  const line = dark ? "border-white/20" : "border-ink/15";
  return (
    <section aria-labelledby="koraci-title" className={`py-section ${dark ? "on-dark bg-petrol text-white" : "bg-sand"}`}>
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-x-12">
        <div className="lg:col-span-6" data-reveal>
          <h2 id="koraci-title" className="max-w-xl text-2xl">
            {about.process.title}
          </h2>
          <p className={`mt-6 max-w-lg lg:mt-8 lg:text-lg ${dark ? "text-white/85" : "text-muted"}`}>{about.process.text}</p>
        </div>

        <ol aria-label="Kako radimo" className={`border-t lg:col-span-5 lg:col-start-8 lg:self-end ${line}`}>
          {about.steps.map((step, i) => (
            <li
              key={step.title}
              className={`grid gap-1 border-b py-5 sm:grid-cols-5 sm:gap-6 lg:py-6 ${line}`}
              data-reveal
              style={vars({ "--delay": `${i * 0.06}s` })}
            >
              <h3 className="text-lg sm:col-span-2">{step.title}</h3>
              <p className={`sm:col-span-3 ${dark ? "text-white/75" : "text-muted"}`}>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
