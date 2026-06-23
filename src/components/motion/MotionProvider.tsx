"use client";

// Provider globale di Framer Motion.
// reducedMotion="user": se l'utente ha "riduci movimento" attivo, Framer
// disabilita automaticamente le animazioni di transform/layout in tutto il sito.

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
