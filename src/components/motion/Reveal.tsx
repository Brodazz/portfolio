"use client";

// Scroll-reveal riutilizzabile: ingresso morbido ed elegante quando l'elemento
// entra nel viewport (UNA sola volta): fade + risalita dolce + leggero blur-in
// (messa a fuoco), con easing expo-out. Con reduced-motion anima solo l'opacità
// (nessun movimento/blur), così non c'è layout-shift né effetti fastidiosi.

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

// Easing morbido (tipo "expo out"): parte deciso e si adagia con grazia.
const SMOOTH = [0.22, 1, 0.36, 1] as const;

interface RevealProps {
  children: ReactNode;
  /** Ritardo in secondi, utile per effetti staggerati nelle griglie. */
  delay?: number;
  className?: string;
  /** Spostamento verticale iniziale (px). */
  y?: number;
}

export default function Reveal({
  children,
  delay = 0,
  className,
  y = 28,
}: RevealProps) {
  const reduce = useReducedMotion();

  const variants: Variants = reduce
    ? {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.3, delay } },
      }
    : {
        hidden: { opacity: 0, y, filter: "blur(8px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.9, delay, ease: SMOOTH },
        },
      };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
    >
      {children}
    </motion.div>
  );
}
