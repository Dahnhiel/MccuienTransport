import { Link } from "react-router-dom";

export default function Hero() {
  // Colors from Capability Statement
  const brandGold = "#FF8F00"; 
  const brandBlack = "#000000";

  const GoldLine = () => (
    <div className="w-16 h-[2px] my-4" style={{ backgroundColor: brandGold }} />
  );

  const Tag = ({ children }) => (
    <span 
      className="inline-block text-[11px] font-semibold tracking-widest uppercase border px-3 py-1 rounded-sm"
      style={{ color: brandGold, borderColor: `${brandGold}50` }}
    >
      {children}
    </span>
  );

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background image - Restored with higher opacity for brightness */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.png')",
        }}
      />

      {/* Brightness Overlay (White instead of Black) */}
      <div className="absolute inset-0 bg-white/80" />

      {/* Diagonal gold accent bar */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            `linear-gradient(135deg, transparent 55%, ${brandGold}10 55%)`,
        }}
      />

      {/* Vertical gold line accent */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-1 opacity-40" 
        style={{ background: `linear-gradient(to bottom, transparent, ${brandGold}, transparent)` }}
      />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,#000 0,#000 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#000 0,#000 1px,transparent 1px,transparent 60px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <div className="mb-6 animate-[fadeInUp_0.6s_ease_both]">
              <Tag>Federal & Regional Medical Transportation</Tag>
            </div>

            <h1
              className="font-black leading-[1.05] mb-6 animate-[fadeInUp_0.7s_ease_both]"
              style={{ fontSize: "clamp(2.4rem,5vw,3.8rem)", color: brandBlack }}
            >
              Reliable Medical{" "}
              <span style={{ color: brandGold }}>Transportation</span> Solutions
              You Can Trust
            </h1>

            <GoldLine />

            <p className="text-gray-700 text-lg leading-relaxed mb-10 max-w-xl animate-[fadeInUp_0.9s_ease_both]">
              Providing safe, reliable, and professional transportation services for
              veterans, hospitals, dialysis centers, nursing homes, rehabilitation facilities, and healthcare organizations across Arkansas and beyond.
            </p>

            <div className="flex flex-wrap gap-4 animate-[fadeInUp_1s_ease_both]">
              <Link
                to="/contact"
                className="text-white font-black uppercase tracking-widest text-sm px-8 py-4 transition-all duration-200 hover:scale-[1.02]"
                style={{ backgroundColor: brandGold }}
              >
                Request Transportation
              </Link>
              <Link
                to="/government-contracting"
                className="border hover:bg-opacity-10 font-bold uppercase tracking-widest text-sm px-8 py-4 transition-all duration-200"
                style={{ borderColor: brandGold, color: brandGold }}
              >
                Government Contracting
              </Link>
              <Link
                to="/healthcare-partnerships"
                className="border border-black/20 hover:border-black/40 text-black/70 hover:text-black font-bold uppercase tracking-widest text-sm px-8 py-4 transition-all duration-200"
              >
                Partner With Us
              </Link>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 mt-14 pt-10 border-t border-black/10">
              {[
                { n: "SAM", sub: "Gov't Registered" },
                { n: "24/7", sub: "Dispatch Support" },
                { n: "HIPAA", sub: "Compliant Ops" },
              ].map((s) => (
                <div key={s.n}>
                  <div className="font-black text-2xl" style={{ color: brandGold }}>{s.n}</div>
                  <div className="text-black/40 text-xs uppercase tracking-widest mt-0.5">
                    {s.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: card panel */}
          <div className="relative hidden lg:block">
            {/* Gold corner decorations */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2" style={{ borderColor: `${brandGold}60` }} />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2" style={{ borderColor: `${brandGold}60` }} />

            <div className="bg-white/90 border border-black/5 p-8 backdrop-blur-sm shadow-2xl">
              {/* Tagline banner */}
              <div className="text-white font-black text-xs uppercase tracking-widest px-4 py-2 mb-8 inline-block" style={{ backgroundColor: brandGold }}>
                Serving Arkansas & Beyond
              </div>

              {/* Service highlights */}
              <div className="space-y-5">
                {[
                  {
                    icon: "🎖️",
                    title: "Veteran Transportation",
                    desc: "VA hospitals, community care & specialty visits",
                  },
                  {
                    icon: "🏛️",
                    title: "Federal & Gov't Contracting",
                    desc: "SAM.gov registered, scalable fleet solutions",
                  },
                  {
                    icon: "🏥",
                    title: "Healthcare Facility Partnerships",
                    desc: "Dialysis, discharge, rehab & nursing homes",
                  },
                  {
                    icon: "💳",
                    title: "Medicaid Transportation",
                    desc: "Managed care, brokers & underserved communities",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 border flex items-center justify-center text-lg flex-shrink-0 transition-colors" style={{ backgroundColor: `${brandGold}10`, borderColor: `${brandGold}30` }}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-black font-bold text-sm">
                        {item.title}
                      </div>
                      <div className="text-black/40 text-xs mt-0.5">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact dispatch */}
              <div className="mt-8 border-t border-black/10 pt-6 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-widest font-bold" style={{ color: brandGold }}>
                    Contact Dispatch
                  </div>
                  <div className="text-black font-black text-lg mt-0.5">
                    (501) 647-2570
                  </div>
                </div>
                <a
                  href="tel:+15016472570"
                  className="bg-[#D32F2F] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}