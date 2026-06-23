// Wrapper di sezione: garantisce ritmo verticale e larghezza coerenti
// a TUTTE le sezioni (così anche lo stato vuoto dei Progetti ha lo stesso peso).

import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-5xl scroll-mt-8 px-6 py-24 md:py-32 ${className}`}
    >
      {children}
    </section>
  );
}
