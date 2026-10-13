// Radovi. Svaka fotografija je sa @plazahome.me i vodi na svoju objavu.
// Opisi su izvedeni iz fotografija i opisa objava; mjesto se navodi samo kad je poznato.
import type { MediaName } from "./media.generated";

export type ProjectImage = { name: MediaName; alt: string };

export type Project = {
  slug: string;
  title: string;
  /** Šta smo radili, kratko. */
  work: string;
  text: string;
  images: ProjectImage[];
  instagramUrl: string;
  /** Dron snimak istog prostora (samo vila). */
  video?: { src: string; instagramUrl: string; credit: { name: string; url: string } };
};

export const projectsIntro = "Fotografije sa naših projekata. Još radova objavljujemo na Instagramu.";

export const projects: Project[] = [
  {
    slug: "vila",
    title: "Vila",
    work: "Zavjese i draperije, do 6 m",
    text: "Salon sa prozorima u dvije visine. Na nekim djelovima zavjese su dugačke i do 6 m.",
    images: [
      {
        name: "vila-salon",
        alt: "Salon vile sa prozorima u dvije visine, bijelim zavjesama i draperijama, u zalazak sunca",
      },
      {
        name: "vila-salon-sumrak",
        alt: "Isti salon vile iz drugog ugla, sa zaobljenom sofom i visokim draperijama",
      },
    ],
    instagramUrl: "https://www.instagram.com/p/DSvUXzDCFrJ/",
    video: {
      src: "/video/hero-720.mp4",
      instagramUrl: "https://www.instagram.com/p/DV3HxtDiJyH/",
      credit: { name: "Djurišić Media", url: "https://www.instagram.com/djurisicmedia/" },
    },
  },
  {
    slug: "lustica-bay",
    title: "Luštica Bay",
    work: "Lanene zavjese",
    text: "Lanena zavjesa pored balkonskih vrata, sa pogledom na more i svjetionik.",
    images: [
      { name: "lustica-bay", alt: "Lanena zavjesa pored balkonskih vrata sa pogledom na more i svjetionik" },
    ],
    instagramUrl: "https://www.instagram.com/p/DaLtJoYxbq1/",
  },
  {
    slug: "restoran",
    title: "Restoran",
    work: "Draperije na lučnim prozorima",
    text: "Tamnoplave draperije na lučnim prozorima, iznad postavljenih stolova.",
    images: [
      {
        name: "restoran-lucni-prozori",
        alt: "Restoran sa postavljenim stolovima i tamnoplavim draperijama na lučnim prozorima",
      },
    ],
    instagramUrl: "https://www.instagram.com/p/DXP_eyPiNlw/",
  },
  {
    slug: "drvena-kuca",
    title: "Drvena kuća",
    work: "Zavjese i draperije",
    text: "Svijetle zavjese i draperije na staklenim vratima, uz drvene zidove i grede.",
    images: [
      { name: "drvena-kuca", alt: "Drvena kuća sa svijetlim zavjesama i draperijama na staklenim vratima" },
    ],
    instagramUrl: "https://www.instagram.com/p/DbJNa-biK0n/",
  },
  {
    slug: "kamena-kuca",
    title: "Kuća sa kamenim zidom",
    work: "Lagane zavjese",
    text: "Lagane bijele zavjese uz kameni zid i sivu sofu.",
    images: [
      { name: "kamena-kuca", alt: "Dnevna soba sa kamenim zidom, sivom sofom i laganim bijelim zavjesama" },
    ],
    instagramUrl: "https://www.instagram.com/p/DZZ_hIVCL_O/",
  },
];
