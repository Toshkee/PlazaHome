// Osnovni podaci o firmi. Sve kontakt akcije na sajtu čitaju odavde.

export const site = {
  name: "Plaza Home",
  legalName: "Plaza Home DOO",
  url: "https://plazahome.me",
  /** Iskustvo kako ga klijent navodi (brief: „posluje već 30 godina”). */
  experience: "30 godina iskustva",
  country: "Crna Gora",

  phone: {
    /** Za tel:, wa.me i Viber linkove: samo cifre sa pozivnim brojem. */
    e164: "+38267380809",
    display: "+382 67 380 809",
  },
  email: "plazinicmilos333@gmail.com",
  instagram: {
    handle: "@plazahome.me",
    url: "https://www.instagram.com/plazahome.me/",
  },
  /** Tekst koji se unaprijed upiše u WhatsApp poruku. */
  whatsappMessage: "Zdravo, zanimaju me zavjese za moj prostor.",

  /**
   * PLACEHOLDER: adresa salona nije dostavljena. Kad stigne, upisati
   * { street, city, mapsUrl } i red sa adresom i mapom se pojavljuje sam.
   */
  address: null as null | { street: string; city: string; mapsUrl: string },

  /** Boja trake browsera na telefonu; ista kao --color-primary u globals.css. */
  themeColor: "#26546c",
  description:
    "Zavjese, draperije, rolo i rimske zavjese, drveni venecijaneri i tapete po mjeri. Mjerenje, šivenje i montaža za stanove, vile, hotele i restorane u Crnoj Gori.",

  /** Autor hero snimka (FPV dron), potpis u podnožju. */
  videoCredit: {
    name: "Djurišić Media",
    url: "https://www.instagram.com/djurisicmedia/",
  },
} as const;

export const contactLinks = {
  tel: `tel:${site.phone.e164}`,
  whatsapp: `https://wa.me/${site.phone.e164.replace("+", "")}?text=${encodeURIComponent(site.whatsappMessage)}`,
  viber: `viber://chat?number=${encodeURIComponent(site.phone.e164)}`,
  email: `mailto:${site.email}`,
  instagram: site.instagram.url,
} as const;
