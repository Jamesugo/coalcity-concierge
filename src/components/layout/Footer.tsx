import React from "react";
import Link from "next/link";
import { Camera, Send, Share2, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Airport Transfer", href: "/booking/airport" },
    { name: "Chauffeur Services", href: "/services" },
    { name: "Hotel Reservations", href: "/hotels" },
    { name: "Event Transportation", href: "/services" },
    { name: "VIP Concierge", href: "/services" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Fleet", href: "/fleet" },
    { name: "Membership", href: "/membership" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "FAQ", href: "/faq" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal-dark border-t border-white/5 pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gold flex items-center justify-center rounded-md rotate-3">
              <span className="text-black font-display font-bold text-lg">C</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-display font-bold text-md leading-none tracking-tight">
                COAL CITY
              </span>
              <span className="text-gold font-display text-[8px] tracking-[0.2em] leading-none">
                CONCIERGE
              </span>
            </div>
          </Link>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            The pinnacle of luxury concierge and travel services in South East Nigeria. 
            Redefining your travel experience with excellence and discretion.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-gold hover:text-gold transition-all">
              <Camera className="w-4 h-4" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-gold hover:text-gold transition-all">
              <Send className="w-4 h-4" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-gold hover:text-gold transition-all">
              <Share2 className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-display font-bold mb-6">Services</h4>
          <ul className="flex flex-col gap-4">
            {footerLinks.services.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-white/50 text-sm hover:text-gold transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-bold mb-6">Company</h4>
          <ul className="flex flex-col gap-4">
            {footerLinks.company.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-white/50 text-sm hover:text-gold transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-display font-bold mb-6">Get in Touch</h4>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3 text-white/50 text-sm">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <span>Enugu, Nigeria</span>
            </li>
            <li className="flex items-center gap-3 text-white/50 text-sm">
              <Phone className="w-4 h-4 text-gold shrink-0" />
              <span>+234 000 000 0000</span>
            </li>
            <li className="flex items-center gap-3 text-white/50 text-sm">
              <Mail className="w-4 h-4 text-gold shrink-0" />
              <span>hello@coalcityconcierge.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/30 text-xs">
          © {new Date().getFullYear()} Coal City Concierge. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {footerLinks.legal.map((link) => (
            <Link key={link.name} href={link.href} className="text-white/30 text-xs hover:text-white transition-colors">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
