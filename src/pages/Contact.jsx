import Reveal from "../components/ui/Reveal";
import { Tag } from "../components/ui/Tag";

export default function Contact() {
  const brandGold = "#FF8F00";
  const brandBlack = "#000000";

  return (
    <main className="pt-24 bg-white min-h-screen">
      {/* 1. HEADER SECTION */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <Tag>Dispatch Center</Tag>
            <h1 className="font-black text-5xl lg:text-7xl mt-6 uppercase tracking-tighter" style={{ color: brandBlack }}>
              Get In <span style={{ color: brandGold }}>Touch.</span>
            </h1>
            <p className="text-xl text-gray-600 font-medium max-w-2xl mt-8 leading-relaxed">
              Available 24/7 for mission-critical logistics, facility partnerships, 
              and individual transport requests.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. CONTACT CONTENT */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24">
          
          {/* Left Side: Contact Info */}
          <Reveal>
            <div>
              <h2 className="font-black text-3xl uppercase mb-12">Direct Lines</h2>
              
              <div className="space-y-12">
                <div className="group">
                  <div className="text-gray-400 text-[10px] uppercase tracking-[0.3em] font-black mb-2">24/7 Dispatch</div>
                  <a href="tel:+15016472570" className="text-4xl md:text-5xl font-black hover:text-orange-600 transition-colors tracking-tighter">
                    (501) 647-2570
                  </a>
                </div>

                <div>
                  <div className="text-gray-400 text-[10px] uppercase tracking-[0.3em] font-black mb-2">Electronic Mail</div>
                  <a href="mailto:info@mccuientransportation.com" className="text-2xl font-black hover:text-orange-600 transition-colors break-all">
                    info@mccuientransportation.com
                  </a>
                </div>

                <div className="pt-12 border-t border-gray-100">
                   <div className="text-gray-400 text-[10px] uppercase tracking-[0.3em] font-black mb-4">Operations Hub</div>
                   <p className="font-bold text-lg leading-relaxed">
                     Central Arkansas Region<br />
                     Serving State-Wide & Inter-State
                   </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Side: Form */}
          <Reveal delay={200}>
            <div className="bg-gray-50 p-8 md:p-12 shadow-2xl border-t-8" style={{ borderColor: brandGold }}>
              <h3 className="font-black text-2xl uppercase mb-8">Send an Inquiry</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest mb-2">Full Name</label>
                    <input type="text" className="w-full bg-white border border-gray-200 p-4 outline-none focus:border-black transition-colors font-bold" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest mb-2">Organization</label>
                    <input type="text" className="w-full bg-white border border-gray-200 p-4 outline-none focus:border-black transition-colors font-bold" placeholder="e.g. VA Hospital" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest mb-2">Inquiry Type</label>
                  <select className="w-full bg-white border border-gray-200 p-4 outline-none focus:border-black transition-colors font-bold appearance-none">
                    <option>General Partnership</option>
                    <option>Government Contracting</option>
                    <option>Individual Transport Quote</option>
                    <option>Facility Discharge Request</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest mb-2">Message</label>
                  <textarea rows={5} className="w-full bg-white border border-gray-200 p-4 outline-none focus:border-black transition-colors font-bold" placeholder="Tell us about your logistics needs..."></textarea>
                </div>

                <button 
                  className="w-full py-5 text-white font-black uppercase tracking-widest text-sm hover:brightness-110 transition-all shadow-xl"
                  style={{ backgroundColor: brandGold }}
                >
                  Submit Official Request
                </button>
              </form>
            </div>
          </Reveal>

        </div>
      </section>

      {/* 3. LOGISTICS STRIP */}
      <section className="py-12 bg-black overflow-hidden">
        <div className="flex whitespace-nowrap gap-12 items-center animate-marquee">
          {[1,2,3,4,5].map(i => (
            <div key={i} className="flex gap-12 items-center">
               <span className="text-white/20 font-black text-4xl uppercase tracking-tighter">Mission Ready</span>
               <div className="w-3 h-3 rotate-45 bg-orange-600" />
               <span className="text-white/20 font-black text-4xl uppercase tracking-tighter">Safe Passage</span>
               <div className="w-3 h-3 rotate-45 bg-white/20" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}