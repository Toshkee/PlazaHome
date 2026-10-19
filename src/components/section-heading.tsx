import Link from "next/link";
import { Icon } from "./icon";

type SectionHeadingProps = {
  id: string;
  title: string;
  text?: string;
  /** Link desno od naslova; na telefonu ga sekcija ponavlja ispod sadržaja (`MoreLink`). */
  link?: { href: string; label: string };
  /** `dark`: na petrolej podlozi. */
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Zaglavlje sekcije: naslov i kratak tekst; na desktopu link stoji desno, u visini teksta.
 * Bez oznake iznad naslova: ista oznaka na svakoj sekciji je ono po čemu sajt djeluje kao šablon.
 */
export function SectionHeading({ id, title, text, link, tone = "light", className = "" }: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div className={`flex items-end justify-between gap-12 ${className}`} data-reveal>
      <div className="max-w-2xl">
        <h2 id={id} className="text-2xl">
          {title}
        </h2>
        {text && <p className={`mt-5 max-w-xl lg:text-lg ${dark ? "text-white/80" : "text-muted"}`}>{text}</p>}
      </div>
      {link && (
        <Link href={link.href} className="link-arrow hidden shrink-0 lg:inline-flex">
          {link.label}
          <Icon name="arrowRight" className="size-4" />
        </Link>
      )}
    </div>
  );
}

/** Link „pogledajte sve” ispod sadržaja sekcije, samo na telefonu i tabletu. */
export function MoreLink({ href, label, className = "" }: { href: string; label: string; className?: string }) {
  return (
    <Link href={href} className={`link-arrow lg:hidden ${className}`}>
      {label}
      <Icon name="arrowRight" className="size-4" />
    </Link>
  );
}
