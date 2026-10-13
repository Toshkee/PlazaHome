// Poslije `next build`: Next ubacuje inline <script> blokove (podaci za hidrataciju),
// pa im računamo SHA-256 i dopisujemo ih u script-src u out/_headers.
// Tako CSP ostaje bez 'unsafe-inline' za skripte.
import { createHash } from "node:crypto";
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const OUT = path.resolve(import.meta.dirname, "../out");

async function htmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) return htmlFiles(full);
      return entry.name.endsWith(".html") ? [full] : [];
    }),
  );
  return files.flat();
}

const hashes = new Set();
for (const file of await htmlFiles(OUT)) {
  const html = await readFile(file, "utf8");
  // Samo izvršne inline skripte: bez src i bez JSON tipova (ld+json se ne izvršava).
  for (const match of html.matchAll(/<script(?![^>]*\bsrc=)([^>]*)>([\s\S]*?)<\/script>/g)) {
    const [, attrs, body] = match;
    if (/type="application\/(ld\+)?json"/.test(attrs) || body.length === 0) continue;
    hashes.add(`'sha256-${createHash("sha256").update(body, "utf8").digest("base64")}'`);
  }
}

const headersFile = path.join(OUT, "_headers");
const headers = await readFile(headersFile, "utf8");
if (!headers.includes("script-src 'self';")) {
  throw new Error("csp: u out/_headers nema \"script-src 'self';\"");
}
const updated = headers.replace("script-src 'self';", `script-src 'self' ${[...hashes].join(" ")};`);
await writeFile(headersFile, updated);
console.log(`csp: ${hashes.size} inline skripti dodato u script-src`);
