"use client";

import { useRef, useState, type MouseEvent, type ReactNode } from "react";
import { Icon } from "./icon";

type ViewerItem = { caption: string; instagramUrl: string };

/**
 * Pregled fotografije preko cijelog ekrana. Slike se renderuju na serveru
 * (children i slides); ovdje je samo otvaranje, listanje i zatvaranje.
 * Otvara ga svaki element sa `data-viewer-index` unutar children.
 */
export function PhotoViewer({
  children,
  slides,
  items,
}: {
  children: ReactNode;
  slides: ReactNode[];
  items: ViewerItem[];
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const [index, setIndex] = useState(0);
  const count = items.length;

  const open = (event: MouseEvent<HTMLDivElement>) => {
    const trigger = (event.target as HTMLElement).closest<HTMLElement>("[data-viewer-index]");
    if (!trigger) return;
    triggerRef.current = trigger;
    setIndex(Number(trigger.dataset.viewerIndex));
    dialogRef.current?.showModal();
  };

  const close = () => dialogRef.current?.close();
  const show = (step: number) => setIndex((current) => (current + step + count) % count);

  const item = items[index];

  return (
    <div onClick={open}>
      {children}

      <dialog
        ref={dialogRef}
        aria-label="Fotografija projekta"
        onClose={() => triggerRef.current?.focus()}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") show(1);
          if (event.key === "ArrowLeft") show(-1);
        }}
        className="viewer-dialog m-0 size-full max-h-none max-w-none bg-ink p-0 text-bone"
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between gap-4 px-3 py-2">
            <p className="label px-2 text-stone" aria-live="polite">
              {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
            </p>
            <button
              type="button"
              onClick={close}
              autoFocus
              className="inline-flex min-h-11 items-center gap-3 px-3 text-sm font-medium"
            >
              Zatvori
              <Icon name="close" />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-3">
            <div key={index} className="flex size-full items-center justify-center enter-fade" style={{ animationDelay: "0s", animationDuration: "0.6s" }}>
              {slides[index]}
            </div>
            <button
              type="button"
              onClick={() => show(-1)}
              className="absolute top-1/2 left-3 inline-flex size-12 -translate-y-1/2 items-center justify-center rounded-full border border-bone/30 bg-ink/60 backdrop-blur-sm hover:bg-bone hover:text-ink"
            >
              <Icon name="chevronLeft" />
              <span className="sr-only">Prethodna fotografija</span>
            </button>
            <button
              type="button"
              onClick={() => show(1)}
              className="absolute top-1/2 right-3 inline-flex size-12 -translate-y-1/2 items-center justify-center rounded-full border border-bone/30 bg-ink/60 backdrop-blur-sm hover:bg-bone hover:text-ink"
            >
              <Icon name="chevronRight" />
              <span className="sr-only">Sljedeća fotografija</span>
            </button>
          </div>

          <div className="safe-bottom flex flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-4">
            <p className="display text-lg">{item.caption}</p>
            <a href={item.instagramUrl} className="inline-flex min-h-11 items-center gap-2 text-sm underline underline-offset-4">
              Objava na Instagramu
              <Icon name="arrowUpRight" className="size-4" />
            </a>
          </div>
        </div>
      </dialog>
    </div>
  );
}
