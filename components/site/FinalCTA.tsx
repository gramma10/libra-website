import { ContactButton } from "./ContactButton";

export function FinalCTA() {
  return (
    <section id="contact" aria-labelledby="cta-heading" className="bg-cream">
      <div className="container-page py-24 lg:py-28">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-center shadow-lift sm:px-16 sm:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              backgroundImage:
                "radial-gradient(600px 300px at 50% -10%, rgba(200,131,91,0.45), transparent 60%), radial-gradient(400px 240px at 80% 110%, rgba(166,100,64,0.35), transparent 60%)",
            }}
            aria-hidden="true"
          />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-cream-50/15 bg-cream-50/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-cream-100/85 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-copper-400" aria-hidden="true" />
              Πρώτος μήνας δωρεάν αν δεν φέρει αποτελέσματα
            </span>

            <h2
              id="cta-heading"
              className="mx-auto mt-6 max-w-3xl font-display text-4xl font-medium tracking-tightest text-cream-50 sm:text-5xl lg:text-6xl"
            >
              Πάρτε πίσω{" "}
              <span className="bg-copper-gradient bg-clip-text text-transparent">τους πελάτες σας</span>.
              <br />
              Και το κέρδος τους.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream-100/85 sm:text-xl">
              Μιλήστε με την ομάδα μας στη Θεσσαλονίκη. Σας δείχνουμε την πλατφόρμα με
              πραγματικούς αριθμούς για τη δική σας επιχείρηση — και ξεκινάμε με αξία, όχι με
              συνδρομή.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ContactButton className="inline-flex items-center justify-center gap-2 rounded-full bg-cream-50 px-6 py-3.5 text-sm font-medium tracking-tight text-ink shadow-soft transition-all hover:bg-cream-200 hover:shadow-lift focus:outline-none focus-visible:ring-2 focus-visible:ring-copper-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink">
                Επικοινωνήστε μαζί μας
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path
                    d="M3 7H11M11 7L7 3M11 7L7 11"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ContactButton>
            </div>

            <p className="mt-8 text-sm text-cream-100/70">
              Ή στείλτε email στο{" "}
              <a href="mailto:auragram.web@gmail.com" className="text-cream-50 underline-offset-4 hover:underline">
                auragram.web@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
