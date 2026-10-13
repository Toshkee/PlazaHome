"use client";

import { useState, type FormEvent } from "react";
import {
  type ContactPayload,
  type FieldErrors,
  limits,
  spaceTypes,
  validateContact,
} from "@/content/contact-form";
import { contactLinks } from "@/content/site";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "mt-1 block min-h-12 w-full border-0 border-b border-bone/25 bg-transparent px-0 py-3 text-lg transition-colors duration-500 outline-offset-4 hover:border-bone/50 focus:border-gold aria-invalid:border-gold";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as ContactPayload;

    const found = validateContact(data);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error(String(response.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const describedBy = (name: keyof FieldErrors) => (errors[name] ? `${name}-greska` : undefined);

  return (
    <form action="/api/contact" method="post" noValidate onSubmit={onSubmit} className="space-y-8">
      <div>
        <label htmlFor="ime" className="label text-stone">
          Ime i prezime
        </label>
        <input
          id="ime"
          name="ime"
          type="text"
          autoComplete="name"
          required
          maxLength={limits.name.max}
          aria-invalid={errors.ime ? true : undefined}
          aria-describedby={describedBy("ime")}
          className={inputClass}
        />
        <FieldError id="ime-greska" message={errors.ime} />
      </div>

      <div>
        <label htmlFor="kontakt" className="label text-stone">
          Telefon ili email
        </label>
        <input
          id="kontakt"
          name="kontakt"
          type="text"
          autoComplete="tel"
          required
          maxLength={limits.contact.max}
          aria-invalid={errors.kontakt ? true : undefined}
          aria-describedby={describedBy("kontakt")}
          className={inputClass}
        />
        <FieldError id="kontakt-greska" message={errors.kontakt} />
      </div>

      <div>
        <label htmlFor="prostor" className="label text-stone">
          Vrsta prostora <span className="normal-case tracking-normal">(nije obavezno)</span>
        </label>
        <select
          id="prostor"
          name="prostor"
          defaultValue=""
          aria-invalid={errors.prostor ? true : undefined}
          aria-describedby={describedBy("prostor")}
          className={inputClass}
        >
          <option value="" className="bg-ink">Izaberite</option>
          {spaceTypes.map((type) => (
            <option key={type} value={type} className="bg-ink">
              {type}
            </option>
          ))}
        </select>
        <FieldError id="prostor-greska" message={errors.prostor} />
      </div>

      <div>
        <label htmlFor="poruka" className="label text-stone">
          Poruka
        </label>
        <textarea
          id="poruka"
          name="poruka"
          rows={5}
          required
          maxLength={limits.message.max}
          aria-invalid={errors.poruka ? true : undefined}
          aria-describedby={describedBy("poruka")}
          className={inputClass}
        />
        <FieldError id="poruka-greska" message={errors.poruka} />
      </div>

      {/* Zamka za botove: sakriveno od ljudi i čitača ekrana. */}
      <div hidden aria-hidden="true">
        <label htmlFor="website">Ne popunjavati</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn btn-solid disabled:opacity-60"
        >
          {status === "sending" ? "Šaljem…" : "Pošalji upit"}
        </button>

        <p role="status" className="text-sm">
          {status === "sent" && "Hvala, poruka je poslata."}
          {status === "error" && (
            <>
              Poruka nije poslata. Pišite nam na{" "}
              <a href={contactLinks.whatsapp} className="underline underline-offset-4">
                WhatsApp
              </a>{" "}
              ili{" "}
              <a href={contactLinks.email} className="underline underline-offset-4">
                email
              </a>
              .
            </>
          )}
        </p>
      </div>
    </form>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 text-sm font-medium text-gold">
      {message}
    </p>
  );
}
