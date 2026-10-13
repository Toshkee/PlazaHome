import { about } from "@/content/about";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="o-nama" aria-labelledby="o-nama-title" className="container-page py-section">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-12">
        <div className="lg:col-span-6">
          <SectionHeading id="o-nama-title" eyebrow="O nama" title={about.title} />
          <div className="mt-8 max-w-xl space-y-4 text-lg">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <dl className="self-end border-t border-border lg:col-span-5 lg:col-start-8">
          {about.facts.map((fact) => (
            <div key={fact.label} className="grid grid-cols-5 gap-4 border-b border-border py-4">
              <dt className="col-span-2 text-sm text-muted">{fact.label}</dt>
              <dd className="col-span-3 font-medium">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <h3 className="mt-section text-xl">Kako radimo</h3>
      <ol className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {about.steps.map((step, index) => (
          <li key={step.title} className="border-t border-foreground pt-5">
            <span className="text-sm font-medium text-primary" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="mt-3 text-lg font-medium">{step.title}</p>
            <p className="mt-2 text-muted">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
