// Badge certificazione: icona + titolo + descrizione breve.
// Se il badge ha un `url`, diventa un link cliccabile (verifica del certificato)
// con freccia in alto a destra e leggero hover.

import { ArrowUpRight } from "lucide-react";
import type { Badge as BadgeType } from "@/data/badges";

export default function Badge({ badge }: { badge: BadgeType }) {
  const { icon: Icon, title, description, url } = badge;

  const inner = (
    <>
      <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-bg/40 text-accent">
        <Icon className="size-5" strokeWidth={1.9} />
      </span>
      <div className="space-y-0.5">
        <p className="font-display text-sm font-semibold text-text">{title}</p>
        <p className="text-sm text-text-muted">{description}</p>
      </div>
      {url && (
        <ArrowUpRight
          className="ml-auto size-4 shrink-0 text-text-muted transition-colors group-hover:text-accent"
          strokeWidth={2.2}
        />
      )}
    </>
  );

  const base = "flex items-start gap-3 rounded-2xl border border-border bg-surface/50 p-4";

  return url ? (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group ${base} transition-colors hover:border-accent/40`}
    >
      {inner}
    </a>
  ) : (
    <div className={base}>{inner}</div>
  );
}
