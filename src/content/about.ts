// Tekst sekcije „O nama”. Izvori: brief klijenta i opisi objava na @plazahome.me.

export const about = {
  title: "Opremamo prostore po mjeri već 30 godina",
  paragraphs: [
    "Plaza Home oprema stanove, kuće, luksuzne vile, hotele i restorane. Radimo zavjese, draperije i različite sisteme za zaštitu od sunca.",
    "Svaki posao radimo od početka do kraja: dođemo, izmjerimo, sašijemo i montiramo.",
  ],
  /** Koraci rada, iz objave klijenta za Luštica Bay. */
  steps: [
    { title: "Savjetovanje u prostoru", text: "Dolazimo na adresu i pomažemo oko izbora tkanine, boje i sistema." },
    { title: "Precizno mjerenje", text: "Mjerimo svaki prozor na licu mjesta." },
    { title: "Šivenje po mjeri", text: "Zavjese i draperije šijemo za vaš prostor, i za visine do 6 m." },
    { title: "Montaža", text: "Postavljamo garnišne, šine i zavjese." },
  ],
  facts: [
    { label: "Iskustvo", value: "30 godina" },
    { label: "Visine zavjesa", value: "do 6 m" },
    { label: "Klijenti", value: "domovi, hoteli, restorani, firme" },
    { label: "Gdje", value: "Crna Gora: Podgorica, Cetinje, Luštica Bay…" },
  ],
} as const;
