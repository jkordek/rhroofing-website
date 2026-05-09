import AboutUs from "../components/AboutUs";
import SEO from "../components/SEO";

export default function AboutPage() {
  return (
    <>
      <SEO
        title="Experienced Roofers in Burton on Trent"
        description="Trusted Burton on Trent roofing specialists with over 25 years of experience, high-quality materials, reliable service, and transparent pricing."
        path="/about/"
      />

      <AboutUs />
    </>
  );
}
