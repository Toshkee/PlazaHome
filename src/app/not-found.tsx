import Link from "next/link";
import { Lines } from "@/components/lines";
import { PageShell } from "@/components/page-shell";
import { Icon } from "@/components/icon";

export default function NotFound() {
  return (
    <PageShell>
      <section className="container-page flex min-h-svh flex-col justify-center py-section">
        <p className="label enter-fade text-gold">404</p>
        <h1 className="display enter-lines mt-6 text-3xl">
          <Lines lines={["Ova stranica", "ne postoji"]} accent={[1]} />
        </h1>
        <div className="enter-fade-up mt-12">
          <Link href="/" className="btn btn-solid">
            Na početnu
            <Icon name="arrowRight" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
