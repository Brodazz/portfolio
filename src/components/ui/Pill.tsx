// Pill button riutilizzabile, reso come link (<a>).
// - primario: fill verde, testo scuro
// - secondario: outline verde, sfondo trasparente, glow leggero in hover

import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary";

interface PillProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  children: ReactNode;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-bg hover:bg-accent-strong hover:glow-soft",
  secondary:
    "border border-accent bg-transparent text-accent hover:bg-accent/10 hover:glow-soft",
};

export default function Pill({
  variant = "primary",
  children,
  className = "",
  ...props
}: PillProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
