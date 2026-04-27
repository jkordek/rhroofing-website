import Hero from "../components/Hero";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";
import AreasSection from "../components/AreaSection";
import Contact from "../components/Contact";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>Natural Flow Roofing Systems | Professional Roofing in Burton on Trent</title>
        <meta
          name="description"
          content="Natural Flow Roofing Systems provides expert roof repairs, installations, inspections, and emergency roofing across Burton on Trent and the areas. Quality workmanship you can trust."
        />
        <link rel="canonical" href="https://naturalflowroofing.co.uk/" />
  
        {/* OpenGraph (Facebook, LinkedIn, WhatsApp, Slack) */}
        <meta property="og:title" content="Roofers in Burton on Trent | Natural Flow Roofing Systems" />
        <meta
          property="og:description"
          content="Professional roofing services including repairs, installations, inspections, and emergency roof work across Burton on Trent and the areas."
        />
        <meta property="og:url" content="https://naturalflowroofing.co.uk/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Natural Flow Roofing Systems" />
  
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Natural Flow Roofing Systems" />
        <meta
          name="twitter:description"
          content="Expert roofing services including repairs, installations, and inspections in Burton on Trent and the areas."
        />
        <meta name="twitter:image" content="https://naturalflowroofing.co.uk/preview.jpg" />
  
        {/* Local Business Schema (JSON‑LD) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "RoofingContractor",
              "name": "Natural Flow Roofing Systems",
              "url": "https://naturalflowroofing.co.uk",
              "image": "https://naturalflowroofing.co.uk/preview.jpg",
              "description": "Professional roofing services including repairs, installations, inspections, and emergency roofing.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Burton on Trent",
                "addressRegion": "Staffordshire",
                "addressCountry": "UK"
              },
              "telephone": "07440448919",
              "areaServed": [
                "Burton on Trent",
                "Staffordshire",
                "Derby",
                "Swadlincote",
                "Lichfield",
                "Ashby-de-la-Zouch",
                "Tamworth"
              ],
              "serviceType": [
                "Roofer",
                "Local roofers",
                "Roof Repairs",
                "Roof Installations",
                "Roof Inspections",
                "Emergency Roofing",
                "Flat Roofing",
                "Gutter Repairs"
              ]
            }
          `}
        </script>
      </Helmet>

      <Hero />
      <Services />
      <AreasSection />
      <AboutUs />
      <Contact />
    </>
  );
}