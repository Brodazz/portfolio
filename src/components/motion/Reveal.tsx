"use client";

// Scroll-reveal riutilizzabile: fade + leggero translateY all'ingresso nel
// viewport, UNA sola volta. Con reduced-motion anima solo l'opacità (nessun
// movimento), così non c'è layout-shift né effetti fastidiosi.

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

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
  y = 16,
}: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
