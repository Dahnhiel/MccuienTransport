import { TRUST_BADGES } from "../../data/Trust-badges";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TrustBanner() {
  const brandGold = "#FF8F00";

  // Helper to keep the badge design consistent
  const BadgeItem = ({ badge }) => (
    <div className="flex items-center gap-3 text-black font-black text-sm uppercase tracking-tighter">
      {/* Fixed: Always use FontAwesomeIcon component */}
      <FontAwesomeIcon icon={badge.icon} className="text-xl opacity-80" />
      <span>{badge.label}</span>
      <span className="ml-8 text-black/20 font-light">|</span>
    </div>
  );

  return (
    <section
      className="border-y overflow-hidden py-6"
      style={{
        backgroundColor: brandGold,
        borderColor: "rgba(0,0,0,0.1)",
      }}
    >
      <div className="relative flex max-w-[100vw] overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          {/* First set of badges */}
          <div className="flex items-center gap-12 px-6">
            {TRUST_BADGES.map((badge, i) => (
              <BadgeItem key={`original-${i}`} badge={badge} />
            ))}
          </div>

          {/* Duplicate set for seamless loop - FIXED */}
          <div className="flex items-center gap-12 px-6">
            {TRUST_BADGES.map((badge, i) => (
              <BadgeItem key={`clone-${i}`} badge={badge} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}