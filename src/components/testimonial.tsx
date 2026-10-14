import { testimonials } from "@/content/testimonials";
import { Icon } from "./icon";

/** Utisak klijenta kao velika, centrirana rečenica, sa linkom na originalnu objavu. */
export function Testimonial({ className = "" }: { className?: string }) {
  const item = testimonials[0];
  if (!item) return null;

  return (
    <figure className={`mx-auto max-w-4xl text-center ${className}`} data-reveal>
      <Icon name="quote" className="mx-auto size-10 text-gold" stroke={1.25} />
      <blockquote className="mt-6 lg:mt-8">
        <p className="statement">„{item.quote}“</p>
      </blockquote>
      <figcaption className="mt-8 flex flex-col items-center gap-1 lg:mt-10">
        <span className="font-semibold">{item.author}</span>
        <a href={item.source.url} className="link-arrow text-sm">
          {item.source.label}
          <Icon name="arrowUpRight" className="size-4" />
        </a>
      </figcaption>
    </figure>
  );
}
