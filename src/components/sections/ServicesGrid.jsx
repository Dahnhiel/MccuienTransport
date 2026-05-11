import { Link } from "react-router-dom";
import { Tag } from "../ui/Tag";
import { GoldLine } from "../ui/GoldLine";
import Reveal from "../ui/Reveal";
import { SERVICES } from "../../data/Services";

export default function ServicesGrid() {
  // Brand Colors from Capability Statement
  const brandGold = "#FF8F00";
  const brandBlack = "#000000";

  return (
    <section className="bg-white py-28 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-16 items-end mb-20">
            <div>
              <Tag>What We Offer</Tag>
              <h2 className="font-black text-4xl lg:text-5xl leading-tight mt-6" style={{ color: brandBlack }}>
                Transportation{" "}
                <span style={{ color: brandGold }}>Services</span>
              </h2>
              <GoldLine />
            </div>
            <p className="text-gray-600 text-lg font-medium leading-relaxed">
              Comprehensive non-emergency medical transportation built for
              healthcare organizations, government agencies, and individuals who
              need reliable, professional service every time.
            </p>
          </div>
        </Reveal>
 
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc, i) => (
            <Reveal key={svc} delay={i * 40}>
              <div 
                className="bg-white p-7 group transition-all duration-300 cursor-default border-2 shadow-sm hover:shadow-xl hover:-translate-y-1"
                style={{ borderColor: "#f3f4f6" }}
              >
                <div className="flex items-start gap-4">
                  {/* "Shiny" Gold Indicator Box */}
                  <div 
                    className="w-10 h-10 border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{ 
                        borderColor: `${brandGold}40`,
                        backgroundColor: `${brandGold}05`
                    }}
                  >
                    <div 
                        className="w-3 h-3 group-hover:scale-125 transition-transform duration-300" 
                        style={{ backgroundColor: brandGold }}
                    />
                  </div>
                  <div className="text-gray-800 group-hover:text-black font-black text-sm uppercase tracking-tight leading-snug transition-colors duration-300 mt-2">
                    {svc}
                  </div>
                </div>
                {/* Accent line that slides in on hover */}
                <div 
                    className="w-0 group-hover:w-full h-1 mt-6 transition-all duration-500" 
                    style={{ backgroundColor: brandGold }}
                />
              </div>
            </Reveal>
          ))}
        </div>
 
        <Reveal delay={300}>
          <div className="text-center mt-16">
            <Link
              to="/services"
              className="inline-flex items-center gap-3 text-white font-black uppercase tracking-widest text-sm px-12 py-5 transition-all duration-200 group shadow-lg"
              style={{ backgroundColor: brandGold }}
            >
              All Services
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}