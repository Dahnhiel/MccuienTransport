import Reveal from "../components/ui/Reveal";
import { Tag } from "../components/ui/Tag";
import { GoldLine } from "../components/ui/GoldLine";
import CallToAction from "../components/sections/CallToAction";
import CapabilityStatement from "../assets/capability-statement.png"; // Ensure this file exists in your public/assets folder

// Data for "Who We Serve" matched to your image
const WHO_WE_SERVE = [
  {
    title: "VA Hospitals",
    desc: "Patient transportation to and from VA medical facilities.",
    img: "https://images.unsplash.com/photo-1640500181344-c2c553585992?q=80&w=773&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Representative VA/Hospital image
  },
  {
    title: "Nursing Homes",
    desc: "Compassionate and reliable transportation for residents and appointments.",
    img: "https://images.unsplash.com/photo-1608979827489-2b855e79debe?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Senior care image
  },
  {
    title: "Dialysis Clinics",
    desc: "Dependable transportation to ensure patients never miss critical care.",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800", // Medical clinic image
  },
  {
    title: "Federal Agencies",
    desc: "Supporting federal facilities and government programs nationwide.",
    img: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?auto=format&fit=crop&q=80&w=800", // Government building image
  },
  {
    title: "Other Partners",
    desc: "Customized transportation solutions for your organization's needs.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800", // Corporate/City image
  },
];

export default function About() {
  const brandGold = "#FF8F00";
  const brandBlack = "#000000";

  return (
    <main className="pt-24 bg-white">
      {/* 1. HERO SECTION */}
      <section className="py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <Tag>Our Identity</Tag>
            <h1 className="font-black text-5xl lg:text-7xl mt-6 leading-tight" style={{ color: brandBlack }}>
              Driven by <span style={{ color: brandGold }}>Purpose.</span><br />
              Defined by <span style={{ color: brandGold }}>Reliability.</span>
            </h1>
            <GoldLine />
            <p className="text-xl text-gray-700 font-medium max-w-3xl mt-8 leading-relaxed">
              McCuien Transportation Corp. is a premier non-emergency medical transportation (NEMT) provider 
              specializing in federal, state, and private healthcare logistics.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. MISSION & CORE VALUES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <Reveal>
            <h2 className="font-black text-4xl mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              To provide safe, dependable, and compassionate transportation solutions that bridge the gap 
              between healthcare providers and the communities they serve. We ensure that no patient 
              is left behind due to a lack of mobility.
            </p>
            <div className="grid grid-cols-2 gap-4">
                {['Integrity', 'Reliability', 'Compassion', 'Safety First'].map(val => (
                    <div key={val} className="border-l-4 p-4 bg-white shadow-sm" style={{ borderColor: brandGold }}>
                        <span className="font-black uppercase tracking-widest text-xs">{val}</span>
                    </div>
                ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="relative aspect-video bg-black shadow-2xl overflow-hidden group">
               {/* Place an image of your fleet or team here */}
               <img 
                 src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=1200" 
                 alt="McCuien Logistics" 
                 className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. WHO WE SERVE (Based on your Uploaded Image) */}
      <section className="py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-black text-4xl lg:text-5xl uppercase tracking-tighter">Who We Serve</h2>
              <div className="w-20 h-1 mx-auto mt-4" style={{ backgroundColor: brandGold }} />
              <p className="text-gray-500 mt-6 max-w-2xl mx-auto font-medium">
                We provide specialized non-emergency transportation solutions for a variety of healthcare, 
                government and community partners.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {WHO_WE_SERVE.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="group">
                  <div className="aspect-[4/3] overflow-hidden rounded-sm mb-6 shadow-md border border-gray-100">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                  <h3 className="font-black text-lg uppercase tracking-tight mb-2 text-center" style={{ color: brandBlack }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm text-center leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CAPABILITY STATEMENT DOWNLOAD SECTION */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        {/* Subtle background text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
            <span className="text-white font-black text-[20vw] leading-none">CAPABILITY</span>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Reveal>
            <Tag>Procurement & Logistics</Tag>
            <h2 className="text-white font-black text-4xl lg:text-5xl mt-6 mb-8">
                Official Capability Statement
            </h2>
            <p className="text-white/60 text-lg mb-12">
                Download our full technical capabilities, past performance data, and NAICS codes 
                for government and healthcare procurement.
            </p>
            <a 
              href={CapabilityStatement} // Ensure this matches your file path
              download
              className="inline-flex items-center gap-4 bg-white text-black font-black uppercase tracking-widest px-12 py-6 hover:scale-105 transition-transform shadow-2xl"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download PDF Statement
            </a>
          </Reveal>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}