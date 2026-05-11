"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Get in <span className="text-gradient-gold">Touch</span>
            </h1>
            <p className="text-white/50 max-w-2xl mx-auto">
              Our concierge team is available 24/7 to assist with your inquiries and 
              special requests. Reach out to us via any of the channels below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <GlassCard className="p-8">
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center mb-6">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <h4 className="text-white font-bold mb-2">Call Us</h4>
                <p className="text-white/40 text-sm mb-4">Direct line for immediate assistance.</p>
                <p className="text-gold font-bold">+234 000 000 0000</p>
              </GlassCard>

              <GlassCard className="p-8">
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center mb-6">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <h4 className="text-white font-bold mb-2">Email Us</h4>
                <p className="text-white/40 text-sm mb-4">For partnerships and formal inquiries.</p>
                <p className="text-gold font-bold">concierge@coalcity.com</p>
              </GlassCard>

              <GlassCard className="p-8">
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center mb-6">
                  <MessageCircle className="w-5 h-5 text-gold" />
                </div>
                <h4 className="text-white font-bold mb-2">WhatsApp</h4>
                <p className="text-white/40 text-sm mb-4">Chat directly with an assistant.</p>
                <Button variant="gold" size="sm" className="w-full">
                  Start Chat
                </Button>
              </GlassCard>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <GlassCard className="p-10 border-white/10 h-full">
                <h3 className="text-2xl font-display font-bold text-white mb-8">Send a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/40">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/40">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold outline-none transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40">Subject</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold outline-none transition-all">
                      <option className="bg-charcoal">General Inquiry</option>
                      <option className="bg-charcoal">Booking Support</option>
                      <option className="bg-charcoal">Corporate Partnership</option>
                      <option className="bg-charcoal">Membership Feedback</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40">Your Message</label>
                    <textarea 
                      rows={5}
                      placeholder="How can we assist you today?"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold outline-none transition-all resize-none"
                    />
                  </div>

                  <Button variant="gold" size="lg" className="w-full md:w-auto px-12 group">
                    Send Message
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </form>
              </GlassCard>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
