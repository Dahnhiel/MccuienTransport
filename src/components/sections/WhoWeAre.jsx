import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBuildingShield, 
  faShield, 
  faUserCheck, 
  faLock, 
  faMapLocationDot, 
  faRoute 
} from "@fortawesome/free-solid-svg-icons";
import useInView from "../../hooks/scrollanimation";
import { Tag } from "../ui/Tag";
import { GoldLine } from "../ui/GoldLine";
import Reveal from "../ui/Reveal";

export default function WhoWeAre() {
  const [ref, visible] = useInView();
  
  const brandGold = "#FF8F00";
  const brandBlack = "#000000";

  // Data with FontAwesome icons
  const credentials = [
    {
      icon: faBuildingShield,
      title: "SAM.gov Registered",
      desc: "Government procurement ready",
    },
    {
      icon: faShield,
      title: "Fully Insured",
      desc: "Complete liability coverage",
    },
    {
      icon: faUserCheck,
      title: "Background Checked",
      desc: "Every driver, every time",
    },
    {
      icon: faLock,
      title: "HIPAA Conscious",
      desc: "Patient privacy protected",
    },
    { 
      icon: faMapLocationDot, 
      title: "Rural Coverage", 
      desc: "Statewide & beyond" 
    },
    {
      icon: faRoute,
      title: "Long Distance",
      desc: "Interstate & regional trips",
    },
  ];

  return (
    <section className="bg-white py-28 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gray-50 skew-x-6 pointer-events-none" />

      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        <div>
          <Tag>About Our Company</Tag>
          <h2 className="font-black text-4xl lg:text-5xl leading-tight mt-6" style={{ color: brandBlack }}>
            Who We Are
          </h2>
          <GoldLine />
          <p className="text-gray-700 text-lg font-medium leading-relaxed mb-6">
            McCuien Transportation Corp. is a professional non-emergency medical
            transportation provider specializing in reliable mobility solutions
            for veterans, healthcare facilities, government agencies, dialysis
            clinics, hospitals, nursing homes, rehabilitation centers, and
            private clients.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            We are committed to providing safe, dependable, and compassionate
            transportation services while helping healthcare organizations
            improve patient access, reduce missed appointments, and streamline
            discharge operations.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/about"
              className="text-white font-black uppercase tracking-widest text-sm px-7 py-4 transition-all duration-200 hover:brightness-110 shadow-lg"
              style={{ backgroundColor: brandGold }}
            >
              Our Story
            </Link>
            <Link
              to="/contact"
              className="border-2 font-black uppercase tracking-widest text-sm px-7 py-4 transition-all duration-200 hover:bg-gray-50"
              style={{ borderColor: brandBlack, color: brandBlack }}
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {credentials.map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <div 
                className="bg-white border-2 hover:shadow-xl transition-all duration-300 group p-6"
                style={{ borderColor: "#f3f4f6" }}
              >
                {/* FontAwesome Icon Rendering */}
                <div className="text-2xl mb-4">
                  <FontAwesomeIcon icon={c.icon} style={{ color: brandGold }} />
                </div>
                
                <div className="font-black text-sm uppercase tracking-tight" style={{ color: brandBlack }}>
                  {c.title}
                </div>
                <div className="text-gray-500 text-[10px] mt-1 font-black uppercase tracking-widest">{c.desc}</div>
                
                <div 
                   className="w-0 group-hover:w-full h-1 transition-all mt-4" 
                   style={{ backgroundColor: brandGold }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}