import { useState } from "react";
import Reveal from "../ui/Reveal";
import { Tag } from "../ui/Tag";
import { GoldLine } from "../ui/GoldLine";
import { PARTNERSHIP_TYPES } from "../../data/PartnershipTypes";
 
export default function PartnerForm() {
  const [type, setType] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Brand Colors from Capability Statement
  const brandGold = "#FF8F00";
  const brandBlack = "#000000";
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
 
  return (
    <section className="bg-white py-28 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <Tag>Get Started</Tag>
            <h2 className="font-black text-4xl lg:text-5xl leading-tight mt-6" style={{ color: brandBlack }}>
              Partner <span style={{ color: brandGold }}>With Us</span>
            </h2>
            <GoldLine />
            <p className="text-gray-700 text-lg font-medium leading-relaxed mb-10">
              Whether you're a hospital, VA facility, dialysis center, or
              government agency — we'd like to hear from you. Submit an inquiry
              and our team will follow up promptly.
            </p>
 
            <div className="space-y-3">
              {PARTNERSHIP_TYPES.map((pt) => (
                <div
                  key={pt}
                  onClick={() => setType(pt)}
                  className={`flex items-center gap-4 p-5 border-2 cursor-pointer transition-all duration-200 ${
                    type === pt
                      ? "shadow-md"
                      : "border-gray-100 hover:border-gray-200 bg-gray-50/50"
                  }`}
                  style={{ 
                    borderColor: type === pt ? brandGold : "",
                    backgroundColor: type === pt ? "white" : ""
                  }}
                >
                  <div
                    className={`w-6 h-6 border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                      type === pt ? "" : "border-gray-300"
                    }`}
                    style={{ 
                      backgroundColor: type === pt ? brandGold : "transparent",
                      borderColor: type === pt ? brandGold : ""
                    }}
                  >
                    {type === pt && (
                      <svg width="12" height="10" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <span className={`text-sm font-black uppercase tracking-tight ${type === pt ? "text-black" : "text-gray-500"}`}>
                    {pt}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
 
          <Reveal delay={150}>
            {submitted ? (
              <div className="bg-gray-50 border-2 p-12 text-center shadow-xl" style={{ borderColor: brandGold }}>
                <div className="text-5xl mb-6">✅</div>
                <div className="font-black text-2xl mb-3" style={{ color: brandBlack }}>
                  Inquiry Received
                </div>
                <p className="text-gray-600 font-bold">
                  Thank you for reaching out. Our team will contact you within
                  1–2 business days.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-gray-50 border-2 border-gray-100 p-8 sm:p-10 space-y-6 shadow-2xl"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-black font-black text-[10px] uppercase tracking-widest block mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John"
                      className="w-full bg-white border-2 border-gray-200 focus:border-orange-500 text-black placeholder-gray-400 px-4 py-3 text-sm outline-none transition-all font-bold"
                    />
                  </div>
                  <div>
                    <label className="text-black font-black text-[10px] uppercase tracking-widest block mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Smith"
                      className="w-full bg-white border-2 border-gray-200 focus:border-orange-500 text-black placeholder-gray-400 px-4 py-3 text-sm outline-none transition-all font-bold"
                    />
                  </div>
                </div>
 
                <div>
                  <label className="text-black font-black text-[10px] uppercase tracking-widest block mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Hospital / Agency Name"
                    className="w-full bg-white border-2 border-gray-200 focus:border-orange-500 text-black placeholder-gray-400 px-4 py-3 text-sm outline-none transition-all font-bold"
                  />
                </div>
 
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-black font-black text-[10px] uppercase tracking-widest block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@organization.com"
                      className="w-full bg-white border-2 border-gray-200 focus:border-orange-500 text-black placeholder-gray-400 px-4 py-3 text-sm outline-none transition-all font-bold"
                    />
                  </div>
                  <div>
                    <label className="text-black font-black text-[10px] uppercase tracking-widest block mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="(501) 000-0000"
                      className="w-full bg-white border-2 border-gray-200 focus:border-orange-500 text-black placeholder-gray-400 px-4 py-3 text-sm outline-none transition-all font-bold"
                    />
                  </div>
                </div>
 
                <div>
                  <label className="text-black font-black text-[10px] uppercase tracking-widest block mb-2">
                    Inquiry Type
                  </label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    required
                    className="w-full bg-white border-2 border-gray-200 focus:border-orange-500 text-black font-bold px-4 py-3 text-sm outline-none transition-all"
                  >
                    <option value="" disabled>
                      Select inquiry type
                    </option>
                    {PARTNERSHIP_TYPES.map((pt) => (
                      <option key={pt} value={pt}>
                        {pt}
                      </option>
                    ))}
                  </select>
                </div>
 
                <div>
                  <label className="text-black font-black text-[10px] uppercase tracking-widest block mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your transportation needs..."
                    className="w-full bg-white border-2 border-gray-200 focus:border-orange-500 text-black placeholder-gray-400 px-4 py-3 text-sm outline-none transition-all font-bold resize-none"
                  />
                </div>
 
                <button
                  type="submit"
                  className="w-full text-white font-black uppercase tracking-widest text-sm py-5 transition-all duration-300 shadow-xl hover:brightness-110"
                  style={{ backgroundColor: brandGold }}
                >
                  Submit Partnership Inquiry
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}