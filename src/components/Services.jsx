import React from "react";
import { Box, Typography, Container, Paper, Stack } from "@mui/material";

import service1 from "../images/roofing1.jpeg";
import service2 from "../images/roofing2.jpeg";
import service3 from "../images/roofing3.jpeg";

const Services = () => {
  const services = [
    {
      title: "Roof Repair",
      image: service1,
      description:
        "Professional repair services to fix leaks, damaged tiles, and structural issues to keep your home protected.",
    },
    {
      title: "New Roof Installation",
      image: service3,
      description:
        "High-quality roof installations using durable materials designed to last for decades.",
    },
    {
      title: "Roof Inspection",
      image: service2,
      description:
        "Detailed inspections to identify potential issues early and ensure your roof stays in top condition.",
    },
  ];

  return (
    <section id="Services">
      <Container sx={{ bgcolor: "#D9A842", height: "5px" }} maxWidth={false} />

      <Container maxWidth="lg">
        <Box
          sx={{
            pt: 8,
            pb: 16,
            color: "#fff",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Our Services
          </Typography>

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={3}
            sx={{
              mt: 8,
              alignItems: "stretch",
            }}
          >
            {services.map((service, i) => (
              <Box key={i} sx={{ flex: 1, display: "flex" }}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    bgcolor: "#2B2B2B",
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {service.title}
                  </Typography>

                  <Box
                    component="img"
                    src={service.image}
                    alt={service.title}
                    sx={{
                      width: "100%",
                      height: 180,
                      objectFit: "cover",
                      borderRadius: 1,
                      mb: 2,
                      mt: 1,
                    }}
                  />

                  <Typography
                    variant="body1"
                    sx={{
                      color: "#E5E7EB",
                      mt: "auto",
                    }}
                  >
                    {service.description}
                  </Typography>
                </Paper>
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </section>
  );
};

export default Services;