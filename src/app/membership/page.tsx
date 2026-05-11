"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { Check, Crown, Star, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Standard",
    price: "25,000",
    period: "month",
    description: "Ideal for occasional travelers seeking reliable luxury.",
    features: [
      "Airport pickup & dropoff booking",
      "Basic hotel reservation assistance",
      "WhatsApp support",
      "Standard response time",
      "Access to trusted drivers",
      "Up to 2 bookings monthly",
      "Local travel assistance",
      "Booking reminders",
    ],
    variant: "silver",
    icon: Star,
  },
  {
    name: "Executive",
    price: "75,000",
    period: "month",
    description: "Priority access and dedicated assistance for frequent travelers.",
    features: [
      "Everything in Standard",
      "Priority airport pickups",
      "Executive vehicle access",
      "Priority WhatsApp support",
      "Unlimited bookings",
      "Restaurant reservations",
      "Event transportation coordination",
      "Business travel assistance",
      "Dedicated concierge assistant",
      "Partner hotel discounts",
    ],
    variant: "gold",
    badge: "Most Popular",
    icon: Crown,
  },
  {
    name: "Elite VIP",
    price: "250,000",
    period: "month",
    description: "The ultimate lifestyle management experience.",
    features: [
      "Everything in Executive",
      "24/7 personal concierge",
      "VIP airport fast-track assistance",
      "Luxury SUV & chauffeur service",
      "Security escort coordination",
      "Personal shopping assistance",
      "Private event coordination",
      "Luxury hotel priority booking",
      "Emergency travel support",
      "Dedicated account manager",
      "Unlimited premium requests",
      "White-glove concierge experience",
    ],
    variant: "vip",
    icon: ShieldCheck,
  },
];

export default function MembershipPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Choose Your <span className="text-gradient-gold">Concierge Experience</span>
          </h1>
          <p className="text-white/50 mb-12 max-w-2xl mx-auto">
            Flexible concierge plans designed for travelers, business professionals, and VIP clients 
            visiting Enugu and South East Nigeria.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className={cn("text-sm font-medium", billingCycle === "monthly" ? "text-white" : "text-white/40")}>Monthly</span>
            <button 
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
              className="w-14 h-7 bg-white/10 rounded-full relative p-1 transition-colors hover:bg-white/20"
            >
              <div className={cn(
                "w-5 h-5 bg-gold rounded-full transition-transform duration-300",
                billingCycle === "yearly" ? "translate-x-7" : "translate-x-0"
              )} />
            </button>
            <div className="flex items-center gap-2">
              <span className={cn("text-sm font-medium", billingCycle === "yearly" ? "text-white" : "text-white/40")}>Yearly</span>
              <span className="px-2 py-0.5 bg-gold/20 text-gold text-[10px] font-bold rounded-md">Save 15%</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <GlassCard 
                key={index} 
                className={cn(
                  "flex flex-col text-left border-white/5 transition-all duration-500",
                  plan.variant === "gold" && "border-gold/30 gold-glow scale-105 z-10",
                  plan.variant === "vip" && "bg-gradient-to-b from-gold/10 to-transparent border-gold/40"
                )}
              >
                {plan.badge && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gold text-black text-[10px] font-bold rounded-full uppercase tracking-widest">
                    {plan.badge}
                  </div>
                )}
                
                <div className="mb-8">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                    <plan.icon className={cn("w-6 h-6", plan.variant === "silver" ? "text-white/60" : "text-gold")} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-white/40 text-xs">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-display font-bold text-white">₦{plan.price}</span>
                    <span className="text-white/40 text-sm">/{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex gap-3 text-sm">
                      <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <span className="text-white/60">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant={plan.variant === "silver" ? "outline" : "gold"} 
                  className="w-full"
                >
                  {plan.variant === "vip" ? "Become VIP" : plan.variant === "gold" ? "Upgrade to Executive" : "Get Started"}
                </Button>
              </GlassCard>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
