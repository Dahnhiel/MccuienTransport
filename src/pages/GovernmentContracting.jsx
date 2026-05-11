import Reveal from "../components/ui/Reveal";
import { Tag } from "../components/ui/Tag";
import CallToAction from "../components/sections/CallToAction";

export default function GovernmentContracting() {
  const brandGold = "#FF8F00";
  const brandBlack = "#000000";

  const codes = [
    { code: "485991", desc: "Special Needs Transportation" },
    { code: "485999", desc: "All Other Transit & Ground Passenger Transport" },
    { code: "624120", desc: "Services for Elderly & Persons with Disabilities" },
    { code: "485320", desc: "Limousine Service (NEMT Specialty)" },
  ];

  const differentiators = [
    { title: "VA Specialized", text: "Expertise in Veteran Affairs facility protocols and patient sensitivity." },
    { title: "24/7 Dispatch", text: "Always-on communication hub for real-time mission tracking." },
    { title: "HIPAA Compliant", text: "Strict data privacy and patient confidentiality standards." },
    { title: "Rural Access", text: "Specialized logistics for hard-to-reach and underserved regions." },
  ];

  return (
    <main className="pt-24 bg-white">
      {/* 1. DOCUMENT HEADER (The "Gov" Look) */}
      <section className="py-20 border-b-8" style={{ borderColor: brandGold }}>
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <Tag>Procurement Portal</Tag>
                <h1 className="font-black text-5xl lg:text-7xl mt-6 uppercase tracking-tighter" style={{ color: brandBlack }}>
                  Government <br /><span style={{ color: brandGold }}>Contracting</span>
                </h1>
              </div>
              <div className="bg-gray-50 p-6 border-2 border-gray-100 min-w-[300px]">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4">Entity Identification</div>
                <div className="space-y-3">
                    <div className="flex justify-between border-b border-gray-200 pb-1">
                        <span className="text-xs font-bold uppercase">UEI:</span>
                        <span className="text-xs font-black">NUM-V3R-HER3</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-1">
                        <span className="text-xs font-bold uppercase">CAGE:</span>
                        <span className="text-xs font-black">8ZXY1</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-xs font-bold uppercase">Status:</span>
                        <span className="text-xs font-black text-green-600">Active (SAM.gov)</span>
                    </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. CORE COMPETENCIES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <Reveal>
              <h2 className="font-black text-4xl mb-8 uppercase">Core Competencies</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10 font-medium">
                McCuien Transportation Corp. provides mission-critical logistics and NEMT services 
                to federal agencies. We specialize in the safe transfer of ambulatory and 
                wheelchair-bound passengers with a focus on punctuality and high-level medical compliance.
              </p>
              <ul className="space-y-4">
                {[
                  "Ambulatory & Wheelchair Transportation",
                  "VA Medical Center Shuttle Operations",
                  "Multi-Passenger Facility Transit",
                  "Emergency Backup Logistics",
                  "Scheduled Recurring Routes"
                ].map(item => (
                  <li key={item} className="flex items-center gap-4 font-black text-sm uppercase tracking-wide">
                    <div className="w-2 h-2 rotate-45" style={{ backgroundColor: brandGold }} />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={200}>
                <div className="grid grid-cols-1 gap-6">
                    {differentiators.map(item => (
                        <div key={item.title} className="p-8 bg-gray-50 border-l-8 hover:shadow-xl transition-shadow" style={{ borderLeftColor: brandGold }}>
                            <h3 className="font-black text-xl uppercase mb-2">{item.title}</h3>
                            <p className="text-gray-500 text-sm font-medium">{item.text}</p>
                        </div>
                    ))}
                </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. CODES & DATA GRID */}
      <section className="py-24 bg-black text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal>
            <div className="mb-16">
              <h2 className="text-4xl lg:text-5xl font-black uppercase mb-4">North American Industry <br /> Classification System</h2>
              <div className="w-24 h-2" style={{ backgroundColor: brandGold }} />
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {codes.map((item, i) => (
              <Reveal key={item.code} delay={i * 100}>
                <div className="bg-black p-10 h-full hover:bg-white/5 transition-colors">
                  <div className="text-4xl font-black mb-4" style={{ color: brandGold }}>{item.code}</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-white/70">{item.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PAST PERFORMANCE PLACEHOLDER */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <Reveal>
                <div className="border-2 border-dashed border-gray-200 p-16 text-center">
                    <h2 className="font-black text-3xl uppercase mb-4 text-gray-300">Past Performance</h2>
                    <p className="text-gray-400 font-medium max-w-lg mx-auto">
                        Detailed past performance records including agency names, contract values, and periods of performance 
                        available upon request via our Capability Statement.
                    </p>
                </div>
            </Reveal>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}