# Handover — Plaza Home (paket Start)

Stanje na dan 2026-10-13. Kod: https://github.com/Toshkee/PlazaHome (grana `main`).

## Šta je urađeno

Jedna stranica na adresi `/`, sa sekcijama redom kojim idu. Uz svaku je pitanje posjetioca na koje odgovara.

| Sekcija | Pitanje posjetioca |
|---|---|
| Hero: dron snimak vile, naslov, WhatsApp i poziv | Šta je ovo i šta da uradim? |
| O nama: tekst, činjenice, „Kako radimo” u 4 koraka | Ko ste i kako radite? |
| Proizvodi: 6 sa fotografijom + garnišne i šine | Šta nudite? |
| Radovi: 6 fotografija, pregled preko cijelog ekrana, linkovi na Instagram | Kako izgleda vaš rad? |
| Utisak klijenta: Dolina Pive, sa linkom na izvor | Zašto da vam vjerujem? |
| Kontakt: telefon, WhatsApp, Viber, email, Instagram, forma | Kako da zakažem? |

Na telefonu je pri dnu stalno vidljiva traka sa dugmadima Pozovi, WhatsApp i Viber.

## Odluke i zašto

- **Smjer dizajna.** Vodi „Serious and corporate”: jedan sans font (Instrument Sans), klasična hijerarhija, mreža od 12 kolona. Od „Elegant and premium” sam odustao od serifnog fonta za naslove, jer glavni smjer traži sans. Elegancija dolazi iz toplih neutralnih tonova, tanke zlatne linije iz logotipa, malih razmaknutih oznaka iznad naslova i širokih razmaka. Od „Light and clean” uzeta je svijetla pozadina i hero sa fotografijom i naslovom jedno pored drugog na desktopu.
- **Paleta iz logotipa.** Primarna boja je petrolej plava `#26546C` (pozadina logotipa), akcent je zlatna `#B5A27A` (samo za tanke linije, nikad za površine). Svi tokeni su u `src/app/globals.css`.
- **Hero video** (izbor klijenta: Instagram objava DV3HxtDiJyH):
  - Kao LCP prvo se prikaže poster (prvi kadar). Video (3,8 MB, bez zvuka) se učitava tek poslije `load` događaja.
  - Pauzira se kad nije na ekranu. Ima dugme za pauzu (WCAG 2.2.2).
  - Sa `prefers-reduced-motion` ne kreće sam; posjetilac ga pušta dugmetom.
- **Online zakazivanje** nije dio paketa. Umjesto njega su kontakt dugmad i forma.
- **Logo** je profilna slika sa Instagrama, isječena na sam znak i inače nepromijenjena. Novi logo nije dio paketa.
- **Instagram na sajtu.** Nema „žive” Instagram trake: tražila bi skriptu treće strane i token, kvarila bi CSP i brzinu. Galerija je izbor fotografija sa njihovog Instagrama. Svaka vodi na svoju objavu, a uz sekciju je link na profil.
- **Utisak klijenta** je stvaran: objava @dolinapive (DbGSOR8O98w). Skraćen je jer original pominje i drugog partnera; link vodi na original.
- **Tekst.** Sav tekst je na crnogorskom. Uređen je iz briefa i iz opisa objava klijenta: usluge iz objave za Luštica Bay, „do 6 m” iz objave sa dron snimkom, tapete iz objave o tapetama. Kratke opise proizvoda sam napisao prema fotografijama i nazivima highlight-a; klijent ih je odobrio. Jedna rečenica je na engleskom, za strane klijente, jer klijent i sam objavljuje na engleskom.
- **„30 godina iskustva”** je odluka klijenta, iako Instagram bio kaže „since 2003”.
- **Kontakt forma** ide na Cloudflare Pages Function (`functions/api/contact.ts`):
  - Polja se provjeravaju na serveru istim pravilima kao u browseru. Ima zamku za botove.
  - Radi i bez JavaScripta.
  - Email šalje preko Resend-a. Bez podešenog ključa posjetiocu nudi WhatsApp i email.
- **CSP bez `unsafe-inline` za skripte.** Next ubacuje inline skripte, pa `scripts/csp.mjs` poslije svakog builda računa njihove SHA-256 hasheve i upisuje ih u `out/_headers`.
- **Slike.** Iz izvornih fajlova se prave AVIF i WebP u širinama 480–1600 (`scripts/media.mjs`). Prikazuju se kroz `<picture>` sa `sizes`, `width` i `height`. Hero poster ima `fetchpriority="high"`, sve ispod pregiba je `lazy`.
- **Font.** Instrument Sans je sveden na znakove koje sajt koristi i težine 400–500: jedan WOFF2 od 18 KB umjesto dva od ukupno 43 KB.
- **Nema** analitike, kolačića, CMS-a, baze ni chat widgeta.

