import { Link } from "react-router-dom";

export const Logo = ({ className = "" }) => {
  return (
    <Link to="/" className={`flex items-center gap-3 group ${className}`}>
      {/* 1. 'M' in a small orange-gold box (Icon) */}
      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-md bg-amber-500 shadow-sm transition-all group-hover:bg-amber-600">
        <span className="text-2xl font-black text-white tracking-tighter">
          M
        </span>
      </div>

      {/* 2. Text Stack: mccuien and transportation under */}
      <div className="flex flex-col -space-y-1"> {/* Tightening the line height */}
        <span className="text-xl font-extrabold tracking-tighter text-slate-950 uppercase">
          mccuien
        </span>
        <span className="text-xs font-medium tracking-wide text-slate-500 uppercase">
          transportation
        </span>
        
        {/* 3. Add that line accent (Under Transportation) */}
        <div className="h-px w-full bg-amber-500/80 mt-0.5 rounded-full transition-all duration-300 group-hover:bg-amber-600"></div>
      </div>
    </Link>
  );
};