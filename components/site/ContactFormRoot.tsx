"use client";

import { useEffect, useState, useCallback, FormEvent } from "react";

type FormState = {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  shops: string;
};

const EMPTY: FormState = {
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  phone: "",
  shops: "",
};

type Status = "idle" | "submitting" | "success" | "error";

export function ContactFormRoot() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    const onOpen = () => {
      setStatus("idle");
      setErrorMsg("");
      setOpen(true);
    };
    window.addEventListener("open-contact-form", onOpen);
    return () => window.removeEventListener("open-contact-form", onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const update = useCallback(
    (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value })),
    []
  );

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || "Αποτυχία αποστολής.");
      }
      setStatus("success");
      setForm(EMPTY);
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Κάτι πήγε στραβά. Δοκιμάστε ξανά."
      );
    }
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-form-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
    >
      <button
        type="button"
        aria-label="Κλείσιμο"
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
      />

      <div className="relative w-full max-w-lg rounded-3xl bg-cream-50 p-6 shadow-lift sm:p-8 max-h-[calc(100vh-2rem)] overflow-y-auto">
        <button
          type="button"
          aria-label="Κλείσιμο φόρμας"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-ink/5 hover:text-ink"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M4 4L12 12M12 4L4 12"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {status === "success" ? (
          <div className="py-8 text-center">
            <div className="mx-auto mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-copper-100 text-copper-700">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M4 10.5L8 14.5L16 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3
              id="contact-form-title"
              className="font-display text-2xl font-medium tracking-tightest text-ink"
            >
              Ευχαριστούμε!
            </h3>
            <p className="mt-2 text-ink-muted">
              Λάβαμε τα στοιχεία σας. Θα επικοινωνήσουμε μαζί σας πολύ σύντομα.
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="btn-primary mt-7"
            >
              Κλείσιμο
            </button>
          </div>
        ) : (
          <>
            <div className="pr-10">
              <h3
                id="contact-form-title"
                className="font-display text-2xl font-medium tracking-tightest text-ink sm:text-3xl"
              >
                Επικοινωνήστε μαζί μας
              </h3>
              <p className="mt-2 text-sm text-ink-muted">
                Συμπληρώστε τα στοιχεία σας και θα επικοινωνήσουμε μαζί σας εντός 24 ωρών.
              </p>
            </div>

            <form onSubmit={submit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field
                  label="Όνομα"
                  name="firstName"
                  value={form.firstName}
                  onChange={update("firstName")}
                  required
                  autoComplete="given-name"
                />
                <Field
                  label="Επώνυμο"
                  name="lastName"
                  value={form.lastName}
                  onChange={update("lastName")}
                  required
                  autoComplete="family-name"
                />
              </div>
              <Field
                label="Επωνυμία επιχείρησης"
                name="company"
                value={form.company}
                onChange={update("company")}
                required
                autoComplete="organization"
              />
              <Field
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={update("email")}
                required
                autoComplete="email"
              />
              <Field
                label="Τηλέφωνο"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={update("phone")}
                required
                autoComplete="tel"
              />
              <Field
                label="Πόσα καταστήματα έχετε;"
                name="shops"
                type="number"
                min="1"
                value={form.shops}
                onChange={update("shops")}
                required
              />

              {status === "error" && (
                <p className="text-sm text-red-600">{errorMsg}</p>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "submitting" ? "Αποστολή..." : "Αποστολή"}
                </button>
              </div>

              <p className="text-center text-xs text-ink-muted">
                Πατώντας Αποστολή, συμφωνείτε να επικοινωνήσουμε μαζί σας για το Libra.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string; name: string }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">{label}</span>
      <input
        name={name}
        {...rest}
        className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink-muted/60 transition-colors focus:border-copper-500 focus:outline-none focus:ring-2 focus:ring-copper-400/30"
      />
    </label>
  );
}
