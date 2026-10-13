import Link from "next/link";
import { site } from "@/content/site";

export default function NotFound() {
  return (
    <main className="container-page flex min-h-svh flex-col justify-center py-section">
      <p className="eyebrow text-primary">{site.name}</p>
      <h1 className="mt-4 text-2xl">Ova stranica ne postoji</h1>
      <Link href="/" className="mt-8 inline-flex min-h-12 w-fit items-center rounded-base bg-primary px-5 font-medium text-primary-foreground">
        Na početnu
      </Link>
    </main>
  );
}
