// "Oltre il codice": voci ad alto segnale, tono umano e non curriculare.
// Comunicano affidabilità e disciplina.

import type { LucideIcon } from "lucide-react";
// Nota: lucide-react v1 non ha l'icona "Whistle"; usiamo Flag per l'arbitro.
import { Flag, HeartHandshake, Tent } from "lucide-react";

export interface ExtraItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const extra: ExtraItem[] = [
  {
    icon: Flag,
    title: "Arbitro di calcio (AIA)",
    description:
      "Gestire decisioni sotto pressione e leggere molti stimoli in tempo reale: una palestra di lucidità che mi porto anche nel lavoro.",
  },
  {
    icon: HeartHandshake,
    title: "Volontariato — Croce Azzurra & Protezione Civile",
    description: "Serietà, affidabilità e spirito di squadra, sul campo.",
  },
  {
    icon: Tent,
    title: "Scout — aiuto-capo e cambusiere",
    description:
      "Anni di scoutismo, con ruoli di responsabilità e organizzazione di gruppo.",
  },
];
