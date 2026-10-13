// Proizvodi. Nazivi prate highlight-e i fotografije sa @plazahome.me.
import type { MediaName } from "./media.generated";

export type Product = {
  name: string;
  text: string;
  image?: { name: MediaName; alt: string };
};

export const productsIntro =
  "Sve radimo po mjeri prozora i prostora: od laganih zavjesa do sistema koji štite od sunca.";

export const products: Product[] = [
  {
    name: "Zavjese i draperije",
    text: "Lagane zavjese i teže draperije, šivene po mjeri, i za prozore visine preko 3 m.",
    image: {
      name: "zavjese-draperije",
      alt: "Dnevna soba sa bijelim zavjesama i draperijama boje kafe na velikom prozoru",
    },
  },
  {
    name: "Draperije za spavaće sobe",
    text: "Teže tkanine za spavaće sobe, salone i hotelske sobe.",
    image: {
      name: "draperije-spavaca",
      alt: "Spavaća soba sa tamnoplavim draperijama i bijelom zavjesom pored kreveta",
    },
  },
  {
    name: "Rimske zavjese",
    text: "Podižu se u nabore i ostaju u okviru prozora.",
    image: {
      name: "rimske-zavjese",
      alt: "Niz prozora sa svijetlim rimskim zavjesama u zaobljenoj prostoriji",
    },
  },
  {
    name: "Rolo zavjese",
    text: "Platno na mehanizmu za zaštitu od sunca; kad je podignuto, gotovo se ne vidi.",
    image: {
      name: "rolo-zavjese",
      alt: "Dva velika prozora sa svijetlim rolo zavjesama u praznoj sobi",
    },
  },
  {
    name: "Drveni venecijaneri",
    text: "Drvene lamele koje se okreću i podižu, za kontrolu svjetla i pogleda.",
    image: {
      name: "drveni-venecijaneri",
      alt: "Tamni drveni venecijaneri na prozoru iznad kožne sofe",
    },
  },
  {
    name: "Tapete",
    text: "Veliki izbor tapeta za domove, hotele, poslovne prostore i kancelarije.",
    image: {
      name: "tapete",
      alt: "Siva teksturisana tapeta sa okruglim zidnim lampama od mermera i mesinga",
    },
  },
  {
    name: "Garnišne i šine",
    text: "Biramo i montiramo garnišne i šine uz zavjese.",
  },
];
