import { contactLinks, site } from "@/content/site";
import { ContactForm } from "./contact-form";
import { Icon, type IconName } from "./icon";
import { SectionHeading } from "./section-heading";

const channels: { icon: IconName; label: string; value: string; href: string }[] = [
  { icon: "phone", label: "Telefon", value: site.phone.display, href: contactLinks.tel },
  { icon: "whatsapp", label: "WhatsApp", value: site.phone.display, href: contactLinks.whatsapp },
  { icon: "viber", label: "Viber", value: site.phone.display, href: contactLinks.viber },
  { icon: "mail", label: "Email", value: site.email, href: contactLinks.email },
  { icon: "instagram", label: "Instagram", value: site.instagram.handle, href: contactLinks.instagram },
];

export function Contact() {
  return (
    <section id="kontakt" aria-labelledby="kontakt-title" className="container-page py-section">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-x-12">
        <div className="lg:col-span-5">
          <SectionHeading id="kontakt-title" eyebrow="Kontakt" title="Dogovorimo dolazak i mjerenje" />
          <p className="mt-8 max-w-md text-lg">
            Pozovite, pišite na WhatsApp ili Viber, ili pošaljite upit preko forme.
          </p>

          <ul className="mt-10 border-t border-border">
            {channels.map((channel) => (
              <li key={channel.label} className="border-b border-border">
                <a
                  href={channel.href}
                  className="flex min-h-16 items-center gap-4 py-3 hover:text-primary"
                >
                  <span className="text-primary">
                    <Icon name={channel.icon} />
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col sm:flex-row sm:items-baseline sm:gap-4">
                    <span className="text-sm text-muted sm:w-24">{channel.label}</span>
                    <span className="truncate font-medium">{channel.value}</span>
                  </span>
                  <Icon name="arrowUpRight" />
                </a>
              </li>
            ))}
            {site.address && (
              <li className="border-b border-border">
                <a href={site.address.mapsUrl} className="flex min-h-16 items-center gap-4 py-3 hover:text-primary">
                  <span className="text-primary">
                    <Icon name="mapPin" />
                  </span>
                  <span className="flex-1 font-medium">
                    {site.address.street}, {site.address.city}
                  </span>
                  <Icon name="arrowUpRight" />
                </a>
              </li>
            )}
          </ul>

          <p lang="en" className="mt-8 text-muted">
            English-speaking clients are welcome: message us on WhatsApp.
          </p>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <h3 className="text-xl">Pošaljite upit</h3>
          <p className="mt-2 text-muted">Napišite šta vam treba i gdje je prostor; javljamo se telefonom ili emailom.</p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
