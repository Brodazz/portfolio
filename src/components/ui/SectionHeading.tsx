// Intestazione di sezione riutilizzabile: kicker mono in accent + titolo display.
// Lo scroll-reveal è centralizzato qui, così ogni titolo di sezione si anima.

import Reveal from "@/components/motion/Reveal";

interface SectionHeadingProps {
  /** Micro-label in mono (es. "Chi sono"). */
  kicker: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  kicker,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 max-w-2xl space-y-3">
      <p className="font-mono text-xs uppercase tracking-widest text-accent">
        {kicker}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && <p className="text-text-muted">{description}</p>}
    </Reveal>
  );
}
