import ServicesGrid from "../components/ServicesGrid";
import SEO from "../components/SEO";
import { services } from "../data/services";

const siteUrl = "https://naturalflowroofing.co.uk";

export default function ServicesPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: `${siteUrl}/services/${service.slug}/`,
    })),
  };

  return (
    <>
      <SEO
        title="Roofing Services in Staffordshire"
        description="Expert roofing services including roof repairs, new roof installation, leadwork, flat roofing, soffits, and fascias across Staffordshire."
        path="/services/"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Roofing services",
            provider: {
              "@id": `${siteUrl}/#business`,
            },
            areaServed: "Staffordshire",
            serviceType: services.map((service) => service.title),
          },
          itemListSchema,
        ]}
      />

      <ServicesGrid />
    </>
  );
}
