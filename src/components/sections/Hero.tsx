"use client";

// HERO — prima sezione. Tutto data-driven da src/data/profile.ts.
// Nessun numero/voto/anni di esperienza (scelta voluta).
// Animazioni: fade-up staggerato al load + glow che "respira".

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import { profile } from "@/data/profile";
import Pill from "@/components/ui/Pill";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  const { name, role, tagline, availability, cvUrl, heroImage } = profile;
  const reduce = useReducedMotion();

  // Iniziali per il placeholder elegante della silhouette (Fase 1).
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("");

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

      {/* Zona silhouette con glow */}
      <motion.div
        className="flex flex-1 justify-center md:justify-end"
        initial={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <div className="relative aspect-square w-full max-w-sm">
          {/* Glow radiale dietro la silhouette, che "respira" lentamente.
              Con reduced-motion resta statico. */}
          <motion.div
            className="absolute inset-0 -z-10 rounded-full blur-3xl"
            style={{ background: "var(--glow)" }}
            animate={
              reduce
                ? undefined
                : { scale: [1, 1.12, 1], opacity: [0.6, 0.85, 0.6] }
            }
            transition={
              reduce
                ? undefined
                : { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }
          />
          {heroImage ? (
            <Image
              src={heroImage}
              alt={name}
              fill
              priority
              className="rounded-3xl object-cover"
            />
          ) : (
            // Placeholder elegante (non un "work in progress"):
            // pannello scuro con monogramma in gradient e griglia sottile.
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl border border-border bg-surface/60 backdrop-blur">
              <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              <span className="text-gradient font-display text-8xl font-bold tracking-tight">
                {initials}
              </span>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
