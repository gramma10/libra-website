"use client";

import { useState } from "react";
import { ContactButton } from "./ContactButton";
import { Reveal } from "@/components/ui/reveal";

const formatEuro = (n: number) =>
  new Intl.NumberFormat("el-GR", { maximumFractionDigits: 0 }).format(Math.round(n));

export function Commission() {
  const [newClients, setNewClients] = useState(50);
  const [avgFirstVisit, setAvgFirstVisit] = useState(60);

  const monthlyCommission = newClients * avgFirstVisit * 0.35;
  const yearly = monthlyCommission * 12;

  return (
    <section id="commission" aria-labelledby="commission-heading" className="bg-cream">
      <div className="container-page py-16 sm:py-24 lg:py-32">
        <div className="grid gap-10 sm:gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-copper-500" aria-hidden="true" />
              0% προμήθεια
            </span>
            <h2 id="commission-heading" className="h-section mt-6">
              0% προμήθεια.
              <br />
              <span className="shimmer-text bg-copper-gradient bg-clip-text text-transparent">
                Οι πελάτες σας, δικοί σας.
              </span>
            </h2>

            <div className="mt-7 space-y-5 text-base leading-relaxed text-ink-muted sm:text-[17px]">
              <p>
                Άλλες πλατφόρμες σας φέρνουν πελάτες από marketplace ή Google — και
                κρατάνε{" "}
                <strong className="font-medium text-ink">
                  35% από κάθε νέο ραντεβού
                </strong>
                .
              </p>
              <p>
                50 νέοι πελάτες/μήνα × €60 μέσο όρο × 35% ={" "}
                <strong className="font-medium text-ink">
                  €1.050 τον μήνα σε προμήθειες. Για πάντα.
                </strong>
              </p>
              <p>
                Το Libra δεν είναι marketplace. Είναι το δικό σας σύστημα. Κάθε πελάτης
                που κλείνει από το booking widget, το Instagram, ή τα SMS reactivation
                σας — είναι{" "}
                <strong className="font-medium text-ink">100% δικός σας</strong>. Καμία
                προμήθεια. Ποτέ.
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6" delay={0.15}>
            <div className="rounded-3xl border border-ink/10 bg-cream-50 p-2 shadow-lift">
              <div className="rounded-2xl bg-cream p-5 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-medium uppercase tracking-[0.14em] text-ink-muted">
                    Υπολογιστής προμήθειας
                  </span>
                  <span className="rounded-full bg-cream-50 px-2.5 py-1 text-[11px] font-medium text-ink-muted">
                    Σύγκριση
                  </span>
                </div>

                <div className="mt-7 space-y-7">
                  <SliderRow
                    label="Νέοι πελάτες ανά μήνα"
                    value={newClients}
                    min={10}
                    max={200}
                    step={5}
                    onChange={setNewClients}
                    display={`${newClients}`}
                  />
                  <SliderRow
                    label="Μέσος όρος πρώτης επίσκεψης"
                    value={avgFirstVisit}
                    min={20}
                    max={150}
                    step={5}
                    onChange={setAvgFirstVisit}
                    display={`€${avgFirstVisit}`}
                  />
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-ink/10 bg-cream-50 p-3 sm:p-4">
                    <div className="text-[10px] font-medium uppercase tracking-[0.14em] text-ink-muted sm:text-[11px]">
                      Σε άλλες πλατφόρμες
                    </div>
                    <div className="mt-2 font-display text-2xl font-medium tabular-nums text-ink sm:text-3xl">
                      €{formatEuro(monthlyCommission)}
                    </div>
                    <div className="mt-1 text-[11px] text-ink-muted tabular-nums sm:text-[12px]">
                      = €{formatEuro(yearly)} / χρόνο
                    </div>
                  </div>
                  <div className="rounded-xl bg-copper-gradient p-3 text-cream-50 shadow-soft sm:p-4">
                    <div className="text-[10px] font-medium uppercase tracking-[0.14em] text-cream-100/80 sm:text-[11px]">
                      Με το Libra
                    </div>
                    <div className="mt-2 font-display text-2xl font-medium tabular-nums sm:text-3xl">
                      €0
                    </div>
                    <div className="mt-1 text-[11px] text-cream-100/90 sm:text-[12px]">
                      Καμία προμήθεια. Ποτέ.
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-ink-muted">
                    30 ημέρες δωρεάν · χωρίς κάρτα
                  </p>
                  <ContactButton className="btn-primary w-full sm:w-auto">
                    <span className="hidden sm:inline">Δείτε πόσα κερδίζετε → Επικοινωνία</span>
                    <span className="sm:hidden">Επικοινωνήστε μαζί μας</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M3 7H11M11 7L7 3M11 7L7 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </ContactButton>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SliderRow({
  label,
  value,
  min,
  max,
  step,
  onChange,
  display,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (n: number) => void;
  display: string;
}) {
  const percent = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-sm font-medium text-ink">{label}</label>
        <span className="font-display text-lg font-medium tabular-nums text-ink">
          {display}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
        className="mt-3 h-2 w-full appearance-none rounded-full bg-cream-200 accent-copper-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-copper-400 focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
        style={{
          background: `linear-gradient(to right, #A66440 0%, #A66440 ${percent}%, #F4EEE2 ${percent}%, #F4EEE2 100%)`,
        }}
      />
      <div className="mt-1.5 flex justify-between text-[11px] text-ink-muted tabular-nums">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}
