import AboutUs from "../components/AboutUs";
import { Helmet } from "react-helmet-async";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>
          Experienced Roofers in Burton on Trent | 25+ Years Experience
        </title>
        <meta
          name="description"
          content="Trusted roofing specialists with over 25 years of experience. High-quality workmanship, reliable service, and competitive pricing."
        />
        <link rel="canonical" href="https://naturalflowroofing.co.uk/about" />
      </Helmet>

      <AboutUs />
    </>
  );
}