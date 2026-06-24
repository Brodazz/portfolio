"use client";

// Avvolge Hero + "Su di me" con comportamento DIVERSO per desktop e mobile.
//
// DESKTOP: figura sticky a destra dell'hero (visibile da subito), si dissolve
//   quando arriva "Su di me".
// MOBILE: la figura vive in una SEZIONE in-flow tra hero e "Su di me": scorrendo
//   sale dal basso come una sezione normale (niente fade-in), resta, e poi si
//   dissolve appena prima di "Su di me".
//
// I due layout sono entrambi nel DOM ma mostrati per breakpoint via CSS
// (hidden md:block / md:hidden): niente flash di idratazione. Le opacità sono
// calcolate sullo scroll della finestra usando la posizione misurata di
// "Su di me" (evita il bug di hydration di useScroll({ target })).

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
  // Nota: la sezione-immagine mobile è md:hidden, quindi `top` riflette
  // automaticamente il layout del breakpoint corrente.
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
    const settle = setTimeout(measure, 300); // dopo load font/immagini
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(settle);
      window.removeEventListener("resize", measure);
    };
  }, []);

  // Desktop: piena nell'hero → dissolve nell'ultimo ~0.55vh prima di "Su di me".
  const desktopOpacity = useTransform(
    scrollY,
    [0, Math.max(1, top - 0.55 * vh), top],
    [1, 1, 0]
  );
  // Mobile: piena durante entrata+permanenza → dissolve appena prima di "Su di me".
  const mobileOpacity = useTransform(
    scrollY,
    [0, Math.max(1, top - 0.6 * vh), Math.max(2, top - 0.1 * vh)],
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

      {/* Contenuto sopra la figura. */}
      <div className="relative z-10">
        {hero}

        {/* MOBILE: sezione-immagine in-flow tra hero e "Su di me".
            La figura (sticky nella sezione) sale dal basso entrando, resta
            ferma mentre scorri, poi si dissolve avvicinandosi a "Su di me". */}
        <div className="relative h-[150vh] md:hidden">
          <motion.div
            style={{ opacity: mobileOpacity }}
            className="sticky top-0 flex h-screen items-center justify-center px-6"
          >
            <HeroFigure className="max-w-xs" />
          </motion.div>
        </div>

        {about}
      </div>
    </div>
  );
}
