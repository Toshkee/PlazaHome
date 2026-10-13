# Plaza Home — sajt

Sajt za Plaza Home DOO (zavjese, draperije, zaštita od sunca): Početna, O nama, Radovi,
Klijenti, Proizvodi i Kontakt. Prvo za telefon; na desktopu je dron snimak preko cijelog ekrana.
Next.js 16 (App Router, statički export), React 19, TypeScript, Tailwind CSS 4, bez biblioteka za animacije.
Hosting: Cloudflare Pages; kontakt forma ide preko Pages Function. Koncept se može objaviti i na Vercelu (vidi dolje).

## Pokretanje

Potrebno: Node 20+ i npm. Za `npm run video` treba ffmpeg, a za `npm run font` fonttools (`pyftsubset`).

```sh
npm install
npm run dev        # http://localhost:3000 (forma ovdje ne radi: nema Pages Function)
npm run build      # pravi out/ (prije toga slike, poslije toga CSP hashevi)
npm run preview    # out/ + functions/ lokalno kroz wrangler, kao na Cloudflareu
npm run lint
npm run typecheck
```

Šta se dešava u `npm run build`:

1. `prebuild` → `scripts/media.mjs`: AVIF i WebP slike u više širina u `public/media/`,
   ikonice, `public/og.jpg` i `src/content/media.generated.ts`. Već urađene slike preskače.
2. `next build` → statički sajt u `out/`.
3. `postbuild` → `scripts/csp.mjs`: računa SHA-256 inline skripti iz HTML-a i dopisuje ih
   u `script-src` u `out/_headers` (CSP bez `unsafe-inline` za skripte).

## Koncept na Vercelu

Vercel → Add New → Project → uvezi GitHub repo. Vercel sam prepozna Next.js; ništa ne treba mijenjati
(build command `npm run build`, statički export u `out/`).

Na Vercelu se sajt ponaša kao koncept (`src/content/site.ts`, `isConcept`):

- Open Graph slika i kanonske adrese pokazuju na Vercel domen, pa pregled linka u WhatsApp-u i Viberu ima sliku.
- `noindex` i `Disallow: /` u robots.txt: Google ne indeksira koncept.
- Kontakt forma **ne šalje** poruke (Pages Function postoji samo na Cloudflareu); posjetilac dobija poruku
  sa linkovima na WhatsApp i email. Telefon, WhatsApp i Viber dugmad rade normalno.
- `public/_headers` (CSP, keširanje) Vercel ne čita.

## Objavljivanje na Cloudflare Pages

**Varijanta A: iz GitHub repozitorijuma.** Cloudflare → Workers & Pages → Create → Pages →
poveži repo. Build command: `npm run build`, output directory: `out`. Folder `functions/` se
prepoznaje sam.

**Varijanta B: sa računara.**

```sh
npm run build
npx wrangler pages deploy out --project-name plazahome
```

(komandu pokrenuti iz korijena projekta, da wrangler pokupi i `functions/`).

### Kontakt forma

