import { 
  faWalking, 
  faWheelchair, 
  faHospitalUser, 
  faHandHoldingMedical, 
  faRoute, 
  faMedal, 
  faFileInvoiceDollar, 
  faUsersGear, 
  faAmbulance, 
  faCalendarCheck, 
  faClock, 
  faTreeCity 
} from "@fortawesome/free-solid-svg-icons";

export const SERVICE_DETAILS = [
  {
    title: "Ambulatory Transportation",
    desc: "For patients who are able to walk but require assistance or lack reliable transportation to their medical appointments.",
    features: ["Door-to-door assistance", "Appointment scheduling sync", "Climate-controlled comfort"],
    icon: faWalking,
  },
  {
    title: "Wheelchair Transportation",
    desc: "Specialized vehicles equipped with hydraulic lifts or ramps to safely transport passengers in their manual or power chairs.",
    features: ["ADA compliant tie-downs", "Hydraulic lift systems", "Highly trained safety operators"],
    icon: faWheelchair,
  },
  {
    title: "Hospital Discharge Transport",
    desc: "Efficient bedside-to-home transport to help hospitals clear beds and ensure patients transition home safely.",
    features: ["Bedside check-ins", "Pharmacy stop options", "Clearance coordination"],
    icon: faHospitalUser,
  },
  {
    title: "Dialysis Transportation",
    desc: "Recurring, high-priority scheduling for patients undergoing life-sustaining treatments that require absolute punctuality.",
    features: ["Guaranteed pickup windows", "Stress-free environment", "On-time guarantee"],
    icon: faHandHoldingMedical,
  },
  {
    title: "Long-Distance Medical Transport",
    desc: "Comfortable, long-range transportation for patients needing specialized care in neighboring cities or states.",
    features: ["Regional coverage", "Comfort-focused seating", "Pre-planned rest stops"],
    icon: faRoute,
  },
  {
    title: "Veteran Transportation",
    desc: "Dedicated shuttle services for veterans traveling to and from VA Medical Centers and outpatient clinics.",
    features: ["VA protocol familiarity", "Respectful service", "Flexible wait times"],
    icon: faMedal,
  },
  {
    title: "Medicaid Transportation",
    desc: "Approved provider for Medicaid-eligible recipients, ensuring access to essential healthcare services.",
    features: ["Billing coordination", "Compliance verified", "Pre-authorized scheduling"],
    icon: faFileInvoiceDollar,
  },
  {
    title: "Group Transportation",
    desc: "Multi-passenger solutions for healthcare facilities, senior centers, or community events.",
    features: ["High-capacity vehicles", "Route optimization", "Cost-effective logistics"],
    icon: faUsersGear,
  },
  {
    title: "Non-Emergency Medical (NEMT)",
    desc: "The standard in medical logistics—reliable, pre-scheduled transit for all healthcare-related needs.",
    features: ["Professional drivers", "Safety inspected", "24/7 Availability"],
    icon: faAmbulance,
  },
  {
    title: "Recurring Appointment Transport",
    desc: "Automated scheduling for physical therapy, oncology, or other long-term treatment plans.",
    features: ["Set-and-forget booking", "Consistent drivers", "Route priority"],
    icon: faCalendarCheck,
  },
  {
    title: "After-Hours Transportation",
    desc: "Evening and weekend availability for facilities operating outside of standard business hours.",
    features: ["Night-shift readiness", "Weekend dispatch", "Rapid response"],
    icon: faClock,
  },
  {
    title: "Rural Coverage Transport",
    desc: "Dedicated service for underserved and rural areas, ensuring geographical distance is never a barrier to care.",
    features: ["Extended service area", "Terrain-ready vehicles", "Community focused"],
    icon: faTreeCity,
  },
];