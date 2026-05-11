import { useState } from "react";
import Reveal from "../ui/Reveal";
import { Tag } from "../ui/Tag";
import { GoldLine } from "../ui/GoldLine";
import { TESTIMONIALS } from "../../data/Testimonials";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  // Brand Colors from Capability Statement
  const brandGold = "#FF8F00";
  const brandBlack = "#000000";
 
  return (
    <section className="bg-white py-28 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16 flex flex-col items-center">
            <Tag>What They Say</Tag>
            <h2 className="font-black text-4xl lg:text-5xl mt-6" style={{ color: brandBlack }}>
              Trusted by Veterans &{" "}
              <span style={{ color: brandGold }}>Healthcare Professionals</span>
            </h2>
            <GoldLine />
          </div>
        </Reveal>
 
        <div className="max-w-4xl mx-auto">
          {/* Active testimonial - Bright Card Style */}
          <Reveal>
            <div className="relative bg-gray-50 border-2 border-gray-100 p-10 lg:p-14 shadow-xl">
              {/* Big quote mark - Vibrant Gold with low opacity */}
              <div
                className="absolute top-6 left-8 font-black leading-none select-none opacity-[0.15]"
                style={{ fontSize: "6rem", color: brandGold }}
                aria-hidden
              >
                "
              </div>
 
              <div className="relative">
                <p className="text-gray-700 text-xl lg:text-2xl font-medium leading-relaxed mb-10 italic">
                  {TESTIMONIALS[active].quote}
                </p>
 
                <div className="flex items-center gap-4">
                  <div 
                    className="w-14 h-14 flex items-center justify-center font-black text-white shadow-lg"
                    style={{ backgroundColor: brandGold }}
                  >
                    {TESTIMONIALS[active].initial}
                  </div>
                  <div>
                    <div className="font-black text-lg uppercase tracking-tight" style={{ color: brandBlack }}>
                      {TESTIMONIALS[active].author}
                    </div>
                    <div className="font-bold text-sm" style={{ color: brandGold }}>
                      {TESTIMONIALS[active].role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
 
          {/* Dots / Navigation */}
          <div className="flex justify-center gap-3 mt-10">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 ${
                  i === active
                    ? "w-10 h-2 shadow-sm"
                    : "w-2 h-2 bg-gray-300 hover:bg-gray-400 rounded-full"
                }`}
                style={{ backgroundColor: i === active ? brandGold : "" }}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}