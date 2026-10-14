import { about } from "@/content/about";
import { vars } from "@/lib/style";

/** Tri činjenice u brojkama. Na telefonu red ispod reda, od tableta u tri kolone. */
export function Stats({ className = "" }: { className?: string }) {
  return (
    <dl className={`grid border-t border-line sm:grid-cols-3 sm:gap-x-8 ${className}`}>
      {about.stats.map((item, i) => (
        <div
          key={item.label}
          className="flex flex-col-reverse justify-end border-b border-line py-6 sm:border-b-0 sm:pt-8 sm:pb-0"
          data-reveal
          style={vars({ "--delay": `${i * 0.08}s` })}
        >
          <dt className="mt-2 text-muted">{item.label}</dt>
          <dd className="text-[clamp(2.5rem,1.9rem+2.2vw,4rem)] leading-none font-light tracking-[-0.04em]">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
