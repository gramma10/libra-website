import Link from "next/link";
import { ContactButton } from "./ContactButton";
import { Reveal } from "@/components/ui/reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      {/* Slow drifting aurora — luxury backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hero-aurora"
        style={{
          backgroundImage:
            "radial-gradient(900px 500px at 50% -10%, rgba(200,131,91,0.18), transparent 60%), radial-gradient(700px 400px at 85% 110%, rgba(166,100,64,0.15), transparent 60%)",
        }}
      />
      <div className="container-page relative pt-14 pb-16 sm:pt-20 sm:pb-24 lg:pt-28 lg:pb-32">
        <div className="mx-auto max-w-5xl text-center reveal">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-copper-500" aria-hidden="true" />
            Πληρώνετε με βάση την αξία.
          </span>

          <h1 className="mt-6 font-display text-[2.25rem] font-medium leading-[1.1] tracking-tight text-ink sm:text-5xl sm:leading-tight sm:tracking-tightest lg:text-6xl">
            <span className="block">Λιγότερα no-shows.</span>
            <span className="block">Περισσότεροι πελάτες που γυρνάνε.</span>
            <span className="block bg-copper-gradient bg-clip-text text-transparent">
              Καθαρή εικόνα κέρδους.
            </span>
          </h1>

          <p className="lede mx-auto mt-5 max-w-2xl sm:mt-6">
            Το Libra αυτοματοποιεί τα ραντεβού, ξυπνάει τους ξεχασμένους πελάτες σας και
            σας δείχνει σε πραγματικό χρόνο πού πάει κάθε ευρώ. Ένα σύστημα για ολόκληρη
            την επιχείρηση, όχι ακόμα ένα ημερολόγιο ραντεβού.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-9 sm:flex-row sm:items-center">
            <ContactButton className="btn-primary w-full sm:w-auto">
              Επικοινωνήστε μαζί μας
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7H11M11 7L7 3M11 7L7 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </ContactButton>
          </div>

        </div>

        {/* Hero visual — replace this block with a real lifestyle photograph (principle #3).
            See README placeholder note. The frame below is a styled stand-in. */}
        <Reveal className="relative mx-auto mt-12 max-w-5xl sm:mt-16" delay={0.2} y={32}>
          <div className="relative rounded-2xl border border-ink/10 bg-cream-50 p-1.5 shadow-lift sm:rounded-3xl sm:p-2">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-gradient-to-br from-cream-200 via-copper-100 to-copper-200 sm:aspect-[16/9] sm:rounded-2xl">
              <DashboardMock />
            </div>
          </div>
          <div className="pointer-events-none absolute -inset-x-12 -bottom-12 h-32 bg-cream/60 blur-3xl" aria-hidden="true" />
        </Reveal>
      </div>
    </section>
  );
}

function Stars() {
  return (
    <span className="flex" aria-label="4.9 από 5">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#A66440" aria-hidden="true">
          <path d="M7 1l1.8 3.7 4.1.6-3 2.9.7 4.1L7 10.3 3.4 12.3l.7-4.1-3-2.9 4.1-.6L7 1z" />
        </svg>
      ))}
    </span>
  );
}

/* In-page mock of the dashboard so the hero has a credible product surface
   without a real screenshot. Swap this for a real product screenshot before launch. */
function DashboardMock() {
  return (
    <div className="grid h-full grid-cols-12 gap-2.5 p-3 sm:gap-3 sm:p-5 lg:p-6">
      <div className="col-span-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-ink/20" />
          <div className="h-2 w-2 rounded-full bg-ink/20" />
          <div className="h-2 w-2 rounded-full bg-ink/20" />
        </div>
        <div className="rounded-md bg-cream-50 px-2 py-1 text-[10px] font-medium text-ink-muted">
          libra.app / Επισκόπηση
        </div>
      </div>

      <div className="col-span-12 grid grid-cols-3 gap-2 sm:gap-3 lg:col-span-8">
        <MetricCard label="Έσοδα" value="€1.842" trend="+12%" />
        <MetricCard label="Κέρδος" value="€612" trend="+18%" highlight />
        <MetricCard label="Πληρότητα" value="87%" trend="+4%" />
        <div className="col-span-3 rounded-xl bg-cream-50 p-3 sm:p-4">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 sm:mb-3">
            <span className="text-[11px] font-medium text-ink-muted sm:text-xs">Καθαρό κέρδος / 7 ημ.</span>
            <span className="text-[11px] text-ink-muted sm:text-xs">€ 4.280</span>
          </div>
          <Sparkline />
        </div>
      </div>

      <div className="col-span-12 rounded-xl bg-cream-50 p-3 sm:p-4 lg:col-span-4">
        <div className="mb-3 text-xs font-medium text-ink-muted">Επόμενα ραντεβού</div>
        <div className="space-y-2">
          {[
            { t: "10:30", n: "Μαρία Π.", s: "Βαφή & κούρεμα" },
            { t: "11:15", n: "Ελένη Κ.", s: "Manicure" },
            { t: "12:00", n: "Άννα Δ.", s: "Highlights" },
            { t: "13:30", n: "Σοφία Λ.", s: "Spa πακέτο" },
          ].map((a) => (
            <div key={a.t} className="flex items-center gap-3 rounded-lg border border-ink/5 bg-cream px-3 py-2">
              <div className="text-[11px] font-semibold text-copper-600">{a.t}</div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-xs font-medium text-ink">{a.n}</div>
                <div className="truncate text-[11px] text-ink-muted">{a.s}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MetricCard({ label, value, trend, highlight }: { label: string; value: string; trend: string; highlight?: boolean }) {
  return (
    <div className={`rounded-lg p-2.5 sm:rounded-xl sm:p-4 ${highlight ? "bg-copper-gradient text-cream-50" : "bg-cream-50"}`}>
      <div className={`text-[9px] font-medium uppercase tracking-wider sm:text-[11px] ${highlight ? "text-cream-100/80" : "text-ink-muted"}`}>
        {label}
      </div>
      <div className={`mt-0.5 font-display text-sm font-medium sm:mt-1 sm:text-xl ${highlight ? "text-cream-50" : "text-ink"}`}>
        {value}
      </div>
      <div className={`mt-0.5 text-[9px] sm:text-[11px] ${highlight ? "text-cream-100/90" : "text-copper-600"}`}>
        {trend} vs χθες
      </div>
    </div>
  );
}

function Sparkline() {
  const points = [12, 18, 14, 22, 19, 28, 34];
  const max = Math.max(...points);
  return (
    <svg viewBox="0 0 200 60" className="h-14 w-full" aria-hidden="true">
      <polyline
        fill="none"
        stroke="#A66440"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points.map((p, i) => `${(i / (points.length - 1)) * 200},${60 - (p / max) * 50}`).join(" ")}
      />
      <polygon
        fill="rgba(166,100,64,0.10)"
        points={`0,60 ${points.map((p, i) => `${(i / (points.length - 1)) * 200},${60 - (p / max) * 50}`).join(" ")} 200,60`}
      />
    </svg>
  );
}
