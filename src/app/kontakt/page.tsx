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
  ...(site.address
    ? [{ icon: "mapPin" as const, label: "Adresa", value: `${site.address.street}, ${site.address.city}`, href: site.address.mapsUrl }]
    : []),
];

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        label="Kontakt"
        title="Dogovorimo dolazak i mjerenje"
        lead="Pozovite, pišite na WhatsApp ili Viber, ili pošaljite upit preko forme."
      />

      <section aria-label="Načini kontakta" className="container-page py-section">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-5">
            <h2 className="text-xl font-medium tracking-[-0.012em]">Javite nam se direktno</h2>
            <ul className="mt-5 grid gap-3">
              {channels.map((channel, i) => (
                <li key={channel.label} data-reveal style={vars({ "--delay": `${i * 0.05}s` })}>
                  <a
                    href={channel.href}
                    className="group flex min-h-18 items-center gap-4 border border-line bg-white px-4 py-3 transition-colors hover:border-petrol sm:px-5"
                  >
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-sand text-petrol">
                      <Icon name={channel.icon} className="size-5" />
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col">
                      <span className="text-sm text-muted">{channel.label}</span>
                      <span className="truncate font-semibold">{channel.value}</span>
                    </span>
                    <Icon name="arrowUpRight" className="size-5 text-muted transition-colors group-hover:text-petrol" />
                  </a>
                </li>
              ))}
            </ul>
            <p lang="en" className="mt-6 text-muted">
              English-speaking clients are welcome: message us on WhatsApp.
            </p>
          </div>

          <div className="lg:col-span-7" data-reveal>
            <div className="border-t border-line pt-10 sm:border sm:bg-white sm:p-8 lg:p-10">
              <h2 className="text-xl font-medium tracking-[-0.012em]">Pošaljite upit</h2>
              <p className="mt-2 text-muted">Napišite šta vam treba i gdje je prostor; javljamo se telefonom ili emailom.</p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
