"use client";

// Glow morbido che "respira" (loop lento di scala/opacità). Riutilizzabile.
// Con reduced-motion resta statico (nessuna animazione).

import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";
import { BREATHE_TRANSITION } from "@/lib/motion";

interface BreathingGlowProps {
  className?: string;
  style?: CSSProperties;
  /** Picco di scala del "respiro". */
  scalePeak?: number;
  /** Keyframe di opacità [base, picco, base]. */
  opacityKeyframes: [number, number, number];
}

export default function BreathingGlow({
  className,
  style,
  scalePeak = 1.1,
  opacityKeyframes,
}: BreathingGlowProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      aria-hidden
      className={className}
      style={style}
      animate={
        reduce
          ? undefined
          : { scale: [1, scalePeak, 1], opacity: opacityKeyframes }
      }
      transition={reduce ? undefined : BREATHE_TRANSITION}
    />
  );
}
