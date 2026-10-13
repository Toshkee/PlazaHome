import { ContactForm } from "@/components/contact-form";
import { Icon, type IconName } from "@/components/icon";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { contactLinks, site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import { vars } from "@/lib/style";

export const metadata = pageMetadata({
  title: "Kontakt",
  description:
    "Dogovorite dolazak i mjerenje: telefon, WhatsApp, Viber, email ili forma. Plaza Home, zavjese i draperije po mjeri, Crna Gora.",
  path: "/kontakt",
});

const channels: { icon: IconName; label: string; value: string; href: string }[] = [
  { icon: "phone", label: "Telefon", value: site.phone.display, href: contactLinks.tel },
  { icon: "whatsapp", label: "WhatsApp", value: site.phone.display, href: contactLinks.whatsapp },
  { icon: "viber", label: "Viber", value: site.phone.display, href: contactLinks.viber },
  { icon: "mail", label: "Email", value: site.email, href: contactLinks.email },
  { icon: "instagram", label: "Instagram", value: site.instagram.handle, href: contactLinks.instagram },
];

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        label="Kontakt"
        title={["Dogovorimo", "dolazak", "i mjerenje"]}
        accent={[2]}
        lead="Pozovite, pišite na WhatsApp ili Viber, ili pošaljite upit preko forme."
      />

      <section aria-label="Načini kontakta" className="container-page pb-section">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-6">
            <ul className="border-t border-bone/10">
              {channels.map((channel, i) => (
                <li key={channel.label} className="border-b border-bone/10" data-reveal="up" style={vars({ "--delay": `${i * 0.07}s` })}>
                  <a href={channel.href} className="group flex min-h-20 items-center gap-5 py-4">
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-bone/20 text-gold transition-colors duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
                      <Icon name={channel.icon} className="size-4" />
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col">
                      <span className="label text-stone">{channel.label}</span>
                      <span className="display mt-1 truncate text-[clamp(1.375rem,1.1rem+1.2vw,2rem)] leading-tight transition-transform duration-700 ease-film group-hover:translate-x-1.5">
                        {channel.value}
                      </span>
                    </span>
                    <Icon name="arrowUpRight" className="size-5 text-stone transition-transform duration-500 group-hover:rotate-45" />
                  </a>
                </li>
              ))}
              {site.address && (
                <li className="border-b border-bone/10">
                  <a href={site.address.mapsUrl} className="group flex min-h-20 items-center gap-5 py-4">
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-bone/20 text-gold">
                      <Icon name="mapPin" className="size-4" />
                    </span>
                    <span className="display flex-1 text-[clamp(1.375rem,1.1rem+1.2vw,2rem)] leading-tight">
                      {site.address.street}, {site.address.city}
                    </span>
                    <Icon name="arrowUpRight" className="size-5 text-stone" />
                  </a>
                </li>
              )}
            </ul>
            <p lang="en" className="mt-8 text-stone">
              English-speaking clients are welcome: message us on WhatsApp.
            </p>
          </div>

          <div className="lg:col-span-5 lg:col-start-8" data-reveal="up" style={vars({ "--delay": "0.2s" })}>
            <h2 className="display text-xl">Pošaljite upit</h2>
            <p className="mt-3 text-stone">Napišite šta vam treba i gdje je prostor; javljamo se telefonom ili emailom.</p>
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
