import { testimonials } from "@/content/testimonials";
import { Icon } from "./icon";

export function Testimonial() {
  if (testimonials.length === 0) return null;

  return (
    <section aria-labelledby="utisci-title" className="on-dark bg-primary py-section text-primary-foreground">
      <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-x-12">
        <h2 id="utisci-title" className="eyebrow lg:col-span-3">
          Utisci klijenata
        </h2>
        <div className="space-y-16 lg:col-span-8 lg:col-start-5">
          {testimonials.map((item) => (
            <figure key={item.source.url}>
              <blockquote className="text-xl">
                <p>„{item.quote}“</p>
              </blockquote>
              <div className="mt-8 h-px w-16 bg-accent" aria-hidden="true" />
              <figcaption className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
                <span className="font-medium">{item.author}</span>
                <a
                  href={item.source.url}
                  className="inline-flex min-h-11 items-center gap-2 text-sm underline underline-offset-4"
                >
                  {item.source.label}
                  <Icon name="arrowUpRight" />
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
