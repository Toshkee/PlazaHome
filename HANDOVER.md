# Handover — Plaza Home (paket Start)

Stanje na dan 2026-10-13. Kod: https://github.com/Toshkee/PlazaHome (grana `main`).

## Šta je urađeno

Šest stranica. Uz svaku je pitanje posjetioca na koje odgovara.

| Stranica | Šta je na njoj | Pitanje posjetioca |
|---|---|---|
| `/` Početna | dron snimak vile preko cijelog ekrana, naslov, WhatsApp i poziv; rečenica o radu i tri brojke; red odabranih radova; proizvodi; klijenti i utisak; poziv na kontakt | Šta je ovo i šta da uradim? |
| `/o-nama` | priča, činjenice, brojke preko fotografije, „Kako radimo” u 4 koraka | Ko ste i kako radite? |
| `/radovi` | vila (dron snimak i dvije fotografije), još 4 projekta, pregled preko cijelog ekrana, linkovi na Instagram | Kako izgleda vaš rad? |
| `/klijenti` | mjesta gdje su radili, 5 vrsta klijenata sa fotografijom, utisak Doline Pive | Za koga radite, zašto da vam vjerujem? |
| `/proizvodi` | 6 proizvoda sa fotografijom + garnišne i šine | Šta nudite? |
| `/kontakt` | telefon, WhatsApp, Viber, email, Instagram, forma | Kako da zakažem? |

Na telefonu, čim se skroluje ispod vrha, pri dnu je stalno vidljiva traka sa dugmadima Pozovi, WhatsApp i Viber.

## Odluke i zašto

- **Smjer dizajna (2026-10-13, druga verzija).** Filmski, tamni sajt umjesto prve, „korporativne” verzije:
  - Tamna osnova (skoro crna sa daškom petroleja), kost bijeli tekst, zlatna iz logotipa za akcente; svijetle sekcije za predah.
  - Veliki serif naslovi (Instrument Serif, isti autor kao Instrument Sans za tekst), kurziv za jednu riječ u naslovu.
  - Motiv zavjese u pokretu: uvod se otvara kao zavjesa, nova stranica se otvara od sredine, fotografije se razmiču pri pojavi.
  - Bez biblioteka za animacije: CSS i nekoliko malih komponenti (vidi README, „Animacije”).
- **Paleta.** Petrolej plava `#26546C` (pozadina logotipa) ostaje boja brenda i akcent na svijetlom; zlatna samo na tamnom. Svi tokeni su u `src/app/globals.css`.
- **Hero video** (izbor klijenta: Instagram objava DV3HxtDiJyH):
  - Preko cijelog ekrana i na telefonu i na desktopu. Snimak je uspravan (720×1280), pa je na širokom ekranu isječen i uvećan; filmsko zrno to ublažava. Oštriji kadar na desktopu traži original snimka u većoj rezoluciji (pitanje za @djurisicmedia).
  - Kao LCP prvo se prikaže poster (prvi kadar). Video (3,8 MB, bez zvuka) se učitava tek poslije `load` događaja.
  - Pauzira se kad nije na ekranu. Ima dugme za pauzu (WCAG 2.2.2).
  - Sa `prefers-reduced-motion` ne kreće sam; posjetilac ga pušta dugmetom.
  - Tekst preko videa stoji na podlozi od najmanje 82 % (i iznad prvog reda naslova), pa ima kontrast i kad je kadar iza njega bijel.
- **Trake teksta (klijenti, mjesta)** kreću se samo dok posjetilac skroluje, ne same od sebe, pa ne treba dugme za pauzu.
- **Klijenti.** Na sajtu su samo vrste klijenata i mjesta iz briefa i sa Instagrama, i jedan imenovani klijent sa javnim utiskom (Dolina Pive). Imena hotela i restorana i logotipi idu tek uz dozvolu klijenata.
- **Online zakazivanje** nije dio paketa. Umjesto njega su kontakt dugmad i forma.
- **Logo** je profilna slika sa Instagrama, isječena na sam znak. Za providno zaglavlje i podnožje `scripts/media.mjs` pravi verziju bez petrolej podloge (isti zlatni znak). Novi logo nije dio paketa.
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
- **Fontovi.** Svedeni na znakove koje sajt koristi: Instrument Sans 400–500 (18 KB), Instrument Serif regular i kurziv (15 i 16 KB).
- **Nema** analitike, kolačića, CMS-a, baze ni chat widgeta.

## Definition of Done

> Tabela ispod je mjerena na **prvoj** verziji sajta. Za drugu (filmsku) verziju provjereno je:
> build, lint i typecheck čisti; 0 grešaka u konzoli na svih šest stranica (390 i 1440 px, produkcijski build kroz wrangler);
> meni (fokus, Escape), prelaz između stranica, `prefers-reduced-motion` (bez uvoda i animacija, sav sadržaj vidljiv);
> JavaScript na početnoj 155 KB brotli / 178 KB gzip. Lighthouse, kontrast po elementu i dodirne površine treba ponovo izmjeriti.

Prva verzija, mjereno na produkcijskom buildu (`npm run build`), lokalno kroz `wrangler pages dev`, 2026-10-13.

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
| Imena klijenata i logotipi | `src/content/clients.ts` | Upisati tek uz dozvolu klijenata; sada su tu vrste klijenata i mjesta |

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
8. **Klijenti po imenu:** smijemo li navesti hotele, restorane ili firme za koje su radili (i dobiti njihove logotipe)?
9. **Hero snimak:** ima li @djurisicmedia original u većoj rezoluciji (ili vodoravnu verziju) za desktop?

## Kako se mijenja sadržaj

Ukratko (detalji u `README.md`):

- **Tekst i kontakti:** fajlovi u `src/content/` (`site.ts`, `home.ts`, `about.ts`, `projects.ts`, `clients.ts`, `products.ts`, `testimonials.ts`). Poslije izmjene: `npm run build` i objava.
- **Fotografija:** original u `assets/source/`, red u `scripts/media.mjs`, ime u `projects.ts`, `products.ts` ili `clients.ts`.
- **Hero video:** zamijeniti `assets/source/instagram/hero-video.mp4`, pa `npm run video` i `npm run build`.
- **Boje i tipografija:** `@theme` u `src/app/globals.css`.

Izvori svih fotografija i videa: `assets/source/instagram/IZVORI.md`.
