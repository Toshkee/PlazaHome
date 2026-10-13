import { vars } from "@/lib/style";
import { ScrollProgress } from "./scroll-progress";

/**
 * Velika rečenica čije se riječi pale jedna za drugom kako se skroluje
 * (`.statement-word` u globals.css). Bez JavaScripta je cijela upaljena.
 */
const SIZES = {
  lg: "text-[clamp(2.125rem,1.4rem+3.2vw,4.25rem)] leading-[1.05]",
  md: "text-[clamp(1.75rem,1.35rem+1.9vw,3rem)] leading-[1.1]",
};

export function Statement({
  text,
  size = "lg",
  className = "",
}: {
  text: string;
  size?: keyof typeof SIZES;
  className?: string;
}) {
  const words = text.split(" ");
  return (
    <ScrollProgress className={className} style={vars({ "--count": words.length })}>
      <p className={`display tracking-[-0.01em] ${SIZES[size]}`}>
        {words.map((word, i) => (
          <span key={i}>
            <span className="statement-word" style={vars({ "--i": i })}>
              {word}
            </span>
            {i < words.length - 1 && " "}
          </span>
        ))}
      </p>
    </ScrollProgress>
  );
}
