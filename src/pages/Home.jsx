import Hero from "../components/Hero";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Reliable Roofing Services for Your Home in Burton on Trent"
        description="Natural Flow Roofing Systems provides reliable roofing services, roof repairs, installations, inspections, and durable materials for homes across Burton on Trent and Staffordshire."
        path="/"
      />

      <Hero />
      <Services />
      <AboutUs />
      <Contact />
    </>
  );
}
