import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import FeaturedServices from "@/components/sections/FeaturedServices";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedServices />
        
        {/* Why Choose Us Section */}
        <section className="py-24 px-6 md:px-12 bg-charcoal-dark border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
                  The Gold Standard of <br />
                  <span className="text-gradient-gold">African Hospitality</span>
                </h2>
                <div className="space-y-6">
                  {[
                    { title: "Unmatched Discretion", desc: "Your privacy is our utmost priority. We handle every request with absolute confidentiality." },
                    { title: "Punctuality & Reliability", desc: "We understand the value of your time. Our chauffeurs and assistants are always on schedule." },
                    { title: "Local Expertise", desc: "Deep knowledge of South East Nigeria's landscape, culture, and logistics." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-6 h-6 rounded-full border border-gold flex items-center justify-center shrink-0 mt-1">
                        <div className="w-2 h-2 bg-gold rounded-full" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold mb-1">{item.title}</h4>
                        <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-gold/10">
                <img 
                  src="/chauffeur.png" 
                  alt="Luxury Chauffeur Service" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-gold font-display italic text-lg">
                    &quot;Redefining travel for the discerning visitor in South East Nigeria.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
