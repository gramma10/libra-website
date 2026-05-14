import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ContactFormRoot } from "@/components/site/ContactFormRoot";

const inter = Inter({
  subsets: ["latin", "greek"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Libra — Το Λειτουργικό Σύστημα του Σαλονιού σας",
  description:
    "Το Libra ενοποιεί ραντεβού, ταμείο, αποθήκη και marketing σε μία πλατφόρμα — και υπολογίζει το πραγματικό σας καθαρό κέρδος σε πραγματικό χρόνο. Σχεδιασμένο αποκλειστικά για την ελληνική αγορά.",
  metadataBase: new URL("https://libra.gr"),
  openGraph: {
    title: "Libra — Το Λειτουργικό Σύστημα του Σαλονιού σας",
    description:
      "All-in-one πλατφόρμα διαχείρισης για κομμωτήρια, spa και κέντρα ομορφιάς. Καθαρό κέρδος σε πραγματικό χρόνο.",
    locale: "el_GR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="el" className={inter.variable}>
      <body className="min-h-screen bg-cream font-sans text-ink">
        {children}
        <ContactFormRoot />
      </body>
    </html>
  );
}
