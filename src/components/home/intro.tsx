import Link from "next/link";
import { about } from "@/content/about";
import { home } from "@/content/home";
import { vars } from "@/lib/style";
import { CountUp } from "../count-up";
import { Icon } from "../icon";
import { Statement } from "../statement";

/** Svijetli predah posle hero kadra: šta radimo, u jednoj rečenici, i tri brojke. */
export function Intro() {
  return (
    <section aria-labelledby="uvod-title" className="on-light py-section">
      <div className="container-page">
        <h2 id="uvod-title" className="label text-petrol" data-reveal="fade">
          O nama
        </h2>
        <Statement text={home.statement} className="mt-8 max-w-5xl" />

        <dl className="mt-20 grid grid-cols-3 gap-x-4 border-t border-ink/15 pt-10 sm:gap-x-8">
          {about.numbers.map((item, i) => (
            <div key={item.label} data-reveal="up" style={vars({ "--delay": `${i * 0.12}s` })}>
              <dt className="sr-only">{item.label}</dt>
              <dd>
                <span className="display block text-[clamp(3rem,2rem+4.5vw,7rem)] leading-none whitespace-nowrap">
                  {item.prefix && <span className="accent text-[0.45em]">{item.prefix}</span>}
                  <CountUp value={item.value} />
                  {item.suffix && <span className="text-[0.45em]">{item.suffix}</span>}
                </span>
                <span aria-hidden="true" className="mt-3 block max-w-[16rem] text-sm text-muted sm:text-base">
                  {item.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-14" data-reveal="fade">
          <Link href="/o-nama" className="link-line">
            Više o nama
            <Icon name="arrowRight" />
          </Link>
        </div>
      </div>
    </section>
  );
}
