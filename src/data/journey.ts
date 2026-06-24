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
      {
        period: "2018 – 2023",
        title: "Liceo Scientifico - Scienze Applicate",
        org: "Vito Volterra, Fabriano",
        description:
          "Solida base scientifico-tecnologica e informatica, unita alle materie umanistiche.",
      },
    ],
  },
  {
    title: "Esperienza",
    entries: [
      {
        period: "In corso",
        title: "Tesi di laurea",
        org: "Vargroup",
        description:
          "Collaborazione con Vargroup per la tesi di laurea, in continuità con lo stage: approfondimento sugli agenti AI applicati ai processi ERP.",
      },
      {
        period: "Aprile – Maggio 2026",
        title: "Stage — Web Developer",
        org: "Vargroup",
        description:
          "Agenti AI custom (TypeScript/Node.js, pattern ReAct, Claude via API) che orchestrano servizi backend e database per automatizzare i flussi dati nei processi ERP. Ho ridotto l'inserimento dati da più passaggi manuali a un unico step conversazionale.",
      },
    ],
  },
];
