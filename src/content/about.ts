// Tekst stranice „O nama”. Izvori: brief klijenta i opisi objava na @plazahome.me.

export const about = {
  title: "Opremamo prostore po mjeri već 30 godina",
  paragraphs: [
    "Plaza Home oprema stanove, kuće, luksuzne vile, hotele i restorane. Radimo zavjese, draperije i različite sisteme za zaštitu od sunca.",
    "Svaki posao radimo od početka do kraja: dođemo, izmjerimo, sašijemo i montiramo.",
  ],
  /** Kratke činjenice u brojkama (početna i „O nama”). */
  stats: [
    { value: "30 godina", label: "iskustva u opremanju prostora" },
    { value: "do 6 m", label: "visine zavjesa koje šijemo" },
    { value: "Širom Crne Gore", label: "dolazimo na adresu i mjerimo" },
  ],
  /** Koraci rada, iz objave klijenta za Luštica Bay. */
  steps: [
    {
      icon: "message",
      title: "Savjetovanje u prostoru",
      text: "Dolazimo na adresu i pomažemo oko izbora tkanine, boje i sistema.",
    },
    { icon: "ruler", title: "Precizno mjerenje", text: "Mjerimo svaki prozor na licu mjesta." },
    { icon: "needle", title: "Šivenje po mjeri", text: "Zavjese i draperije šijemo za vaš prostor, i za visine do 6 m." },
    { icon: "tool", title: "Montaža", text: "Postavljamo garnišne, šine i zavjese." },
  ],
  facts: [
    { label: "Iskustvo", value: "30 godina" },
    { label: "Visine zavjesa", value: "do 6 m" },
    { label: "Klijenti", value: "domovi, hoteli, restorani, firme" },
    { label: "Gdje", value: "Crna Gora: Podgorica, Cetinje, Luštica Bay…" },
  ],
} as const;
