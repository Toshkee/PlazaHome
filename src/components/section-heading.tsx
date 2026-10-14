import Link from "next/link";
import { Icon } from "./icon";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  text?: string;
  /** Link desno od naslova; na telefonu ga sekcija ponavlja ispod sadržaja (`MoreLink`). */
  link?: { href: string; label: string };
  className?: string;
};

/** Zaglavlje sekcije: oznaka, naslov i kratak tekst; na desktopu link stoji desno, u visini teksta. */
export function SectionHeading({ id, eyebrow, title, text, link, className = "" }: SectionHeadingProps) {
  return (
    <div className={`flex items-end justify-between gap-12 ${className}`} data-reveal>
      <div className="max-w-2xl">
        <p className="eyebrow text-petrol">{eyebrow}</p>
        <h2 id={id} className="mt-3 text-2xl">
          {title}
        </h2>
        {text && <p className="mt-4 max-w-xl text-muted lg:text-lg">{text}</p>}
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
