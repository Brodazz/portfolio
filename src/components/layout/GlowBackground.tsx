// Sfondo ambientale: glow verde MOLTO tenue e fisso dietro tutto il contenuto.
// Deve solo "far respirare" il fondale senza disturbare la leggibilità.
// Il glow forte vive solo nell'Hero (animazione "respiro" dedicata).
// Puramente decorativo (aria-hidden), non intercetta i click.
export default function GlowBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Accenno di glow ambientale, basso contrasto: presente ma non abbagliante. */}
      <div
        className="absolute -top-[20%] left-1/2 h-[40vh] w-[70vw] max-w-2xl -translate-x-1/2 rounded-full blur-[160px] opacity-[0.12]"
        style={{ background: "var(--glow)" }}
      />
      <div
        className="absolute bottom-0 right-[-10%] h-[30vh] w-[45vw] max-w-md rounded-full blur-[170px] opacity-[0.07]"
        style={{ background: "var(--glow)" }}
      />
    </div>
  );
}
