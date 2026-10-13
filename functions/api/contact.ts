// Cloudflare Pages Function: POST /api/contact
// Provjerava upit sa forme i šalje ga emailom preko Resend API-ja.
// Promjenljive okruženja (Cloudflare Pages → Settings → Variables):
//   RESEND_API_KEY  obavezno
//   CONTACT_TO      kome stižu upiti (podrazumijevano site.email)
//   CONTACT_FROM    pošiljalac sa verifikovanog domena, npr. "Plaza Home sajt <sajt@plazahome.me>"
import { type ContactPayload, validateContact } from "../../src/content/contact-form";
import { site } from "../../src/content/site";

interface Env {
  RESEND_API_KEY?: string;
  CONTACT_TO?: string;
  CONTACT_FROM?: string;
}

const DEFAULT_FROM = `${site.name} sajt <onboarding@resend.dev>`;

function field(value: unknown): string {
  return typeof value === "string" ? value : "";
}

async function readPayload(request: Request): Promise<ContactPayload> {
  const type = request.headers.get("content-type") ?? "";
  const raw: Record<string, unknown> = type.includes("application/json")
    ? await request.json()
    : Object.fromEntries(await request.formData());
  return {
    ime: field(raw.ime),
    kontakt: field(raw.kontakt),
    prostor: field(raw.prostor),
    poruka: field(raw.poruka),
    website: field(raw.website),
  };
}

function reply(request: Request, status: number, body: Record<string, unknown>): Response {
  const wantsJson = (request.headers.get("accept") ?? "").includes("application/json");
  if (wantsJson) return Response.json(body, { status });

  // Forma poslata bez JavaScripta: kratka stranica sa porukom i linkom nazad.
  const text = body.ok
    ? "Hvala, poruka je poslata."
    : `Poruka nije poslata. Pozovite nas ili pišite na WhatsApp: ${site.phone.display}.`;
  const html = `<!doctype html><html lang="sr-Latn-ME"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${site.name}</title><body style="font-family:system-ui,sans-serif;max-width:32rem;margin:4rem auto;padding:0 1.25rem;line-height:1.6"><p>${text}</p><p><a href="/#kontakt">Nazad na sajt</a></p></body></html>`;
  return new Response(html, { status, headers: { "content-type": "text/html; charset=utf-8" } });
}

export const onRequestPost = async ({ request, env }: { request: Request; env: Env }) => {
  let data: ContactPayload;
  try {
    data = await readPayload(request);
  } catch {
    return reply(request, 400, { ok: false, error: "bad_request" });
  }

  // Bot je popunio skriveno polje: odgovaramo kao da je sve u redu, ništa ne šaljemo.
  if (data.website) return reply(request, 200, { ok: true });

  const errors = validateContact(data);
  if (Object.keys(errors).length > 0) {
    return reply(request, 400, { ok: false, error: "validation", fields: errors });
  }

  if (!env.RESEND_API_KEY) {
    return reply(request, 503, { ok: false, error: "not_configured" });
  }

  const name = data.ime.trim();
  const contact = data.kontakt.trim();
  const isEmail = contact.includes("@");
  const text = [
    `Ime: ${name}`,
    `Kontakt: ${contact}`,
    `Prostor: ${data.prostor || "nije navedeno"}`,
    "",
    data.poruka.trim(),
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM ?? DEFAULT_FROM,
      to: [env.CONTACT_TO ?? site.email],
      reply_to: isEmail ? contact : undefined,
      subject: `Upit sa sajta: ${name.replace(/[\r\n]+/g, " ")}`,
      text,
    }),
  });

  if (!response.ok) return reply(request, 502, { ok: false, error: "send_failed" });
  return reply(request, 200, { ok: true });
};
