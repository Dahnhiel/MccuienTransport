import Hero from "../components/sections/Hero";
import TrustBanner from "../components/sections/TrustBanner";
import WhoWeAre from "../components/sections/WhoWeAre";
import FederalContracting from "../components/sections/FederalContracting";
import VeteranSection from "../components/sections/VeteranSection";
import FacilitiesSection from "../components/sections/FacilitiesSection";
import ServicesGrid from "../components/sections/ServicesGrid";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import CoverageSection from "../components/sections/CoverageSection";
import PartnerForm from "../components/sections/PartnerForm";
import Testimonials from "../components/sections/Testimonials";
import CallToAction from "../components/sections/CallToAction";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <TrustBanner />
        <WhoWeAre />
        <FederalContracting />
        <VeteranSection />
        <FacilitiesSection />
        <ServicesGrid />
        <WhyChooseUs />
        <CoverageSection />
        <PartnerForm />
        <Testimonials />
        <CallToAction />
      </main>
    </>
  );
}
