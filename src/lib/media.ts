export type MediaSource = { readonly width: number; readonly src: string };

export type MediaImage = {
  readonly width: number;
  readonly height: number;
  readonly avif: readonly MediaSource[];
  readonly webp: readonly MediaSource[];
};

export function srcSet(sources: readonly MediaSource[]): string {
  return sources.map((s) => `${s.src} ${s.width}w`).join(", ");
}
