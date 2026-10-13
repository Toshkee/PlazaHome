"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "./icon";

/**
 * Video preko postera. Učitava se tek poslije `load` događaja, da ne usporava
 * prvi prikaz. Sa `prefers-reduced-motion` ne kreće sam; posjetilac ga pušta dugmetom.
 */
export function HeroVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(false);
  const pausedByUser = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      pausedByUser.current = true;
      return;
    }

    const start = () => {
      if (!video.getAttribute("src")) video.src = src;
      video.play().catch(() => setPlaying(false));
    };

    let idle = 0;
    const schedule = () => {
      idle = window.setTimeout(start, 500);
    };
    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });

    // Ne trošimo bateriju dok video nije na ekranu.
    const observer = new IntersectionObserver(([entry]) => {
      if (!video.getAttribute("src") || pausedByUser.current) return;
      if (entry.isIntersecting) video.play().catch(() => setPlaying(false));
      else video.pause();
    });
    observer.observe(video);

    return () => {
      window.clearTimeout(idle);
      window.removeEventListener("load", schedule);
      observer.disconnect();
    };
  }, [src]);

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
        className={`absolute inset-0 size-full object-cover ${visible ? "" : "invisible"}`}
      />
      <button
        type="button"
        onClick={toggle}
        className="absolute top-3 right-3 inline-flex size-11 items-center justify-center rounded-full bg-foreground/70 text-primary-foreground hover:bg-foreground lg:top-auto lg:bottom-4"
      >
        <Icon name={playing ? "pause" : "play"} />
        <span className="sr-only">{playing ? "Pauziraj video" : "Pusti video"}</span>
      </button>
    </>
  );
}