Forma šalje `POST /api/contact` (`functions/api/contact.ts`). Funkcija provjerava polja na serveru
i šalje email preko [Resend](https://resend.com). U Cloudflare Pages → Settings → Variables and Secrets:

| Promjenljiva | Obavezna | Opis |
|---|---|---|
| `RESEND_API_KEY` | da | API ključ iz Resend naloga (kao Secret) |
| `CONTACT_FROM` | da, za produkciju | Pošiljalac sa verifikovanog domena, npr. `Plaza Home sajt <sajt@plazahome.me>` |
| `CONTACT_TO` | ne | Kome stižu upiti; podrazumijevano email iz `src/content/site.ts` |

Bez ključa funkcija vraća 503, a forma posjetiocu nudi WhatsApp i email.
Bez verifikovanog domena Resend šalje samo na email vlasnika Resend naloga.

### Zaglavlja

`public/_headers`: CSP, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`,
`X-Frame-Options` i keširanje (`/_next/static/*` i `/media/*` godinu dana jer imaju hash u imenu,
`/video/*` sedmicu dana).

## Gdje je koji sadržaj

Sav tekst i podaci su u `src/content/`. Jedna izmjena po vrsti sadržaja:

| Šta | Fajl |
|---|---|
| Telefon, email, Instagram, WhatsApp poruka, adresa, domen, opis za Google | `src/content/site.ts` |
| Početna: naslov, tekst, video, rečenica ispod videa | `src/content/home.ts` |
| O nama: naslov, tekst, brojke, koraci rada, činjenice | `src/content/about.ts` |
| Radovi (projekti, fotografije, linkovi na Instagram objave) | `src/content/projects.ts` |
| Klijenti: vrste klijenata, mjesta | `src/content/clients.ts` |
| Proizvodi (naziv, opis, slika) | `src/content/products.ts` |
| Utisci klijenata | `src/content/testimonials.ts` |
| Polja i pravila kontakt forme | `src/content/contact-form.ts` |
| Meni (stranice) | `src/content/navigation.ts` |
| Boje, tipografija, razmaci, animacije | `src/app/globals.css` (`@theme` i komentarisane sekcije) |

### Animacije

Sve su CSS, uz nekoliko malih klijentskih komponenti; ništa nije iz biblioteke.

| Šta | Gdje |
|---|---|
| Zavjesa pri prvom učitavanju | `components/intro-curtain.tsx` + `.intro` u `globals.css` |
| Prelaz između stranica (nova se otvara od sredine) | `components/page-shell.tsx` (React `ViewTransition`) + `::view-transition-*` |
| Naslovi koji izlaze red po red | `components/lines.tsx` + `enter-lines` / `data-reveal="lines"` |
| Pojava na skrol (`data-reveal="up"`, `"curtain"`, `"fade"`…) | `components/reveal-observer.tsx` |
| Riječi koje se pale na skrol, trake teksta | `components/statement.tsx`, `components/marquee.tsx`, `components/scroll-progress.tsx` |
| Red radova koji se na desktopu pomjera bočno | `components/pinned-rail.tsx` |
| Paralaksa slika, zum hero snimka | `.parallax`, `.hero-media` (scroll-driven CSS; gdje nije podržano, slike stoje) |

Sa `prefers-reduced-motion` sve to stoji: nema uvoda, sadržaj je odmah vidljiv, video ne kreće sam.

### Nova ili zamijenjena fotografija

1. Original staviti u `assets/source/` (npr. `assets/source/instagram/nova.jpg`).
2. Dodati red u `IMAGES` u `scripts/media.mjs` (`name`, `src`, po potrebi `crop`).
3. `npm run media` (ili samo `npm run build`).
4. Upotrijebiti `name` u `projects.ts`, `products.ts` ili `clients.ts`; TypeScript javlja ako ime ne postoji.

### Novi hero video

Zamijeniti `assets/source/instagram/hero-video.mp4` i pokrenuti `npm run video`
(pravi `public/video/hero-720.mp4` i poster), pa `npm run build`. Isti snimak se prikazuje i kod vile na stranici Radovi.

### Adresa i mapa

U `src/content/site.ts` upisati `address: { street, city, mapsUrl }`. Red sa adresom
i linkom na Google Maps pojavi se sam na stranici Kontakt i u podnožju.

## Struktura

```
assets/source/     originali (Instagram fotografije, video, logo, fontovi) — ne idu direktno na sajt
functions/api/     Cloudflare Pages Function za kontakt formu
public/            _headers, ikonice, og.jpg, video; public/media/ se generiše
scripts/           media.mjs, video.sh, font.sh, csp.mjs
src/app/           layout, stranice (/, o-nama, radovi, klijenti, proizvodi, kontakt), sitemap, robots, 404
src/components/    sekcije i animacije; home/ su sekcije početne. "use client" samo gdje treba
                   (meni, zaglavlje, video, pojava na skrol, red radova, pregled fotografija, forma)
src/content/       sav sadržaj
src/fonts/         Instrument Sans i Instrument Serif svedeni na znakove koje sajt koristi
```

Fontovi: Instrument Sans (tekst) i Instrument Serif (naslovi), SIL Open Font License
(`assets/source/fonts/OFL.txt`, `assets/source/fonts/OFL-InstrumentSerif.txt`).
Logo bez podloge (`logo-mark`) pravi `scripts/media.mjs` iz logotipa sa Instagrama.
Ikone: Tabler Icons (MIT); Viber ikona je nacrtana u istom stilu.
