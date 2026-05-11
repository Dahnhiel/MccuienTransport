import { Link } from "react-router-dom";
import { Tag } from "../ui/Tag";
import { GoldLine } from "../ui/GoldLine";
import Reveal from "../ui/Reveal";

export default function VeteranSection() {
  // Brand Colors from Capability Statement
  const brandGold = "#FF8F00";
  const brandBlack = "#000000";
  const medicalRed = "#D32F2F";

  return (
    <section className="relative py-28 overflow-hidden bg-white">
      {/* Subtle gold diagonal band for "Bright" aesthetic */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            `linear-gradient(160deg, ${brandGold}08 0%, transparent 50%)`,
        }}
      />
      {/* Red accent stripe - Kept for Medical/Veteran honor */}
      <div className="absolute top-0 left-0 right-0 h-1.5" style={{ backgroundColor: medicalRed }} />
 
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left: Flag-inspired decoration block */}
          <div className="lg:col-span-2 hidden lg:block">
            <Reveal>
              <div className="relative border-2 p-8 bg-gray-50 shadow-xl" style={{ borderColor: `${brandGold}30` }}>
                {/* Shiny Gold Corners */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4" style={{ borderColor: brandGold }} />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4" style={{ borderColor: brandGold }} />
 
                <div className="text-6xl mb-6">🎖️</div>
                <div className="font-black text-[10px] uppercase tracking-widest mb-3" style={{ color: brandGold }}>
                  Our Commitment
                </div>
                <p className="text-black font-black text-xl leading-tight mb-6 italic">
                  "Our mission is to ensure veterans arrive safely, comfortably,
                  and on time for every appointment."
                </p>
                <div className="w-12 h-1 mb-6" style={{ backgroundColor: brandGold }} />
                <div className="text-gray-500 text-xs font-black uppercase tracking-tighter">
                  McCuien Transportation Corp.
                </div>
 
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {[
                    { n: "VA", sub: "Hospitals" },
                    { n: "VA", sub: "Clinics" },
                    { n: "CCN", sub: "Program" },
                    { n: "MHC", sub: "Appointments" },
                  ].map((s) => (
                    <div key={s.sub} className="bg-white border border-gray-200 p-3 text-center shadow-sm">
                      <div className="font-black text-sm" style={{ color: brandGold }}>{s.n}</div>
                      <div className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">{s.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
 
          {/* Right: copy */}
          <div className="lg:col-span-3">
            <Reveal delay={100}>
              <Tag>Serving Those Who Served</Tag>
              <h2 className="font-black text-4xl lg:text-5xl leading-tight mt-6" style={{ color: brandBlack }}>
                Transportation Services{" "}
                <span style={{ color: brandGold }}>for Veterans</span>
              </h2>
              <GoldLine />
              <p className="text-gray-700 text-lg font-medium leading-relaxed mb-8">
                We proudly support America's veterans by providing dependable
                transportation to and from every VA facility, specialty clinic,
                and community care appointment — so no veteran misses the care
                they've earned.
              </p>
 
              {/* Service List */}
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {[
                  "VA Hospitals",
                  "VA Clinics & Outpatient",
                  "Community Care Appointments",
                  "Rehabilitation Programs",
                  "Dialysis Treatments",
                  "Specialty Medical Visits",
                  "Mental Health Appointments",
                  "Long-Distance Medical Travel",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: brandGold }} />
                    <span className="text-gray-800 text-sm font-bold uppercase tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
 
              <Link
                to="/veteran-transportation"
                className="inline-flex items-center gap-3 text-white font-black uppercase tracking-widest text-sm px-10 py-5 transition-all duration-200 group shadow-lg"
                style={{ backgroundColor: brandGold }}
              >
                Veteran Services
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}