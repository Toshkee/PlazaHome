import Link from "next/link";
import { about } from "@/content/about";
import { Icon } from "../icon";
import { Stats } from "../stats";

/** Ko smo, u dvije rečenice, i tri činjenice. */
export function AboutIntro() {
  return (
    <section aria-labelledby="o-nama-title" className="py-section">
      <div className="container-page">
        <div className="grid gap-5 lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-6" data-reveal>
            <p className="eyebrow text-petrol">O nama</p>
            <h2 id="o-nama-title" className="mt-3 max-w-xl text-2xl">
              {about.title}
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 lg:pt-8" data-reveal>
            <p className="text-muted lg:text-lg">{about.paragraphs[0]}</p>
            <Link href="/o-nama" className="link-arrow mt-3">
              Više o nama
              <Icon name="arrowRight" className="size-4" />
            </Link>
          </div>
        </div>
        <Stats className="mt-10 lg:mt-16" />
      </div>
    </section>
  );
}
