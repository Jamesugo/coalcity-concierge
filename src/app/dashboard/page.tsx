"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  LayoutDashboard, 
  Calendar, 
  CreditCard, 
  Settings, 
  LogOut, 
  Bell, 
  User,
  Plus,
  ChevronRight,
  Clock
} from "lucide-react";
import { cn } from "@/lib/utils";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

const sidebarLinks = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { name: "My Bookings", icon: Calendar, href: "/dashboard/bookings" },
  { name: "Billing & Plans", icon: CreditCard, href: "/dashboard/billing" },
  { name: "Settings", icon: Settings, href: "/dashboard/settings" },
];

const recentBookings = [
  { id: "#CCC-1092", service: "Airport Pickup", date: "May 15, 2026", status: "Confirmed", amount: "₦25,000" },
  { id: "#CCC-1085", service: "Chauffeur Service", date: "May 10, 2026", status: "Completed", amount: "₦45,000" },
];

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div className="min-h-screen bg-black flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-charcoal-dark hidden lg:flex flex-col p-6">
        <Link href="/" className="flex items-center gap-2 mb-12">
          <div className="w-8 h-8 bg-gold flex items-center justify-center rounded-lg">
            <span className="text-black font-display font-bold text-lg">C</span>
          </div>
          <span className="text-white font-display font-bold text-md tracking-tight">CONCIERGE</span>
        </Link>

        <nav className="flex-grow space-y-2">
          {sidebarLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => setActiveTab(link.name)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                activeTab === link.name 
                  ? "bg-gold text-black" 
                  : "text-white/40 hover:text-white hover:bg-white/5"
              )}
            >
              <link.icon className="w-4 h-4" />
              {link.name}
            </button>
          ))}
        </nav>

        <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-500/10 transition-all mt-auto">
          <LogOut className="w-4 h-4" />
          Log Out
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col h-screen overflow-y-auto bg-luxury-black">
        {/* Top Header */}
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-charcoal-dark/50 backdrop-blur-md sticky top-0 z-20">
          <h1 className="text-xl font-display font-bold text-white">Welcome, James</h1>
          <div className="flex items-center gap-6">
            <button className="relative text-white/40 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-gold rounded-full" />
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-white/10">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center border border-gold/30">
                <User className="w-5 h-5 text-gold" />
              </div>
              <div className="hidden md:flex flex-col">
                <span className="text-white text-sm font-bold">James Ugo</span>
                <span className="text-gold text-[10px] font-bold uppercase tracking-widest">Executive Member</span>
              </div>
            </div>
          </div>
        </header>

        <div className="p-8 max-w-6xl w-full mx-auto">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <GlassCard className="border-white/5">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-gold" />
                </div>
                <span className="text-white/20 text-xs font-bold uppercase tracking-widest">Bookings</span>
              </div>
              <h4 className="text-3xl font-display font-bold text-white mb-1">12</h4>
              <p className="text-white/40 text-xs">Total service requests</p>
            </GlassCard>

            <GlassCard className="border-white/5">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <span className="text-white/20 text-xs font-bold uppercase tracking-widest">Pending</span>
              </div>
              <h4 className="text-3xl font-display font-bold text-white mb-1">2</h4>
              <p className="text-white/40 text-xs">Awaiting confirmation</p>
            </GlassCard>

            <GlassCard className="border-white/5">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-gold" />
                </div>
                <span className="text-white/20 text-xs font-bold uppercase tracking-widest">Spent</span>
              </div>
              <h4 className="text-3xl font-display font-bold text-white mb-1">₦185k</h4>
              <p className="text-white/40 text-xs">Lifetime expenditure</p>
            </GlassCard>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Bookings */}
            <div className="lg:col-span-2">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-display font-bold text-white">Recent Activity</h3>
                <Link href="/dashboard/bookings" className="text-gold text-xs font-bold uppercase tracking-widest hover:underline">View All</Link>
              </div>
              <div className="space-y-4">
                {recentBookings.map((booking) => (
                  <GlassCard key={booking.id} className="p-5 border-white/5 hover:border-white/10 transition-all flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-white/60" />
                      </div>
                      <div>
                        <h5 className="text-white font-bold text-sm">{booking.service}</h5>
                        <p className="text-white/40 text-xs">{booking.date} • {booking.id}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-white text-sm font-bold">{booking.amount}</span>
                      <span className={cn(
                        "text-[10px] font-bold uppercase tracking-widest",
                        booking.status === "Confirmed" ? "text-green-500" : "text-white/40"
                      )}>{booking.status}</span>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h3 className="text-xl font-display font-bold text-white mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <Button variant="gold" size="lg" className="w-full justify-between">
                  New Booking
                  <Plus className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="lg" className="w-full justify-between group">
                  Contact Assistant
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <GlassCard className="mt-8 border-gold/20 bg-gold/5 p-6">
                  <h5 className="text-gold font-bold text-sm mb-2">Membership Status</h5>
                  <p className="text-white/60 text-xs mb-4">You are currently on the Executive Plan. Upgrade to Elite for 24/7 personal support.</p>
                  <Link href="/membership" className="text-white text-[10px] font-bold uppercase tracking-widest hover:text-gold transition-colors underline">Upgrade Now</Link>
                </GlassCard>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
