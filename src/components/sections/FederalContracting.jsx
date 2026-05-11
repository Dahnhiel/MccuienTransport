import { Link } from "react-router-dom";
import { Tag } from "../ui/Tag";
import { GoldLine } from "../ui/GoldLine";
import Reveal from "../ui/Reveal";

export default function FederalContracting() {
  // Brand Colors from Capability Statement
  const brandGold = "#FF8F00";
  const brandBlack = "#000000";

  return (
    <section className="bg-white border-y py-28 relative overflow-hidden" style={{ borderColor: `${brandGold}20` }}>
      {/* Large watermark - Switched to light grey for "Bright" aesthetic */}
      <div
        className="absolute -right-10 top-1/2 -translate-y-1/2 text-[220px] font-black select-none pointer-events-none leading-none opacity-[0.03]"
        style={{ color: brandBlack }}
        aria-hidden
      >
        GOV
      </div>
 
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side */}
          <Reveal>
            <Tag>Federal & Government</Tag>
            <h2 className="font-black text-4xl lg:text-5xl leading-tight mt-6" style={{ color: brandBlack }}>
              Government &{" "}
              <span style={{ color: brandGold }}>Federal</span> Contracting
            </h2>
            <GoldLine />
            <p className="text-gray-700 text-lg font-medium leading-relaxed mb-8">
              McCuien Transportation Corp. actively supports federal, state, and
              local healthcare transportation initiatives by providing scalable
              solutions for veterans, Medicaid recipients, healthcare facilities,
              and underserved communities.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10 font-medium">
              We are positioned to partner with VA hospitals, federal agencies,
              Medicaid brokers, managed care organizations, community care
              programs, and state healthcare agencies requiring dependable
              transportation infrastructure.
            </p>
 
            {/* Checkmark List */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {[
                "SAM.gov Registered",
                "Fully Insured Fleet",
                "Background-Checked Drivers",
                "HIPAA Conscious",
                "24/7 Dispatch Support",
                "Rural Area Coverage",
                "Long-Distance Capable",
                "UEI Number Available",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <div 
                    className="w-5 h-5 flex items-center justify-center flex-shrink-0 shadow-sm" 
                    style={{ backgroundColor: brandGold }}
                  >
                    <svg width="12" height="10" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-gray-800 text-sm font-bold">{item}</span>
                </div>
              ))}
            </div>
 
            <Link
              to="/government-contracting"
              className="inline-flex items-center gap-3 text-white font-black uppercase tracking-widest text-sm px-10 py-5 transition-all duration-200 group shadow-lg"
              style={{ backgroundColor: brandGold }}
            >
              View Contracting Info
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </Reveal>
 
          {/* Right: partner types */}
          <Reveal delay={150}>
            <div className="bg-gray-50 border-l-8 p-8 shadow-xl" style={{ borderColor: brandBlack }}>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] mb-6" style={{ color: brandGold }}>
                We Partner With
              </div>
              <div className="space-y-1">
                {[
                  { icon: "🏛️", name: "VA Hospitals", desc: "Direct patient transport contracts" },
                  { icon: "🇺🇸", name: "Federal Agencies", desc: "Scalable fleet solutions" },
                  { icon: "💳", name: "Medicaid Brokers", desc: "NEMT brokerage partnerships" },
                  { icon: "🏢", name: "Managed Care Orgs", desc: "Integrated transport programs" },
                  { icon: "🤝", name: "Community Care Programs", desc: "CCN & rural access" },
                  { icon: "🏥", name: "State Healthcare Agencies", desc: "State-funded contracts" },
                  { icon: "🏗️", name: "Hospital Systems", desc: "Discharge & recurring transport" },
                ].map((p) => (
                  <div
                    key={p.name}
                    className="flex items-center gap-4 py-4 border-b border-gray-200 last:border-0 group hover:bg-white hover:px-4 transition-all duration-300"
                  >
                    <span className="text-2xl filter saturate-0 group-hover:saturate-100 transition-all">{p.icon}</span>
                    <div className="flex-1">
                      <div className="font-black text-sm uppercase tracking-tight" style={{ color: brandBlack }}>{p.name}</div>
                      <div className="text-gray-500 text-xs font-bold">{p.desc}</div>
                    </div>
                    <div 
                      className="opacity-0 group-hover:opacity-100 font-bold transition-all"
                      style={{ color: brandGold }}
                    >
                      →
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}