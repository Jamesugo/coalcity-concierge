"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";

export default function LoginPage() {
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
        <Link href="/" className="flex items-center gap-2 justify-center mb-12">
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
          <h2 className="text-3xl font-display font-bold text-white mb-2 text-center">Welcome Back</h2>
          <p className="text-white/40 text-center text-sm mb-10">Access your premium travel dashboard.</p>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-white/40">Email Address</label>
              <input 
                type="email" 
                placeholder="name@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Password</label>
                <Link href="#" className="text-xs text-gold hover:underline">Forgot password?</Link>
              </div>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold outline-none transition-all"
              />
            </div>

            <Button variant="gold" className="w-full py-4 text-md">
              Sign In
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-white/40 text-sm">
              Don't have an account?{" "}
              <Link href="/auth/signup" className="text-white font-bold hover:text-gold transition-colors">
                Sign Up
              </Link>
            </p>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}
