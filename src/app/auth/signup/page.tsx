"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gold/5 blur-[150px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        <Link href="/" className="flex items-center gap-2 justify-center mb-10">
          <div className="w-10 h-10 bg-gold flex items-center justify-center rounded-lg rotate-3">
            <span className="text-black font-display font-bold text-xl">C</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-white font-display font-bold text-lg leading-none tracking-tight">
              COAL CITY
            </span>
            <span className="text-gold font-display text-[10px] tracking-[0.2em] leading-none">
              CONCIERGE
            </span>
          </div>
        </Link>

        <GlassCard className="p-10 border-white/10 glow">
          <h2 className="text-3xl font-display font-bold text-white mb-2 text-center">Join the Elite</h2>
          <p className="text-white/40 text-center text-sm mb-8">Start your luxury travel experience today.</p>

          <form className="space-y-4">
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
                placeholder="name@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-white/40">Password</label>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold outline-none transition-all"
              />
            </div>

            <div className="flex items-center gap-2 py-2">
              <input type="checkbox" id="terms" className="w-4 h-4 rounded border-white/10 bg-white/5 text-gold focus:ring-gold" />
              <label htmlFor="terms" className="text-[10px] text-white/40">
                I agree to the <Link href="/terms" className="text-gold">Terms of Service</Link> and <Link href="/privacy" className="text-gold">Privacy Policy</Link>
              </label>
            </div>

            <Button variant="gold" className="w-full py-4 text-md">
              Create Account
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-white/40 text-sm">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-white font-bold hover:text-gold transition-colors">
                Log In
              </Link>
            </p>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}
