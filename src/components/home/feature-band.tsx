import Link from "next/link";
import { Icon } from "../icon";
import { Picture } from "../picture";

/** Veliki kadar preko cijele širine: salon vile i zavjese do 6 m. Fotografija klizi dok se skroluje. */
export function FeatureBand() {
  return (
    <section
      aria-labelledby="vila-band-title"
      className="relative h-[78svh] min-h-[32rem] overflow-clip bg-night text-white [--focus-color:var(--color-white)] lg:h-[88svh]"
    >
      <Picture
        name="vila-salon-sumrak"
        alt="Salon vile sa prozorima u dvije visine i visokim draperijama, u sumrak"
        sizes="100vw"
        className="parallax"
      />
      <div aria-hidden="true" className="band-scrim absolute inset-0" />
      <div className="relative z-10 flex h-full items-end">
        <div className="container-page pb-12 lg:pb-20" data-reveal>
          <p className="eyebrow text-gold-light">Vila, salon u dvije visine</p>
          <h2 id="vila-band-title" className="mt-5 max-w-3xl text-3xl lg:mt-7">
            Zavjese dugačke i do 6 metara, šivene po mjeri
          </h2>
          <Link href="/radovi#vila" className="link-arrow mt-6 [--link-color:var(--color-white)] lg:mt-8">
            Pogledajte projekat
            <Icon name="arrowRight" className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
