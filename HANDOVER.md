# Handover — Plaza Home (paket Start)

Stanje na dan 2026-10-14. Kod: https://github.com/Toshkee/PlazaHome (grana `main`).

## Šta je urađeno

Šest stranica. Uz svaku je pitanje posjetioca na koje odgovara.

| Stranica | Šta je na njoj | Pitanje posjetioca |
|---|---|---|
| `/` Početna | dron snimak vile preko cijelog ekrana, naslov i poziv na konsultaciju; o nama sa dvije fotografije; proizvodi kao spisak; veliki kadar vile; tri projekta; „Kako radimo” u prvom licu; utisak i vrste klijenata; poziv na kontakt | Šta je ovo i šta da uradim? |
| `/o-nama` | priča, činjenice, dvije fotografije, „Kako radimo” u 4 koraka | Ko ste i kako radite? |
| `/radovi` | vila (dron snimak i dvije fotografije), još 4 projekta, pregled preko cijelog ekrana, linkovi na Instagram | Kako izgleda vaš rad? |
| `/klijenti` | mjesta gdje su radili, 5 vrsta klijenata sa fotografijom, utisak Doline Pive | Za koga radite, zašto da vam vjerujem? |
| `/proizvodi` | 6 proizvoda sa fotografijom + garnišne i šine | Šta nudite? |
| `/kontakt` | telefon, WhatsApp, Viber, email, Instagram, forma | Kako da zakažem? |

Na telefonu, čim se skroluje ispod vrha, dolje desno je dugme „Kontakt”. Otvara Pozovite, WhatsApp i Viber. Na stranici Kontakt ga nema.

## Odluke i zašto

- **Smjer dizajna (2026-10-14, treća verzija).** Svijetao, miran sajt sa velikim kadrovima, umjesto druge, filmske verzije
  (klijentu su smetali font, traka teksta i redni brojevi 01/02/03, a sajt nije djelovao dovoljno ozbiljno za firmu):
  - Svijetla osnova (topla bijela i pijesak), petrolej iz logotipa kao boja brenda, zlatna samo kao detalj (linija uz oznake, znak u podnožju, ikone na petroleju).
  - Jedan font, Albert Sans: geometrijski kao slova u logotipu. Veliki naslovi su tanki (300), oznake razmaknute kao „HOME” u logotipu.
  - Svaka stranica počinje kadrom preko cijele širine; zaglavlje je providno preko njega i postaje svijetlo čim se skroluje.
  - Na početnoj su „momenti” koji razbijaju ritam sekcija: kolaž dvije fotografije, veliki kadar vile sa paralaksom, asimetričan raspored radova, koraci na petroleju, veliki citat.
  - Pokret je suzdržan: tekst na vrhu izlazi redom, fotografije se pri pojavi „smire” iz bližeg kadra, sporo uvećanje na hover. Nema uvodne zavjese, trake teksta ni prelaza između stranica.
  - Bez biblioteka za animacije: CSS i nekoliko malih komponenti (vidi README, „Animacije”).
- **Luksuzniji prolaz (2026-10-14).** Sajt treba da djeluje skuplje. To ne postižu novi efekti (filmska verzija ih je imala i odbijena je), nego uzdržanost:
  - Manje prodajnog tona. U heroju i na dnu stranica je jedan poziv, „Zakažite konsultaciju”; WhatsApp i telefon su tiho ispod njega. U zaglavlju je „Konsultacija”, bez broja telefona.
  - Na početnoj nema kvačica ni tri brojke. „30 godina” je već u naslovu „O nama”, a „do 6 m” u velikom kadru vile.
  - Na telefonu je umjesto trake sa tri dugmeta jedno dugme „Kontakt” (HTML popover). Kompromis: poziv je dva dodira umjesto jednog.
  - Razmak između sekcija na desktopu je 176 px (bio je 112 px); na telefonu je isti.
  - Dugmad, meni, linkovi i naslovi u podnožju su mala verzalna slova, razmaknuta kao „HOME” u logotipu. Dugmad imaju tanak okvir umjesto pune boje. Puna boja je samo na slanju forme i na dugmetu „Kontakt” na telefonu.
  - Fotografije imaju zajednički ton (malo toplije i malo manje zasićeno), pa djeluju kao jedna serija, a ne kao snimci sa različitih telefona. Vrijednosti su u `GRADE` u `scripts/media.mjs`. Hero snimak dobija isti smjer u `scripts/video.sh`, ali samo u sjenama i srednjim tonovima, jer bi isto množenje kanala nebo učinilo tirkiznim. Poster je prvi kadar već obrađenog snimka.
