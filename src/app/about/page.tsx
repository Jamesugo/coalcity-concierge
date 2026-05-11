import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Our Story</span>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
                Crafting Excellence in <span className="text-gradient-gold">South East Nigeria</span>
              </h1>
              <p className="text-white/60 mb-6 leading-relaxed">
                Founded with a vision to redefine luxury travel in West Africa, Coal City Concierge 
                is more than just a transportation service. We are your premium gateway to the 
                rich culture, business opportunities, and scenic beauty of Enugu State and beyond.
              </p>
              <p className="text-white/60 mb-8 leading-relaxed">
                We recognized a gap in high-end, reliable hospitality for diaspora Nigerians, 
                international business travelers, and VIP guests visiting the region. Our mission 
                is to provide a world-class standard of service that rivals the best concierge 
                companies globally, while maintaining deep local roots.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                <div>
                  <h4 className="text-2xl font-display font-bold text-gold mb-1">Elite</h4>
                  <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Standard of Service</p>
                </div>
                <div>
                  <h4 className="text-2xl font-display font-bold text-gold mb-1">Secure</h4>
                  <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Travel Environment</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-gold/10">
                <img src="/hero.png" alt="Coal City Luxury" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gold p-8 rounded-3xl hidden md:flex flex-col justify-end">
                <span className="text-black font-display font-bold text-4xl mb-2">100%</span>
                <span className="text-black/60 text-xs font-bold leading-tight uppercase tracking-widest">Client Satisfaction Rate</span>
              </div>
            </div>
          </div>

          {/* Mission/Vision */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <GlassCard className="text-center">
              <h3 className="text-xl font-display font-bold text-white mb-4">Our Mission</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                To provide seamless, premium concierge solutions that exceed expectations 
                and showcase the best of Nigerian hospitality.
              </p>
            </GlassCard>
            <GlassCard className="text-center">
              <h3 className="text-xl font-display font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                To become the leading luxury travel-tech ecosystem in Africa, 
                starting from the coal city of Enugu.
              </p>
            </GlassCard>
            <GlassCard className="text-center">
              <h3 className="text-xl font-display font-bold text-white mb-4">Our Values</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                Discretion, punctuality, excellence, and a passion for personalized service 
                drive everything we do.
              </p>
            </GlassCard>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
