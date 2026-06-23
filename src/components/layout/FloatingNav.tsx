"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { sections } from "@/lib/sections";

export default function FloatingNav() {
  const [active, setActive] = useState<string>(sections[0].id);
  // Nascondiamo la nav quando un campo del form è a fuoco, così su mobile
  // non si sovrappone alla tastiera né copre il campo in compilazione.
  const [hidden, setHidden] = useState(false);

  // Scroll-spy: evidenzia la sezione attualmente al centro del viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Prende la sezione più vicina al centro tra quelle intersecanti.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Auto-hide su focus di input/textarea/select.
  useEffect(() => {
    const isField = (el: EventTarget | null) =>
      el instanceof HTMLElement &&
      ["INPUT", "TEXTAREA", "SELECT"].includes(el.tagName);
    const onFocusIn = (e: FocusEvent) => {
      if (isField(e.target)) setHidden(true);
    };
    const onFocusOut = (e: FocusEvent) => {
      if (isField(e.target)) setHidden(false);
    };
    document.addEventListener("focusin", onFocusIn);
    document.addEventListener("focusout", onFocusOut);
    return () => {
      document.removeEventListener("focusin", onFocusIn);
      document.removeEventListener("focusout", onFocusOut);
    };
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    setActive(id);
  };

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 transition-transform duration-300 ease-out ${
        hidden ? "translate-y-[160%]" : "translate-y-0"
      }`}
      // Rispetta la safe-area inferiore su iOS (notch / home indicator).
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <nav
        aria-label="Navigazione principale"
        className="flex items-center gap-0.5 rounded-full border border-border bg-surface/80 p-1.5 shadow-lg shadow-black/40 backdrop-blur-md sm:gap-1"
      >
        {sections.map((s) => {
          const Icon = s.icon;
          const isActive = active === s.id;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => handleClick(s.id)}
              aria-label={s.label}
              aria-current={isActive ? "page" : undefined}
              className={`relative flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-colors sm:px-4 ${
                isActive
                  ? "text-bg"
                  : "text-text-muted hover:text-text"
              }`}
            >
              {isActive && (
                // Indicatore attivo che scivola fluido tra le voci (layoutId).
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full bg-accent glow-soft"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <Icon className="relative size-[18px] shrink-0" strokeWidth={2.2} />
              {/* Le label compaiono da sm in su; su mobile restano solo le icone. */}
              <span className="relative hidden sm:inline">{s.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
