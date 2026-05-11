import { TRUST_BADGES } from "../../data/Trust-badges";

export default function TrustBanner() {
  // Vibrant Orange-Gold from the Capability Statement
  const brandGold = "#FF8F00";

  return (
    <section 
      className="border-y overflow-hidden py-6"
      style={{ 
        backgroundColor: brandGold, 
        borderColor: "rgba(0,0,0,0.1)" 
      }}
    >
      <div className="relative flex max-w-[100vw] overflow-hidden">
        {/* Continuous Sliding Container */}
        <div className="flex animate-scroll whitespace-nowrap">
          {/* First set of badges */}
          <div className="flex items-center justify-around gap-12 px-6">
            {TRUST_BADGES.map((b, i) => (
              <div
                key={`${b.label}-${i}`}
                className="flex items-center gap-3 text-black font-black text-sm uppercase tracking-tighter"
              >
                <span className="text-xl opacity-80">{b.icon}</span>
                <span>{b.label}</span>
                {/* Visual separator between items */}
                <span className="ml-8 text-black/20 font-light">|</span>
              </div>
            ))}
          </div>

          {/* Duplicate set for seamless loop */}
          <div className="flex items-center justify-around gap-12 px-6">
            {TRUST_BADGES.map((b, i) => (
              <div
                key={`${b.label}-clone-${i}`}
                className="flex items-center gap-3 text-black font-black text-sm uppercase tracking-tighter"
              >
                <span className="text-xl opacity-80">{b.icon}</span>
                <span>{b.label}</span>
                <span className="ml-8 text-black/20 font-light">|</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind CSS for the scroll animation */}
      <style italic>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}