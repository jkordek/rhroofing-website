import Contact from "../components/Contact";
import { Helmet } from "react-helmet-async";

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>
          Contact Roofing Company in Burton on Trent | Free Quote
        </title>
        <meta
          name="description"
          content="Get in touch for professional roofing services in Burton on Trent and surrounding areas. Call or email us today for a free quote."
        />
        <link rel="canonical" href="https://naturalflowroofing.co.uk/contact" />
      </Helmet>

      <Contact />
    </>
  );
}