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
        {heroImage ? (
          // Foto reale: la figura "emerge" da un disco luminoso (spotlight).
          // Disco = gradiente radiale verde + griglia + anelli; la base della
          // foto viene dissolta con una mask così non sembra appesa.
          <div className="relative mx-auto aspect-square w-full max-w-[16rem] sm:max-w-sm md:max-w-md">
            {/* Glow esterno che "respira" (statico con reduced-motion). */}
            <motion.div
              aria-hidden
              className="absolute inset-[6%] -z-10 rounded-full blur-2xl"
              style={{ backgroundColor: "#34D399", opacity: 0.3 }}
              animate={
                reduce
                  ? undefined
                  : { scale: [1, 1.1, 1], opacity: [0.22, 0.4, 0.22] }
              }
              transition={
                reduce
                  ? undefined
                  : { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }
            />

            {/* Disco-palco: gradiente radiale verde + griglia sottile, clip a cerchio. */}
            <div
              aria-hidden
              className="absolute inset-[3%] overflow-hidden rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 52% 52%, rgba(52,211,153,0.34), rgba(19,26,23,0.45) 56%, rgba(10,15,13,0) 76%)",
              }}
            >
              <div
                className="absolute inset-0 opacity-[0.10]"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
                  backgroundSize: "26px 26px",
                }}
              />
            </div>

            {/* Anelli decorativi: uno netto interno, uno tratteggiato che ruota lento. */}
            <div
              aria-hidden
              className="absolute inset-[3%] rounded-full border border-accent/15"
            />
            <motion.div
              aria-hidden
              className="absolute -inset-[1%] rounded-full border border-dashed border-accent/15"
              animate={reduce ? undefined : { rotate: 360 }}
              transition={
                reduce
                  ? undefined
                  : { duration: 60, repeat: Infinity, ease: "linear" }
              }
            />

            {/* Figura: ancorata in basso, base dissolta nel disco con mask. */}
            <Image
              src={heroImage}
              alt={name}
              width={611}
              height={408}
              priority
              sizes="(max-width: 768px) 70vw, 420px"
              className="absolute bottom-[2%] left-1/2 h-auto w-[98%]"
              style={{
                // Frame spostato a sinistra: nella foto la persona è leggermente
                // a destra del centro, così risulta centrata nel disco.
                transform: "translateX(-54%)",
                maskImage:
                  "linear-gradient(to bottom, black 64%, transparent 94%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 64%, transparent 94%)",
              }}
            />
          </div>
        ) : (
          <div className="relative aspect-square w-full max-w-sm">
            {/* Glow radiale dietro il placeholder, che "respira" lentamente.
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
            {/* Placeholder elegante: pannello scuro con monogramma e griglia. */}
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
          </div>
        )}
      </motion.div>
    </section>
  );
}
