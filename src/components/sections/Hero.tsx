"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Luxury Concierge Hero"
          fill
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 border border-gold/30 text-gold text-xs font-bold tracking-[0.2em] uppercase mb-6">
              Exclusive Concierge Services
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-[1.1]"
          >
            Premium Travel & <br />
            <span className="text-gradient-gold">Lifestyle in Enugu</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-white/60 mb-10 leading-relaxed max-w-xl"
          >
            Experience the pinnacle of luxury with personalized airport transfers, 
            executive chauffeur services, and elite hotel reservations across South East Nigeria.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center"
          >
            {/* <Button variant="gold" size="lg" className="group px-10">
              Book Your Service
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button> */}
          </motion.div>
        </div>
      </div>

      {/* Floating Stats or Info */}
      <div className="absolute bottom-12 left-6 md:left-12 z-20 hidden lg:flex items-center gap-12">
        <div className="flex flex-col">
          <span className="text-gold font-display font-bold text-2xl">500+</span>
          <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">VIP Clients</span>
        </div>
        <div className="w-px h-8 bg-white/10" />
        <div className="flex flex-col">
          <span className="text-gold font-display font-bold text-2xl">24/7</span>
          <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Elite Support</span>
        </div>
        <div className="w-px h-8 bg-white/10" />
        <div className="flex flex-col">
          <span className="text-gold font-display font-bold text-2xl">100%</span>
          <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Discretion</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent opacity-50" />
      </motion.div>
    </section>
  );
}
