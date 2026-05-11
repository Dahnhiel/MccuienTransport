import { Link } from "react-router-dom";
import { Tag } from "../ui/Tag";
import { GoldLine } from "../ui/GoldLine";
import Reveal from "../ui/Reveal";
import { COVERAGE } from "../../data/Coverage";

export default function CoverageSection() {
  // Brand Colors from Capability Statement
  const brandGold = "#FF8F00";
  const brandBlack = "#000000";

  return (
    <section className="bg-white py-28 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <Reveal>
            <Tag>Service Territory</Tag>
            <h2 className="font-black text-4xl lg:text-5xl leading-tight mt-6" style={{ color: brandBlack }}>
              Coverage <span style={{ color: brandGold }}>Areas</span>
            </h2>
            <GoldLine />
            <p className="text-gray-700 text-lg font-medium leading-relaxed mb-8">
              McCuien Transportation Corp. proudly serves Arkansas and
              surrounding regions with local and long-distance transportation
              solutions — including rural areas where access is often limited.
            </p>
            <Link
              to="/coverage-areas"
              className="inline-flex items-center gap-3 border-2 font-black uppercase tracking-widest text-sm px-10 py-5 transition-all duration-200 group"
              style={{ 
                borderColor: brandGold, 
                color: brandGold 
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = `${brandGold}10`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              View All Coverage Areas
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </Reveal>
 
          {/* Right: City Grid */}
          <div className="grid grid-cols-2 gap-3">
            {COVERAGE.map((city, i) => (
              <Reveal key={city} delay={i * 50}>
                <div 
                  className="flex items-center gap-3 bg-gray-50 border border-gray-100 hover:border-orange-500/30 p-4 group transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div 
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform" 
                    style={{ backgroundColor: brandGold }}
                  />
                  <span className="text-gray-800 group-hover:text-black text-sm font-black uppercase tracking-tighter transition-colors duration-300">
                    {city}
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