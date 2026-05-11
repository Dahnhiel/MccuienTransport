import { Link } from "react-router-dom";
import { Tag } from "../ui/Tag";
import { GoldLine } from "../ui/GoldLine";
import Reveal from "../ui/Reveal";
import { FACILITIES } from "../../data/Facilities";

export default function FacilitiesSection() {
  // Brand Colors from Capability Statement
  const brandGold = "#FF8F00";
  const brandBlack = "#000000";

  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16 flex flex-col items-center">
            <Tag>Our Partners</Tag>
            <h2 className="font-black text-4xl lg:text-5xl mt-6" style={{ color: brandBlack }}>
              Healthcare Facilities We Serve
            </h2>
            <GoldLine />
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4 font-medium">
              From major hospital systems to specialized clinics, we provide
              reliable transportation solutions across the full healthcare
              continuum.
            </p>
          </div>
        </Reveal>
 
        {/* Grid Container - Switched from dark gaps to subtle light borders */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border-t border-l border-gray-100 shadow-sm">
          {FACILITIES.map((f, i) => (
            <Reveal key={f.title} delay={i * 30}>
              <div 
                className="bg-white border-r border-b border-gray-100 p-8 text-center group transition-all duration-300 cursor-default"
                style={{ backgroundColor: 'white' }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 grayscale group-hover:grayscale-0">
                  {f.icon}
                </div>
                <div 
                  className="text-gray-500 group-hover:text-black text-[11px] font-black uppercase tracking-widest transition-colors duration-300"
                  style={{ color: '#6B7280' }} // Default grey
                >
                  {f.title}
                </div>
                {/* Subtle Hover Bar matching Capability Statement style */}
                <div 
                   className="w-0 group-hover:w-1/2 h-1 mx-auto transition-all mt-4" 
                   style={{ backgroundColor: brandGold }}
                />
              </div>
            </Reveal>
          ))}
        </div>
 
        <Reveal delay={200}>
          <div className="text-center mt-16">
            <Link
              to="/healthcare-partnerships"
              className="inline-flex items-center gap-3 border-2 font-black uppercase tracking-widest text-sm px-10 py-5 transition-all duration-200"
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
              Healthcare Partnerships
              <span>→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}