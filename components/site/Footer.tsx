import Link from "next/link";
import { Logo } from "./Logo";
import { ContactButton } from "./ContactButton";

type LinkItem = { label: string; href: string; contact?: boolean };

const columns: { heading: string; links: LinkItem[] }[] = [
  {
    heading: "Πλατφόρμα",
    links: [
      { label: "Ραντεβού & booking widget", href: "#pillar-a" },
      { label: "CRM & πελάτες", href: "#pillar-b" },
      { label: "Αποθήκη", href: "#pillar-c" },
      { label: "Νούμερα & AI σύνοψη", href: "#profit" },
      { label: "Αλυσίδες", href: "#chains" },
    ],
  },
  {
    heading: "Εταιρεία",
    links: [
      { label: "Σχετικά με εμάς", href: "#about" },
      { label: "Καριέρα", href: "#careers" },
      { label: "Επικοινωνία", href: "#contact", contact: true },
    ],
  },
  {
    heading: "Πόροι",
    links: [
      { label: "Συχνές ερωτήσεις", href: "#faq" },
      { label: "Τιμές", href: "#pricing" },
      { label: "0% Προμήθεια", href: "#commission" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-cream-50/60">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5" aria-label="Libra — Αρχική">
              <Logo className="h-7 w-auto text-ink" />
              <span className="font-display text-base font-medium tracking-tight text-ink">
                Libra
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-muted">
              Το λειτουργικό σύστημα για κομμωτήρια, spa και κέντρα ομορφιάς στην Ελλάδα.
              Ραντεβού, CRM, αποθήκη, νούμερα και αλυσίδες — σε ένα σύστημα.
            </p>
            <address className="mt-6 not-italic text-sm text-ink-muted">
              Τσιμισκή 43, 546 23 Θεσσαλονίκη
              <br />
              <a href="mailto:auragram.web@gmail.com" className="text-ink underline-offset-4 hover:underline">
                auragram.web@gmail.com
              </a>
            </address>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-8">
            {columns.map((col) => (
              <div key={col.heading}>
                <div className="text-xs font-medium uppercase tracking-[0.14em] text-ink-muted">
                  {col.heading}
                </div>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.contact ? (
                        <ContactButton className="text-sm text-ink transition-colors hover:text-copper-600">
                          {link.label}
                        </ContactButton>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-ink transition-colors hover:text-copper-600"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-ink/10 pt-8 text-xs text-ink-muted sm:flex-row sm:items-center">
          <p>© {year} Libra Software. Όλα τα δικαιώματα διατηρούνται.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="#privacy" className="hover:text-ink">
              Πολιτική Απορρήτου
            </Link>
            <Link href="#terms" className="hover:text-ink">
              Όροι Χρήσης
            </Link>
            <Link href="#cookies" className="hover:text-ink">
              Cookies
            </Link>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-copper-500" aria-hidden="true" />
              Ελληνικά
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
