import Link from "next/link";
import { Logo } from "./Logo";
import { ContactButton } from "./ContactButton";

const navItems = [
  { label: "Πλατφόρμα", href: "#platform" },
  { label: "Αλυσίδες", href: "#chains" },
  { label: "0% Προμήθεια", href: "#commission" },
  { label: "Τιμές", href: "#pricing" },
  { label: "Συχνές Ερωτήσεις", href: "#faq" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-cream/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Libra — Αρχική">
          <Logo className="h-7 w-auto text-ink" />
          <span className="font-display text-base font-medium tracking-tight text-ink">
            Libra
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Κύρια πλοήγηση">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ContactButton className="btn-primary">
            Επικοινωνήστε μαζί μας
          </ContactButton>
        </div>
      </div>
    </header>
  );
}