## Definition of Done

Mjereno na produkcijskom buildu (`npm run build`), lokalno kroz `wrangler pages dev`, 2026-10-13.

| Stavka | Stanje |
|---|---|
| Lighthouse mobilni | Performance 96, Accessibility 100, Best Practices 100, SEO 100 (LCP 2,8 s, FCP 0,9 s, TBT 0 ms, CLS 0) |
| Lighthouse desktop | 100 / 100 / 100 / 100 |
| Konzola | 0 grešaka i 0 upozorenja na 360, 390, 768 i 1440 px (automatska provjera + ručno u Chrome-u) |
| Pregled okom | 390, 768 i 1440 px (i 360): bez horizontalnog skrola, bez odsječenog teksta |
| Naslovi | jedan `h1`, nivoi redom (h1 → h2 → h3) |
| Slike | sve imaju opisni `alt` |
| Dodirne površine | sve interaktivne ≥ 44×44 px (automatska provjera svih elemenata) |
| Tastatura | meni (Escape zatvara i vraća fokus), galerija (strelice, Escape, fokus se vraća), dugme za video, forma; fokus prsten vidljiv i na tamnim površinama |
| Kontrast | tekst/pozadina 14,8:1; sivi tekst 5,8:1; bijelo na petrolej 8,2:1; tekst preko videa na podlozi od 80 %, najmanje 8,2:1 i kad je ispod čisto bijelo |
| Smanjeno kretanje | provjereno: video ne kreće sam, nema animacija na skrol |
| Build, lint, typecheck | čisti |
| JavaScript na početnoj | 158 KB brotli / 182 KB gzip (preneseno, ispod 200 KB). Nekompresovano 588 KB, uglavnom React i Next runtime. |
| Lorem, stock, izmišljeni podaci | nema |
| Kontakt linkovi na pravom telefonu | **nije provjereno** (nemam uređaj). Formati: `tel:+38267380809`, `https://wa.me/38267380809?text=…`, `viber://chat?number=%2B38267380809`. Linka na mapu nema dok ne stigne adresa. |

Lighthouse treba ponoviti na produkcijskoj adresi poslije objave (pravi HTTPS i Cloudflare kompresija).

## Placeholderi

| Šta | Gdje | Kako se popunjava |
|---|---|---|
| Adresa salona i Google Maps link | `src/content/site.ts` → `address: null` | Upisati `{ street, city, mapsUrl }`; red sa adresom i mapom u kontaktu i adresa u strukturiranim podacima pojavljuju se sami |
| Slanje forme | Cloudflare → Variables: `RESEND_API_KEY`, `CONTACT_FROM` | Vidi README; do tada forma nudi WhatsApp i email |
| Domen | `src/content/site.ts` → `url: "https://plazahome.me"` | Domen još **nije registrovan**; ako bude drugi, promijeniti ovdje |
| Logo | `assets/source/instagram/logo-instagram.jpg` (473 px, sa Instagrama) | Zamijeniti originalnim fajlom (SVG ili PNG) i ažurirati `crop` u `scripts/media.mjs` |

## Otvorena pitanja za Vaky

1. **Adresa:** ima li salon ili radionicu koja se može posjetiti? Ako ima, treba nam tačna adresa i pin.
2. **Domen:** registrovati `plazahome.me` (slobodan je) i povezati ga sa Cloudflare Pages.
3. **Email za formu:**
   - Ko otvara Resend nalog?
   - Na koju adresu stižu upiti (sad `plazinicmilos333@gmail.com`)?
   - Verifikacija domena treba da prođe prije puštanja forme.
4. **Viber i WhatsApp:** jesu li oba aktivna na +382 67 380 809?
5. **Engleski:** odgovaraju li na WhatsApp i na engleskom (sajt to nagovještava jednom rečenicom)?
6. **„Terase”:** highlight na Instagramu pominje terase (tende, spoljašnje zavjese?). Ako to rade, treba naziv i fotografija za sekciju Proizvodi.
7. **Originalni logo:** postoji li vektorski fajl?

## Kako se mijenja sadržaj

Ukratko (detalji u `README.md`):

- **Tekst i kontakti:** fajlovi u `src/content/` (`site.ts`, `hero.ts`, `about.ts`, `products.ts`, `gallery.ts`, `testimonials.ts`). Poslije izmjene: `npm run build` i objava.
- **Fotografija:** original u `assets/source/`, red u `scripts/media.mjs`, ime u `gallery.ts` ili `products.ts`.
- **Hero video:** zamijeniti `assets/source/instagram/hero-video.mp4`, pa `npm run video` i `npm run build`.
- **Boje i tipografija:** `@theme` u `src/app/globals.css`.

Izvori svih fotografija i videa: `assets/source/instagram/IZVORI.md`.
