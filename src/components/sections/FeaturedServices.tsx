"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plane, Car, Hotel, Shield, Map, Coffee } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

const services = [
  {
    title: "Airport Transfer",
    description: "Premium pickup and drop-off at Akanu Ibiam International Airport with professional chauffeurs.",
    icon: Plane,
    href: "/booking/airport",
    color: "gold",
  },
  {
    title: "Executive Chauffeur",
    description: "Navigate Enugu and beyond in comfort and style with our fleet of luxury vehicles.",
    icon: Car,
    href: "/services",
    color: "gold",
  },
  {
    title: "Hotel Reservations",
    description: "Exclusive access and priority booking at the most prestigious hotels in South East Nigeria.",
    icon: Hotel,
    href: "/hotels",
    color: "gold",
  },
  {
    title: "Security Escorts",
    description: "Discreet and professional security coordination for high-profile clients and visitors.",
    icon: Shield,
    href: "/services",
    color: "gold",
  },
  {
    title: "VIP Concierge",
    description: "From restaurant reservations to personal shopping, our assistants handle every detail.",
    icon: Coffee,
    href: "/services",
    color: "gold",
  },
  {
    title: "South East Tours",
    description: "Explore the hidden gems of Enugu State, from waterfalls to cultural landmarks.",
    icon: Map,
    href: "/experiences",
    color: "gold",
  },
];

export default function FeaturedServices() {
  return (
    <section className="py-24 px-6 md:px-12 bg-black relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
          >
            Our <span className="text-gradient-gold">Bespoke Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/50 max-w-2xl mx-auto"
          >
            We provide a comprehensive suite of luxury travel and lifestyle management 
            solutions tailored to your specific needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full border-white/5 hover:border-gold/30 transition-all duration-500">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="mt-auto flex items-center text-gold text-xs font-bold tracking-widest uppercase group-hover:gap-2 transition-all">
                  <span>Discover More</span>
                  <div className="w-0 group-hover:w-4 h-px bg-gold transition-all" />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
