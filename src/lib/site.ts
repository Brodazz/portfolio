// Configurazione del sito usata da metadata, sitemap e OG image.
// L'URL si può sovrascrivere con NEXT_PUBLIC_SITE_URL (es. su Vercel).

import { profile } from "@/data/profile";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://alessandrobroda.vercel.app";

export const siteConfig = {
  name: `${profile.name} — ${profile.role}`,
  title: `${profile.name} — ${profile.role}`,
  description:
    "Portfolio di Alessandro Broda, sviluppatore full-stack. Neolaureando in Informatica all'Università di Camerino, appassionato di web e agenti AI.",
  url: siteUrl,
  locale: "it_IT",
};
