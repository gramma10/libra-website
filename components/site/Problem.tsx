import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";

const pains = [
  {
    title: "Πέντε εργαλεία που δεν μιλάνε μεταξύ τους",
    body: "Ραντεβού σε μία πλατφόρμα, ταμείο σε άλλη, αποθήκη σε Excel, marketing στο Instagram, λογιστικά στον υπολογιστή του λογιστή. Κάθε αλλαγή πρέπει να καταγραφεί τέσσερις φορές.",
  },
  {
    title: "Δεν ξέρετε αν βγάζετε λεφτά",
    body: "Ο τζίρος είναι €40.000 τον μήνα — αλλά μετά από προμήθειες, κόστος προϊόντων, ενοίκιο, μισθούς και ΦΠΑ; Κανείς δεν σας λέει σε πραγματικό χρόνο.",
  },
  {
    title: "Πλατφόρμες που σας τρώνε προμήθεια",
    body: "Marketplaces που φέρνουν πελάτες κρατάνε 35% από κάθε νέο ραντεβού. Ο πελάτης δεν είναι δικός σας, η σχέση δεν είναι δική σας, και η προμήθεια συνεχίζει για πάντα.",
  },
];

export function Problem() {
  return (
    <section aria-labelledby="problem-heading" className="bg-cream">
      <div className="container-page py-16 sm:py-24 lg:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-copper-500" aria-hidden="true" />
            Το πρόβλημα
          </span>
          <h2 id="problem-heading" className="h-section mt-6">
            Δουλεύετε σκληρά. Αλλά η επιχείρησή σας;
          </h2>
          <p className="lede mt-5">
            Οι περισσότεροι ιδιοκτήτες επιχειρήσεων ομορφιάς στην Ελλάδα διαχειρίζονται την επιχείρησή τους με
            εργαλεία που δεν είναι σχεδιασμένα ούτε για το αντικείμενό τους, ούτε για την αγορά τους.
          </p>
        </Reveal>

        <RevealGroup
          className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 lg:grid-cols-3"
          stagger={0.1}
          delayChildren={0.1}
        >
          {pains.map((p, i) => (
            <RevealItem key={p.title}>
              <article className="card-lift h-full rounded-2xl border border-ink/10 bg-cream-50 p-5 hover:border-ink/20 hover:shadow-lift sm:p-7">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-copper-50 font-display text-sm font-medium text-copper-700">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 font-display text-xl font-medium tracking-tight text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-muted">{p.body}</p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
