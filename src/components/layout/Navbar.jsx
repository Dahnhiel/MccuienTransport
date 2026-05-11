import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../ui/Logo";

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
          ? "bg-white shadow-xl py-2 border-b-2" 
          : "bg-white py-4 border-b border-gray-100" // White background ensures logo looks contained
      }`}
      style={{ borderBottomColor: scrolled ? brandGold : "transparent" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO CONTAINER */}
        <Link to="/" className="flex items-center shrink-0">
          <div className="relative flex items-center h-16 md:h-20 w-auto"> 
            {/* Increased height (h-16/h-20) to fit the McCuien badge perfectly */}
            <Logo className="h-full w-auto object-contain" />
          </div>
        </Link>
 
        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="hover:text-orange-600 text-[12px] font-black tracking-widest uppercase transition-colors duration-200"
                style={{ color: brandBlack }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
 
        {/* CTA */}
        <div className="hidden lg:block shrink-0">
          <a
            href="tel:+15016472570"
            className="flex items-center gap-2 text-white font-black text-[12px] tracking-widest uppercase px-8 py-4 transition-all duration-200 hover:brightness-110 shadow-lg"
            style={{ backgroundColor: brandGold }}
          >
            Get a Quote
          </a>
        </div>
 
        {/* Mobile burger */}
        <button
          className="lg:hidden p-2 flex flex-col justify-center items-center shrink-0"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <div className={`w-6 h-1 mb-1 transition-all ${open ? "rotate-45 translate-y-2" : ""}`} style={{ backgroundColor: brandBlack }} />
          <div className={`w-6 h-1 mb-1 transition-all ${open ? "opacity-0" : ""}`} style={{ backgroundColor: brandBlack }} />
          <div className={`w-6 h-1 transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} style={{ backgroundColor: brandBlack }} />
        </button>
      </div>
 
      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-white border-t px-6 py-8 shadow-2xl" style={{ borderTopColor: brandGold }}>
          <ul className="space-y-6">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="font-black tracking-widest uppercase text-base transition-colors"
                  style={{ color: brandBlack }}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="tel:+15016472570"
            className="mt-8 block text-center text-white font-black text-sm uppercase tracking-widest px-6 py-4 shadow-md"
            style={{ backgroundColor: brandGold }}
          >
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  );
}