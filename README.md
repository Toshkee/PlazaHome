# Plaza Home — sajt

Jednostranični sajt za Plaza Home DOO (zavjese, draperije, zaštita od sunca).
Next.js 16 (App Router, statički export), React 19, TypeScript, Tailwind CSS 4.
Hosting: Cloudflare Pages; kontakt forma ide preko Pages Function.

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
| Naslov i tekst na vrhu, video | `src/content/hero.ts` |
| O nama, koraci rada, činjenice | `src/content/about.ts` |
| Proizvodi (naziv, opis, slika) | `src/content/products.ts` |
| Galerija (slika, opis, link na Instagram objavu) | `src/content/gallery.ts` |
| Utisci klijenata | `src/content/testimonials.ts` |
| Polja i pravila kontakt forme | `src/content/contact-form.ts` |
| Meni (sidra sekcija) | `src/content/navigation.ts` |
| Boje, tipografija, razmaci, radijus | `src/app/globals.css` (`@theme`) |

### Nova ili zamijenjena fotografija

1. Original staviti u `assets/source/` (npr. `assets/source/instagram/nova.jpg`).
2. Dodati red u `IMAGES` u `scripts/media.mjs` (`name`, `src`, po potrebi `crop`).
3. `npm run media` (ili samo `npm run build`).
4. Upotrijebiti `name` u `gallery.ts` ili `products.ts`; TypeScript javlja ako ime ne postoji.

### Novi hero video

Zamijeniti `assets/source/instagram/hero-video.mp4` i pokrenuti `npm run video`
(pravi `public/video/hero-720.mp4` i poster), pa `npm run build`.

### Adresa i mapa

U `src/content/site.ts` upisati `address: { street, city, mapsUrl }`. Red sa adresom
i linkom na Google Maps pojavi se sam u kontakt sekciji.

## Struktura

```
assets/source/     originali (Instagram fotografije, video, logo, font) — ne idu direktno na sajt
functions/api/     Cloudflare Pages Function za kontakt formu
public/            _headers, ikonice, og.jpg, video; public/media/ se generiše
scripts/           media.mjs, video.sh, font.sh, csp.mjs
src/app/           layout, stranica, sitemap, robots, 404
src/components/    sekcije; "use client" samo: mobile-menu, hero-video, gallery-viewer, contact-form
src/content/       sav sadržaj
src/fonts/         Instrument Sans sveden na znakove koje sajt koristi
```

Font: Instrument Sans, SIL Open Font License (`assets/source/fonts/OFL.txt`).
Ikone: Tabler Icons (MIT); Viber ikona je nacrtana u istom stilu.
