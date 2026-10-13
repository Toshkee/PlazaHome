// Pravi AVIF i WebP verzije slika u više širina, ikonice, Open Graph sliku
// i tipizovan spisak `src/content/media.generated.ts`.
// Pokreće se automatski prije `next build`; preskače slike koje su već urađene.
import { createHash } from "node:crypto";
import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const OUT_DIR = path.join(ROOT, "public/media");
const MANIFEST = path.join(ROOT, "src/content/media.generated.ts");
const IG = "assets/source/instagram";

const DEFAULT_WIDTHS = [480, 800, 1200, 1600];

const LOGO_CROP = { left: 37, top: 192, width: 406, height: 156 };
/** Zlatna boja znaka; boja pozadine se čita iz ugla slike. */
const LOGO_GOLD = [196, 178, 136];
/**
 * Svaka slika: ime (koristi se u kodu), izvor, opciono isijecanje i širine.
 * Isijecanje je u pikselima izvornog fajla.
 */
const IMAGES = [
  { name: "hero-poster", src: "assets/source/generated/hero-poster.jpg", widths: [360, 540, 720] },
  { name: "vila-salon", src: `${IG}/vila-visoki-prozori-1.jpg` },
  { name: "vila-salon-sumrak", src: `${IG}/vila-visoki-prozori-2.jpg` },
  // Original ima utisnut tekst na zavjesi; isijecamo donji dio bez teksta.
  {
    name: "lustica-bay",
    src: `${IG}/lustica-bay-pogled.jpg`,
    crop: { left: 0, top: 1864, width: 3268, height: 2232 },
  },
  { name: "kamena-kuca", src: `${IG}/kamena-kuca-dnevna.jpg` },
  { name: "drvena-kuca", src: `${IG}/etno-selo-drvo.jpg` },
  { name: "restoran-lucni-prozori", src: `${IG}/lucni-prozori-plave-draperije.jpg` },
  { name: "zavjese-draperije", src: `${IG}/dnevna-draperije.jpg` },
  { name: "draperije-spavaca", src: `${IG}/spavaca-soba-draperije.jpg` },
  { name: "rimske-zavjese", src: `${IG}/rimske-zavjese.jpg` },
  { name: "drveni-venecijaneri", src: `${IG}/drveni-venecijaneri.jpg` },
  { name: "rolo-zavjese", src: `${IG}/rolo-zavjese.jpg` },
  { name: "tapete", src: `${IG}/tapete.jpg` },
  // Logo sa Instagram profila, isječen na sam znak (bez praznog polja oko njega).
  {
    name: "logo",
    src: `${IG}/logo-instagram.jpg`,
    crop: LOGO_CROP,
    widths: [160, 240, 320, 406],
  },
  // Isti znak bez petrolej podloge (pravi ga buildLogoMark), za providno zaglavlje i podnožje.
  { name: "logo-mark", src: "assets/source/generated/logo-mark.png", widths: [240, 400, 600, 812] },
];


const FORMATS = {
  avif: (img) => img.avif({ quality: 55, effort: 4 }),
  webp: (img) => img.webp({ quality: 76, effort: 5 }),
};

async function fileHash(file, extra) {
  const buf = await readFile(file);
  return createHash("sha1").update(buf).update(JSON.stringify(extra)).digest("hex").slice(0, 8);
}

function base(image) {
  const img = sharp(path.join(ROOT, image.src)).rotate();
  return image.crop ? img.extract(image.crop) : img;
}

async function buildImage(image, existing) {
  const meta = await sharp(path.join(ROOT, image.src)).metadata();
  const width = image.crop?.width ?? meta.width;
  const height = image.crop?.height ?? meta.height;
  const requested = image.widths ?? DEFAULT_WIDTHS;
  const widths = [...new Set(requested.map((w) => Math.min(w, width)))].sort((a, b) => a - b);
  const hash = await fileHash(path.join(ROOT, image.src), { crop: image.crop, widths, v: 1 });

  const sources = {};
  let made = 0;
  for (const [format, encode] of Object.entries(FORMATS)) {
    sources[format] = [];
    for (const w of widths) {
      const file = `${image.name}-${w}-${hash}.${format}`;
      if (!existing.has(file)) {
        await encode(base(image).resize({ width: w })).toFile(path.join(OUT_DIR, file));
        made++;
      }
      sources[format].push({ width: w, src: `/media/${file}` });
    }
  }
  return { entry: { width, height, ...sources }, made, prefix: `${image.name}-`, hash };
}

