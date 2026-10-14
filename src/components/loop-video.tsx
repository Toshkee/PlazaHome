"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Icon } from "./icon";

type LoopVideoProps = {
  src: string;
  /** Poster ispod videa; ide u isti okvir, da se pomjeraju zajedno. */
  children?: ReactNode;
  /** Klasa okvira oko postera i videa (npr. animacija kadra). Dugme je van okvira. */
  frameClassName?: string;
  /**
   * `after-load`: krene poslije `load` događaja (hero, da ne usporava prvi prikaz).
   * `in-view`: učita se tek kad se približi ekranu.
   */
  start: "after-load" | "in-view";
  className?: string;
  buttonClassName?: string;
};

/**
 * Nijem video u petlji preko postera. Pauzira se kad nije na ekranu.
 * Sa `prefers-reduced-motion` ne kreće sam; posjetilac ga pušta dugmetom (WCAG 2.2.2).
 */
export function LoopVideo({
  src,
  children,
  frameClassName = "absolute inset-0",
  start,
  className = "",
  buttonClassName = "",
}: LoopVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(false);
  const pausedByUser = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      pausedByUser.current = true;
      return;
    }

    const play = () => {
      if (!video.getAttribute("src")) video.src = src;
      video.play().catch(() => setPlaying(false));
    };

    let timer = 0;
    const schedule = () => {
      timer = window.setTimeout(play, 500);
    };
    if (start === "after-load") {
      if (document.readyState === "complete") schedule();
      else window.addEventListener("load", schedule, { once: true });
    }

    // Ne trošimo bateriju dok video nije na ekranu.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (pausedByUser.current) return;
        if (entry.isIntersecting) {
          if (start === "in-view" || video.getAttribute("src")) play();
        } else if (video.getAttribute("src")) {
          video.pause();
        }
      },
      { rootMargin: start === "in-view" ? "200px 0px" : "0px" },
    );
    observer.observe(video);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("load", schedule);
      observer.disconnect();
    };
  }, [src, start]);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      pausedByUser.current = false;
      if (!video.getAttribute("src")) video.src = src;
      video.play().catch(() => setPlaying(false));
    } else {
      pausedByUser.current = true;
      video.pause();
    }
  };

  return (
    <>
      <div className={frameClassName}>
        {children}
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          onPlaying={() => {
            setVisible(true);
            setPlaying(true);
          }}
          onPause={() => setPlaying(false)}
          className={`absolute inset-0 size-full object-cover transition-opacity duration-1000 ${visible ? "opacity-100" : "opacity-0"} ${className}`}
        />
      </div>
      <button
        type="button"
        onClick={toggle}
        className={`inline-flex size-11 items-center justify-center rounded-full border border-white/40 bg-night/40 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-ink ${buttonClassName}`}
      >
        <Icon name={playing ? "pause" : "play"} className="size-4" />
        <span className="sr-only">{playing ? "Pauziraj video" : "Pusti video"}</span>
      </button>
    </>
  );
}
