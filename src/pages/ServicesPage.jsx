import Services from "../components/Services";
import { Helmet } from "react-helmet-async";

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>
          Roofing Services in Staffordshire | Repairs, Installation & Inspection
        </title>
        <meta
          name="description"
          content="Expert roofing services including roof repair, new roof installation, and inspections across Staffordshire. Reliable, experienced, and fully insured."
        />
        <link rel="canonical" href="https://naturalflowroofing.co.uk/services" />
      </Helmet>

      <Services />
    </>
  );
}