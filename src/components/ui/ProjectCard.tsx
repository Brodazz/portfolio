// Card di progetto. Resa solo in Fase 2 (quando projects.ts ha elementi).
// Superficie scura, preview, freccia in alto a destra, titolo, descrizione,
// riga di tag stack in mono. Hover: leggero scale + glow.

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const { title, description, stack, year, links, image } = project;
  // Il link primario della card: demo se presente, altrimenti repo.
  const primaryHref = links.demo || links.repo;

  const CardInner = (
    <>
      {/* Preview */}
      <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-bg/40">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center font-mono text-xs text-text-muted">
            {year}
          </div>
        )}
        <span className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full border border-border bg-surface/80 text-text backdrop-blur transition-colors group-hover:border-accent group-hover:text-accent">
          <ArrowUpRight className="size-4" strokeWidth={2.2} />
        </span>
      </div>

      {/* Testo */}
      <div className="mt-4 space-y-2">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-text">{title}</h3>
          <span className="font-mono text-xs text-text-muted">{year}</span>
        </div>
        <p className="text-sm text-text-muted">{description}</p>
        <ul className="flex flex-wrap gap-2 pt-1">
          {stack.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-border bg-bg/40 px-2 py-1 font-mono text-[11px] text-text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </>
  );

  const cardClass =
    "group block rounded-2xl border border-border bg-surface/50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:glow-soft";

  return primaryHref ? (
    <a
      href={primaryHref}
      target="_blank"
      rel="noopener noreferrer"
      className={cardClass}
    >
      {CardInner}
    </a>
  ) : (
    <div className={cardClass}>{CardInner}</div>
  );
}
