// COMPETENZE — raggruppate per le 6 categorie di skills.ts.
// Ogni categoria è una card: i tag in mono "respirano" (gap generoso),
// e c'è spazio netto tra i gruppi. Niente muro fitto di pill.

import { skills } from "@/data/skills";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";

export default function Skills() {
  return (
    <Section id="competenze">
      <SectionHeading
        kicker="Cosa so fare"
        title="Competenze"
        description="Raggruppate per area. Tecnologie reali con cui lavoro, niente barre percentuali."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((category, i) => (
          <Reveal
            key={category.title}
            delay={i * 0.06}
            className="rounded-2xl border border-border bg-surface/50 p-6"
          >
            <h3 className="mb-5 font-display text-lg font-semibold text-text">
              {category.title}
            </h3>
            <ul className="flex flex-wrap gap-2.5">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-border bg-bg/40 px-3 py-1.5 font-mono text-xs text-text-muted transition-colors hover:border-accent/40 hover:text-text"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