- **Manje šablona (2026-10-19).** Klijentu je sajt i dalje djelovao generički, „kao da ga je pravio AI”. Uzrok nije bio nedostatak efekata, nego tri obrasca:
  - **Ista gramatika u svakoj sekciji** (oznaka sa zlatnom linijom, pa naslov, pa siva rečenica, pa link desno). Oznake iznad naslova su uklonjene svuda osim na 404; `SectionHeading` više nema `eyebrow`. U velikom kadru vile oznaka je postala potpis ispod naslova.
  - **„Kako radimo” kao četiri ikonice u krugovima.** Sad je kratak tekst u prvom licu lijevo, a koraci su miran spisak desno, bez ikonica (`about.process`, `about.steps`).
  - **Tekst bez ičega specifičnog.** Naslovi i uvodi su prepisani tako da kažu nešto konkretno, bez nabrajanja u tri ili četiri stavke i obrasca „od X do Y”. Koristi se samo ono što stoji u briefu i objavama; ništa nije izmišljeno (vidi pitanje 10).
  - Proizvodi na početnoj su spisak umjesto mreže od šest kartica: na desktopu je lijevo jedna fotografija, ona proizvoda nad kojim je miš ili fokus (samo CSS, `product-list` u `globals.css`); na telefonu svaki red ima malu fotografiju.
  - Projekti imaju potpis kao u časopisu (prostor · šta smo radili), bez strelica na karticama.
  - Podnožje: kontakt velikim tankim slovima i stranice u jednom redu; kolona sa proizvodima je izbačena jer ponavlja meni.
  - Najveći korak dalje nije dizajn nego materijal: fotografije radionice, ruku i tkanina izbliza, oštriji hero snimak i email na domenu.
- **Paleta.** Petrolej plava `#26546C` (pozadina logotipa) je boja brenda. Sav tekst ima kontrast najmanje 4,5:1 (izračunato za svaki par boja; vrijednosti su u komentarima u `src/app/globals.css`).
- **Hero video** (izbor klijenta: Instagram objava DV3HxtDiJyH):
  - Preko cijelog ekrana i na telefonu i na desktopu. Snimak je uspravan (720×1272 poslije isijecanja 4 crna reda piksela gore i dolje), pa je na širokom ekranu isječen i uvećan; blago zrno to ublažava. Oštriji kadar na desktopu traži original snimka u većoj rezoluciji (pitanje za @djurisicmedia).
  - Kao LCP prvo se prikaže poster (prvi kadar). Video (3,8 MB, bez zvuka) se učitava tek poslije `load` događaja.
  - Pauzira se kad nije na ekranu. Ima dugme za pauzu (WCAG 2.2.2).
  - Sa `prefers-reduced-motion` ne kreće sam; posjetilac ga pušta dugmetom.
  - Tekst preko videa stoji na podlozi od najmanje 82 % (i iznad prvog reda naslova), pa ima kontrast i kad je kadar iza njega bijel.
- **Klijenti.** Na sajtu su samo vrste klijenata i mjesta iz briefa i sa Instagrama, i jedan imenovani klijent sa javnim utiskom (Dolina Pive). Imena hotela i restorana i logotipi idu tek uz dozvolu klijenata.
- **Online zakazivanje** nije dio paketa. Umjesto njega su kontakt dugmad i forma.
- **Logo** je profilna slika sa Instagrama, isječena na sam znak. `scripts/media.mjs` pravi i znak bez podloge u dvije boje: zlatni (providno zaglavlje preko kadra, podnožje) i petrolej (svijetlo zaglavlje). Novi logo nije dio paketa.
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
- **Font.** Albert Sans 300–600, sveden na znakove koje sajt koristi (17 KB, jedan fajl).
- **Nema** analitike, kolačića, CMS-a, baze ni chat widgeta.

## Definition of Done

