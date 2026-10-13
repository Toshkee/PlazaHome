type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  /** Svijetli tekst za tamne sekcije. */
  inverted?: boolean;
};

export function SectionHeading({ id, eyebrow, title, inverted = false }: SectionHeadingProps) {
  return (
    <div>
      <p className={`eyebrow ${inverted ? "text-primary-foreground" : "text-primary"}`}>{eyebrow}</p>
      <h2 id={id} className="mt-3 text-2xl">
        {title}
      </h2>
      <div className="mt-6 h-px w-16 bg-accent" aria-hidden="true" />
    </div>
  );
}
