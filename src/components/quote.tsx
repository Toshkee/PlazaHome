import { testimonials } from "@/content/testimonials";
import { Icon } from "./icon";
import { Statement } from "./statement";

/** Utisak klijenta kao velika rečenica koja se pali na skrol. */
export function Quote({ className = "" }: { className?: string }) {
  const item = testimonials[0];
  if (!item) return null;

  return (
    <figure className={className}>
      <blockquote>
        <Statement text={`„${item.quote}“`} size="md" />
      </blockquote>
      <figcaption className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2" data-reveal="up">
        <span className="h-px w-12 bg-current opacity-40" aria-hidden="true" />
        <span className="font-medium">{item.author}</span>
        <a href={item.source.url} className="inline-flex min-h-11 items-center gap-2 text-sm underline underline-offset-4">
          {item.source.label}
          <Icon name="arrowUpRight" className="size-4" />
        </a>
      </figcaption>
    </figure>
  );
}
