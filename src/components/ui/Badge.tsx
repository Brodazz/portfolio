// Badge certificazione: icona + titolo + descrizione breve.

import type { Badge as BadgeType } from "@/data/badges";

export default function Badge({ badge }: { badge: BadgeType }) {
  const { icon: Icon, title, description } = badge;
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-border bg-surface/50 p-4">
      <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-bg/40 text-accent">
        <Icon className="size-5" strokeWidth={1.9} />
      </span>
      <div className="space-y-0.5">
        <p className="font-display text-sm font-semibold text-text">{title}</p>
        <p className="text-sm text-text-muted">{description}</p>
      </div>
    </div>
  );
}
