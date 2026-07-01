// Progetti — sezione completamente data-driven.
// In FASE 1 l'array è VUOTO: la sezione mostra uno stato vuoto curato.
// In FASE 2, appena aggiungi un oggetto Project qui sotto, la card compare
// da sola nella griglia, senza altre modifiche ai componenti.

export interface ProjectLinks {
  /** URL del repository (es. GitHub). */
  repo?: string;
  /** URL della demo/prova live (es. Vercel, o Marketplace per un'estensione). */
  demo?: string;
  /** Etichetta del link demo (default "Demo"). Es. "Marketplace" per un'estensione. */
  demoLabel?: string;
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
  /** Immagine/preview opzionale (percorso in /public o URL). Se c'è anche `video`, fa da poster. */
  image?: string;
  /** Video demo opzionale (MP4 in /public): riprodotto in autoplay muto e loop. */
  video?: string;
  /** Se true, la card può essere evidenziata (es. progetto in primo piano). */
  highlight?: boolean;
}

export const projects: Project[] = [
  {
    id: "modern-video-player",
    title: "Modern Video Player",
    description:
      "Estensione VS Code che riproduce video (MP4, MKV, MOV, HEVC/H.265, WebM…) con audio — incluso AAC — direttamente nelle tab dell'editor, grazie a FFmpeg compilato in WebAssembly. Zero setup, offline, un solo pacchetto ~9 MB.",
    stack: ["TypeScript", "VS Code API", "WebAssembly", "FFmpeg"],
    year: "2026",
    links: {
      repo: "https://github.com/Brodazz/mp4-player",
      demo: "https://marketplace.visualstudio.com/items?itemName=Brodazz.mp4-player",
      demoLabel: "Marketplace",
    },
    image: "/projects/video-player.png",
    video: "/projects/video-player.mp4",
    highlight: true,
  },

  // ──────────────────────────────────────────────────────────────
  // Per aggiungere un progetto, copia un oggetto come quello sopra.
  // La card compare da sola nella griglia; `demo` può essere un URL
  // Vercel, un Marketplace, ecc. (usa `demoLabel` per l'etichetta).
  // ──────────────────────────────────────────────────────────────
];

/** Copy mostrato quando non ci sono ancora progetti (stato vuoto curato). */
export const projectsEmptyState = {
  title: "La vetrina è in costruzione",
  description:
    "Sto lavorando a una selezione di progetti — full-stack, architettura software e web — che racconteranno meglio di mille parole come scrivo codice. A breve qui.",
};
