import type { ReactNode } from "react";

type Row = {
  label: string;
  libra: ReactNode;
  marketplace: ReactNode;
};

const rows: Row[] = [
  {
    label: "Προμήθεια ανά νέο ραντεβού",
    libra: <strong className="font-medium">0%</strong>,
    marketplace: "35%",
  },
  {
    label: "Αλυσίδες με ενιαίο dashboard",
    libra: <Check />,
    marketplace: <Dash text="Ξεχωριστά profiles" />,
  },
  {
    label: "Instagram chatbot που κλείνει ραντεβού",
    libra: <Check />,
    marketplace: <Cross />,
  },
  {
    label: "SMS reactivation για κοιμώμενους πελάτες",
    libra: <Check />,
    marketplace: <Cross />,
  },
  {
    label: "Ποιος έχει τη σχέση με τον πελάτη",
    libra: <strong className="font-medium">Εσείς</strong>,
    marketplace: "Η πλατφόρμα",
  },
  {
    label: "Υποστήριξη",
    libra: "Ομάδα στη Θεσσαλονίκη",
    marketplace: "Auto-chat, 48-72h",
  },
  {
    label: "Onboarding",
    libra: "White-glove, included",
    marketplace: "Self-serve",
  },
];

export function Comparison() {
  return (
    <section id="compare" aria-labelledby="compare-heading" className="bg-cream-50/80">
      <div className="container-page py-24 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-copper-500" aria-hidden="true" />
            Σύγκριση
          </span>
          <h2 id="compare-heading" className="h-section mt-6">
            Πού διαφέρουμε.
          </h2>
          <p className="lede mt-5">
            Δύο διαφορετικά μοντέλα. Δύο διαφορετικά αποτελέσματα για την επιχείρησή σας.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-2xl border border-ink/10 bg-cream shadow-soft">
          <div className="grid grid-cols-[1.4fr,1fr,1fr] items-center gap-4 border-b border-ink/10 bg-cream-50 px-5 py-4 text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted sm:px-8">
            <div></div>
            <div className="text-center">
              <span className="font-display text-base font-medium normal-case tracking-tight text-ink">
                Libra
              </span>
            </div>
            <div className="text-center">
              <span className="font-display text-base font-medium normal-case tracking-tight text-ink-muted">
                Marketplace
              </span>
            </div>
          </div>

          {rows.map((r, i) => (
            <div
              key={r.label}
              className={`grid grid-cols-[1.4fr,1fr,1fr] items-center gap-4 px-5 py-4 text-sm sm:px-8 ${
                i % 2 === 1 ? "bg-cream-50/40" : ""
              }`}
            >
              <div className="text-[14px] text-ink">{r.label}</div>
              <div className="text-center text-[14px] text-ink">{r.libra}</div>
              <div className="text-center text-[14px] text-ink-muted">{r.marketplace}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Check() {
  return (
    <span
      className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-copper-gradient text-cream-50 shadow-soft"
      aria-label="Ναι"
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function Cross() {
  return (
    <span
      className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-ink/15 text-ink-muted"
      aria-label="Όχι"
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
        <path d="M2 2L8 8M8 2L2 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function Dash({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span
        className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-ink/15 text-ink-muted"
        aria-hidden="true"
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M2 2L8 8M8 2L2 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </span>
      <span className="text-left">{text}</span>
    </span>
  );
}
