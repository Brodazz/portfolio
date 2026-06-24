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

  // MOBILE: la figura è una SEZIONE in-flow (scorre 1:1 come le altre sezioni).
  // Sezione bassa (poco vuoto attorno) → diventa piena presto e si dissolve
  // subito, così si arriva in fretta a "Su di me". (Section min-h-[62vh].)
  const mobileOpacity = useTransform(
    scrollY,
    [0, top - 0.7 * vh, top - 0.2 * vh],
    [1, 1, 0]
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

      {/* Contenuto. */}
      <div className="relative z-10">
        {hero}
        {/* MOBILE: sezione-immagine in-flow (scorre 1:1), staccata di poco
            dall'hero, che si dissolve appena è in vista. */}
        <section className="mt-4 flex min-h-[55vh] items-start justify-center px-6 md:hidden">
          <motion.div
            style={{ opacity: mobileOpacity }}
            className="w-full max-w-xs"
          >
            <HeroFigure />
          </motion.div>
        </section>
        {about}
      </div>
    </div>
  );
}
