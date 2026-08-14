import { useParams, Navigate, Link as RouterLink } from "react-router-dom";
import { Box, Breadcrumbs, Container, Link } from "@mui/material";
import SEO from "../components/SEO";
import ServiceDetails from "../components/ServiceDetails";
import { getServiceBySlug } from "../data/services";

const siteUrl = "https://naturalflowroofing.co.uk";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/services/" replace />;
  }

  const serviceUrl = `${siteUrl}/services/${service.slug}/`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    name: service.title,
    description: service.seoDescription,
    url: serviceUrl,
    provider: {
      "@id": `${siteUrl}/#business`,
    },
    areaServed: "Staffordshire",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services/` },
      { "@type": "ListItem", position: 3, name: service.title, item: serviceUrl },
    ],
  };

  return (
    <>
      <SEO
        title={service.seoTitle}
        description={service.seoDescription}
        path={`/services/${service.slug}/`}
        schema={[serviceSchema, breadcrumbSchema]}
      />

      <Box sx={{ bgcolor: "#3f3f3f", py: 10, minHeight: "100vh" }}>
        <Container maxWidth="xl">
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{
              mb: 4,
              "& .MuiBreadcrumbs-separator": { color: "rgba(255,255,255,.5)" },
            }}
          >
            <Link component={RouterLink} to="/" sx={{ color: "rgba(255,255,255,.7)" }}>
              Home
            </Link>
            <Link component={RouterLink} to="/services/" sx={{ color: "rgba(255,255,255,.7)" }}>
              Services
            </Link>
            <Box sx={{ color: "#d4a537" }}>{service.title}</Box>
          </Breadcrumbs>

          <ServiceDetails service={service} />
        </Container>
      </Box>
    </>
  );
}
