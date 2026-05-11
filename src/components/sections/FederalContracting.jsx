import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCircleCheck, 
  faBuildingColumns, 
  faFlagUsa, 
  faCreditCard, 
  faHandshakeAngle, 
  faHospital, 
  faSitemap,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { Tag } from "../ui/Tag";
import { GoldLine } from "../ui/GoldLine";
import Reveal from "../ui/Reveal";

export default function FederalContracting() {
  const brandGold = "#FF8F00";
  const brandBlack = "#000000";

  const partners = [
    { icon: faBuildingColumns, name: "VA Hospitals", desc: "Direct patient transport contracts" },
    { icon: faFlagUsa, name: "Federal Agencies", desc: "Scalable fleet solutions" },
    { icon: faCreditCard, name: "Medicaid Brokers", desc: "NEMT brokerage partnerships" },
    { icon: faSitemap, name: "Managed Care Orgs", desc: "Integrated transport programs" },
    { icon: faHandshakeAngle, name: "Community Care Programs", desc: "CCN & rural access" },
    { icon: faHospital, name: "State Healthcare Agencies", desc: "State-funded contracts" },
    { icon: faBuildingColumns, name: "Hospital Systems", desc: "Discharge & recurring transport" },
  ];

  return (
    <section className="bg-white border-y py-28 relative overflow-hidden" style={{ borderColor: `${brandGold}20` }}>
      {/* Large watermark */}
      <div
        className="absolute -right-10 top-1/2 -translate-y-1/2 text-[220px] font-black select-none pointer-events-none leading-none opacity-[0.03]"
        style={{ color: brandBlack }}
        aria-hidden
      >
        GOV
      </div>
 
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side */}
          <Reveal>
            <Tag>Federal & Government</Tag>
            <h2 className="font-black text-4xl lg:text-5xl leading-tight mt-6" style={{ color: brandBlack }}>
              Government &{" "}
              <span style={{ color: brandGold }}>Federal</span> Contracting
            </h2>
            <GoldLine />
            <p className="text-gray-700 text-lg font-medium leading-relaxed mb-8">
              McCuien Transportation Corp. actively supports federal, state, and
              local healthcare transportation initiatives by providing scalable
              solutions for veterans, Medicaid recipients, healthcare facilities,
              and underserved communities.
            </p>
 
            {/* Checkmark List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-3 mb-10">
              {[
                "SAM.gov Registered",
                "Fully Insured Fleet",
                "Background-Checked Drivers",
                "HIPAA Conscious",
                "24/7 Dispatch Support",
                "Rural Area Coverage",
                "Long-Distance Capable",
                "UEI Number Available",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <FontAwesomeIcon 
                    icon={faCircleCheck} 
                    style={{ color: brandGold }} 
                    className="text-lg"
                  />
                  <span className="text-gray-800 text-sm font-black uppercase tracking-tight">{item}</span>
                </div>
              ))}
            </div>
 
            <Link
              to="/government-contracting"
              className="inline-flex items-center gap-3 text-white font-black uppercase tracking-widest text-sm px-10 py-5 transition-all duration-200 group shadow-lg"
              style={{ backgroundColor: brandGold }}
            >
              View Contracting Info
              <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </Reveal>
 
          {/* Right: partner types */}
          <Reveal delay={150}>
            <div className="bg-gray-50 border-l-8 p-8 shadow-xl" style={{ borderColor: brandBlack }}>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] mb-6" style={{ color: brandGold }}>
                Primary Partnership Sectors
              </div>
              <div className="space-y-1">
                {partners.map((p) => (
                  <div
                    key={p.name}
                    className="flex items-center gap-5 py-5 border-b border-gray-200 last:border-0 group hover:bg-white hover:px-5 transition-all duration-300"
                  >
                    <div className="w-8 text-center text-xl text-gray-400 group-hover:text-[#FF8F00] transition-colors">
                      <FontAwesomeIcon icon={p.icon} />
                    </div>
                    <div className="flex-1">
                      <div className="font-black text-sm uppercase tracking-tight" style={{ color: brandBlack }}>{p.name}</div>
                      <div className="text-gray-500 text-[10px] font-black uppercase tracking-widest">{p.desc}</div>
                    </div>
                    <FontAwesomeIcon 
                      icon={faArrowRight}
                      className="opacity-0 group-hover:opacity-100 transition-all text-xs"
                      style={{ color: brandGold }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}