/**
 * Znak bez podloge: logo se dvostruko uveća (mekše ivice), pa se providnost
 * računa iz udaljenosti svakog piksela od boje podloge. Boja je jedna, zlatna.
 */
async function buildLogoMark() {
  const { data, info } = await sharp(path.join(ROOT, `${IG}/logo-instagram.jpg`))
    .extract(LOGO_CROP)
    .resize({ width: LOGO_CROP.width * 2, kernel: "lanczos3" })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const bg = [data[0], data[1], data[2]];
  const out = Buffer.alloc(info.width * info.height * 4);
  for (let i = 0, o = 0; i < data.length; i += 3, o += 4) {
    const d = Math.hypot(data[i] - bg[0], data[i + 1] - bg[1], data[i + 2] - bg[2]);
    const alpha = Math.min(1, Math.max(0, (d - 24) / 140));
    out[o] = LOGO_GOLD[0];
    out[o + 1] = LOGO_GOLD[1];
    out[o + 2] = LOGO_GOLD[2];
    out[o + 3] = Math.round(alpha * 255);
  }

  const file = path.join(ROOT, "assets/source/generated/logo-mark.png");
  await mkdir(path.dirname(file), { recursive: true });
  await sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(file);
}

async function buildIcons() {
  const logo = path.join(ROOT, `${IG}/logo-instagram.jpg`);
  const png = (size) => sharp(logo).resize(size, size).png().toBuffer();
  await writeFile(path.join(ROOT, "public/icon-192.png"), await png(192));
  await writeFile(path.join(ROOT, "public/icon-512.png"), await png(512));
  await writeFile(path.join(ROOT, "public/apple-touch-icon.png"), await png(180));

  // favicon.ico sa jednom 32×32 PNG slikom unutra (ICO dozvoljava PNG sadržaj).
  const ico32 = await png(32);
  const header = Buffer.alloc(22);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  header.writeUInt8(32, 6);
  header.writeUInt8(32, 7);
  header.writeUInt16LE(1, 10);
  header.writeUInt16LE(32, 12);
  header.writeUInt32LE(ico32.length, 14);
  header.writeUInt32LE(22, 18);
  await writeFile(path.join(ROOT, "public/favicon.ico"), Buffer.concat([header, ico32]));
}

async function buildOgImage() {
  const photo = await sharp(path.join(ROOT, `${IG}/vila-visoki-prozori-1.jpg`))
    .resize(1200, 630, { fit: "cover", position: "centre" })
    .toBuffer();
  const logo = await sharp(path.join(ROOT, `${IG}/logo-instagram.jpg`)).resize(200, 200).toBuffer();
  await sharp(photo)
    .composite([{ input: logo, left: 48, top: 630 - 200 - 48 }])
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(path.join(ROOT, "public/og.jpg"));
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const existing = new Set(await readdir(OUT_DIR));
  const entries = {};
  const keep = new Set();
  let made = 0;

  await buildLogoMark();
  for (const image of IMAGES) {
    const result = await buildImage(image, existing);
    entries[image.name] = result.entry;
    made += result.made;
    for (const list of [result.entry.avif, result.entry.webp]) {
      for (const s of list) keep.add(path.basename(s.src));
    }
  }

  // Brišemo stare verzije (drugi hash) da public/media ne raste.
  for (const file of existing) {
    if (!keep.has(file)) await rm(path.join(OUT_DIR, file));
  }

  await buildIcons();
  await buildOgImage();

  const body = `// Generiše scripts/media.mjs — ne mijenjati ručno.
import type { MediaImage } from "@/lib/media";

export const media = ${JSON.stringify(entries, null, 2)} as const satisfies Record<string, MediaImage>;

export type MediaName = keyof typeof media;
`;
  await writeFile(MANIFEST, body);
  console.log(`media: ${IMAGES.length} slika, ${made} novih fajlova`);
}

await main();
