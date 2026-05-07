import Services from "../components/Services";
import SEO from "../components/SEO";

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Roofing Services in Staffordshire"
        description="Expert roofing services including roof repairs, new roof installation, roof inspections, emergency roofing, flat roofing, and gutter repairs across Staffordshire."
        path="/services"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Roofing services",
          provider: {
            "@id": "https://naturalflowroofing.co.uk/#business",
          },
          areaServed: "Staffordshire",
          serviceType: [
            "Roof repairs",
            "New roof installation",
            "Roof inspections",
            "Emergency roofing",
            "Flat roofing",
            "Gutter repairs",
          ],
        }}
      />

      <Services />
    </>
  );
}
