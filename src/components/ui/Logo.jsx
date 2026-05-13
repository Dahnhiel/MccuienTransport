import { useEffect, useRef } from "react";

export const Logo = ({ className = "", compact = false }) => {
  return (
    <div className={`flex items-center gap-0 ${className}`}>
      {/* Clipped icon mark */}
      <div
        className={`flex items-center justify-center flex-shrink-0 bg-[#FF8F00] transition-all duration-300 ${
          compact ? "w-[38px] h-[38px]" : "w-[46px] h-[46px]"
        }`}
        style={{ clipPath: "polygon(0 0, 88% 0, 100% 12%, 100% 100%, 12% 100%, 0 88%)" }}
      >
        <span
          className={`font-black text-black leading-none tracking-tight transition-all duration-300 ${
            compact ? "text-[21px]" : "text-[26px]"
          }`}
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          M
        </span>
      </div>

      {/* Divider + text */}
      <div className="flex flex-col justify-center pl-3 ml-3 border-l-2 border-[#FF8F00]">
        <div
          className={`font-black uppercase leading-none tracking-wide text-neutral-950 transition-all duration-300 ${
            compact ? "text-[18px]" : "text-[22px]"
          }`}
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Mc<span className="text-[#FF8F00]">Cuien</span>
        </div>
        <div
          className={`font-semibold uppercase tracking-[0.3em] text-neutral-500 mt-[3px] transition-all duration-300 ${
            compact ? "text-[8px]" : "text-[9px]"
          }`}
        >
          Transportation Corp
        </div>
      </div>
    </div>
  );
};