/* Principle #4: one named client + one number beats five soft endorsements.
   Replace placeholder copy and avatar/name with a real customer quote
   from the first photoshoot/interview round. */

export function Testimonial() {
  return (
    <section id="testimonials" aria-labelledby="testimonial-heading" className="bg-cream">
      <div className="container-page py-24 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <figure className="relative rounded-3xl border border-ink/10 bg-cream-50 p-8 shadow-soft sm:p-14">
            <svg
              className="absolute -top-4 left-8 h-10 w-10 text-copper-500"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M9 7H5a2 2 0 00-2 2v4a2 2 0 002 2h2v1a3 3 0 01-3 3v2a5 5 0 005-5V9a2 2 0 00-2-2zm12 0h-4a2 2 0 00-2 2v4a2 2 0 002 2h2v1a3 3 0 01-3 3v2a5 5 0 005-5V9a2 2 0 00-2-2z" />
            </svg>

            <h2 id="testimonial-heading" className="sr-only">
              Μαρτυρία πελάτη
            </h2>

            <blockquote className="font-display text-2xl font-medium leading-snug tracking-tight text-ink sm:text-3xl">
              «Πρώτη φορά σε δέκα χρόνια ξέρω τι κερδίζω πραγματικά. Το πρώτο τρίμηνο με το Libra
              αύξησα το καθαρό κέρδος από{" "}
              <span className="bg-copper-gradient bg-clip-text text-transparent">€4.200 σε €7.800 τον μήνα</span>
              {" "}— χωρίς να ανοίξω ούτε μια ώρα παραπάνω.»
            </blockquote>

            <figcaption className="mt-10 flex items-center gap-4">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full bg-copper-gradient font-display text-base font-medium text-cream-50"
                aria-hidden="true"
              >
                ΕΚ
              </div>
              <div>
                <div className="font-display text-base font-medium text-ink">Ελένη Καραγιάννη</div>
                <div className="text-sm text-ink-muted">Ιδιοκτήτρια, Élide Hair Studio · Κολωνάκι, Αθήνα</div>
              </div>
            </figcaption>

            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-ink/10 pt-8">
              <Stat label="Αύξηση καθαρού κέρδους" value="+86%" />
              <Stat label="Ώρες/εβδομάδα σε admin" value="−7h" />
              <Stat label="Επανερχόμενοι πελάτες" value="+24%" />
            </dl>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-medium uppercase tracking-[0.14em] text-ink-muted">{label}</dt>
      <dd className="mt-1 font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
        {value}
      </dd>
    </div>
  );
}
