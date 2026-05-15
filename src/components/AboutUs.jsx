import React from "react";
import { Box, Typography, Stack, Container } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import aboutImage from "../images/roofing5.jpg";

const AboutUs = () => {
  return (
    <>
      <section id="Company">
        <Container sx={{ bgcolor: "#D9A842", height: "5px" }} maxWidth={false} />
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
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              About Us
            </Typography>

            <Typography
              variant="h5"
              fontWeight="600"
              gutterBottom
              sx={{ color: "#D9A842" }}
            >
              Durable Materials, Reliable Roofing Service
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 3, maxWidth: 500 }}
            >
              We provide high-quality roofing services backed by over 25 years of
              experience, professional craftsmanship, and a commitment to customer
              satisfaction. Our team ensures every project is completed with
              precision and care.
            </Typography>

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
                  High-quality materials and long-lasting workmanship
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
              alt="Roofing work completed by Natural Flow Roofing Systems"
              sx={{
                width: "100%",
                maxWidth: 500,
                borderRadius: 2,
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
      </section>
    </>
  );
};

export default AboutUs;
