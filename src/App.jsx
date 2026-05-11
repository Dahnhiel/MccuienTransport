import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import GovernmentContracting from "./pages/GovernmentContracting";
import VeteranTransportation from "./pages/VeteranTransportation";
import HealthcarePartnerships from "./pages/HealthcarePartnerships";
import Services from "./pages/Services";
import CoverageAreas from "./pages/CoverageAreas";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Preloader from "./components/ui/Preloader";
import ScrollToTop from "./components/ui/ScrollToTop"; // Recommended addition

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* 1. Preloader always sits at the top level */}
      <Preloader isLoading={loading} />
      
      {/* 2. ScrollToTop ensures pages start at the top on route change */}
      <ScrollToTop />

      {/* 3. Wrap content in Layout for consistent Nav/Footer */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/government-contracting"
            element={<GovernmentContracting />}
          />
          <Route
            path="/veteran-transportation"
            element={<VeteranTransportation />}
          />
          <Route
            path="/healthcare-partnerships"
            element={<HealthcarePartnerships />}
          />
          <Route path="/services" element={<Services />} />
          <Route path="/coverage-areas" element={<CoverageAreas />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}