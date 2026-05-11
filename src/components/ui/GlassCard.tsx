"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function GlassCard({
  children,
  className,
  hover = true,
  glow = false,
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5, transition: { duration: 0.3 } } : {}}
      className={cn(
        "glass rounded-2xl p-6 relative overflow-hidden group",
        glow && "gold-glow",
        className
      )}
    >
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
