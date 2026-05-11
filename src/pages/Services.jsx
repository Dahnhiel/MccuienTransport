import Reveal from "../components/ui/Reveal";
import { Tag } from "../components/ui/Tag";
import CallToAction from "../components/sections/CallToAction";
import { SERVICE_DETAILS } from "../data/Service-details";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Services() {
  const brandGold = "#FF8F00";
  const brandBlack = "#000000";

  return (
    <main className="pt-24 bg-white">
      {/* 1. HEADER */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <Tag>Capabilities</Tag>
            <h1
              className="font-black text-5xl lg:text-7xl mt-6 uppercase tracking-tighter"
              style={{ color: brandBlack }}
            >
              Our <span style={{ color: brandGold }}>Medical</span> <br />
              Logistics
            </h1>
            <p className="text-xl text-gray-600 font-medium max-w-2xl mt-8 leading-relaxed">
              Precision-timed, safely-operated, and fully-equipped
              transportation designed for the healthcare industry.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICE_DETAILS.map((service, i) => (
              <Reveal key={service.title} delay={i * 50}>
                <div
                  key={i}
                  className="group border-2 border-gray-100 p-8 hover:border-black transition-all"
                >
                  {/* Professional Font Awesome Rendering */}
                  <div className="text-4xl mb-6">
                    <FontAwesomeIcon
                      icon={service.icon}
                      style={{ color: "#FF8F00" }}
                      className="transition-transform group-hover:scale-110"
                    />
                  </div>
                  <h3
                    className="font-black text-2xl uppercase tracking-tight mb-4"
                    style={{ color: brandBlack }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-500 font-medium leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-center gap-3 text-xs font-black uppercase tracking-widest"
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: brandGold }}
                        />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SAFETY & COMPLIANCE STRIP */}
      <section className="py-16" style={{ backgroundColor: brandBlack }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-10">
          <Reveal>
            <div className="text-white">
              <h2 className="font-black text-3xl uppercase">
                Safety is our{" "}
                <span style={{ color: brandGold }}>Standard.</span>
              </h2>
              <p className="text-white/50 mt-2 font-bold uppercase tracking-widest text-xs">
                Certified Drivers · Insured Fleet · HIPAA Compliant
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex gap-8">
              {["CPR Certified", "First Aid", "Drug Tested"].map((tag) => (
                <div key={tag} className="text-center">
                  <div className="text-white font-black text-xl uppercase italic">
                    {tag}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. EQUIPMENT SECTION */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <Reveal>
            <h2 className="font-black text-4xl lg:text-5xl uppercase mb-8">
              The McCuien <span style={{ color: brandGold }}>Fleet</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our vehicles are more than just transport; they are mobile care
              units. Each vehicle in our fleet undergoes rigorous weekly
              inspections and is equipped with state-of-the-art securement
              systems.
            </p>
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="font-black text-3xl text-gray-200">01</div>
                <div>
                  <h4 className="font-black uppercase text-sm">
                    Hydraulic Lift Systems
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Smooth, stable loading for all power-chair models.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="font-black text-3xl text-gray-200">02</div>
                <div>
                  <h4 className="font-black uppercase text-sm">
                    GPS Real-Time Tracking
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Dispatch monitors every mission for arrival accuracy.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-gray-100 -z-10" />
              <img
                src="https://images.unsplash.com/photo-1565656658383-4fa3a0169636?q=80&w=875&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="McCuien Medical Transit Vehicle"
                className="w-full h-auto shadow-2xl"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}
