// PROGETTI — completamente data-driven da projects.ts.
// Fase 1 (array vuoto): stato vuoto CURATO, stesso peso visivo delle altre
// sezioni, che si legge come "vetrina in arrivo" e non come un errore o un buco.
// Fase 2: appena projects.ts ha elementi, compare la griglia di ProjectCard.

import { Construction } from "lucide-react";
import { projects, projectsEmptyState } from "@/data/projects";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import Reveal from "@/components/motion/Reveal";

export default function Projects() {
  const hasProjects = projects.length > 0;

  return (
    <Section id="progetti">
      <SectionHeading kicker="Cosa ho costruito" title="Progetti" />

      {hasProjects ? (
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.06}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      ) : (
        // Stato vuoto curato: card piena, centrata, con icona e glow leggero.
        <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-surface/50 px-8 py-20 text-center">
          {/* glow morbido per dare profondità, non un riquadro piatto */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-48 w-2/3 -translate-x-1/2 rounded-full opacity-40 blur-3xl"
            style={{ background: "var(--glow)" }}
          />
          <div className="relative mx-auto max-w-md space-y-5">
            <span className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-accent/30 bg-bg/40 text-accent">
              <Construction className="size-7" strokeWidth={1.8} />
            </span>
            <h3 className="font-display text-2xl font-bold tracking-tight">
              {projectsEmptyState.title}
            </h3>
            <p className="text-text-muted">{projectsEmptyState.description}</p>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              In arrivo
            </p>
          </div>
        </Reveal>
      )}
    </Section>
  );
}
