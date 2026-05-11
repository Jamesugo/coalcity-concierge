"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { Plane, Calendar, Clock, Users, ChevronRight, MapPin } from "lucide-react";

export default function AirportTransferPage() {
  const [formData, setFormData] = useState({
    airport: "Enugu (ENU)",
    type: "Pickup",
    vehicle: "Executive Sedan",
    passengers: "1",
    date: "",
    time: "",
    flightNumber: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[150px] -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Content */}
            <div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                Elite <span className="text-gradient-gold">Airport Transfers</span>
              </h1>
              <p className="text-white/50 mb-10 leading-relaxed max-w-lg">
                Seamless transitions between the sky and the city. Our professional chauffeurs 
                await your arrival with a personalized welcome and a premium vehicle fleet.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Meet & Greet</h4>
                    <p className="text-white/40 text-sm">Personalized signage and luggage assistance upon arrival.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
                    <Plane className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Flight Tracking</h4>
                    <p className="text-white/40 text-sm">We monitor your flight in real-time to ensure punctual pickup.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Wait Time Included</h4>
                    <p className="text-white/40 text-sm">60 minutes complimentary waiting time for international arrivals.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <GlassCard className="p-8 border-white/10 glow">
              <h3 className="text-2xl font-display font-bold text-white mb-8">Book Your Transfer</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40">Select Airport</label>
                    <select 
                      name="airport" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold outline-none transition-all"
                      onChange={handleInputChange}
                      value={formData.airport}
                    >
                      <option className="bg-charcoal">Enugu (ENU) - Akanu Ibiam</option>
                      <option className="bg-charcoal">Owerri (QOW) - Sam Mbakwe</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40">Service Type</label>
                    <select 
                      name="type" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold outline-none transition-all"
                      onChange={handleInputChange}
                      value={formData.type}
                    >
                      <option className="bg-charcoal">Airport Pickup</option>
                      <option className="bg-charcoal">Airport Dropoff</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40">Vehicle Class</label>
                    <select 
                      name="vehicle" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold outline-none transition-all"
                      onChange={handleInputChange}
                      value={formData.vehicle}
                    >
                      <option className="bg-charcoal">Executive Sedan</option>
                      <option className="bg-charcoal">Luxury SUV</option>
                      <option className="bg-charcoal">VIP Sprinter Van</option>
                      <option className="bg-charcoal">Economy (Toyota Camry/Similar)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40">Passengers</label>
                    <input 
                      type="number" 
                      name="passengers" 
                      min="1" 
                      max="12"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold outline-none transition-all"
                      onChange={handleInputChange}
                      value={formData.passengers}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40">Arrival Date</label>
                    <input 
                      type="date" 
                      name="date" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold outline-none transition-all"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40">Arrival Time</label>
                    <input 
                      type="time" 
                      name="time" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold outline-none transition-all"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Flight Number</label>
                  <input 
                    type="text" 
                    name="flightNumber" 
                    placeholder="e.g. AW 123"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold outline-none transition-all"
                    onChange={handleInputChange}
                  />
                </div>

                <Button variant="gold" size="lg" className="w-full group mt-4">
                  Request Booking
                  <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-[10px] text-white/30 text-center">
                  By booking, you agree to our terms of service. A concierge will contact you on WhatsApp to confirm details.
                </p>
              </form>
            </GlassCard>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
