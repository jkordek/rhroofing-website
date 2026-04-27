import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { Helmet } from "react-helmet-async";

export default function SwadlincotePage() {
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

      {/* HERO */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Reliable Roofers in Swadlincote
          </Typography>

          <Typography sx={{ mb: 3 }}>
            Expert roof repairs, installations, and inspections across
            Swadlincote and nearby areas. Our experienced team delivers
            high-quality roofing solutions you can trust.
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button variant="contained" href="/contact">
              Get Free Quote
            </Button>
            <Button variant="outlined" href="tel:07440448919">
              Call Now
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* MAIN CONTENT */}
      <Box sx={{ py: 6, bgcolor: "#fafafa" }}>
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Professional Roofing Services in Swadlincote
          </Typography>

          <Typography>
            Natural Flow Roofing Systems provides reliable roofing services
            across Swadlincote. Whether you need urgent roof repairs, a full
            roof replacement, or a routine inspection, our team delivers
            high-quality workmanship. We also cover nearby areas including
            Burton on Trent, Ashby-de-la-Zouch, and Derby.
          </Typography>
        </Container>
      </Box>

      {/* SERVICES */}
      <Box sx={{ py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Our Roofing Services in Swadlincote
          </Typography>

          <Stack spacing={3}>
            <Box>
              <Typography variant="h6" fontWeight="bold">
                Roof Repairs in Swadlincote
              </Typography>
              <Typography>
                We fix leaks, damaged tiles, and structural issues quickly
                and efficiently to keep your home protected.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" fontWeight="bold">
                New Roof Installation
              </Typography>
              <Typography>
                High-quality roof installations built to last using durable
                materials and expert craftsmanship.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" fontWeight="bold">
                Roof Inspections
              </Typography>
              <Typography>
                Thorough inspections to identify problems early and prevent
                costly repairs in the future.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" fontWeight="bold">
                Emergency Roofing
              </Typography>
              <Typography>
                Fast-response emergency roofing services across Swadlincote
                when you need urgent repairs.
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* WHY CHOOSE US */}
      <Box sx={{ py: 6, bgcolor: "#fafafa" }}>
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Why Choose Us for Roofing in Swadlincote?
          </Typography>

          <Stack spacing={1}>
            <Typography>• 25+ years of experience</Typography>
            <Typography>• Fully insured roofing services</Typography>
            <Typography>• Local and reliable team</Typography>
            <Typography>• Competitive pricing</Typography>
            <Typography>• Fast response times</Typography>
          </Stack>
        </Container>
      </Box>

      {/* LOCAL AREA */}
      <Box sx={{ py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Local Roofers Covering Swadlincote
          </Typography>

          <Typography>
            We provide roofing services across Swadlincote, including
            Woodville, Midway, and Newhall. Being local allows us to respond
            quickly and deliver reliable roofing solutions when you need them.
          </Typography>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ py: 8, textAlign: "center" }}>
        <Container maxWidth="md">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Get a Free Roofing Quote in Swadlincote
          </Typography>

          <Typography sx={{ mb: 3 }}>
            Contact Natural Flow Roofing Systems today for a free, no-obligation quote.
          </Typography>

          <Stack direction="row" spacing={2} justifyContent="center">
            <Button variant="contained" href="/contact">
              Contact Us
            </Button>
            <Button variant="outlined" href="tel:07440448919">
              Call 07440 448919
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}