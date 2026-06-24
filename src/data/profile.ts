// Dati anagrafici, contatti e social.
// Centralizzati qui per poter aggiornare i contenuti senza toccare i componenti
// e per predisporre un futuro toggle IT/EN (basterà affiancare una mappa di traduzioni).

export interface SocialLinks {
  github: string;
  /** Vuoto in Fase 1: l'icona non viene renderizzata finché non è valorizzato. */
  linkedin: string;
}

export interface Contacts {
  email: string;
  phone: string;
  location: string;
}

export interface Profile {
  name: string;
  role: string;
  /** Frase breve mostrata nell'hero. */
  tagline: string;
  /** Badge di disponibilità (hero). */
  availability: string;
  /** Bio della sezione "Su di me", un elemento per paragrafo. */
  bio: string[];
  /** Soft skill mostrate come piccoli tag. */
  softSkills: string[];
  contacts: Contacts;
  social: SocialLinks;
  /** Percorso del CV statico in /public. */
  cvUrl: string;
  /** Immagine/silhouette opzionale per l'hero (percorso in /public). Vuota in Fase 1 → placeholder elegante. */
  heroImage?: string;
}

export const profile: Profile = {
  name: "Alessandro Broda",
  role: "Full-Stack Developer",
  tagline:
    "Neolaureando in Informatica. Costruisco esperienze web pulite e funzionali, dal frontend agli agenti AI.",
  availability: "Disponibile",
  bio: [
    "Sto per laurearmi in Informatica all'Università di Camerino. Mi muovo a mio agio su tutto lo stack — dal frontend in React, Next.js e TypeScript al backend in Node e Java — e negli ultimi mesi mi sono appassionato al mondo degli agenti AI, diventati il cuore del mio lavoro da web developer.",
    "Lavoro con metodo: prima capisco il problema, poi progetto, poi implemento. Sotto deadline resto pragmatico e iterativo, e curo il codice — pulito, leggibile, mantenibile — perché credo che la qualità si veda nei dettagli.",
    "Quello che mi muove è il costruire in sé: mi piace passare ore su un progetto e seguirlo mentre cresce, raffinandolo. Non concepisco un lavoro come «finito» — lo vedo come qualcosa di vivo, da far evolvere. È anche il motivo per cui lavoro full-stack e in modo iterativo.",
    "Mi adatto in fretta, lavoro bene sia in autonomia sia in team, e affronto le cose nuove con voglia di imparare più che con la pretesa di sapere già tutto.",
  ],
  softSkills: [
    "Problem solving",
    "Adattabilità",
    "Lavoro in team",
    "Affidabilità",
  ],
  contacts: {
    email: "alessandrobroda03@gmail.com",
    phone: "+39 328 956 6542",
    location: "Fabriano (AN), Italia",
  },
  social: {
    github: "https://github.com/Brodazz",
    linkedin: "", // ← lo attivi appena crei il profilo LinkedIn
  },
  cvUrl: "/cv.pdf",
  heroImage: "/hero-broda.png",
};
