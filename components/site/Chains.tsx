import Link from "next/link";

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
      <div className="container-page py-24 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-copper-500" aria-hidden="true" />
            Για αλυσίδες
          </span>
          <h2 id="chains-heading" className="h-section mt-6">
            Μία αλυσίδα.
            <br />
            <span className="bg-copper-gradient bg-clip-text text-transparent">Ένα dashboard.</span>
          </h2>
          <p className="lede mt-5">
            Τα ξένα συστήματα σας δίνουν 4 ξεχωριστά profiles. Εμείς, μία επιχείρηση.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-6">
            {features.map((f) => (
              <li
                key={f.title}
                className="rounded-2xl border border-ink/10 bg-cream p-6 transition-colors hover:border-ink/20"
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
              </li>
            ))}
          </ul>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl border border-ink/10 bg-cream-50 p-2 shadow-lift">
              <div className="rounded-2xl bg-cream p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-[0.14em] text-ink-muted">
                    Master view
                  </span>
                  <span className="rounded-full bg-cream-50 px-2.5 py-1 text-[11px] font-medium text-ink-muted">
                    4 καταστήματα · Νοέμβριος
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2 rounded-xl bg-cream-50 p-3 text-center">
                  <div>
                    <div className="text-[10px] font-medium uppercase tracking-wider text-ink-muted">
                      Συνολικά έσοδα
                    </div>
                    <div className="mt-1 font-display text-lg font-medium text-ink tabular-nums">
                      €35.660
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-medium uppercase tracking-wider text-ink-muted">
                      Ραντεβού
                    </div>
                    <div className="mt-1 font-display text-lg font-medium text-ink tabular-nums">
                      550
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-medium uppercase tracking-wider text-ink-muted">
                      Πελάτες (μοναδικοί)
                    </div>
                    <div className="mt-1 font-display text-lg font-medium text-ink tabular-nums">
                      412
                    </div>
                  </div>
                </div>

                <ul className="mt-5 space-y-2">
                  {shops.map((s) => (
                    <li
                      key={s.name}
                      className="flex items-center justify-between rounded-xl border border-ink/5 bg-cream-50 px-4 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-copper-50 font-display text-[11px] font-medium text-copper-700">
                          {s.name[0]}
                        </span>
                        <div>
                          <div className="text-sm font-medium text-ink">{s.name}</div>
                          <div className="text-[11px] text-ink-muted">{s.appointments} ραντεβού</div>
                        </div>
                      </div>
                      <div className="text-right">
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

          </div>
        </div>
      </div>
    </section>
  );
}
