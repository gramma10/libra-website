import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

const ledger = [
  { label: "Τζίρος Νοεμβρίου", value: "€42.180", tone: "neutral" as const },
  { label: "Κόστος προϊόντων (βαφές, αναλώσιμα)", value: "−€5.120", tone: "down" as const },
  { label: "Μισθοί & εργοδοτικές εισφορές", value: "−€18.400", tone: "down" as const },
  { label: "Ενοίκιο, ρεύμα, ίντερνετ", value: "−€2.450", tone: "down" as const },
];

export function NetProfitSpotlight() {
  return (
    <section id="profit" aria-labelledby="profit-heading" className="bg-cream">
      <div className="container-page py-16 sm:py-24 lg:py-32">
        <div className="grid gap-10 sm:gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5 lg:pt-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-copper-gradient text-cream-50 shadow-soft">
                <ChartIcon />
              </div>
              <span className="text-xs font-medium uppercase tracking-[0.14em] text-ink-muted">
                Νούμερα
              </span>
            </div>
            <h2 id="profit-heading" className="mt-5 font-display text-[1.75rem] font-medium leading-[1.15] tracking-tight text-ink sm:text-4xl sm:leading-tight">
              Τα νούμερα που έχετε ήδη.{" "}
              <span className="block bg-copper-gradient bg-clip-text text-transparent">
                Σε γλώσσα που καταλαβαίνετε.
              </span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-muted sm:text-[17px]">
              Net profit engine, γραφήματα εσόδων, και κερδοφορία ανά υπηρεσία —
              σε ένα dashboard.
            </p>

            <ul className="mt-8 space-y-3 text-[15px] text-ink">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 inline-flex h-4 w-4 flex-none items-center justify-center rounded-full bg-copper-50 text-copper-700">
                  <CheckTick />
                </span>
                <span className="leading-relaxed">
                  Καθαρό κέρδος ανά υπηρεσία, ανά υπάλληλο, ανά ημέρα
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 inline-flex h-4 w-4 flex-none items-center justify-center rounded-full bg-copper-50 text-copper-700">
                  <CheckTick />
                </span>
                <span className="leading-relaxed">
                  Γραφήματα εσόδων και service profitability σε πραγματικό χρόνο
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 inline-flex h-4 w-4 flex-none items-center justify-center rounded-full bg-copper-50 text-copper-700">
                  <SparkleIcon />
                </span>
                <span className="leading-relaxed">
                  <strong className="font-medium text-ink">Daily AI narrative summary</strong>{" "}
                  — η ημέρα σας σε ένα παράγραφο, αυτόματα κάθε βράδυ
                </span>
              </li>
            </ul>

          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.15}>
            <div className="relative rounded-3xl border border-ink/10 bg-cream-50 p-2 shadow-lift">
              <div className="rounded-2xl bg-cream p-5 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-medium uppercase tracking-[0.14em] text-ink-muted">
                    Επισκόπηση μήνα
                  </span>
                  <span className="rounded-full bg-cream-50 px-2.5 py-1 text-[11px] font-medium text-ink-muted">
                    Νοέμβριος 2025
                  </span>
                </div>

                <ul className="mt-6 space-y-3">
                  {ledger.map((row) => (
                    <li key={row.label} className="flex items-center justify-between gap-3 border-b border-ink/5 pb-3 last:border-b-0">
                      <span className="min-w-0 text-sm text-ink-muted">{row.label}</span>
                      <span
                        className={`flex-none font-display text-base font-medium tabular-nums ${
                          row.tone === "down" ? "text-ink-muted" : "text-ink"
                        }`}
                      >
                        {row.value}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-xl bg-copper-gradient p-4 text-cream-50 shadow-soft sm:p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-cream-100/80">
                        Καθαρό κέρδος
                      </div>
                      <div className="mt-1 font-display text-2xl font-medium tabular-nums sm:text-3xl">
                        €16.210
                      </div>
                    </div>
                    <div className="flex-none text-right text-[11px] text-cream-100/85">
                      <div>Περιθώριο</div>
                      <div className="font-display text-base font-medium text-cream-50">38,4%</div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 rounded-xl border border-ink/10 bg-cream-50 p-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-copper-gradient text-cream-50">
                      <SparkleIcon />
                    </span>
                    <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted">
                      AI σύνοψη ημέρας
                    </span>
                  </div>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink">
                    «Σήμερα 14 ραντεβού, καθαρό κέρδος €612. Τα highlights απέδωσαν 42% πάνω
                    από τον μέσο όρο. Ένα προϊόν βαφής έπεσε κάτω από το όριο.»
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CheckTick() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path d="M2 5.5L4 7.5L8 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
      <path d="M6 0l1.3 3.7L11 5 7.3 6.3 6 10 4.7 6.3 1 5l3.7-1.3L6 0z" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 17h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 13v-3M10 13V7M14 13v-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
