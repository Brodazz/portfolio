// Percorso: formazione ed esperienza, mostrati in una timeline verticale.

export interface JourneyEntry {
  /** Periodo, es. "2023 – 2026" oppure "In corso". */
  period: string;
  /** Titolo della voce (es. corso di laurea o ruolo). */
  title: string;
  /** Ente / azienda. */
  org: string;
  /** Descrizione sintetica. */
  description: string;
}

export interface JourneyGroup {
  title: string;
  entries: JourneyEntry[];
}

export const journey: JourneyGroup[] = [
  {
    title: "Formazione",
    entries: [
      {
        period: "2023 – 2026",
        title: "Laurea Triennale in Informatica",
        org: "Università di Camerino",
        description:
          "Basi solide su programmazione, algoritmi, strutture dati, sistemi operativi, reti e sicurezza, ricerca operativa.",
      },
    ],
  },
  {
    title: "Esperienza",
    entries: [
      {
        period: "In corso",
        title: "Stage — Web Developer",
        org: "Vargroup",
        description:
          "Sviluppo di agenti AI, integrazioni REST e automazione di processi ERP.",
      },
    ],
  },
];
