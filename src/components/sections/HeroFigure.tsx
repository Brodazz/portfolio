"use client";

// Visual della figura dell'hero (foto silhouette + glow morbido + forme
// geometriche). Estratto in un componente riutilizzabile così può essere usato
// sia nell'hero sia come livello di sfondo che si dissolve allo scroll.

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";

export default function HeroFigure({ className = "" }: { className?: string }) {
  const { name, heroImage } = profile;
  const reduce = useReducedMotion();

  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <div className={`relative aspect-square w-full ${className}`}>
      {heroImage ? (
        <>
          {/* Glow morbido che "respira" (statico con reduced-motion). */}
          <motion.div
            aria-hidden
            className="absolute inset-[14%] -z-10 rounded-full blur-3xl"
            style={{ backgroundColor: "#34D399", opacity: 0.26 }}
            animate={
              reduce ? undefined : { scale: [1, 1.1, 1], opacity: [0.2, 0.36, 0.2] }
            }
            transition={
              reduce
                ? undefined
                : { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }
          />

          {/* Forme geometriche decorative, sparse e pulite. */}
          <svg
            aria-hidden
            viewBox="0 0 100 100"
            className="absolute inset-0 h-full w-full text-accent"
            fill="none"
          >
            <circle cx="82" cy="16" r="6.5" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
            <rect x="9" y="45" width="10" height="10" stroke="currentColor" strokeWidth="0.5" opacity="0.3" transform="rotate(18 14 50)" />
            <path d="M28 80 l5 -8 l5 8 z" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
            <path d="M20 14 v6 M17 17 h6" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
            <path d="M90 58 v6 M87 61 h6" stroke="currentColor" strokeWidth="0.6" opacity="0.35" />
            <line x1="50" y1="7" x2="68" y2="7" stroke="currentColor" strokeWidth="0.4" opacity="0.25" />
            <circle cx="48" cy="13" r="1" fill="currentColor" opacity="0.5" />
            <circle cx="93" cy="38" r="1.1" fill="currentColor" opacity="0.45" />
            <circle cx="12" cy="28" r="0.9" fill="currentColor" opacity="0.4" />
            <circle cx="74" cy="88" r="1.1" fill="currentColor" opacity="0.3" />
            <circle cx="34" cy="20" r="0.8" fill="currentColor" opacity="0.35" />
          </svg>

          {/* Figura (PNG ritagliato sul contorno), base dissolta con mask. */}
          <Image
            src={heroImage}
            alt={name}
            width={287}
            height={309}
            priority
            sizes="(max-width: 768px) 78vw, 460px"
            className="absolute bottom-0 left-1/2 h-auto w-[84%] -translate-x-1/2"
            style={{
              maskImage: "linear-gradient(to bottom, black 82%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 82%, transparent 100%)",
            }}
          />
        </>
      ) : (
        <>
          {/* Glow radiale dietro il placeholder, che "respira". */}
          <motion.div
            className="absolute inset-0 -z-10 rounded-full blur-3xl"
            style={{ background: "var(--glow)" }}
            animate={
              reduce ? undefined : { scale: [1, 1.12, 1], opacity: [0.6, 0.85, 0.6] }
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
        </>
      )}
    </div>
  );
}
