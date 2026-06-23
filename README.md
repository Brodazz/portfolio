# Portfolio — Alessandro Broda

Portfolio personale single-page. **Next.js 16** (App Router) · **React 19** · **TypeScript** · **Tailwind CSS v4** · **Framer Motion**.

## Sviluppo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build di produzione
```

## Architettura

- Tutti i **contenuti** sono in [`src/data/`](src/data) — modificali senza toccare i componenti:
  - `profile.ts` · `skills.ts` · `projects.ts` · `journey.ts` · `extra.ts` · `badges.ts`
- **Sezioni** in `src/components/sections/`, **UI riusabile** in `src/components/ui/`, layout in `src/components/layout/`.
- Sezioni e navbar sono allineate tramite `src/lib/sections.ts`.
- Design tokens (colori, font) in [`src/app/globals.css`](src/app/globals.css).

## Cosa sostituire (placeholder)

| Cosa | Dove |
|---|---|
| **CV reale** | sostituisci `public/cv.pdf` |
| **Endpoint Formspree** | `FORMSPREE_ID` in [`src/components/sections/Contact.tsx`](src/components/sections/Contact.tsx) |
| **LinkedIn** | `social.linkedin` in [`src/data/profile.ts`](src/data/profile.ts) (vuoto = icona nascosta) |
| **URL del sito** | variabile `NEXT_PUBLIC_SITE_URL` (per OG/sitemap corretti) |
| **Foto hero** (opzionale) | `heroImage` in `profile.ts` (vuoto = monogramma "AB") |

## Aggiungere un progetto

Aggiungi un oggetto all'array `projects` in [`src/data/projects.ts`](src/data/projects.ts) (c'è un esempio commentato). La card compare da sola; finché l'array è vuoto si vede lo stato "vetrina in costruzione".

## Deploy su Vercel

1. Push del repo su GitHub.
2. Importa il progetto su Vercel (rileva Next.js in automatico).
3. Imposta la env var `NEXT_PUBLIC_SITE_URL` con il dominio finale.

## Accessibilità & performance

- Tutte le animazioni rispettano `prefers-reduced-motion`.
- Tema dark, contrasto curato, navbar con safe-area iOS e auto-hide su focus dei campi form.
