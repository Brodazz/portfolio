"use client";

// HERO — prima sezione. Tutto data-driven da src/data/profile.ts.
// Nessun numero/voto/anni di esperienza (scelta voluta).
// Animazioni: fade-up staggerato al load + glow che "respira".
// showFigure=false: la figura non è renderizzata qui perché la gestisce il
// livello di sfondo che si dissolve allo scroll (HeroBackdrop).

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import { profile } from "@/data/profile";
import Pill from "@/components/ui/Pill";
import HeroFigure from "@/components/sections/HeroFigure";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero({ showFigure = true }: { showFigure?: boolean }) {
  const { name, role, tagline, availability, cvUrl } = profile;
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="mx-auto flex min-h-screen max-w-5xl scroll-mt-8 flex-col justify-center gap-12 px-6 py-24 md:flex-row md:items-center md:gap-10"
    >
      {/* Colonna testo */}
      <motion.div
        className="flex-1 space-y-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Badge disponibilità con dot verde pulsante */}
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 font-mono text-xs text-accent backdrop-blur"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          {availability}
        </motion.span>

        {/* Nome: un unico elemento gradient, così la diagonale (135°)
            attraversa entrambe le parole, non solo il cognome. */}
        <motion.h1
          variants={item}
          className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          <span className="text-gradient">{name}</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="font-mono text-sm uppercase tracking-widest text-text-muted"
        >
          {role}
        </motion.p>

        <motion.p variants={item} className="max-w-xl text-lg text-text-muted">
          {tagline}
        </motion.p>

        {/* CTA */}
        <motion.div variants={item} className="flex flex-wrap gap-3 pt-2">
          <Pill href={cvUrl} download variant="primary">
            <Download className="size-4" strokeWidth={2.2} />
            Scarica CV
          </Pill>
          <Pill href="#contatti" variant="secondary">
            Contattami
            <ArrowDown className="size-4" strokeWidth={2.2} />
          </Pill>
        </motion.div>
      </motion.div>

      {/* Zona figura: renderizzata qui solo se showFigure (uso standalone).
          Quando la figura è gestita dal livello di sfondo, qui resta uno
          spazio per mantenere il bilanciamento a due colonne su desktop. */}
      {showFigure ? (
        <motion.div
          className="flex flex-1 justify-center md:justify-end"
          initial={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <HeroFigure className="mx-auto max-w-sm sm:max-w-md md:max-w-lg" />
        </motion.div>
      ) : (
        <div className="hidden flex-1 md:block" aria-hidden />
      )}
    </section>
  );
}
