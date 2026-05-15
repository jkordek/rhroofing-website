import Services from "../components/Services";
import SEO from "../components/SEO";

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Roofing Services in Staffordshire"
        description="Expert roofing services including roof repairs, new roof installation, leadwork, flat roofing, soffits, and fascias across Staffordshire."
        path="/services/"
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
            "Leadwork",
            "Flat roofing",
            "Soffits and fascias",
          ],
        }}
      />

      <Services />
    </>
  );
}
