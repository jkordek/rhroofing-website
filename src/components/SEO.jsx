import { Helmet } from "react-helmet-async";

const siteUrl = "https://naturalflowroofing.co.uk";
const siteName = "Natural Flow Roofing Systems";
const facebookUrl = "https://www.facebook.com/profile.php?id=100077565369301";
const defaultDescription =
  "Natural Flow Roofing Systems provides professional roof repairs, installations, inspections, and emergency roofing across Burton on Trent, Staffordshire, and nearby areas.";
const defaultImage = `${siteUrl}/preview.jpg`;

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": `${siteUrl}/#business`,
  name: siteName,
  url: siteUrl,
  sameAs: [facebookUrl],
  image: defaultImage,
  logo: defaultImage,
  description: defaultDescription,
  telephone: ["+447440448919", "+447404047918"],
  email: "naturalflowroofingsystems@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Burton on Trent",
    addressRegion: "Staffordshire",
    addressCountry: "GB",
  },
  areaServed: [
    "Burton on Trent",
    "Staffordshire",
    "Derby",
    "Swadlincote",
    "Lichfield",
    "Ashby-de-la-Zouch",
    "Tamworth",
  ],
  priceRange: "$$",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+447440448919",
      contactType: "customer service",
      areaServed: "GB",
      availableLanguage: "en",
    },
    {
      "@type": "ContactPoint",
      telephone: "+447404047918",
      contactType: "customer service",
      areaServed: "GB",
      availableLanguage: "en",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Roofing services",
    itemListElement: [
      "Roof repairs",
      "New roof installations",
      "Roof inspections",
      "Emergency roofing",
      "Flat roofing",
      "Leadwork",
      "Soffits and fascias",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
      },
    })),
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: siteName,
  url: siteUrl,
  publisher: {
    "@id": `${siteUrl}/#business`,
  },
  inLanguage: "en-GB",
};

export default function SEO({
  title,
  description = defaultDescription,
  path = "/",
  type = "website",
  schema,
}) {
  const normalizedPath =
    path === "/" ? "/" : `${path.replace(/\/$/, "")}/`;
  const canonicalUrl = `${siteUrl}${normalizedPath}`;
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const structuredData = schema
    ? [websiteSchema, businessSchema, schema]
    : [websiteSchema, businessSchema];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={defaultImage} />
      <meta property="og:image:alt" content={`${siteName} roofing work`} />
      <meta property="og:locale" content="en_GB" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultImage} />

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
