import flatRoofingImage from "../images/flat-roofing.jpeg";
import leadworkImage from "../images/roofing2.jpeg";
import roofRepairsImage from "../images/roofing1.jpeg";
import newRoofImage from "../images/newRoof.jpeg";
import gutteringImage from "../images/gutter.jpg";
import soffitsImage from "../images/soffits.jpeg";

export const services = [
  {
    slug: "flat-roofing",
    title: "Flat Roofing",
    image: flatRoofingImage,
    description:
      "Flat roofs take a lot of punishment — standing water, UV exposure, and temperature swings all shorten their lifespan if they're not installed or maintained properly. We install and repair flat roofs for homes and commercial properties using durable, weatherproof materials, including GRP fibreglass and felt systems, matched to your property and budget.",
    features: [
      "New flat roof installation",
      "Flat roof repairs and leak fixes",
      "Recovering and overlaying worn flat roofs",
      "Inspections to catch problems before they spread",
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
      "Lead is still one of the most reliable materials for weatherproofing the trickiest parts of a roof — valleys, chimneys, flashings, and abutments where two roof surfaces meet. Poor leadwork is one of the most common hidden causes of leaks, so we take the time to get every joint and detail right.",
    features: [
      "Flashing installation and repair",
      "Valley and abutment leadwork",
      "Chimney leadwork",
      "Leak repairs caused by failed or ageing leadwork",
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
      "Not every roofing problem needs a full replacement. Our repair service covers everything from a single slipped or cracked tile to storm damage, chimney flashing failures, and persistent leaks. We inspect the roof properly first, so you're paying to fix the actual cause rather than just patching the symptom.",
    features: [
      "Leak detection and repair",
      "Damaged, slipped, or missing tile replacement",
      "Storm and weather damage repairs",
      "Chimney and flashing repairs",
    ],
    seoTitle: "Roof Repairs in Staffordshire",
    seoDescription:
      "Fast, reliable roof repairs including emergency call-outs, leak detection and tile replacement across Burton on Trent and Staffordshire.",
  },
  {
    slug: "new-roof-installation",
    title: "New Roof Installation",
    image: newRoofImage,
    description:
      "When a roof is beyond economical repair, or you're renovating and need a fresh start, we handle full roof installations from start to finish. That includes stripping the old roof, checking and repairing the structure underneath where needed, and fitting a new roof using durable materials designed to last for decades.",
    features: [
      "Full roof strip and replacement",
      "Tiled, slate, and flat roof installations",
      "Structural timber checks and repairs",
      "Clear, itemised quotes before work begins",
    ],
    seoTitle: "New Roof Installation Staffordshire",
    seoDescription:
      "Full roof installations from strip-out to finish, using durable materials designed to last for decades, across Burton on Trent and Staffordshire.",
  },
  {
    slug: "guttering-services",
    title: "Guttering Services",
    image: gutteringImage,
    description:
      "Your guttering is your roof's drainage system, and when it's blocked, sagging, or leaking, water ends up running down your walls, pooling near your foundations, or forcing its way into your fascias and soffits. We install and repair uPVC guttering and downpipe systems, replacing worn or damaged sections and correcting poor falls that stop water draining away properly.",
    features: [
      "New gutter and downpipe installation",
      "Repairs to leaking, sagging, or blocked gutters",
      "Replacement and upgrades to durable uPVC systems",
      "Ongoing maintenance to prevent overflow and water damage",
    ],
    seoTitle: "Guttering Services in Staffordshire",
    seoDescription:
      "Guttering installation, repairs and maintenance to keep water draining away from your roof, walls and foundations across Burton on Trent and Staffordshire.",
  },
  {
    slug: "soffits-and-fascias",
    title: "Soffit and Fascias",
    image: soffitsImage,
    description:
      "Your soffits and fascias do more than tidy up the edge of your roof — they protect the roof timbers underneath from water damage and keep pests out, while allowing your roof space to ventilate properly. When they crack, rot, or come away from the roofline, moisture gets in fast.",
    features: [
      "Replacement of damaged or rotten soffits and fascias",
      "Low-maintenance uPVC options in a range of finishes",
      "Guttering repair and replacement alongside soffit and fascia work",
      "Ventilation checks to prevent damp and condensation issues",
    ],
    seoTitle: "Soffits and Fascias in Staffordshire",
    seoDescription:
      "Durable soffit and fascia installation and repairs to protect your roofline and improve ventilation across Staffordshire.",
  },
];

export const getServiceBySlug = (slug) =>
  services.find((service) => service.slug === slug);
