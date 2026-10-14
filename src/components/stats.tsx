import { about } from "@/content/about";
import { vars } from "@/lib/style";

/** Tri činjenice u brojkama. Na telefonu red ispod reda, od tableta u tri kolone. */
export function Stats({ className = "" }: { className?: string }) {
  return (
    <dl className={`grid border-t border-line sm:grid-cols-3 sm:gap-x-8 ${className}`}>
      {about.stats.map((item, i) => (
        <div
          key={item.label}
          className="flex flex-col-reverse justify-end border-b border-line py-5 sm:border-b-0 sm:pt-7 sm:pb-0"
          data-reveal
          style={vars({ "--delay": `${i * 0.08}s` })}
        >
          <dt className="mt-1 text-muted">{item.label}</dt>
          <dd className="text-2xl font-medium tracking-[-0.02em]">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
