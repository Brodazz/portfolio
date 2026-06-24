// Certificazioni / badge.

import type { LucideIcon } from "lucide-react";
import { Languages, HeartPulse, GraduationCap, Boxes } from "lucide-react";

export interface Badge {
  icon: LucideIcon;
  title: string;
  description: string;
  /** URL di verifica/dettaglio (es. pagina del certificato). Se presente, il badge è cliccabile. */
  url?: string;
}

export const badges: Badge[] = [
  {
    icon: GraduationCap,
    title: "Full-Stack Web Development",
    description:
      "Bootcamp completo su Udemy (62 ore): frontend, backend, database e deploy.",
    url: "https://ude.my/UC-39b3e687-c865-4493-b925-56381fa1a95f",
  },
  {
    icon: Languages,
    title: "Inglese B2",
    description: "Certificazione di lingua inglese livello B2.",
  },
  {
    icon: Boxes,
    title: "SAP — Fondamenti",
    description:
      "Introduzione a SAP (ERP) su Udemy, in linea con l'esperienza sui processi ERP.",
    url: "https://ude.my/UC-422fe6e7-38ea-42f4-a8c0-1de347fc8f06",
  },
  {
    icon: HeartPulse,
    title: "First Aid & BLSD — Certified Responder",
    description: "Primo soccorso e uso del defibrillatore (BLSD).",
  },
];
