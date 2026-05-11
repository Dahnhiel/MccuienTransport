import { Link } from "react-router-dom";
import Reveal from "../ui/Reveal";

export default function CallToAction() {
  // Brand Colors from Capability Statement
  const brandGold = "#FF8F00";
  const brandBlack = "#000000";

  return (
    <section 
      className="relative py-28 overflow-hidden shadow-2xl" 
      style={{ backgroundColor: brandGold }}
    >
      {/* Texture lines - subtly updated to look like modern document security patterns */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 30px)",
        }}
      />
 
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <Reveal>
          <div className="text-black font-black text-[11px] uppercase tracking-[0.4em] mb-4 opacity-70">
            Ready to Get Started?
          </div>
          <h2 className="text-black font-black leading-tight mb-8" style={{ fontSize: "clamp(2.5rem,6vw,4rem)" }}>
            Reliable <span className="underline decoration-4" style={{ textDecorationColor: 'rgba(0,0,0,0.2)' }}>Transportation</span> Starts Here
          </h2>
          <p className="text-black/80 text-xl font-bold max-w-2xl mx-auto mb-12 leading-relaxed">
            Whether you're a veteran, a healthcare facility, or a government
            agency — McCuien Transportation Corp. is your trusted logistics
            partner.
          </p>
 
          <div className="flex flex-wrap justify-center gap-5">
            <Link
              to="/healthcare-partnerships"
              className="bg-black text-white font-black uppercase tracking-widest text-[13px] px-12 py-5 transition-all duration-300 hover:scale-[1.05] shadow-2xl"
            >
              Become a Facility Partner
            </Link>
            <Link
              to="/contact"
              className="bg-white text-black font-black uppercase tracking-widest text-[13px] px-12 py-5 transition-all duration-300 hover:scale-[1.05] shadow-xl border-2 border-transparent"
            >
              Schedule Transportation
            </Link>
            <Link
              to="/government-contracting"
              className="border-2 border-black/40 hover:border-black text-black font-black uppercase tracking-widest text-[13px] px-12 py-5 transition-all duration-300 hover:bg-black/10"
            >
              Contract Information
            </Link>
          </div>
 
          {/* Phone strip */}
          <div className="mt-16 pt-10 border-t-2 border-black/10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="text-black/70 font-black text-sm uppercase tracking-[0.2em]">
              Contact Dispatch 24/7:
            </div>
            <a
              href="tel:+15016472570"
              className="text-black font-black text-3xl hover:scale-105 transition-transform tracking-tighter"
            >
              (501) 647-2570
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}