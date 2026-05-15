"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-cream/80 backdrop-blur-md">
      <div className="container-page flex h-20 items-center justify-between gap-3 sm:h-24">
        <Link
          href="/"
          className="flex items-center"
          aria-label="Libra — Αρχική"
          onClick={() => setOpen(false)}
        >
          <Logo className="h-14 w-auto sm:h-16 lg:h-20" alt="Libra — Αρχική" />
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

        <div className="flex items-center gap-2">
          <ContactButton className="btn-primary hidden sm:inline-flex">
            <span className="hidden lg:inline">Επικοινωνήστε μαζί μας</span>
            <span className="lg:hidden">Επικοινωνία</span>
          </ContactButton>

          <ContactButton className="btn-primary !px-4 !py-2.5 text-sm sm:hidden">
            Επικοινωνία
          </ContactButton>

          <button
            type="button"
            aria-label={open ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-cream-50 text-ink transition-colors hover:bg-cream-200 md:hidden"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              {open ? (
                <path
                  d="M4 4l10 10M14 4L4 14"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 5h12M3 9h12M3 13h12"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Πλοήγηση κινητού"
          className="border-t border-ink/5 bg-cream/95 backdrop-blur-md md:hidden"
        >
          <ul className="container-page flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[44px] items-center rounded-xl px-3 text-base font-medium text-ink transition-colors hover:bg-cream-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
