// Stranica „Klijenti”. Samo vrste klijenata i mjesta iz briefa i sa Instagrama;
// imena firmi i logotipi idu ovdje tek kad klijent da dozvolu.
import type { MediaName } from "./media.generated";

export const clients = {
  title: ["Domovi, vile,", "hoteli", "i restorani"],
  accent: [1],
  lead: "Radimo za porodice i za firme, širom Crne Gore.",
  segments: [
    {
      name: "Vile",
      text: "Saloni sa prozorima u dvije visine i zavjese dugačke i do 6 m.",
      image: { name: "vila-salon", alt: "Salon vile sa visokim prozorima i draperijama u zalazak sunca" },
    },
    {
      name: "Stanovi i kuće",
      text: "Od laganih zavjesa do rolo zavjesa i drvenih venecijanera.",
      image: { name: "kamena-kuca", alt: "Dnevna soba sa kamenim zidom i laganim bijelim zavjesama" },
    },
    {
      name: "Hoteli i etno sela",
      text: "Teže tkanine za sobe i salone. Bili smo partneri etno sela Dolina Pive tokom izgradnje.",
      image: { name: "drvena-kuca", alt: "Drvena kuća sa svijetlim zavjesama i draperijama na staklenim vratima" },
    },
    {
      name: "Restorani",
      text: "Draperije i zavjese za sale, kao tamnoplave draperije na lučnim prozorima.",
      image: { name: "restoran-lucni-prozori", alt: "Restoran sa tamnoplavim draperijama na lučnim prozorima" },
    },
    {
      name: "Poslovni prostori",
      text: "Tapete, rolo zavjese i zaštita od sunca za kancelarije i poslovne prostore.",
      image: { name: "tapete", alt: "Siva teksturisana tapeta sa okruglim zidnim lampama od mermera i mesinga" },
    },
  ] satisfies { name: string; text: string; image: { name: MediaName; alt: string } }[],
  /** Mjesta gdje smo radili: iz briefa i objava. */
  places: ["Podgorica", "Cetinje", "Luštica Bay", "Dolina Pive"],
  kinds: ["Vile", "Hoteli", "Restorani", "Stanovi i kuće", "Etno sela", "Poslovni prostori"],
} as const;
