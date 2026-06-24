// Token di animazione condivisi, così easing e tempi restano coerenti in tutto
// il sito e si regolano da un unico punto.

/** Easing morbido tipo "expo out": parte deciso e si adagia con grazia. */
export const EASE_SMOOTH = [0.22, 1, 0.36, 1] as const;

/** Transizione del "respiro" lento e continuo dei glow. */
export const BREATHE_TRANSITION = {
  duration: 6,
  repeat: Infinity,
  ease: "easeInOut",
} as const;
