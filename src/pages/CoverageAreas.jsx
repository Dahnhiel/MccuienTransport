import Reveal from "../components/ui/Reveal";
import { Tag } from "../components/ui/Tag";
import CallToAction from "../components/sections/CallToAction";

export default function CoverageAreas() {
  const brandGold = "#FF8F00";
  const brandBlack = "#000000";

  // Example counties - update these to your specific service areas
  const primaryCounties = [
    "Pulaski County",
    "Faulkner County",
    "Saline County",
    "Lonoke County",
    "Jefferson County",
    "White County",
    "Grant County",
    "Perry County"
  ];

  return (
    <main className="pt-24 bg-white">
      {/* 1. HERO / MAP OVERVIEW */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <Tag>Service Network</Tag>
            <h1 className="font-black text-5xl lg:text-7xl mt-6 uppercase tracking-tighter" style={{ color: brandBlack }}>
              Regional <br /><span style={{ color: brandGold }}>Coverage</span>
            </h1>
            <p className="text-xl text-gray-600 font-medium max-w-2xl mt-8 leading-relaxed">
              Based in Central Arkansas, we provide comprehensive NEMT services across the state 
              and specialized long-distance transport to neighboring regions.
            </p>
          </Reveal>
          <Reveal delay={200}>
            {/* Visual placeholder for a map - you can replace this with a real interactive map later */}
            <div className="relative aspect-square bg-white border-2 border-gray-100 shadow-2xl flex items-center justify-center p-8 overflow-hidden">
               <div className="absolute inset-0 opacity-10 grayscale">
                  <img 
                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" 
                    alt="Map Background" 
                    className="w-full h-full object-cover"
                  />
               </div>
               <div className="relative z-10 text-center">
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 animate-pulse" style={{ backgroundColor: brandGold }} />
                  <div className="font-black text-2xl uppercase tracking-widest">Arkansas Central Hub</div>
                  <div className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.3em] mt-2">Logistics Command</div>
               </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. PRIMARY SERVICE COUNTIES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="font-black text-4xl uppercase mb-12 text-center md:text-left">
              Primary <span style={{ color: brandGold }}>Service Areas</span>
            </h2>
          </Reveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {primaryCounties.map((county, i) => (
              <Reveal key={county} delay={i * 50}>
                <div className="p-6 border-l-4 bg-gray-50 border-gray-200 hover:border-black transition-all hover:bg-white hover:shadow-lg group">
                    <span className="font-black text-sm uppercase tracking-widest group-hover:text-orange-600 transition-colors">
                      {county}
                    </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. RURAL & LONG DISTANCE CAPABILITIES */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">
            <Reveal>
              <div className="border-t-4 pt-10" style={{ borderColor: brandGold }}>
                <h3 className="font-black text-3xl uppercase mb-6">Rural Access Mission</h3>
                <p className="text-white/60 leading-relaxed font-medium">
                  We specialize in reaching underserved communities where transportation is 
                  often the biggest barrier to care. Our logistics team is equipped to 
                  handle long-range scheduling for patients in rural counties who need 
                  specialized care in metropolitan medical hubs.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="border-t-4 pt-10" style={{ borderColor: brandGold }}>
                <h3 className="font-black text-3xl uppercase mb-6">Inter-State Transit</h3>
                <p className="text-white/60 leading-relaxed font-medium">
                  Beyond our primary Arkansas hub, we offer long-distance medical 
                  transportation for specialized treatments and facility transfers 
                  across state lines, ensuring comfort and safety over long hauls.
                </p>
              </div>
            </Reveal>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}