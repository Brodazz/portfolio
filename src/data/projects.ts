// Progetti — sezione completamente data-driven.
// In FASE 1 l'array è VUOTO: la sezione mostra uno stato vuoto curato.
// In FASE 2, appena aggiungi un oggetto Project qui sotto, la card compare
// da sola nella griglia, senza altre modifiche ai componenti.

export interface ProjectLinks {
  /** URL del repository (es. GitHub). */
  repo?: string;
  /** URL della demo live (es. Vercel). */
  demo?: string;
}

export interface Project {
  /** Identificatore univoco (usato come key). */
  id: string;
  title: string;
  /** Una riga di descrizione. */
  description: string;
  /** Stack tecnologico, mostrato come tag in mono. */
  stack: string[];
  /** Anno del progetto. */
  year: string;
  links: ProjectLinks;
  /** Immagine/preview opzionale (percorso in /public o URL). */
  image?: string;
  /** Se true, la card può essere evidenziata (es. progetto in primo piano). */
  highlight?: boolean;
}

export const projects: Project[] = [
  // ──────────────────────────────────────────────────────────────
  // ESEMPIO — copia questo blocco, decommentalo e compilalo per
  // aggiungere un progetto. La card apparirà automaticamente.
  //
  // {
  //   id: "rpg-a-turni",
  //   title: "RPG a turni",
  //   description:
  //     "Gioco di ruolo a turni con 5 design pattern (State, Strategy, Command, Observer, Factory).",
  //   stack: ["Java", "Spring Boot", "Design Patterns"],
  //   year: "2025",
  //   links: {
  //     repo: "https://github.com/Brodazz/rpg-a-turni",
  //     demo: "",
  //   },
  //   image: "/projects/rpg.png",
  //   highlight: true,
  // },
  // ──────────────────────────────────────────────────────────────
];

/** Copy mostrato quando non ci sono ancora progetti (stato vuoto curato). */
export const projectsEmptyState = {
  title: "La vetrina è in costruzione",
  description:
    "Sto lavorando a una selezione di progetti — full-stack, architettura software e web — che racconteranno meglio di mille parole come scrivo codice. A breve qui.",
};
