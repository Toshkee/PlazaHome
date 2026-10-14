// Stranice sajta, redom kojim stoje u meniju.
export const navigation = [
  { href: "/o-nama", label: "O nama" },
  { href: "/radovi", label: "Radovi" },
  { href: "/klijenti", label: "Klijenti" },
  { href: "/proizvodi", label: "Proizvodi" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

/** Stranice čiji vrh je fotografija ili snimak preko cijele širine: zaglavlje je providno preko njega. */
export const heroPages: readonly string[] = ["/", "/o-nama", "/radovi", "/klijenti", "/proizvodi"];
