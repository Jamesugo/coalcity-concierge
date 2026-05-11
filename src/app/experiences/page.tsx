import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { Compass, Camera } from "lucide-react";

const experiences = [
  {
    title: "Ngwo Pine Forest & Cave",
    category: "Nature & Adventure",
    description: "A private guided trek through the majestic pine forest ending with a serene waterfall swim.",
    image: "/tour.png",
    duration: "4-5 Hours",
  },
  {
    title: "Igbos in Diaspora Night",
    category: "Culture & Nightlife",
    description: "Exclusive access to the most high-end clubs and cultural lounges in Enugu with VIP hosting.",
    image: "/chauffeur.png",
    duration: "Evening",
  },
  {
    title: "Authentic Culinary Tour",
    category: "Food & Heritage",
    description: "Taste the finest local delicacies (Abacha, Nkwobi, etc.) in curated, hygienic premium settings.",
    image: "/hotel.png",
    duration: "3 Hours",
  },
  {
    title: "Awhum Waterfall Retreat",
    category: "Spiritual & Scenic",
    description: "A peaceful journey to the healing waters of Awhum, including a luxury picnic setup.",
    image: "/hero.png",
    duration: "Full Day",
  },
];

export default function ExperiencesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Curated <span className="text-gradient-gold">Experiences</span>
            </h1>
            <p className="text-white/50 max-w-2xl leading-relaxed">
              Discover the hidden soul of South East Nigeria. From natural wonders to 
              vibrant cultural heritage, our bespoke tours are designed for the modern explorer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {experiences.map((exp, index) => (
              <div key={index} className="group relative rounded-3xl overflow-hidden aspect-[16/10]">
                <img 
                  src={exp.image} 
                  alt={exp.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-block px-3 py-1 bg-gold text-black text-[10px] font-bold rounded-full uppercase tracking-widest mb-4">
                    {exp.category}
                  </span>
                  <h3 className="text-3xl font-display font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-white/60 text-sm mb-6 max-w-md line-clamp-2">
                    {exp.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gold text-xs">
                      <Compass className="w-4 h-4" />
                      <span className="font-bold">{exp.duration}</span>
                    </div>
                    <Button variant="outline" size="sm" className="bg-white/10 backdrop-blur-md border-white/20">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <GlassCard className="max-w-3xl mx-auto p-12 border-gold/20 bg-gold/5">
              <h2 className="text-2xl font-display font-bold text-white mb-4">Plan a Custom Experience?</h2>
              <p className="text-white/40 mb-8">
                Have a specific destination or cultural event in mind? Our concierge team 
                can build a tailored itinerary just for you or your group.
              </p>
              <Button variant="gold" size="lg">Contact Our Specialists</Button>
            </GlassCard>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
