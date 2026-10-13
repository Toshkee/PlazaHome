// Polja kontakt forme. Dijele ih forma na sajtu i provjera na serveru
// (functions/api/contact.ts), zato ovdje nema importa preko "@/".

export const spaceTypes = [
  "Stan ili kuća",
  "Vila",
  "Hotel",
  "Restoran",
  "Poslovni prostor",
  "Nešto drugo",
] as const;

export const limits = {
  name: { min: 2, max: 100 },
  contact: { min: 5, max: 120 },
  message: { min: 10, max: 2000 },
} as const;

export type ContactPayload = {
  ime: string;
  kontakt: string;
  prostor: string;
  poruka: string;
  /** Zamka za botove: ljudi ovo polje ne vide. */
  website: string;
};

export type FieldErrors = Partial<Record<"ime" | "kontakt" | "prostor" | "poruka", string>>;

export function validateContact(data: ContactPayload): FieldErrors {
  const errors: FieldErrors = {};
  const name = data.ime.trim();
  const contact = data.kontakt.trim();
  const message = data.poruka.trim();

  if (name.length < limits.name.min || name.length > limits.name.max) {
    errors.ime = "Upišite ime i prezime.";
  }
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
  const isPhone = /^\+?[\d\s/().-]{6,}$/.test(contact);
  if (contact.length > limits.contact.max || !(isEmail || isPhone)) {
    errors.kontakt = "Upišite broj telefona ili email adresu.";
  }
  if (data.prostor && !(spaceTypes as readonly string[]).includes(data.prostor)) {
    errors.prostor = "Izaberite vrstu prostora sa liste.";
  }
  if (message.length < limits.message.min || message.length > limits.message.max) {
    errors.poruka = `Poruka treba da ima između ${limits.message.min} i ${limits.message.max} znakova.`;
  }
  return errors;
}
