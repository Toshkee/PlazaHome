// Galerija radova. Svaka fotografija je sa @plazahome.me i vodi na svoju objavu.
import type { MediaName } from "./media.generated";

export type GalleryItem = {
  image: MediaName;
  alt: string;
  caption: string;
  instagramUrl: string;
};

export const galleryIntro = "Fotografije sa naših projekata. Još radova objavljujemo na Instagramu.";

export const gallery: GalleryItem[] = [
  {
    image: "vila-salon",
    alt: "Salon vile sa prozorima u dvije visine, bijelim zavjesama i draperijama, u zalazak sunca",
    caption: "Vila, salon sa prozorima u dvije visine",
    instagramUrl: "https://www.instagram.com/p/DSvUXzDCFrJ/",
  },
  {
    image: "lustica-bay",
    alt: "Lanena zavjesa pored balkonskih vrata sa pogledom na more i svjetionik",
    caption: "Luštica Bay, lanene zavjese",
    instagramUrl: "https://www.instagram.com/p/DaLtJoYxbq1/",
  },
  {
    image: "restoran-lucni-prozori",
    alt: "Restoran sa postavljenim stolovima i tamnoplavim draperijama na lučnim prozorima",
    caption: "Restoran, draperije na lučnim prozorima",
    instagramUrl: "https://www.instagram.com/p/DXP_eyPiNlw/",
  },
  {
    image: "drvena-kuca",
    alt: "Drvena kuća sa svijetlim zavjesama i draperijama na staklenim vratima",
    caption: "Drvena kuća, zavjese i draperije",
    instagramUrl: "https://www.instagram.com/p/DbJNa-biK0n/",
  },
  {
    image: "kamena-kuca",
    alt: "Dnevna soba sa kamenim zidom, sivom sofom i laganim bijelim zavjesama",
    caption: "Kuća sa kamenim zidom, lagane zavjese",
    instagramUrl: "https://www.instagram.com/p/DZZ_hIVCL_O/",
  },
  {
    image: "vila-salon-sumrak",
    alt: "Isti salon vile iz drugog ugla, sa zaobljenom sofom i visokim draperijama",
    caption: "Vila, isti salon iz drugog ugla",
    instagramUrl: "https://www.instagram.com/p/DSvUXzDCFrJ/",
  },
];
