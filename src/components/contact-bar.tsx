import { contactLinks } from "@/content/site";
import { Icon, type IconName } from "./icon";

const actions: { icon: IconName; label: string; href: string }[] = [
  { icon: "phone", label: "Pozovi", href: contactLinks.tel },
  { icon: "whatsapp", label: "WhatsApp", href: contactLinks.whatsapp },
  { icon: "viber", label: "Viber", href: contactLinks.viber },
];

/** Donja traka na telefonu: kontakt je uvijek na jedan dodir. */
export function ContactBar() {
  return (
    <nav
      aria-label="Brzi kontakt"
      className="safe-bottom fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background lg:hidden"
    >
      <ul className="grid h-bar grid-cols-3">
        {actions.map((action) => (
          <li key={action.label}>
            <a
              href={action.href}
              className="flex h-full flex-col items-center justify-center gap-1 text-sm font-medium text-primary"
            >
              <Icon name={action.icon} />
              {action.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
