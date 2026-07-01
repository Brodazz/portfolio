"use client";

// Preview video di un progetto. Con "riduci movimento" attivo NON parte in
// autoplay: mostra il poster e offre i controlli per riprodurlo a mano.
// Altrimenti parte muto in loop (via JS, così niente autoplay se il reduced
// motion è attivo o se JS è disabilitato → mostra il poster).

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

interface ProjectVideoProps {
  src: string;
  poster?: string;
  className?: string;
}

export default function ProjectVideo({
  src,
  poster,
  className,
}: ProjectVideoProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (reduce) {
      video.pause();
      video.controls = true;
    } else {
      video.controls = false;
      video.play().catch(() => {});
    }
  }, [reduce]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      className={className}
    />
  );
}
