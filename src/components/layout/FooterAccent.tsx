// Footer "firmato": blocco full-bleed in verde accent.
// Testo in verde scuro della stessa famiglia (non nero puro) per leggibilità.

import { Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";

// Verde scuro usato per il testo sul fondo accent (contrasto AA su #34D399).
const ON_ACCENT = "#06281f";

export default function FooterAccent() {
  const { name, role, contacts, social } = profile;
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative w-full bg-accent"
      style={{ color: ON_ACCENT }}
    >
      {/* pb extra per non finire sotto la navbar flottante + safe-area */}
      <div
        className="mx-auto max-w-5xl px-6 pt-14"
        style={{ paddingBottom: "calc(7rem + env(safe-area-inset-bottom))" }}
      >
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <p className="font-display text-2xl font-bold tracking-tight">
              {name}
            </p>
            <p className="font-mono text-sm">{role}</p>
            <a
              href={`mailto:${contacts.email}`}
              className="inline-flex items-center gap-2 pt-2 text-lg font-medium underline-offset-4 transition hover:underline"
            >
              <Mail className="size-5" strokeWidth={2.2} />
              {contacts.email}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex size-11 items-center justify-center rounded-full border border-current/20 transition hover:bg-black/10"
            >
              <GithubIcon className="size-5" />
            </a>
            {/* LinkedIn renderizzato solo se valorizzato (Fase 1: vuoto). */}
            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex size-11 items-center justify-center rounded-full border border-current/20 transition hover:bg-black/10"
              >
                <LinkedinIcon className="size-5" />
              </a>
            )}
          </div>
        </div>

        <hr className="my-8 border-0 border-t border-current/15" />

        <div className="flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {name}. Tutti i diritti riservati.
          </p>
          <p>{contacts.location}</p>
        </div>
      </div>
    </footer>
  );
}
