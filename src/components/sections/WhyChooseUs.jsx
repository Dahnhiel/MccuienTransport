import { Link } from "react-router-dom";
import { Tag } from "../ui/Tag";
import { GoldLine } from "../ui/GoldLine";
import Reveal from "../ui/Reveal";
import { WHY_US } from "../../data/Why-us";
import { WHY_BULLETS } from "../../data/Why-bullets";

export default function WhyChooseUs() {
  // Brand Colors from Capability Statement
  const brandGold = "#FF8F00";
  const brandBlack = "#000000";

  return (
    <section className="relative py-28 bg-white overflow-hidden">
      {/* Subtle red accent to match medical theme */}
      <div
        className="absolute right-0 top-0 w-80 h-full pointer-events-none"
        style={{
          background:
            "linear-gradient(270deg, rgba(211,47,47,0.03) 0%, transparent 100%)",
        }}
      />
 
      <div className="max-w-7xl mx-auto px-6">
        {/* Stat cards at top - Vibrant Orange-Gold */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {WHY_US.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div 
                className="p-8 text-center shadow-xl transition-transform hover:-translate-y-1"
                style={{ backgroundColor: brandGold }}
              >
                <div className="text-white font-black text-4xl tracking-tighter">{s.stat}</div>
                <div className="text-white/90 text-[10px] uppercase tracking-[0.2em] font-black mt-2">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
 
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <Tag>Our Advantage</Tag>
            <h2 className="font-black text-4xl lg:text-5xl leading-tight mt-6" style={{ color: brandBlack }}>
              Why Healthcare Organizations Choose{" "}
              <span style={{ color: brandGold }}>McCuien</span>
            </h2>
            <GoldLine />
            <p className="text-gray-700 text-lg font-medium leading-relaxed">
              We're not just a transportation company. We're a medical
              logistics partner built to meet the standards that healthcare
              organizations, government agencies, and brokers demand.
            </p>
          </Reveal>
 
          <div className="grid sm:grid-cols-2 gap-3">
            {WHY_BULLETS.map((b, i) => (
              <Reveal key={b} delay={i * 50}>
                <div 
                  className="flex items-start gap-3 bg-gray-50 border border-gray-100 hover:border-orange-500/30 p-5 transition-all duration-300 group shadow-sm hover:shadow-md"
                >
                  <div 
                    className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform shadow-sm"
                    style={{ backgroundColor: brandGold }}
                  >
                    <svg width="12" height="10" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-gray-700 group-hover:text-black text-sm font-bold leading-tight transition-colors duration-300">
                    {b}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}