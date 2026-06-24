"use client";

// Avvolge Hero + "Su di me" con un livello-figura STICKY dietro al contenuto.
// Comportamento voluto:
//  - NASCOSTA mentre l'hero è in vista;
//  - COMPARE smooth proprio quando l'hero finisce;
//  - si DISSOLVE scorrendo dentro "Su di me", fino a SPARIRE del tutto.
//
// Due trigger di scroll legati alla sezione "Su di me":
//  - "appear": l'hero sta uscendo (about che sale verso l'alto) → 0 → 1;
//  - "dissolve": about che scorre oltre il top → 1 → 0.
// Il prodotto dà: nascosta, picco a fine hero, dissolvenza dentro "Su di me".

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
  const aboutRef = useRef<HTMLDivElement>(null);

  // 0 = "Su di me" sotto al fondo schermo (hero pieno)
  // 1 = "Su di me" arrivata in cima (hero uscito)
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "start start"],
  });

  // Nascosta nell'hero → compare durante l'uscita dell'hero (picco ~0.55) →
  // già sparita del tutto quando "Su di me" arriva in cima.
  const opacity = useTransform(scrollYProgress, [0.5, 0.8, 1], [0, 0.55, 0]);

  return (
    <div className="relative">
      {/* Livello figura: sticky dietro al contenuto. */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <motion.div style={{ opacity }} className="sticky top-0 h-screen">
          <div className="mx-auto flex h-full max-w-5xl items-end justify-center px-6 pb-20 md:items-center md:justify-end md:pb-0">
            <HeroFigure className="max-w-xs sm:max-w-md md:max-w-lg" />
          </div>
        </motion.div>
      </div>

      {/* Contenuto sopra la figura. */}
      <div className="relative z-10">
        {hero}
        <div ref={aboutRef}>{about}</div>
      </div>
    </div>
  );
}
