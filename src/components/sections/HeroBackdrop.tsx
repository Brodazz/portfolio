"use client";

// Avvolge Hero + "Su di me" con un livello-figura STICKY dietro al contenuto.
// L'opacità della figura è legata allo scroll: piena nell'hero, si dissolve
// scendendo, e resta come sfondo tenue del "Su di me" prima di sparire.

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroFigure from "@/components/sections/HeroFigure";

export default function HeroBackdrop({
  hero,
  about,
}: {
  hero: ReactNode;
  about: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // 0 = inizio hero · ~0.5 = fine hero · 1 = fine "Su di me".
  // Piena nell'hero, dissolvenza nel passaggio, sfondo tenue, poi via.
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.42, 0.62, 0.96],
    [1, 0.85, 0.14, 0]
  );

  return (
    <div ref={ref} className="relative">
      {/* Livello figura: sticky dietro al contenuto. */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <motion.div style={{ opacity }} className="sticky top-0 h-screen">
          <div className="mx-auto flex h-full max-w-5xl items-end justify-center px-6 pb-24 md:items-center md:justify-end md:pb-0">
            <HeroFigure className="max-w-xs sm:max-w-md md:max-w-lg" />
          </div>
        </motion.div>
      </div>

      {/* Contenuto sopra la figura. */}
      <div className="relative z-10">
        {hero}
        {about}
      </div>
    </div>
  );
}
