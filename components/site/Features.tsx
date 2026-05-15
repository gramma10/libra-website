import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";

type Pillar = {
  id: string;
  letter: string;
  eyebrow: string;
  title: string;
  bullets: string[];
  roi: string;
  icon: ReactNode;
};

const pillars: Pillar[] = [
  {
    id: "pillar-a",
    letter: "A",
    eyebrow: "Ραντεβού",
    title: "Γεμίστε το ημερολόγιο 24/7",
    bullets: [
      "Public booking widget, mobile-first, χωρίς εγγραφή πελάτη",
      "Αυτόματες SMS υπενθυμίσεις 50-70 λεπτά πριν, με 3 retries",
      "Email επιβεβαιώσεις σε κάθε νέο ραντεβού",
      "Διπλο-booking prevention στο επίπεδο της βάσης",
    ],
    roi: "Κάθε no-show = €30-80 χαμένα. Μειώστε τα.",
    icon: <CalendarIcon />,
  },
  {
    id: "pillar-b",
    letter: "B",
    eyebrow: "Πελάτες",
    title: "Πελάτες που επιστρέφουν",
    bullets: [
      "Auto-CRM που χτίζεται από τα ραντεβού — lifetime spend, τελευταία επίσκεψη, σημειώσεις",
      "Instagram chatbot που απαντά σε DMs και κλείνει ραντεβού μέσα στη συνομιλία",
      "SMS reactivation για πελάτες 60-90 ημερών χωρίς επίσκεψη",
      "CSV export της πελατείας — οι πελάτες σας είναι δικοί σας",
    ],
    roi: "Ένας επανερχόμενος πελάτης = 5× φθηνότερος από έναν καινούργιο.",
    icon: <UsersIcon />,
  },
  {
    id: "pillar-c",
    letter: "C",
    eyebrow: "Αποθήκη",
    title: "Αποθήκη που δεν σας κοστίζει χρήμα",
    bullets: [
      "Stock tracking ανά προϊόν, με low-stock alerts",
      "Κάθε restocking δημιουργεί αυτόματα έξοδο στα νούμερα",
      "Κόστος προϊόντος ανά υπηρεσία — ξέρετε τι μένει πραγματικά",
      "Καθημερινό αυτόματο scan για ελλείψεις",
    ],
    roi: "Σταματήστε να αγοράζετε ξανά βαφές που ήδη έχετε.",
    icon: <BoxIcon />,
  },
];

export function Features() {
  return (
    <section id="platform" aria-labelledby="features-heading" className="bg-cream-50/80">
      <div className="container-page py-16 sm:py-24 lg:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-copper-500" aria-hidden="true" />
            Η πλατφόρμα
          </span>
          <h2 id="features-heading" className="h-section mt-6">
            Ένα σύστημα. Όλη η επιχείρηση.
          </h2>
          <p className="lede mt-5">
            Τέσσερις πυλώνες, μία πλατφόρμα. Από το πρώτο ραντεβού μέχρι τον τελευταίο
            δείκτη απόδοσης — όλα συνδεδεμένα, αυτόματα, στα ελληνικά.
          </p>
        </Reveal>

        <RevealGroup
          className="mt-16 space-y-6 lg:space-y-8"
          stagger={0.12}
          delayChildren={0.05}
        >
          {pillars.map((p) => (
            <RevealItem key={p.id}>
              <PillarCard pillar={p} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

function PillarCard({ pillar }: { pillar: Pillar }) {
  return (
    <article
      id={pillar.id}
      className="card-lift grid gap-6 rounded-2xl border border-ink/10 bg-cream p-5 hover:border-ink/20 hover:shadow-lift sm:gap-8 sm:p-7 lg:grid-cols-12 lg:gap-10 lg:p-10"
    >
      <header className="lg:col-span-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-copper-gradient text-cream-50 shadow-soft">
            {pillar.icon}
          </div>
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-ink-muted">
            {pillar.eyebrow}
          </span>
        </div>
        <h3 className="mt-4 font-display text-xl font-medium tracking-tight text-ink sm:mt-5 sm:text-2xl lg:text-3xl">
          {pillar.title}
        </h3>
        <div className="mt-6 rounded-xl bg-copper-50 px-4 py-3 text-sm font-medium text-copper-700">
          {pillar.roi}
        </div>
      </header>

      <ul className="space-y-3 lg:col-span-8">
        {pillar.bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1.5 inline-flex h-4 w-4 flex-none items-center justify-center rounded-full bg-copper-50 text-copper-700">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <path d="M2 5.5L4 7.5L8 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="text-[15px] leading-relaxed text-ink">{b}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function CalendarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 9h14M7 3v4M13 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="7.5" cy="7" r="2.8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2.5 16.5c.5-2.5 2.6-4 5-4s4.5 1.5 5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M13.5 5.2a2.6 2.6 0 010 4.9M14 12.7c1.9.3 3.4 1.7 3.8 3.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function BoxIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M10 2.5l6.5 3.2v8.6L10 17.5 3.5 14.3V5.7L10 2.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M3.5 5.7L10 9l6.5-3.3M10 9v8.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
