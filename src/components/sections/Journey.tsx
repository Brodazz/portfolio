// PERCORSO — timeline verticale (Formazione + Esperienza) da journey.ts,
// più una riga di certificazioni da badges.ts. Marker in accent verde.

import { journey } from "@/data/journey";
import { badges } from "@/data/badges";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/motion/Reveal";

export default function Journey() {
  return (
    <Section id="percorso">
      <SectionHeading kicker="Da dove vengo" title="Percorso" />

      <div className="grid gap-12 md:grid-cols-2">
        {journey.map((group, gi) => (
          <Reveal key={group.title} delay={gi * 0.1}>
            <h3 className="mb-6 font-mono text-xs uppercase tracking-widest text-text-muted">
              {group.title}
            </h3>

            {/* Timeline: linea verticale + marker verdi */}
            <ol className="relative space-y-8 border-l border-border pl-6">
              {group.entries.map((entry, i) => (
                <li key={i} className="relative">
                  {/* marker */}
                  <span className="absolute -left-[1.65rem] top-1.5 flex size-3 items-center justify-center">
                    <span className="size-3 rounded-full bg-accent glow-soft" />
                  </span>
                  <p className="font-mono text-xs text-accent">{entry.period}</p>
                  <p className="mt-1 font-display text-lg font-semibold text-text">
                    {entry.title}
                  </p>
                  <p className="text-sm text-text-muted">{entry.org}</p>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {entry.description}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        ))}
      </div>

      {/* Certificazioni */}
      {badges.length > 0 && (
        <div className="mt-14">
          <h3 className="mb-6 font-mono text-xs uppercase tracking-widest text-text-muted">
            Certificazioni
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {badges.map((badge, i) => (
              <Reveal key={badge.title} delay={i * 0.08}>
                <Badge badge={badge} />
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
