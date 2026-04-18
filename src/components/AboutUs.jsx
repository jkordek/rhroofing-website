import React from "react";
import { Box, Typography, Stack, Container } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Example image import
import aboutImage from "../images/roofing5.jpg";

const AboutUs = () => {
  return (
    <>
      <section id="Company">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 6,
            py: 10,
            px: 2,
            maxWidth: "1200px",
            mx: "auto",
            color: "#fff",
          }}
        >
          {/* LEFT SIDE */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
            >
              About Us
            </Typography>

            <Typography
              variant="h5"
              fontWeight="600"
              gutterBottom
              sx={{
                color: "#D9A842"
              }}
            >
              Over 25 Years of Experience
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 3, maxWidth: 500 }}
            >
              We provide high‑quality roofing services backed by decades of
              experience, professional craftsmanship, and a commitment to customer
              satisfaction. Our team ensures every project is completed with
              precision and care.
            </Typography>

            {/* Bullet Points */}
            <Stack spacing={1.5}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CheckCircleIcon sx={{ color: "#D9A842" }} />
                <Typography variant="body1">
                  Fully certified and insured roofing specialists
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CheckCircleIcon sx={{ color: "#D9A842" }} />
                <Typography variant="body1">
                  High‑quality materials and long‑lasting workmanship
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CheckCircleIcon sx={{ color: "#D9A842" }} />
                <Typography variant="body1">
                  Transparent pricing and reliable service
                </Typography>
              </Box>
            </Stack>
          </Box>

          {/* RIGHT SIDE IMAGE */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={aboutImage}
              alt="About us"
              sx={{
                width: "100%",
                maxWidth: 500,
                borderRadius: 2,
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
        <Container sx={{ bgcolor: "#D9A842", height: "5px" }} maxWidth="false"/>
      </section>
    </>
  );
};

export default AboutUs;
