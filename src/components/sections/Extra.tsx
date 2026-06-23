// OLTRE IL CODICE — strip leggera con 3 voci ad alto segnale (extra.ts).
// Tono umano: comunica affidabilità e disciplina, non riempie un CV.

import { extra } from "@/data/extra";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";

export default function Extra() {
  return (
    <Section id="oltre-il-codice">
      <SectionHeading kicker="Fuori dallo schermo" title="Oltre il codice" />

      <div className="grid gap-6 md:grid-cols-3">
        {extra.map((item, i) => {
          const Icon = item.icon;
          return (
            <Reveal
              key={item.title}
              delay={i * 0.08}
              className="rounded-2xl border border-border bg-surface/40 p-6"
            >
              <span className="mb-4 flex size-11 items-center justify-center rounded-xl border border-border bg-bg/40 text-accent">
                <Icon className="size-5" strokeWidth={1.9} />
              </span>
              <h3 className="font-display text-base font-semibold text-text">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {item.description}
              </p>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
