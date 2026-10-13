// Utisci klijenata — samo stvarni, sa izvorom.

export type Testimonial = {
  quote: string;
  author: string;
  source: { label: string; url: string };
};

export const testimonials: Testimonial[] = [
  {
    // Skraćeno: original pominje i drugog partnera (@pejovic_company).
    quote:
      "Bili su naši partneri tokom izgradnje Etno sela. Možemo reći da su nam olakšali kompletan proces i svoj posao odradili profesionalno.",
    author: "Dolina Pive, etno selo",
    source: { label: "@dolinapive na Instagramu", url: "https://www.instagram.com/p/DbGSOR8O98w/" },
  },
];
