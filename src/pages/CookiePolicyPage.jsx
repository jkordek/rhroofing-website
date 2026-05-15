import React from "react";
import { Box, Container, Link, Typography } from "@mui/material";
import SEO from "../components/SEO";

export default function CookiePolicyPage() {
  return (
    <>
      <SEO
        title="Cookie Policy"
        description="Cookie policy for Natural Flow Roofing Systems, explaining whether this website uses cookies and how visitors can manage cookies."
        path="/cookie-policy/"
      />

      <Container sx={{ bgcolor: "#D9A842", height: "5px" }} maxWidth={false} />

      <Box component="main" sx={{ bgcolor: "#474646", color: "#fff", py: 8, px: 2 }}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
            Cookie Policy
          </Typography>
          <Typography sx={{ color: "#E5E7EB", mb: 5 }}>
            Last updated: 15 May 2026
          </Typography>

          <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom>
            Our use of cookies
          </Typography>
          <Typography sx={{ color: "#E5E7EB", lineHeight: 1.8, mb: 4 }}>
            This website does not currently set cookies, use analytics cookies, or use advertising
            tracking cookies. Because we do not use non-essential cookies, we do not show a cookie
            consent banner.
          </Typography>

          <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom>
            Third-party services
          </Typography>
          <Typography sx={{ color: "#E5E7EB", lineHeight: 1.8, mb: 4 }}>
            If we add tools such as analytics, maps, embedded media, or advertising pixels in the
            future, we will update this policy and request consent where required before setting
            non-essential cookies.
          </Typography>

          <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom>
            Managing cookies
          </Typography>
          <Typography sx={{ color: "#E5E7EB", lineHeight: 1.8, mb: 4 }}>
            You can block or delete cookies through your browser settings. Browser controls vary by
            provider, so check your browser&apos;s help pages for current instructions.
          </Typography>

          <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom>
            Contact
          </Typography>
          <Typography sx={{ color: "#E5E7EB", lineHeight: 1.8 }}>
            For questions about privacy or cookies, email{" "}
            <Link href="mailto:naturalflowroofingsystems@gmail.com" color="#D9A842">
              naturalflowroofingsystems@gmail.com
            </Link>
            .
          </Typography>
        </Container>
      </Box>
    </>
  );
}
