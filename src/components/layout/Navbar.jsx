import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../ui/Logo";
import CapabilityStatement from "../../assets/capability-statement.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const brandGold = "#FF8F00";
  const brandBlack = "#000000";
 
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
 
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/government-contracting", label: "Federal Contracts" },
    { to: "/veteran-transportation", label: "Veterans" },
    { to: "/coverage-areas", label: "Coverage" },
    { to: "/contact", label: "Contact" },
  ];
 
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-md py-3 border-b-2" 
          : "bg-transparent py-6" 
      }`}
      style={{ borderBottomColor: scrolled ? brandGold : "transparent" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <Logo className={`shrink-0 transition-transform duration-300 ${scrolled ? "scale-90" : "scale-100"}`} />
 
        {/* Desktop links - Forced Black per your request */}
        <ul className="hidden xl:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="text-black text-[11px] font-bold tracking-widest uppercase transition-colors duration-300 hover:text-orange-500"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
 
        {/* CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Download Capability Statement (Ghost Button) */}
          <a
            href={CapabilityStatement}
            download
            className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase px-5 py-3 border-2 border-black text-black transition-all duration-300 rounded-sm hover:bg-black hover:text-white group"
          >
            <span>Capability Statement</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 transition-colors group-hover:text-white" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M7 10l5 5m0 0l5-5m-5 5V3" />
            </svg>
          </a>

          {/* Get a Quote (Solid Button) */}
          <a
            href="tel:+15016472570"
            className="text-white font-bold text-[10px] tracking-widest uppercase px-7 py-3 rounded-sm transition-all duration-300 hover:shadow-lg active:scale-95"
            style={{ backgroundColor: brandGold }}
          >
            Get a Quote
          </a>
        </div>
 
        {/* Mobile burger */}
        <button
          className="lg:hidden p-2 flex flex-col gap-1.5"
          onClick={() => setOpen(!open)}
        >
          <div className="w-6 h-0.5 bg-black transition-all" style={{ transform: open ? "rotate(45deg) translateY(8px)" : "" }} />
          <div className="w-6 h-0.5 bg-black transition-all" style={{ opacity: open ? 0 : 1 }} />
          <div className="w-6 h-0.5 bg-black transition-all" style={{ transform: open ? "rotate(-45deg) translateY(-8px)" : "" }} />
        </button>
      </div>
 
      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-white absolute top-full left-0 w-full px-6 py-8 shadow-2xl border-t-2" style={{ borderTopColor: brandGold }}>
          <ul className="space-y-6 mb-8">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="block font-bold tracking-widest uppercase text-sm text-black"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4">
             <a
              href={CapabilityStatement}
              download
              className="flex justify-center items-center gap-2 border-2 border-black text-black font-bold text-xs uppercase tracking-widest px-6 py-4"
            >
              Capability Statement
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M7 10l5 5m0 0l5-5m-5 5V3" />
              </svg>
            </a>
            <a
              href="tel:+15016472570"
              className="block text-center text-white font-bold text-xs uppercase tracking-widest px-6 py-4"
              style={{ backgroundColor: brandGold }}
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}