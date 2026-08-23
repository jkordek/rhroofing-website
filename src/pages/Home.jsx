import Hero from "../components/Hero";
import Services from "../components/Services";
import ServiceAreas from "../components/ServiceAreas";
import AboutUs from "../components/AboutUs";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import SEO from "../components/SEO";
import { faqs } from "../data/faqs";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <SEO
        title="Roofing Services in Burton on Trent"
        description="Natural Flow Roofing Systems offers reliable roof repairs, installations, and inspections for homes across Burton on Trent and Staffordshire."
        path="/"
        schema={faqSchema}
      />

      <Hero />
      <Services />
      <ServiceAreas />
      <AboutUs />
      <FAQ />
      <Contact isPage={false}/>
    </>
  );
}
