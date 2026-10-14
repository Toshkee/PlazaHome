import { testimonials } from "@/content/testimonials";
import { Icon } from "./icon";

/** Utisak klijenta sa linkom na originalnu objavu. */
export function TestimonialCard({ className = "" }: { className?: string }) {
  const item = testimonials[0];
  if (!item) return null;

  return (
    <figure className={`bg-sand p-6 sm:p-10 ${className}`} data-reveal>
      <Icon name="quote" className="size-8 text-petrol" stroke={1.5} />
      <blockquote className="mt-5">
        <p className="text-xl font-medium lg:text-[1.625rem] lg:leading-snug">„{item.quote}“</p>
      </blockquote>
      <figcaption className="mt-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-1 border-t border-line pt-5">
        <span className="font-semibold">{item.author}</span>
        <a href={item.source.url} className="link-arrow text-sm">
          {item.source.label}
          <Icon name="arrowUpRight" className="size-4" />
        </a>
      </figcaption>
    </figure>
  );
}
