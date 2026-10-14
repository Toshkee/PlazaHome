import { about } from "@/content/about";
import { vars } from "@/lib/style";
import { Icon } from "./icon";
import { SectionHeading } from "./section-heading";

/** „Kako radimo”: četiri koraka, od savjeta do montaže. */
export function ProcessSteps({ text }: { text?: string }) {
  return (
    <section aria-labelledby="koraci-title" className="bg-sand py-section">
      <div className="container-page">
        <SectionHeading
          id="koraci-title"
          eyebrow="Kako radimo"
          title="Od mjerenja do montaže"
          text={text}
        />
        <ol className="mt-10 grid gap-x-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {about.steps.map((step, i) => (
            <li
              key={step.title}
              className="grid grid-cols-[auto_1fr] gap-x-4 border-t border-ink/15 py-6 lg:block lg:pt-8 lg:pb-0"
              data-reveal
              style={vars({ "--delay": `${i * 0.08}s` })}
            >
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-white text-petrol">
                <Icon name={step.icon} className="size-6" stroke={1.5} />
              </span>
              <div className="lg:mt-6">
                <h3 className="text-xl">{step.title}</h3>
                <p className="mt-1.5 text-muted lg:mt-2">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
