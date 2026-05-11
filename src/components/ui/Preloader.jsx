import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ isLoading }) {
  const [percent, setPercent] = useState(0);

  // Simulate loading progress
  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setPercent((prev) => (prev < 100 ? prev + 1 : 100));
      }, 20); // Adjust speed here
      return () => clearInterval(interval);
    }
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center px-6"
        >
          <div className="w-full max-w-md">
            {/* Branding Watermark */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-500 mb-8 text-center"
            >
              McCuien Logistics System v1.0
            </motion.div>

            {/* The Percentage */}
            <div className="overflow-hidden mb-2">
              <motion.div 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                className="text-6xl md:text-8xl font-black text-white tracking-tighter"
              >
                {percent}%
              </motion.div>
            </div>

            {/* The Progress Bar */}
            <div className="h-[2px] w-full bg-white/10 relative overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-[#FF8F00]"
                initial={{ width: 0 }}
                animate={{ width: `${percent}%` }}
              />
            </div>

            {/* Status Tags */}
            <div className="flex justify-between mt-4">
               <span className="text-[10px] font-black uppercase text-[#FF8F00] animate-pulse">
                Initializing Fleet
               </span>
               <span className="text-[10px] font-black uppercase text-gray-500">
                Secure Connection
               </span>
            </div>
          </div>

          {/* Bottom Branding */}
          <div className="absolute bottom-12 flex items-center gap-4">
             <div className="w-2 h-2 bg-[#FF8F00] rotate-45" />
             <span className="text-xs font-black uppercase tracking-widest text-white">
                McCuien Transportation Corp.
             </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}