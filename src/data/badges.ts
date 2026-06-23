// Certificazioni / badge.

import type { LucideIcon } from "lucide-react";
import { Languages, HeartPulse } from "lucide-react";

export interface Badge {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const badges: Badge[] = [
  {
    icon: Languages,
    title: "Inglese B2",
    description:
      "Certificazione conseguita all'Università di Camerino.",
  },
  {
    icon: HeartPulse,
    title: "First Aid & BLSD — Certified Responder",
    description: "Primo soccorso e uso del defibrillatore (BLSD).",
  },
];
