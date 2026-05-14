const items = [
  {
    title: "Greek-first UI",
    body: "Σχεδιασμένο εξαρχής για την ελληνική αγορά — όχι μετάφραση από αγγλικά. Πλήρες Greek + English UI, Europe/Athens timezone.",
  },
  {
    title: "Ομάδα στην Αθήνα",
    body: "Υποστήριξη στα ελληνικά από ανθρώπους, χωρίς διαφορές ώρας. Όχι chatbots, όχι 48-72 ώρες αναμονής.",
  },
  {
    title: "Φιλοξενία σε EU data centers",
    body: "Όλα τα δεδομένα σας αποθηκεύονται εντός Ευρωπαϊκής Ένωσης. Πλήρης συμμόρφωση με GDPR, καθημερινά backup.",
  },
  {
    title: "SMS μέσω Apifon",
    body: "Ελληνικός πάροχος SMS με υψηλό deliverability στα ελληνικά δίκτυα. 3 retries σε κάθε υπενθύμιση.",
  },
];

export function GreekMarket() {
  return (
    <section id="greece" aria-labelledby="greece-heading" className="relative overflow-hidden bg-cream-50/80">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink/10 to-transparent"
        aria-hidden="true"
      />
      <div className="container-page py-24 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-start lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-copper-500" aria-hidden="true" />
              Φτιαγμένο για την Ελλάδα
            </span>
            <h2 id="greece-heading" className="h-section mt-6">
              Όχι μετάφραση.
              <br />
              <span className="bg-copper-gradient bg-clip-text text-transparent">
                Ελληνικό από το πρώτο pixel.
              </span>
            </h2>
            <p className="lede mt-6">
              Το Libra είναι σχεδιασμένο εξαρχής για το ελληνικό σαλόνι και τον τρόπο
              που δουλεύει η αγορά εδώ — από τη γλώσσα και την ώρα, μέχρι τον πάροχο SMS.
            </p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {items.map((it) => (
              <li
                key={it.title}
                className="rounded-2xl border border-ink/10 bg-cream p-6 transition-colors hover:border-ink/20"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-copper-50">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path
                      d="M3 7.5L5.5 10L11 4"
                      stroke="#8A4F30"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 font-display text-lg font-medium tracking-tight text-ink">
                  {it.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{it.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
