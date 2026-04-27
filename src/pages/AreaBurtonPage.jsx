import AreasSection from "../components/AreaSection";
import { Helmet } from "react-helmet-async";

export default function AreaBurtonPage() {
  return (
    <>
      <Helmet>
        <title>Roofers in Swadlincote | Repairs & Roofing Services</title>

        <meta
          name="description"
          content="Professional roofers in Swadlincote offering roof repairs, new roof installations, and inspections. Reliable, local, and fully insured."
        />

        <link
          rel="canonical"
          href="https://naturalflowroofing.co.uk/roofers-swadlincote"
        />
      </Helmet>

      <AreasSection />
    </>
  );
}