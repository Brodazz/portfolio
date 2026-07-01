// Card di progetto. Superficie scura, preview, titolo, descrizione, tag stack
// in mono e link espliciti a Codice (repo) e Demo/prova (con etichetta
// personalizzabile). Hover: leggero sollevamento + glow.

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const { title, description, stack, year, links, image, video, highlight } =
    project;

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-2xl border bg-surface/50 transition-all duration-300 hover:-translate-y-1 hover:glow-soft ${
        highlight ? "border-accent/30" : "border-border hover:border-accent/40"
      }`}
    >
      {/* Preview: video demo (autoplay muto/loop) se presente, altrimenti
          immagine, altrimenti l'anno come fallback. */}
      <div className="relative aspect-video overflow-hidden border-b border-border bg-bg/40">
        {video ? (
          <video
            src={video}
            poster={image}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : image ? (
          <Image
            src={image}
            alt={title}
            fill
            unoptimized={image.endsWith(".gif")}
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center font-mono text-xs text-text-muted">
            {year}
          </div>
        )}
        {highlight && (
          <span className="absolute left-3 top-3 rounded-full bg-accent px-2.5 py-0.5 font-mono text-[11px] font-medium text-bg">
            In primo piano
          </span>
        )}
      </div>

      {/* Testo */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-text">
            {title}
          </h3>
          <span className="font-mono text-xs text-text-muted">{year}</span>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-text-muted">
          {description}
        </p>

        <ul className="mt-3 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-border bg-bg/40 px-2 py-1 font-mono text-[11px] text-text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        {/* Link espliciti (repo + demo/prova) */}
        <div className="mt-4 flex flex-wrap items-center gap-4 pt-1">
          {links.repo && (
            <a
              href={links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-accent"
            >
              <GithubIcon className="size-4" />
              Codice
            </a>
          )}
          {links.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-strong"
            >
              {links.demoLabel ?? "Demo"}
              <ArrowUpRight className="size-4" strokeWidth={2.2} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
