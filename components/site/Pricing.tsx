import { ContactButton } from "./ContactButton";

// TODO: Final pricing has not been confirmed. Update this section before launch.

const services = [
  { id: "booking", label: "Ραντεβού & online booking widget 24/7" },
  { id: "sms", label: "SMS υπενθυμίσεις & email επιβεβαιώσεις" },
  { id: "crm", label: "Auto-CRM & lifetime spend ανά πελάτη" },
  { id: "inventory", label: "Αποθήκη, stock tracking & low-stock alerts" },
  { id: "profit", label: "Net profit engine & καθημερινή AI σύνοψη" },
  { id: "chains", label: "Αλυσίδες με master view & ενιαίο CRM" },
  { id: "ig", label: "Instagram chatbot — κλείνει ραντεβού μέσα στο DM" },
  { id: "reactivation", label: "SMS reactivation για κοιμώμενους πελάτες" },
];

export function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="bg-cream">
      <div className="container-page py-24 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-copper-500" aria-hidden="true" />
            Τιμές
          </span>
          <h2 id="pricing-heading" className="h-section mt-6">
            Πληρώνετε με βάση την αξία.
            <br />
            <span className="bg-copper-gradient bg-clip-text text-transparent">
              Όχι με βάση τη συνδρομή.
            </span>
          </h2>
          <p className="lede mt-5">
            Αν τον πρώτο μήνα δεν δείτε αποτελέσματα, δεν πληρώνετε. Δεν είμαστε
            προμηθευτής λογισμικού — είμαστε συνεργάτης σας.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <div className="rounded-3xl border border-ink/10 bg-cream-50 p-8 shadow-soft sm:p-10">
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-copper-gradient text-cream-50 shadow-soft">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                  <path d="M5 11.5L9.5 16L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-2xl font-medium tracking-tight text-ink">
                  Custom πακέτο
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
                  Διαλέξτε τις υπηρεσίες που σας ενδιαφέρουν και επικοινωνήστε μαζί μας.
                  Φτιάχνουμε το πακέτο σας μαζί — χωρίς περιττά features, χωρίς κρυφές χρεώσεις.
                </p>
              </div>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {services.map((s) => (
                <li key={s.id} className="flex items-center gap-3 rounded-xl border border-ink/[0.08] bg-cream px-4 py-3">
                  <span className="inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-copper-50 text-copper-700">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path d="M2 5.5L4 7.5L8 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[15px] text-ink">{s.label}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col items-stretch gap-4 border-t border-ink/[0.08] pt-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-medium text-ink">Πρώτος μήνας δωρεάν αν δεν φέρει αποτελέσματα.</div>
                <div className="mt-1 text-sm text-ink-muted">Χωρίς δέσμευση. Χωρίς κρυφές χρεώσεις.</div>
              </div>
              <ContactButton className="btn-primary shrink-0">
                Επικοινωνήστε μαζί μας
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7H11M11 7L7 3M11 7L7 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </ContactButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
