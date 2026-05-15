import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";

const features = [
  {
    title: "Master view σε όλα τα καταστήματα",
    body: "Έσοδα, ραντεβού, αποθήκη και κέρδος για κάθε κατάστημα σε μία οθόνη. Χωρίς να αλλάζετε λογαριασμό.",
  },
  {
    title: "Συγκριτικά ανά κατάστημα",
    body: "Δείτε ποιο κατάστημα αποδίδει, ποιο υπολειτουργεί, και πού πρέπει να επικεντρωθείτε αυτή τη βδομάδα.",
  },
  {
    title: "Ενιαίο CRM",
    body: "Ο ίδιος πελάτης είναι ο ίδιος πελάτης, σε όλα τα καταστήματα. Ιστορικό, lifetime spend, σημειώσεις — όλα ένα.",
  },
  {
    title: "Roles ανά κατάστημα",
    body: "Admin, Manager, Staff — με Row Level Security. Κάθε άνθρωπος βλέπει μόνο ό,τι χρειάζεται.",
  },
];

const shops = [
  { name: "Κολωνάκι", revenue: "€12.840", appointments: 184, trend: "+12%" },
  { name: "Γλυφάδα", revenue: "€9.420", appointments: 146, trend: "+6%" },
  { name: "Θεσσαλονίκη", revenue: "€8.110", appointments: 132, trend: "+18%" },
  { name: "Πάτρα", revenue: "€5.290", appointments: 88, trend: "−3%" },
];

export function Chains() {
  return (
    <section id="chains" aria-labelledby="chains-heading" className="bg-cream-50/80">
      <div className="container-page py-16 sm:py-24 lg:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-copper-500" aria-hidden="true" />
            Για αλυσίδες
          </span>
          <h2 id="chains-heading" className="h-section mt-6">
            Μία αλυσίδα.
            <br />
            <span className="shimmer-text bg-copper-gradient bg-clip-text text-transparent">Ένα dashboard.</span>
          </h2>
          <p className="lede mt-5">
            Τα ξένα συστήματα σας δίνουν 4 ξεχωριστά profiles. Εμείς, μία επιχείρηση.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:mt-16 sm:gap-10 lg:grid-cols-12 lg:gap-14">
          <RevealGroup
            className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:col-span-6"
            stagger={0.08}
          >
            {features.map((f) => (
              <RevealItem
                key={f.title}
                className="card-lift rounded-2xl border border-ink/10 bg-cream p-5 hover:border-ink/20 hover:shadow-soft sm:p-6"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-copper-50">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 7.5L5.5 10L11 4" stroke="#8A4F30" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="mt-4 font-display text-lg font-medium tracking-tight text-ink">
                  {f.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{f.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal className="lg:col-span-6" delay={0.15}>
            <div className="relative rounded-3xl border border-ink/10 bg-cream-50 p-2 shadow-lift">
              <div className="rounded-2xl bg-cream p-5 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-medium uppercase tracking-[0.14em] text-ink-muted">
                    Master view
                  </span>
                  <span className="rounded-full bg-cream-50 px-2.5 py-1 text-[11px] font-medium text-ink-muted">
                    4 καταστήματα · Νοέμβριος
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-1.5 rounded-xl bg-cream-50 p-2.5 text-center sm:gap-2 sm:p-3">
                  <div>
                    <div className="text-[9px] font-medium uppercase tracking-wider text-ink-muted sm:text-[10px]">
                      Έσοδα
                    </div>
                    <div className="mt-1 font-display text-base font-medium text-ink tabular-nums sm:text-lg">
                      €35.660
                    </div>
                  </div>
                  <div>
                    <div className="text-[9px] font-medium uppercase tracking-wider text-ink-muted sm:text-[10px]">
                      Ραντεβού
                    </div>
                    <div className="mt-1 font-display text-base font-medium text-ink tabular-nums sm:text-lg">
                      550
                    </div>
                  </div>
                  <div>
                    <div className="text-[9px] font-medium uppercase tracking-wider text-ink-muted sm:text-[10px]">
                      Πελάτες
                    </div>
                    <div className="mt-1 font-display text-base font-medium text-ink tabular-nums sm:text-lg">
                      412
                    </div>
                  </div>
                </div>

                <ul className="mt-5 space-y-2">
                  {shops.map((s) => (
                    <li
                      key={s.name}
                      className="flex items-center justify-between gap-3 rounded-xl border border-ink/5 bg-cream-50 px-3 py-2.5 sm:px-4 sm:py-3"
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-copper-50 font-display text-[11px] font-medium text-copper-700">
                          {s.name[0]}
                        </span>
                        <div className="min-w-0">
                          <div className="truncate text-sm font-medium text-ink">{s.name}</div>
                          <div className="text-[11px] text-ink-muted">{s.appointments} ραντεβού</div>
                        </div>
                      </div>
                      <div className="flex-none text-right">
                        <div className="font-display text-sm font-medium text-ink tabular-nums">
                          {s.revenue}
                        </div>
                        <div
                          className={`text-[11px] tabular-nums ${
                            s.trend.startsWith("−") ? "text-ink-muted" : "text-copper-600"
                          }`}
                        >
                          {s.trend} vs Οκτ.
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </Reveal>
        </div>
      </div>
    </section>
  );
}
