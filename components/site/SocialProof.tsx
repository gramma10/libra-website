/* Above-the-fold-adjacent proof strip — principles #1, #8, #10.
   Logos are stylized wordmarks (placeholders); replace with real partner logos
   from a future photoshoot/partnership round. */

const partners = [
  "Élide",
  "Nymphē",
  "Atelier 23",
  "Kalliste",
  "Σάλωνας Ίρις",
  "Olive & Oak",
];

export function SocialProof() {
  return (
    <section aria-label="Πελάτες και αξιολογήσεις" className="border-y border-ink/5 bg-cream-50/60">
      <div className="container-page py-10 lg:py-12">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-12">
          <p className="text-center text-sm font-medium uppercase tracking-[0.18em] text-ink-muted lg:text-left">
            Επιλογή για 200+ σαλόνια σε όλη την Ελλάδα
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {partners.map((name) => (
              <li
                key={name}
                className="font-display text-base font-medium tracking-tight text-ink/55 transition-colors hover:text-ink"
              >
                {name}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <Badge label="Capterra" rating="4.9" />
            <Badge label="Google" rating="4.9" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ label, rating }: { label: string; rating: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-ink/10 bg-cream px-3 py-1.5">
      <span className="text-[11px] font-medium uppercase tracking-wider text-ink-muted">
        {label}
      </span>
      <span className="flex items-center gap-1 text-xs font-semibold text-ink">
        <svg width="11" height="11" viewBox="0 0 14 14" fill="#A66440" aria-hidden="true">
          <path d="M7 1l1.8 3.7 4.1.6-3 2.9.7 4.1L7 10.3 3.4 12.3l.7-4.1-3-2.9 4.1-.6L7 1z" />
        </svg>
        {rating}
      </span>
    </div>
  );
}
