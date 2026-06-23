// Definizione centralizzata delle sezioni del sito.
// Usata sia dalla navbar flottante (scroll-spy) sia dalla pagina,
// così ID e label restano sempre allineati.

import type { LucideIcon } from "lucide-react";
import { Home, User, Code2, FolderGit2, Route, Mail } from "lucide-react";

export interface NavSection {
  /** ID dell'elemento <section> nella pagina (target dello scroll). */
  id: string;
  /** Etichetta mostrata nella navbar. */
  label: string;
  /** Icona mostrata su mobile (e accanto al testo su desktop). */
  icon: LucideIcon;
}

// Nota: "Oltre il codice" esiste come sezione ma NON è in navbar (scelta voluta).
export const sections: NavSection[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "su-di-me", label: "Su di me", icon: User },
  { id: "competenze", label: "Competenze", icon: Code2 },
  { id: "progetti", label: "Progetti", icon: FolderGit2 },
  { id: "percorso", label: "Percorso", icon: Route },
  { id: "contatti", label: "Contatti", icon: Mail },
];
