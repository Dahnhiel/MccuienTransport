import { Link } from "react-router-dom";
import { SERVICES } from "../../data/Services";
import { Logo } from "../ui/Logo"; // Adjust path as needed

export default function Footer() {
  const brandGold = "#FF8F00";
  const brandBlack = "#000000";

  return (
    <footer className="bg-white border-t-8" style={{ borderColor: brandGold }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-4 gap-12">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-1">
            {/* Using the new Logo component here */}
            <div className="mb-8">
              <Logo />
            </div>
            
            <p className="text-gray-600 text-sm font-medium leading-relaxed mb-8">
              Providing mission-critical non-emergency medical transportation 
              for those who served, healthcare infrastructure, and government agencies.
            </p>
            
            <div className="flex flex-wrap gap-2">
              {["SAM.GOV", "UEI REGISTERED", "HIPAA"].map(tag => (
                <span key={tag} className="bg-gray-100 text-gray-500 text-[9px] font-black px-2 py-1 tracking-widest border border-gray-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>
 
          {/* Quick Navigation */}
          <div>
            <div className="text-black text-[11px] uppercase tracking-[0.2em] font-black mb-6 flex items-center gap-2">
              <div className="w-4 h-[2px]" style={{ backgroundColor: brandGold }} />
              Quick Links
            </div>
            <ul className="space-y-3">
              {[
                { to: "/about", label: "About Our Mission" },
                { to: "/services", label: "Capabilities" },
                { to: "/government-contracting", label: "Federal Contracting" },
                { to: "/veteran-transportation", label: "Veteran Support" },
                { to: "/healthcare-partnerships", label: "Facility Partners" },
                { to: "/coverage-areas", label: "Service Map" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-gray-500 hover:text-black font-bold text-sm transition-all duration-200 hover:pl-1"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
 
          {/* Services Column */}
          <div>
            <div className="text-black text-[11px] uppercase tracking-[0.2em] font-black mb-6 flex items-center gap-2">
              <div className="w-4 h-[2px]" style={{ backgroundColor: brandGold }} />
              Our Services
            </div>
            <ul className="space-y-3">
              {SERVICES.slice(0, 7).map((s) => (
                <li key={s} className="group">
                  <Link
                    to="/services"
                    className="text-gray-500 group-hover:text-black font-bold text-sm transition-colors duration-200"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
 
          {/* Contact & Support */}
          <div>
            <div className="text-black text-[11px] uppercase tracking-[0.2em] font-black mb-6 flex items-center gap-2">
              <div className="w-4 h-[2px]" style={{ backgroundColor: brandGold }} />
              Official Contact
            </div>
            <div className="space-y-5">
              <div className="group">
                <div className="text-gray-400 text-[10px] uppercase tracking-wider mb-1 font-black">Main Office</div>
                <a href="tel:+15016472570" className="text-black font-black text-sm hover:text-orange-600 transition-colors">
                  (501) 647-2570
                </a>
              </div>
              <div>
                <div className="text-gray-400 text-[10px] uppercase tracking-wider mb-1 font-black">Electronic Mail</div>
                <a href="mailto:info@mccuientransportation.com" className="text-black font-black text-sm hover:text-orange-600 transition-colors break-all">
                  info@mccuientransportation.com
                </a>
              </div>
              <div 
                className="p-5 border-l-4 shadow-xl bg-gray-50 group" 
                style={{ borderLeftColor: brandGold }}
              >
                <div className="text-black font-black text-xs uppercase tracking-widest mb-1">
                  24/7 Dispatch Center
                </div>
                <a
                  href="tel:+15016472570"
                  className="text-2xl font-black tracking-tighter transition-transform inline-block group-hover:scale-105"
                  style={{ color: brandBlack }}
                >
                  (501) 647-2570
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
 
      {/* Bottom Legal Bar */}
      <div className="bg-black py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} McCuien Transportation Corp. · NEMT Infrastructure
          </div>
          <div className="flex gap-8">
             <span className="text-white font-black text-[10px] uppercase tracking-[0.3em]">
               Reliable
             </span>
             <span className="text-white font-black text-[10px] uppercase tracking-[0.3em] opacity-40">
               Professional
             </span>
             <span className="text-white font-black text-[10px] uppercase tracking-[0.3em]">
               Mission Driven
             </span>
          </div>
        </div>
      </div>
    </footer>
  );
}