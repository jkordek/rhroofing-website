import flatRoofingImage from "../images/flat-roofing.jpeg";
import leadworkImage from "../images/roofing2.jpeg";
import roofRepairsImage from "../images/roofing1.jpeg";
import gutteringImage from "../images/gutter.jpg";
import soffitsImage from "../images/soffits.jpeg";

export const services = [
  {
    slug: "flat-roofing",
    title: "Flat Roofing",
    image: flatRoofingImage,
    description:
      "Our flat roofing solutions are designed to provide long-lasting protection for homes and commercial properties.",
    features: [
      "High-quality materials",
      "Weatherproof and leak-resistant",
      "Residential & commercial",
      "Long-lasting performance",
    ],
    seoTitle: "Flat Roofing in Staffordshire",
    seoDescription:
      "Durable, weatherproof flat roofing installation and repairs for homes and businesses across Burton on Trent and Staffordshire.",
  },
  {
    slug: "leadwork",
    title: "Leadwork",
    image: leadworkImage,
    description:
      "Professional leadwork for flashings, valleys and roofing details.",
    features: [
      "Traditional craftsmanship",
      "Weatherproof joints",
      "Durable finish",
    ],
    seoTitle: "Roof Leadwork in Staffordshire",
    seoDescription:
      "Traditional leadwork for flashings, valleys and roof detailing, finished to a durable, weatherproof standard across Staffordshire.",
  },
  {
    slug: "roof-repairs",
    title: "Roof Repairs",
    image: roofRepairsImage,
    description:
      "Fast and reliable roof repair services to keep your property protected.",
    features: [
      "Emergency call-outs",
      "Leak detection",
      "Tile replacement",
    ],
    seoTitle: "Roof Repairs in Staffordshire",
    seoDescription:
      "Fast, reliable roof repairs including emergency call-outs, leak detection and tile replacement across Burton on Trent and Staffordshire.",
  },
  {
    slug: "guttering-services",
    title: "Guttering Services",
    image: gutteringImage,
    description:
      "Installation and repair of gutters, downpipes and drainage systems.",
    features: [
      "uPVC systems",
      "Repairs",
      "Maintenance",
    ],
    seoTitle: "Guttering Services in Staffordshire",
    seoDescription:
      "Installation, repair and maintenance of uPVC gutters, downpipes and drainage systems across Staffordshire.",
  },
  {
    slug: "soffits-and-fascias",
    title: "Soffit and Fascias",
    image: soffitsImage,
    description:
      "Durable soffit and fascia repairs to protect your roofline, improve ventilation, and keep your home looking neat and weatherproof.",
    features: [
      "uPVC systems",
      "Repairs",
      "Maintenance",
    ],
    seoTitle: "Soffit and Fascia Installation in Staffordshire",
    seoDescription:
      "Durable soffit and fascia installation and repairs to protect your roofline and improve ventilation across Staffordshire.",
  },
];

export const getServiceBySlug = (slug) =>
  services.find((service) => service.slug === slug);
