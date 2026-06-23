"use client";

// CONTATTI — form via @formspree/react: invio senza reload, stato di successo
// inline. Endpoint placeholder (mzdlzqll): sostituiscilo col tuo reale.

import { useForm, ValidationError } from "@formspree/react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { profile } from "@/data/profile";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { GithubIcon } from "@/components/icons/BrandIcons";

// Endpoint Formspree — DA SOSTITUIRE con il tuo ID reale.
const FORMSPREE_ID = "mzdlzqll";

export default function Contact() {
  const { contacts, social } = profile;
  const [state, handleSubmit] = useForm(FORMSPREE_ID);

  return (
    <Section id="contatti">
      <SectionHeading
        kicker="Parliamone"
        title="Lavoriamo insieme"
        description="Hai un'opportunità di lavoro o un progetto in mente? Scrivimi: rispondo volentieri."
      />

      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
        {/* Contatti diretti */}
        <Reveal className="space-y-4">
          <a
            href={`mailto:${contacts.email}`}
            className="flex items-center gap-3 text-text-muted transition-colors hover:text-accent"
          >
            <Mail className="size-5 shrink-0 text-accent" strokeWidth={1.9} />
            {contacts.email}
          </a>
          <a
            href={`tel:${contacts.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-3 text-text-muted transition-colors hover:text-accent"
          >
            <Phone className="size-5 shrink-0 text-accent" strokeWidth={1.9} />
            {contacts.phone}
          </a>
          <p className="flex items-center gap-3 text-text-muted">
            <MapPin className="size-5 shrink-0 text-accent" strokeWidth={1.9} />
            {contacts.location}
          </p>
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-text-muted transition-colors hover:text-accent"
          >
            <GithubIcon className="size-5 shrink-0 text-accent" />
            GitHub
          </a>

          <p className="pt-4 font-mono text-xs text-text-muted">
            Disponibile anche per collaborazioni freelance.
          </p>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.1}>
        {state.succeeded ? (
          <div className="flex flex-col items-start justify-center gap-3 rounded-2xl border border-accent/30 bg-surface/50 p-8">
            <CheckCircle2 className="size-10 text-accent" strokeWidth={1.8} />
            <h3 className="font-display text-xl font-bold text-text">
              Messaggio inviato!
            </h3>
            <p className="text-text-muted">
              Grazie per avermi scritto. Ti rispondo il prima possibile.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-sm text-text-muted">
                  Nome
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  className="w-full rounded-xl border border-border bg-surface/60 px-4 py-3 text-text outline-none transition-colors focus:border-accent"
                />
                <ValidationError prefix="Nome" field="name" errors={state.errors} className="text-xs text-red-400" />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="text-sm text-text-muted">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-xl border border-border bg-surface/60 px-4 py-3 text-text outline-none transition-colors focus:border-accent"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-400" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="tipo-richiesta" className="text-sm text-text-muted">
                Tipo di richiesta
              </label>
              <select
                id="tipo-richiesta"
                name="tipo-richiesta"
                defaultValue="Lavoro"
                className="w-full rounded-xl border border-border bg-surface/60 px-4 py-3 text-text outline-none transition-colors focus:border-accent"
              >
                <option value="Lavoro">Lavoro</option>
                <option value="Collaborazione">Collaborazione</option>
                <option value="Altro">Altro</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-sm text-text-muted">
                Messaggio
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-y rounded-xl border border-border bg-surface/60 px-4 py-3 text-text outline-none transition-colors focus:border-accent"
              />
              <ValidationError prefix="Messaggio" field="message" errors={state.errors} className="text-xs text-red-400" />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg transition-all duration-200 hover:scale-[1.03] hover:bg-accent-strong hover:glow-soft disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send className="size-4" strokeWidth={2.2} />
              {state.submitting ? "Invio…" : "Invia"}
            </button>
          </form>
        )}
        </Reveal>
      </div>
    </Section>
  );
}
