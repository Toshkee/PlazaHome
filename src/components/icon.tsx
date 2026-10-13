// Ikone iz Tabler seta (MIT), linija 2px na mreži 24×24.
// Tabler nema Viber, pa je ta nacrtana u istom stilu.

const paths = {
  phone: [
    "M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2",
  ],
  whatsapp: [
    "M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9",
    "M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1",
  ],
  viber: [
    "M8 17.5v3.5l3.5 -3.5h4.5a5 5 0 0 0 5 -5v-4.5a5 5 0 0 0 -5 -5h-8a5 5 0 0 0 -5 5v4.5a5 5 0 0 0 5 5",
    "M8.5 7.5h1.5l.75 2l-1 .75a4 4 0 0 0 2 2l.75 -1l2 .75v1.5a1 1 0 0 1 -1 1a6 6 0 0 1 -6 -6a1 1 0 0 1 1 -1",
    "M14 6.5a3.5 3.5 0 0 1 3 3",
  ],
  instagram: [
    "M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4l0 -10",
    "M8.5 12a3.5 3.5 0 1 0 7 0a3.5 3.5 0 0 0 -7 0",
    "M17 7v.01",
  ],
  mail: [
    "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10",
    "M3 7l9 6l9 -6",
  ],
  mapPin: [
    "M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",
    "M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0",
  ],
  play: ["M7 4v16l13 -8l-13 -8"],
  pause: [
    "M6 6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -12",
    "M14 6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -12",
  ],
  close: ["M18 6l-12 12", "M6 6l12 12"],
  chevronLeft: ["M15 6l-6 6l6 6"],
  chevronRight: ["M9 6l6 6l-6 6"],
  menu: ["M4 6l16 0", "M4 12l16 0", "M4 18l16 0"],
  arrowUpRight: ["M17 7l-10 10", "M8 7l9 0l0 9"],
  arrowRight: ["M5 12l14 0", "M13 18l6 -6", "M13 6l6 6"],
} as const;

export type IconName = keyof typeof paths;

/** Podrazumijevano 20px; dodirnu površinu daje dugme oko ikone. */
export function Icon({ name, className = "size-5" }: { name: IconName; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} shrink-0`}
      aria-hidden="true"
      focusable="false"
    >
      {paths[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
