"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Airport Transfer", href: "/booking/airport" },
  { name: "Hotel Reservations", href: "/hotels" },
  { name: "Experiences", href: "/experiences" },
  { name: "Membership", href: "/membership" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-12 py-4",
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gold flex items-center justify-center rounded-lg rotate-3 group-hover:rotate-0 transition-transform duration-300">
            <span className="text-black font-display font-bold text-xl">C</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-display font-bold text-lg leading-none tracking-tight">
              COAL CITY
            </span>
            <span className="text-gold font-display text-[10px] tracking-[0.2em] leading-none">
              CONCIERGE
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-gold transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium">Contact</span>
          </Link>
          <Link
            href="/booking"
            className="px-6 py-2.5 bg-gold hover:bg-gold-light text-black font-bold text-sm rounded-full transition-all duration-300 shadow-lg shadow-gold/20"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-charcoal border-b border-white/10 p-6 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-white/80 hover:text-gold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-white/10" />
              <Link
                href="/booking"
                className="w-full py-3 bg-gold text-black font-bold text-center rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
