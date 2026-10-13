"use client";

import { useRef, useState, type MouseEvent, type ReactNode } from "react";
import { Icon } from "./icon";

type ViewerItem = { caption: string; instagramUrl: string };

/**
 * Prikaz fotografije preko cijelog ekrana. Mreža i slike se renderuju na serveru
 * (children i slides); ovdje je samo otvaranje, listanje i zatvaranje.
 */
export function GalleryViewer({
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
    const trigger = (event.target as HTMLElement).closest<HTMLElement>("[data-gallery-index]");
    if (!trigger) return;
    triggerRef.current = trigger;
    setIndex(Number(trigger.dataset.galleryIndex));
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
        className="on-dark m-0 size-full max-h-none max-w-none bg-foreground p-0 text-primary-foreground backdrop:bg-foreground"
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between gap-4 px-3 py-2">
            <p className="px-2 text-sm" aria-live="polite">
              {index + 1} / {count}
            </p>
            <button
              type="button"
              onClick={close}
              autoFocus
              className="inline-flex size-11 items-center justify-center rounded-full hover:bg-primary"
            >
              <Icon name="close" />
              <span className="sr-only">Zatvori</span>
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-3">
            <div className="flex size-full items-center justify-center">
              {slides[index]}
            </div>
            <button
              type="button"
              onClick={() => show(-1)}
              className="absolute top-1/2 left-2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-foreground/70 hover:bg-primary"
            >
              <Icon name="chevronLeft" />
              <span className="sr-only">Prethodna fotografija</span>
            </button>
            <button
              type="button"
              onClick={() => show(1)}
              className="absolute top-1/2 right-2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-foreground/70 hover:bg-primary"
            >
              <Icon name="chevronRight" />
              <span className="sr-only">Sljedeća fotografija</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-4">
            <p>{item.caption}</p>
            <a
              href={item.instagramUrl}
              className="inline-flex min-h-11 items-center gap-2 text-sm underline underline-offset-4"
            >
              Objava na Instagramu
              <Icon name="arrowUpRight" />
            </a>
          </div>
        </div>
      </dialog>
    </div>
  );
}
