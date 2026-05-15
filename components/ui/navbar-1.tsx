"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/site/Logo";
import { ContactButton, openContactForm } from "@/components/site/ContactButton";

const navItems = [
  { label: "Πλατφόρμα", href: "#platform" },
  { label: "Αλυσίδες", href: "#chains" },
  { label: "0% Προμήθεια", href: "#commission" },
  { label: "Τιμές", href: "#pricing" },
  { label: "Συχνές Ερωτήσεις", href: "#faq" },
];

export function Navbar1() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((v) => !v);

  return (
    <div className="sticky top-0 z-50 flex w-full justify-center px-4 py-4 sm:py-6">
      <div className="relative z-10 flex w-full max-w-5xl items-center justify-between gap-3 rounded-full border border-ink/10 bg-cream-50/95 px-4 py-2 shadow-lift backdrop-blur-md sm:px-5 sm:py-2.5">
        <Link
          href="/"
          aria-label="Libra — Αρχική"
          className="flex flex-none items-center"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center"
          >
            <Logo className="h-9 w-auto sm:h-10" alt="Libra — Αρχική" />
          </motion.div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Κύρια πλοήγηση">
          {navItems.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              whileHover={{ y: -1 }}
            >
              <Link
                href={item.href}
                className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          whileHover={{ scale: 1.03 }}
        >
          <ContactButton className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-cream-50 shadow-soft transition-colors hover:bg-ink-soft">
            Επικοινωνία
          </ContactButton>
        </motion.div>

        {/* Mobile / tablet: compact CTA + hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <ContactButton className="inline-flex items-center justify-center rounded-full bg-ink px-4 py-2 text-sm font-medium text-cream-50 shadow-soft transition-colors hover:bg-ink-soft">
            Επικοινωνία
          </ContactButton>
          <motion.button
            type="button"
            aria-label={isOpen ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-cream-200"
          >
            <Menu className="h-5 w-5" />
          </motion.button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Πλοήγηση κινητού"
            className="fixed inset-0 z-50 bg-cream px-6 pt-24 lg:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.button
              type="button"
              aria-label="Κλείσιμο μενού"
              className="absolute right-6 top-6 inline-flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-cream-200"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              <X className="h-6 w-6" />
            </motion.button>

            <div className="flex flex-col gap-2">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: i * 0.06 + 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={toggleMenu}
                    className="block rounded-2xl px-3 py-3 font-display text-xl font-medium text-ink transition-colors hover:bg-cream-50"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ delay: 0.4 }}
                className="pt-6"
              >
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    openContactForm();
                  }}
                  className="inline-flex w-full items-center justify-center rounded-full bg-ink px-6 py-3.5 text-base font-medium text-cream-50 shadow-soft transition-colors hover:bg-ink-soft"
                >
                  Επικοινωνήστε μαζί μας
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
