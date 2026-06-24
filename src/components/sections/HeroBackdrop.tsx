"use client";

// Avvolge Hero + "Su di me" con comportamento DIVERSO per desktop e mobile.
//
// DESKTOP: figura sticky a destra dell'hero (visibile da subito), si dissolve
//   quando arriva "Su di me".
// MOBILE: subito dopo l'hero la figura SALE dal basso (translateY legato allo
//   scroll: entra come una sezione, non in dissolvenza), resta, poi si attenua
//   restando come SFONDO TENUE dietro "Su di me", e infine sparisce.
//
// Entrambi i layout sono nel DOM, mostrati per breakpoint via CSS. Le opacità/
// posizioni sono calcolate sullo scroll della finestra usando la posizione
// misurata di "Su di me" (evita il bug di hydration di useScroll({ target })).

import { useState, useEffect, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroFigure from "@/components/sections/HeroFigure";

export default function HeroBackdrop({
  hero,
  about,
}: {
  hero: ReactNode;
  about: ReactNode;
}) {
  const { scrollY } = useScroll();

  // top = posizione (px) del top di "Su di me"; vh = altezza viewport.
  // Lo spacer mobile è md:hidden, quindi `top` riflette il breakpoint corrente.
  const [{ top, vh }, setMetrics] = useState({ top: 2000, vh: 1000 });
  useEffect(() => {
    const measure = () => {
      const el = document.getElementById("su-di-me");
      const viewport = window.innerHeight || 1;
      const t = el
        ? Math.round(el.getBoundingClientRect().top + window.scrollY)
        : viewport * 2;
      setMetrics({ top: Math.max(t, viewport + 1), vh: viewport });
    };
    measure();
    const settle = setTimeout(measure, 300);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(settle);
      window.removeEventListener("resize", measure);
    };
  }, []);

  // DESKTOP: piena nell'hero → dissolve nell'ultimo ~0.55vh prima di "Su di me".
  const desktopOpacity = useTransform(
    scrollY,
    [0, Math.max(1, top - 0.55 * vh), top],
    [1, 1, 0]
  );

  // MOBILE: sale dal basso DURANTE l'uscita dell'hero (è già su quando l'hero
  // se ne va: niente buco nero, sensazione "subito dopo l'hero").
  const mobileY = useTransform(
    scrollY,
    [Math.max(1, top - 2.0 * vh), top - 1.5 * vh],
    [vh, 0]
  );
  // Piena (momento di sola immagine) → si dissolve mentre "Su di me" sale →
  // resta come SFONDO TENUE dietro "Su di me" → infine sparisce.
  const mobileOpacity = useTransform(
    scrollY,
    [0, top - vh, top, top + 0.6 * vh, top + 1.2 * vh],
    [1, 1, 0.15, 0.15, 0]
  );

  return (
    <div className="relative">
      {/* DESKTOP: figura sticky a destra, dietro al contenuto. */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden md:block">
        <motion.div
          style={{ opacity: desktopOpacity }}
          className="sticky top-0 h-screen"
        >
          <div className="mx-auto flex h-full max-w-5xl items-center justify-end px-6">
            <HeroFigure className="max-w-md lg:max-w-lg" />
          </div>
        </motion.div>
      </div>

      {/* MOBILE: figura che sale dal basso e poi resta come sfondo tenue. */}
      <div className="pointer-events-none absolute inset-0 z-0 md:hidden">
        <motion.div
          style={{ opacity: mobileOpacity, y: mobileY }}
          className="sticky top-0 flex h-screen items-center justify-center px-6"
        >
          <HeroFigure className="max-w-xs" />
        </motion.div>
      </div>

      {/* Contenuto sopra la figura. */}
      <div className="relative z-10">
        {hero}
        {/* Spazio (solo mobile) tra hero e "Su di me" per il momento-immagine. */}
        <div className="h-[150vh] md:hidden" aria-hidden />
        {about}
      </div>
    </div>
  );
}
