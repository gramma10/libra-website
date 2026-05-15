import { Reveal } from "@/components/ui/reveal";

const faqs = [
  {
    q: "Κρατάτε προμήθεια από τα ραντεβού μου;",
    a: "Όχι. 0% προμήθεια σε κάθε ραντεβού, για πάντα. Το Libra δεν είναι marketplace — είναι το δικό σας σύστημα. Κάθε πελάτης που κλείνει από το booking widget, το Instagram ή τα SMS reactivation σας είναι 100% δικός σας.",
  },
  {
    q: "Υποστηρίζετε αλυσίδες με πολλά καταστήματα;",
    a: "Ναι, με ενιαίο dashboard και master view σε όλα τα καταστήματα — έσοδα, ραντεβού, αποθήκη και πελάτες σε μία οθόνη. Ο ίδιος πελάτης είναι ο ίδιος πελάτης σε όλες τις επιχειρήσεις, με ενιαίο CRM και roles ανά κατάστημα.",
  },
  {
    q: "Τι σημαίνει «πληρώνετε με βάση την αξία»;",
    a: "Συμφωνούμε από την αρχή ποια είναι τα αποτελέσματα που περιμένετε από την επιχείρησή σας — περισσότερα ραντεβού, λιγότερα no-shows, μεγαλύτερο καθαρό κέρδος. Αν τον πρώτο μήνα δεν φτάσουμε εκεί, δεν πληρώνετε αυτόν τον μήνα. Δεν είμαστε προμηθευτής λογισμικού· είμαστε συνεργάτης σας.",
  },
  {
    q: "Πόσο χρόνο χρειάζεται για να ξεκινήσω;",
    a: "Λιγότερο από μία εργάσιμη μέρα. Η ομάδα μας μεταφέρει τους πελάτες σας, το πρόγραμμά σας και τα προϊόντα σας από το προηγούμενο σύστημα — χωρίς να χάσετε ούτε ένα ραντεβού.",
  },
  {
    q: "Πώς δουλεύει το Instagram chatbot;",
    a: "Συνδέεται με τον λογαριασμό Instagram της επιχείρησής σας, απαντά αυτόματα σε DMs με βάση τις υπηρεσίες και τη διαθεσιμότητά σας, και κλείνει ραντεβού μέσα στη συνομιλία. Μπορεί να μπει στο πακέτο σας από την αρχή ή να προστεθεί όποτε θέλετε.",
  },
  {
    q: "Είναι ασφαλή τα στοιχεία μου και των πελατών μου;",
    a: "Όλα τα δεδομένα κρυπτογραφούνται και φιλοξενούνται σε data centers εντός Ε.Ε. Πλήρης συμμόρφωση με GDPR, καθημερινά αυτόματα backup. Τα roles επιβάλλονται σε επίπεδο βάσης (Row Level Security).",
  },
  {
    q: "Μπορώ να ακυρώσω;",
    a: "Ναι, ανά πάσα στιγμή — με ένα κλικ από τις ρυθμίσεις. Δεν υπάρχει ελάχιστη διάρκεια συμβολαίου. Σας παραδίδουμε όλα σας τα δεδομένα σε μορφή CSV.",
  },
];

export function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-cream-50/60">
      <div className="container-page py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl">
          <Reveal className="text-center">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-copper-500" aria-hidden="true" />
              Συχνές ερωτήσεις
            </span>
            <h2 id="faq-heading" className="h-section mt-6">
              Ό,τι πρέπει να ξέρετε.
            </h2>
          </Reveal>

          <Reveal className="mt-10 divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-cream sm:mt-12" delay={0.1}>
            {faqs.map((item) => (
              <details key={item.q} className="group px-5 py-4 sm:px-6 sm:py-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-start justify-between gap-3 list-none sm:gap-6">
                  <span className="font-display text-[15px] font-medium leading-snug text-ink sm:text-lg">
                    {item.q}
                  </span>
                  <span
                    className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full border border-ink/15 text-ink-muted transition-transform group-open:rotate-45 group-open:border-copper-500 group-open:text-copper-500"
                    aria-hidden="true"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1.5v9M1.5 6h9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-ink-muted sm:pr-12 sm:text-[15px]">
                  {item.a}
                </p>
              </details>
            ))}
          </Reveal>

          <p className="mt-8 text-center text-sm text-ink-muted">
            Άλλη ερώτηση;{" "}
            <a href="mailto:auragram.web@gmail.com" className="font-medium text-ink underline-offset-4 hover:underline">
              auragram.web@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
