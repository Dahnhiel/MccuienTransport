import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBriefcaseMedical, faShieldHeart, faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FACILITIES } from "../data/Facilities";
import Reveal from "../components/ui/Reveal";
import { Tag } from "../components/ui/Tag";
import CallToAction from "../components/sections/CallToAction";

export default function HealthcarePartnerships() {
  const brandGold = "#FF8F00";
  const brandBlack = "#000000";

  return (
    <main className="pt-24 bg-white">
      {/* 1. HERO SECTION */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <Tag>Institutional Solutions</Tag>
            <h1 className="font-black text-5xl lg:text-7xl mt-6 uppercase tracking-tighter" style={{ color: brandBlack }}>
              Reliable Partner for <br />
              <span style={{ color: brandGold }}>Medical Facilities.</span>
            </h1>
            <p className="text-xl text-gray-600 font-medium max-w-2xl mt-8 leading-relaxed">
              We streamline discharge operations and reduce missed appointments for 
              health systems, specialized clinics, and care facilities.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION (The "Why") */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          {[
            {
              icon: faClockRotateLeft,
              title: "Reduce Wait Times",
              desc: "On-demand and scheduled transit ensures beds are cleared faster and patients remain on their treatment schedules."
            },
            {
              icon: faShieldHeart,
              title: "HIPAA Compliant",
              desc: "Every mission is handled with strict adherence to patient privacy and data security standards."
            },
            {
              icon: faBriefcaseMedical,
              title: "Specialized Care",
              desc: "Drivers are trained in patient sensitivity, mobility assistance, and facility-specific safety protocols."
            }
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <div className="p-8 border-l-4" style={{ borderColor: brandGold }}>
                <FontAwesomeIcon icon={item.icon} className="text-3xl mb-6" style={{ color: brandBlack }} />
                <h3 className="font-black text-xl uppercase mb-4">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 3. FACILITIES GRID (The list you just updated) */}
      <section className="py-24 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="mb-16">
              <h2 className="text-4xl lg:text-5xl font-black uppercase mb-4">Who We <span style={{ color: brandGold }}>Serve</span></h2>
              <div className="w-24 h-2" style={{ backgroundColor: brandGold }} />
              <p className="mt-8 text-white/50 max-w-xl font-medium">
                Our fleet is ready to integrate with a wide spectrum of healthcare 
                organizations across the region.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {FACILITIES.map((facility, i) => (
              <Reveal key={facility.title} delay={i * 30}>
                <div className="bg-gray-950 p-8 flex items-center gap-6 hover:bg-white/5 transition-colors group">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-full group-hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon={facility.icon} style={{ color: brandGold }} className="text-xl" />
                  </div>
                  <span className="font-black text-sm uppercase tracking-tight">
                    {facility.title}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DISCHAGE COORDINATION SECTION */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <Reveal>
            <h2 className="font-black text-4xl lg:text-5xl uppercase mb-8">Discharge <br /><span style={{ color: brandGold }}>Coordination</span></h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We act as an extension of your social work and case management teams. 
              Our dispatch team coordinates directly with your bedside staff to ensure 
              seamless transition from clinical care to home or long-term care environments.
            </p>
            <ul className="space-y-4 mb-10">
              {["Bedside-to-Bedside Service", "Pharmacy Stop Coordination", "Real-Time ETA Updates"].map(item => (
                <li key={item} className="flex items-center gap-3 font-black text-xs uppercase tracking-widest">
                  <FontAwesomeIcon icon={faArrowRight} style={{ color: brandGold }} />
                  {item}
                </li>
              ))}
            </ul>
            <button 
                className="px-10 py-5 text-white font-black uppercase tracking-widest text-sm shadow-xl hover:brightness-110 transition-all"
                style={{ backgroundColor: brandBlack }}
            >
                Partner With Us
            </button>
          </Reveal>
          <Reveal delay={200}>
            <div className="relative">
                <img 
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200" 
                    alt="Hospital Discharge" 
                    className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
                />
                <div className="absolute -top-6 -left-6 w-24 h-24 border-t-8 border-l-8" style={{ borderColor: brandGold }} />
            </div>
          </Reveal>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}