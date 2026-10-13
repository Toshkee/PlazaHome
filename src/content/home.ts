// Tekst i video za početnu stranicu.
export const home = {
  hero: {
    label: "Plaza Home · Crna Gora",
    /** Redovi naslova; `accent` je red u kurzivu. */
    title: ["Zavjese", "i draperije", "po mjeri"],
    accent: [2],
    lead: "Opremamo stanove, vile, hotele i restorane u Crnoj Gori. 30 godina iskustva.",
    video: {
      src: "/video/hero-720.mp4",
      posterAlt: "Vila sa visokim prozorima, zavjesama i draperijama, kadar iz dron snimka",
    },
  },
  statement: "Svaki posao radimo od početka do kraja: dođemo, izmjerimo, sašijemo i montiramo.",
} as const;
