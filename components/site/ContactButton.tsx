"use client";

import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
};

export function openContactForm() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-contact-form"));
  }
}

export function ContactButton({ className, children, ariaLabel }: Props) {
  return (
    <button
      type="button"
      onClick={openContactForm}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
