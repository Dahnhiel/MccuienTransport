import { Link } from "react-router-dom";

export const Logo = ({ className = "" }) => {
  return (
    <Link to="/" className={`flex items-center gap-4 group ${className}`}>
      {/* 1. 'M' icon box — bumped from w-10/h-10 to w-13/h-13 */}
      <div className="flex-shrink-0 flex items-center justify-center w-13 h-13 rounded-md bg-amber-500 shadow-sm transition-all group-hover:bg-amber-600">
        <span className="text-3xl font-black text-white tracking-tighter">
          M
        </span>
      </div>

      {/* 2. Text stack */}
      <div className="flex flex-col -space-y-1">
        <span className="text-[1.85rem] font-extrabold tracking-tighter text-slate-950 uppercase leading-none">
          mccuien
        </span>
        <span className="text-sm font-medium tracking-widest text-slate-500 uppercase">
          transportation
        </span>

        {/* 3. Amber accent line */}
        <div className="h-px w-full bg-amber-500/80 mt-1 rounded-full transition-all duration-300 group-hover:bg-amber-600" />
      </div>
    </Link>
  );
};