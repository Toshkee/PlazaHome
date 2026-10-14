import Link from "next/link";
import { about } from "@/content/about";
import { vars } from "@/lib/style";
import { Icon } from "../icon";
import { Picture } from "../picture";
import { Stats } from "../stats";

/** Ko smo: naslov i tekst lijevo, dvije fotografije preklopljene desno, pa brojke. */
export function AboutIntro() {
  return (
    <section aria-labelledby="o-nama-title" className="py-section">
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-x-12">
        <div className="lg:col-span-6" data-reveal>
          <p className="eyebrow text-petrol">O nama</p>
          <h2 id="o-nama-title" className="mt-5 max-w-xl text-2xl lg:mt-7">
            {about.title}
          </h2>
          <p className="mt-6 max-w-lg text-muted lg:mt-8 lg:text-lg">{about.paragraphs[0]}</p>
          <Link href="/o-nama" className="link-arrow mt-5 lg:mt-7">
            Više o nama
            <Icon name="arrowRight" className="size-4" />
          </Link>
        </div>

        <div aria-hidden="true" className="relative pb-[12%] lg:col-span-5 lg:col-start-8">
          <div className="ml-[16%] aspect-4/5 overflow-clip bg-sand" data-reveal="image">
            <Picture
              name="kamena-kuca"
              alt=""
              sizes="(min-width: 80rem) 28rem, (min-width: 64rem) 34vw, 84vw"
              className="size-full object-cover"
            />
          </div>
          <div
            className="absolute bottom-0 left-0 aspect-square w-[44%] overflow-clip border-8 border-paper bg-sand"
            data-reveal="image"
            style={vars({ "--delay": "0.2s" })}
          >
            <Picture name="tapete" alt="" sizes="(min-width: 64rem) 16rem, 44vw" className="size-full object-cover" />
          </div>
        </div>
      </div>

      <div className="container-page">
        <Stats className="mt-16 lg:mt-28" />
      </div>
    </section>
  );
}
