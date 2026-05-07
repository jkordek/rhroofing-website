import Hero from "../components/Hero";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Roofers in Burton on Trent"
        description="Natural Flow Roofing Systems provides expert roof repairs, installations, inspections, and emergency roofing across Burton on Trent, Staffordshire, and nearby areas."
        path="/"
      />

      <Hero />
      <Services />
      <AboutUs />
      <Contact />
    </>
  );
}
