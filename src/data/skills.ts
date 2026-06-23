// Competenze raggruppate per categoria.
// Niente barre percentuali fasulle: solo tecnologie reali, in tag.

export interface SkillCategory {
  /** Titolo della categoria. */
  title: string;
  /** Elenco di tecnologie / competenze. */
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    title: "Frontend",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Vue",
      "HTML",
      "CSS",
      "Tailwind",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "Java", "Spring Boot", "REST API"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "Supabase", "MySQL", "H2"],
  },
  {
    title: "AI & Agenti",
    items: ["Agenti AI", "Pattern ReAct", "Integrazione LLM"],
  },
  {
    title: "Tools & Practices",
    items: [
      "Git",
      "GitHub",
      "Vercel",
      "nvm",
      "Visual Paradigm (UML)",
      "Metodologie Agile",
    ],
  },
  {
    title: "Fondamenti (Unicam)",
    items: [
      "Algoritmi e Strutture Dati",
      "Sistemi Operativi",
      "Reti e Sicurezza",
      "Ricerca Operativa",
      "Programmazione a Oggetti",
    ],
  },
];
