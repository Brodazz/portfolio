"use client";

// Avvolge Hero + "Su di me" con un livello-figura STICKY dietro al contenuto,
// con comportamento DIVERSO per desktop e mobile.
//
// DESKTOP: la figura è a destra dell'hero (visibile da subito), resta mentre
//   scorri e si dissolve del tutto quando arriva "Su di me".
// MOBILE: niente figura nell'hero; subito DOPO l'hero c'è uno spazio (spacer)
//   in cui la figura compare scorrendo, e poi si dissolve entrando in "Su di me".
//
// L'opacità è calcolata sullo scroll della finestra (in px) usando la posizione
// misurata della sezione "Su di me": così evitiamo il bug di hydration di
// useScroll({ target }) su Next 16 / React 19.

import { useState, useEffect, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroFigure from "@/components/sections/HeroFigure";

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return isDesktop;
}

export default function HeroBackdrop({
  hero,
  about,
}: {
  hero: ReactNode;
  about: ReactNode;
}) {
  const isDesktop = useIsDesktop();
  const { scrollY } = useScroll();

  // Posizione (px) del top di "Su di me" e altezza viewport, misurate dal DOM.
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
    const settle = setTimeout(measure, 300); // dopo il load di font/immagini
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(settle);
      window.removeEventListener("resize", measure);
    };
  }, [isDesktop]);

  // Desktop: piena nell'hero → si dissolve nell'ultimo mezzo viewport prima di "Su di me".
  // Mobile: nascosta nell'hero; nello spazio (top-vh .. top) appare, tiene, poi dissolve.
  const range = isDesktop
    ? [0, Math.max(1, top - 0.55 * vh), top]
    : [top - vh, top - 0.78 * vh, top - 0.32 * vh, top];
  const vals = isDesktop ? [1, 1, 0] : [0, 0.9, 0.9, 0];
  const opacity = useTransform(scrollY, range, vals);

  return (
    <div className="relative">
      {/* Livello figura: sticky dietro al contenuto. */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <motion.div style={{ opacity }} className="sticky top-0 h-screen">
          <div className="mx-auto flex h-full max-w-5xl items-center justify-center px-6 md:justify-end">
            <HeroFigure className="max-w-xs sm:max-w-md md:max-w-lg" />
          </div>
        </motion.div>
      </div>

      {/* Contenuto sopra la figura. */}
      <div className="relative z-10">
        {hero}
        {/* Spazio (solo mobile) tra hero e "Su di me" dove compare la figura. */}
        <div className="h-screen md:hidden" aria-hidden />
        {about}
      </div>
    </div>
  );
}
