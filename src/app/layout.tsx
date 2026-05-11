import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coal City Concierge | Premium Travel & Lifestyle Services in Enugu",
  description: "Experience the pinnacle of luxury with Coal City Concierge. Premium airport pickups, chauffeur services, hotel reservations, and VIP experiences across South East Nigeria.",
  keywords: ["luxury concierge Enugu", "airport pickup Enugu", "VIP travel Nigeria", "Coal City Concierge", "premium chauffeur Enugu"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-black text-white selection:bg-gold/30 selection:text-gold-light`}
      >
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
