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
  check: ["M5 12l5 5l10 -10"],
  chevronDown: ["M6 9l6 6l6 -6"],
  quote: [
    "M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5",
    "M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5",
  ],
  /* Koraci rada: savjetovanje, mjerenje, šivenje, montaža. */
  message: [
    "M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1",
  ],
  ruler: [
    "M19.875 12c.621 0 1.125 .512 1.125 1.143v5.714c0 .631 -.504 1.143 -1.125 1.143h-15.875a1 1 0 0 1 -1 -1v-5.857c0 -.631 .504 -1.143 1.125 -1.143h15.75",
    "M9 12v2",
    "M6 12v3",
    "M12 12v3",
    "M18 12v3",
    "M15 12v2",
    "M3 3v4",
    "M3 5h18",
    "M21 3v4",
  ],
  needle: [
    "M3 21c-.667 -.667 3.262 -6.236 11.785 -16.709a3.5 3.5 0 1 1 5.078 4.791c-10.575 8.612 -16.196 12.585 -16.863 11.918",
    "M17.5 6.5l-1 1",
    "M17 7c-2.333 -2.667 -3.5 -4 -5 -4s-2 1 -2 2c0 4 8.161 8.406 6 11c-1.056 1.268 -3.363 1.285 -5.75 .808",
    "M5.739 15.425c-1.393 -.565 -3.739 -1.925 -3.739 -3.425",
    "M19.5 9.5l1.5 1.5",
  ],
  tool: ["M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5"],
} as const;

export type IconName = keyof typeof paths;

/** Podrazumijevano 20px; dodirnu površinu daje dugme oko ikone. Veće ikone imaju tanju liniju. */
export function Icon({
  name,
  className = "size-5",
  stroke = 2,
}: {
  name: IconName;
  className?: string;
  stroke?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
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
