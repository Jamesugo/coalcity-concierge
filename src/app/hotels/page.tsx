import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { Star, MapPin } from "lucide-react";

const hotels = [
  {
    name: "The Grand Regal Hotel",
    location: "Independence Layout, Enugu",
    price: "85,000",
    rating: 4.8,
    image: "/hotel.png",
    amenities: ["Free WiFi", "Infinity Pool", "Gourmet Restaurant", "24/7 Security"],
  },
  {
    name: "Coal City Luxury Suites",
    location: "GRA, Enugu",
    price: "120,000",
    rating: 4.9,
    image: "/hero.png",
    amenities: ["Private Balcony", "Executive Lounge", "Luxury Spa", "Smart Room"],
  },
  {
    name: "Owerri Signature Palace",
    location: "New Owerri, Imo",
    price: "95,000",
    rating: 4.7,
    image: "/chauffeur.png",
    amenities: ["Airport Shuttle", "State-of-the-art Gym", "Wine Cellar", "VIP Bar"],
  },
];

export default function HotelsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                Elite <span className="text-gradient-gold">Hotel Reservations</span>
              </h1>
              <p className="text-white/50 leading-relaxed">
                We partner with the most prestigious hotels in South East Nigeria to offer 
                you exclusive rates, room upgrades, and a seamless check-in experience.
              </p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" size="sm">All Cities</Button>
              <Button variant="gold" size="sm">Enugu</Button>
              <Button variant="outline" size="sm">Owerri</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {hotels.map((hotel, index) => (
              <GlassCard key={index} className="p-0 border-white/5 group overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={hotel.image} 
                    alt={hotel.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 text-gold fill-gold" />
                    <span className="text-white text-xs font-bold">{hotel.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-2 mb-2 text-gold/60">
                    <MapPin className="w-3 h-3 shrink-0 mt-1" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">{hotel.location}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-4">{hotel.name}</h3>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {hotel.amenities.map((amenity, i) => (
                      <span key={i} className="px-2 py-1 bg-white/5 rounded text-[10px] text-white/40">
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-white/5 pt-6">
                    <div className="flex flex-col">
                      <span className="text-white font-display font-bold text-lg">₦{hotel.price}</span>
                      <span className="text-white/30 text-[10px] uppercase tracking-tighter">Per Night</span>
                    </div>
                    <Button variant="gold" size="sm">Book Now</Button>
                  </div>
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
