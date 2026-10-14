import Link from "next/link";
import { Icon } from "@/components/icon";
import { PageShell } from "@/components/page-shell";

export default function NotFound() {
  return (
    <PageShell>
      <section className="container-page flex min-h-[70svh] flex-col justify-center py-section">
        <p className="eyebrow text-petrol">Greška 404</p>
        <h1 className="mt-3 text-3xl">Ova stranica ne postoji</h1>
        <p className="mt-4 max-w-md text-lg text-muted">Možda je adresa pogrešno upisana. Vratite se na početnu ili nam se javite.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-primary">
            Na početnu
            <Icon name="arrowRight" />
          </Link>
          <Link href="/kontakt" className="btn btn-outline">
            Kontakt
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
