import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { Plane, Car, Hotel, Shield, Map, Coffee, ShoppingBag, Briefcase, Users } from "lucide-react";

const allServices = [
  {
    title: "Airport Pickup & Dropoff",
    description: "Premium flight monitoring and meet-and-greet services at Enugu and Owerri airports.",
    icon: Plane,
    image: "/hero.png",
  },
  {
    title: "Executive Chauffeur",
    description: "Daily or hourly luxury vehicle rentals with professional, vetted chauffeurs.",
    icon: Car,
    image: "/chauffeur.png",
  },
  {
    title: "Hotel Reservations",
    description: "Preferential rates and room upgrades at partner luxury hotels in the South East.",
    icon: Hotel,
    image: "/hotel.png",
  },
  {
    title: "Inter-State Travel",
    description: "Safe and comfortable long-distance luxury travel between major Nigerian cities.",
    icon: Map,
    image: "/tour.png",
  },
  {
    title: "VIP Concierge",
    description: "Personalized lifestyle management including restaurant bookings and event access.",
    icon: Coffee,
    image: "/chauffeur.png",
  },
  {
    title: "Security Escort Services",
    description: "Highly trained security personnel and armored vehicle options for maximum peace of mind.",
    icon: Shield,
    image: "/hero.png",
  },
  {
    title: "Personal Shopping",
    description: "Dedicated assistants to source luxury goods and traditional South East artifacts.",
    icon: ShoppingBag,
    image: "/hotel.png",
  },
  {
    title: "Corporate Travel",
    description: "End-to-end travel management for business delegations and corporate retreats.",
    icon: Briefcase,
    image: "/chauffeur.png",
  },
  {
    title: "Event Transportation",
    description: "Coordinated luxury logistics for weddings, funerals, and high-profile ceremonies.",
    icon: Users,
    image: "/hero.png",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
              Our <span className="text-gradient-gold">Services</span>
            </h1>
            <p className="text-white/50 max-w-2xl">
              From the moment you land until your departure, we ensure every aspect of your 
              journey is seamless, secure, and sophisticated.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <GlassCard key={index} className="flex flex-col p-0 overflow-hidden border-white/5 group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute top-4 left-4 w-10 h-10 bg-gold rounded-lg flex items-center justify-center shadow-lg">
                    <service.icon className="w-5 h-5 text-black" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-display font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
