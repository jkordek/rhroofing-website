import React from "react";
import { Box, Typography, Grid, Container, Paper } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const areas = [
  {
    name: "Burton on Trent & DE15",
    blurb:
      "Our home patch. We're based on Frederick Street, so Burton on Trent and the surrounding DE15 postcodes are where you'll see us most — from quick repairs to full re-roofs, usually with same-week availability.",
  },
  {
    name: "Derby",
    blurb:
      "We're on the road into Derby on a regular basis, covering everything from Victorian terraces to newer estate housing, with the same honest pricing and no-obligation quotes we offer closer to home.",
  },
  {
    name: "Swadlincote",
    blurb:
      "Just over the county line in South Derbyshire, Swadlincote is one of our most frequently covered areas — roof repairs, guttering, and full installations for houses of every age and roof type.",
  },
  {
    name: "Lichfield",
    blurb:
      "From period properties near the cathedral to modern developments on the outskirts, we carry out roofing repairs and installations across Lichfield and the surrounding villages.",
  },
  {
    name: "Ashby-de-la-Zouch",
    blurb:
      "We regularly work in and around Ashby-de-la-Zouch, handling roof repairs, leadwork, and new installations for homeowners across the town and neighbouring Leicestershire villages.",
  },
  {
    name: "Tamworth",
    blurb:
      "Tamworth and the surrounding area fall within our usual working radius, and we're happy to travel out for anything from an emergency leak repair to a full new roof installation.",
  },
];

const ServiceAreas = ({ isPage = false }) => {
  return (
    <section id="Areas-We-Cover">
      <Container sx={{ bgcolor: "#D9A842", height: "5px" }} maxWidth={false} />

      <Container maxWidth="lg">
        <Box
          sx={{
            py: 10,
            color: "#fff",
            textAlign: "center",
          }}
        >
          {isPage ? (
            <Typography
              variant="h2"
              component="h1"
              sx={{ color: "#fff", fontWeight: 600, mb: 2, textAlign: "center" }}
            >
              Areas We Cover
            </Typography>
          ) : (
            <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
              Areas We Cover
            </Typography>
          )}

          <Typography
            variant="body1"
            sx={{
              color: "rgba(255,255,255,.75)",
              maxWidth: 700,
              mx: "auto",
              mb: 6,
            }}
          >
            Natural Flow Roofing Systems is based in Burton on Trent, and our
            vans are regularly out across Staffordshire and into the
            neighbouring counties. If you're not sure whether we cover your
            postcode, just get in touch — if we can't reach you, we'll tell
            you honestly.
          </Typography>

          <Grid container spacing={3}>
            {areas.map((area) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={area.name} sx={{ display: "flex" }}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 1.5,
                    bgcolor: "#2B2B2B",
                    color: "#fff",
                  }}
                >
                  <LocationOnIcon sx={{ fontSize: 32, color: "#D9A842" }} />
                  <Typography variant="h6" component={isPage ? "h2" : "h3"} fontWeight="bold">
                    {area.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#E5E7EB" }}
                  >
                    {area.blurb}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default ServiceAreas;
