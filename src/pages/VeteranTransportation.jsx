import Reveal from "../components/ui/Reveal";
import CallToAction from "../components/sections/CallToAction";

export default function VeteranTransportation() {
  const brandGold = "#FF8F00";
  const brandBlack = "#000000";
  const medicalRed = "#D32F2F";

  const vaCenters = [
    "Central Arkansas Veterans Healthcare System",
    "Little Rock VA Medical Center",
    "North Little Rock VA Health Care System",
    "Fayetteville VA Medical Center (VHSO)",
    "Community Based Outpatient Clinics (CBOCs)"
  ];

  return (
    <main className="pt-24 bg-white">
      {/* 1. HONOR HERO SECTION */}
      <section className="relative py-24 bg-gray-950 overflow-hidden">
        {/* Subtle Flag Texture Overlay */}
        <div className="absolute inset-0 opacity-10 grayscale pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1508612761958-e931d843bdd5?auto=format&fit=crop&q=80&w=2000" 
              className="w-full h-full object-cover" 
              alt="Flag Texture"
            />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
                <div className="h-[2px] w-12" style={{ backgroundColor: medicalRed }} />
                <span className="text-white font-black uppercase tracking-[0.4em] text-[10px]">Mission First</span>
            </div>
            <h1 className="text-white font-black text-5xl lg:text-7xl uppercase tracking-tighter leading-none">
              Serving Those <br />
              <span style={{ color: brandGold }}>Who Served.</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mt-8 leading-relaxed font-medium">
              McCuien Transportation Corp. is dedicated to providing honorable, 
              safe, and reliable transit for our nation’s veterans to VA hospitals 
              and outpatient clinics across the region.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. THE VA LOGISTICS PARTNER */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <Reveal>
            <h2 className="font-black text-4xl uppercase mb-8">Specialized <span style={{ color: brandGold }}>VA Protocol</span></h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Navigating VA medical campuses requires experience. Our drivers are trained 
              specifically in VA facility layouts, check-in procedures, and the 
              sensitivity required for veterans dealing with mobility challenges or 
              service-related health conditions.
            </p>
            <div className="space-y-4">
                {vaCenters.map(center => (
                    <div key={center} className="flex items-center gap-4 group">
                        <div className="w-2 h-2 rounded-full transition-transform group-hover:scale-150" style={{ backgroundColor: medicalRed }} />
                        <span className="font-bold text-sm uppercase tracking-wide text-gray-800">{center}</span>
                    </div>
                ))}
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="relative p-2 border-2 border-gray-100 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200" 
                alt="Veterans Care" 
                className="w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-black p-8 text-white hidden md:block">
                <div className="text-3xl font-black" style={{ color: brandGold }}>100%</div>
                <div className="text-[10px] uppercase font-black tracking-widest text-white/50">VA Compliance</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. VETERAN-CENTRIC FEATURES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <Reveal>
              <div className="h-full">
                <h3 className="font-black text-xl uppercase mb-4 flex items-center gap-3">
                    <span style={{ color: brandGold }}>01.</span> Respectful Service
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We don't just drop off. We ensure veterans are safely inside their 
                  destination and know exactly where their return pickup will be.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="h-full">
                <h3 className="font-black text-xl uppercase mb-4 flex items-center gap-3">
                    <span style={{ color: brandGold }}>02.</span> Flexible Scheduling
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We understand VA appointments can run over. Our dispatch works 
                  dynamically to ensure no veteran is left waiting at the facility.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="h-full">
                <h3 className="font-black text-xl uppercase mb-4 flex items-center gap-3">
                    <span style={{ color: brandGold }}>03.</span> Companion Seating
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Family members or caregivers are welcome to ride along to provide 
                  extra support during the journey and medical visit.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. PATRIOT STRIP */}
      <section className="py-12 border-y-2 border-gray-100 flex justify-center">
        <div className="flex flex-wrap justify-center gap-12 md:gap-24">
            {['Reliable', 'Honorable', 'Safe', 'Mission-Ready'].map(word => (
                <span key={word} className="font-black text-gray-200 text-2xl uppercase tracking-[0.2em]">{word}</span>
            ))}
        </div>
      </section>

      <CallToAction />
    </main>
  );
}