> Tabela ispod je mjerena na **prvoj** verziji sajta. Za treću verziju (2026-10-14) provjereno je:
> build, lint i typecheck čisti; 0 grešaka i upozorenja u konzoli (i CSP) na svih šest stranica i na 404, na 390, 768 i 1440 px
> (produkcijski build kroz wrangler); bez horizontalnog skrola; sve dodirne površine na telefonu ≥ 44 px (automatska provjera);
> kontrast boja izračunat po paru (tekst ≥ 4,5:1); `prefers-reduced-motion`: sav sadržaj vidljiv, video ne kreće sam.
> Lighthouse i provjera na pravom telefonu **nisu** ponovljeni.
>
> Poslije luksuznijeg prolaza (2026-10-14) provjereno je:
> - build, lint i typecheck su čisti;
> - konzola ima 0 grešaka na svih šest stranica i na 404 (produkcijski build kroz wrangler, desktop);
> - na 360, 390 i 768 px nema horizontalnog skrola, a sve dodirne površine su ≥ 44 px (automatska provjera);
> - kontrast novog sitnog teksta je izračunat (najmanje 4,8:1).
>
> Usput je ispravljen horizontalni skrol na stranici Kontakt na 360 px: email adresa se sada prelama.

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
| Kontakt linkovi na pravom telefonu | **nije provjereno** (nemam uređaj). Formati (glavni broj od 2026-10-14): `tel:+38267529538`, `https://wa.me/38267529538?text=…`, `viber://chat?number=%2B38267529538`; drugi broj `tel:+38267380809`. Linka na mapu nema dok ne stigne adresa. |

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
4. **Viber i WhatsApp:** jesu li oba aktivna na novom glavnom broju +382 67 529 538? Na njega sada idu poziv, WhatsApp i Viber; stari broj +382 67 380 809 je na stranici Kontakt i u podnožju kao drugi telefon.
5. **Engleski:** odgovaraju li na WhatsApp i na engleskom (sajt to nagovještava jednom rečenicom)?
6. **„Terase”:** highlight na Instagramu pominje terase (tende, spoljašnje zavjese?). Ako to rade, treba naziv i fotografija za sekciju Proizvodi.
7. **Originalni logo:** postoji li vektorski fajl?
8. **Klijenti po imenu:** smijemo li navesti hotele, restorane ili firme za koje su radili (i dobiti njihove logotipe)?
9. **Hero snimak:** ima li @djurisicmedia original u većoj rezoluciji (ili vodoravnu verziju) za desktop?
10. **Detalji za tekst** (sajt je sada u prvom licu i traži konkretne podatke; svaki odgovor ide direktno u `src/content/`):
    - Gdje šiju: sopstvena radionica? U kom gradu?
    - Koje tkanine najčešće rade (lan, somot, blackout…) i od kojih proizvođača?
    - Koliko traje izrada od mjerenja do montaže?
    - Šta znači highlight „Falte 3/1” (gustina nabora) i da li je to nešto po čemu se razlikuju?
    - Garancija na šivenje i mehanizme?
    - Smije li tekst „Kako radimo” da potpiše vlasnik, imenom i fotografijom?
11. **Fotografisanje, pola dana:** radionica, ruke dok šiju, metar na prozoru, tkanine izbliza, vlasnik. Desetak takvih kadrova promijeni sajt više od bilo koje izmjene dizajna.
12. **Email na domenu** (npr. `info@plazahome.me`) umjesto gmail adrese u podnožju i na kontaktu.

## Kako se mijenja sadržaj

Ukratko (detalji u `README.md`):

- **Tekst i kontakti:** fajlovi u `src/content/` (`site.ts`, `home.ts`, `about.ts`, `projects.ts`, `clients.ts`, `products.ts`, `testimonials.ts`). Poslije izmjene: `npm run build` i objava.
- **Fotografija:** original u `assets/source/`, red u `scripts/media.mjs`, ime u `projects.ts`, `products.ts` ili `clients.ts`.
- **Hero video:** zamijeniti `assets/source/instagram/hero-video.mp4`, pa `npm run video` i `npm run build`.
- **Boje i tipografija:** `@theme` u `src/app/globals.css`.

Izvori svih fotografija i videa: `assets/source/instagram/IZVORI.md`.
