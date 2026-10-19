// Tekst stranice „O nama”. Izvori: brief klijenta i opisi objava na @plazahome.me.

export const about = {
  title: "Opremamo prostore po mjeri već 30 godina",
  paragraphs: [
    "Radimo za stanove i kuće, ali i za vile, hotele i restorane, gdje prozor zna biti visok i šest metara.",
    "Jedan tim vodi posao od prvog dolaska do montaže",
  ],
  /**
   * „Kako radimo”, u prvom licu. Samo ono što stoji u briefu i objavama
   * (usluge iz objave za Luštica Bay); detalje (tkanine, rok, radionica) dopisati kad ih klijent pošalje.
   */
  process: {
    title: "Svaki prozor mjerimo sami, na licu mjesta",
    text: "Dođemo na adresu, pogledamo prostor i zajedno izaberemo tkaninu, boju i sistem. Zavjese šijemo po tim mjerama i sami ih montiramo. Tako radimo trideset godina, za stan isto kao za vilu.",
  },
  /** Koraci rada, iz objave klijenta za Luštica Bay. */
  steps: [
    { title: "Savjet u prostoru", text: "Tkanina, boja i sistem, birani na licu mjesta." },
    { title: "Mjerenje", text: "Svaki prozor posebno." },
    { title: "Šivenje", text: "Po mjeri, i za visine do 6 m." },
    { title: "Montaža", text: "Garnišne, šine i zavjese." },
  ],
  facts: [
    { label: "Iskustvo", value: "30 godina" },
    { label: "Visine zavjesa", value: "do 6 m" },
    { label: "Klijenti", value: "domovi, hoteli, restorani, firme" },
    { label: "Gdje", value: "Crna Gora: Podgorica, Cetinje, Luštica Bay…" },
  ],
} as const;
