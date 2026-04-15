import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";

// Example local images (adjust paths as needed)
import service1 from "../images/roofing1.jpeg";
import service2 from "../images/roofing2.jpeg";
import service3 from "../images/roofing3.jpeg";

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1, py: 8, px: 2, maxWidth: "false", mx: "auto", color: "#fff" }}>
      {/* Main Title */}
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        gutterBottom
      >
        Our Services
      </Typography>

      <Grid
        container
        spacing={3}
        sx={{
          mt: 8,
          alignItems: "stretch",
        }}
      >
        {/* Service 1 */}
        <Grid size={4}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              textAlign: "center",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              bgcolor: "#2B2B2B",
              color: "#fff",
            }}
          >
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Roof Repair
            </Typography>

            <Box
              component="img"
              src={service1}
              alt="Roof Repair"
              sx={{
                width: "100%",
                height: 180,
                objectFit: "cover",
                borderRadius: 1,
                mb: 2,
                mt: 1,
              }}
            />

            <Typography variant="body1" color="text.secondary">
              Professional repair services to fix leaks, damaged tiles, and
              structural issues to keep your home protected.
            </Typography>
          </Paper>
        </Grid>

        {/* Service 2 */}
        <Grid size={4}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              textAlign: "center",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              bgcolor: "#2B2B2B",
              color: "#fff",
            }}
          >
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              New Roof Installation
            </Typography>

            <Box
              component="img"
              src={service2}
              alt="New Roof Installation"
              sx={{
                width: "100%",
                height: 180,
                objectFit: "cover",
                borderRadius: 1,
                mb: 2,
                mt: 1,
              }}
            />

            <Typography variant="body1" color="text.secondary">
              High‑quality roof installations using durable materials designed
              to last for decades.
            </Typography>
          </Paper>
        </Grid>

        {/* Service 3 */}
        <Grid size={4}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              textAlign: "center",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              bgcolor: "#2B2B2B",
              color: "#fff",
            }}
          >
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Roof Inspection
            </Typography>

            <Box
              component="img"
              src={service3}
              alt="Roof Inspection"
              sx={{
                width: "100%",
                height: 180,
                objectFit: "cover",
                borderRadius: 1,
                mb: 2,
                mt: 1,
              }}
            />

            <Typography variant="body1" color="text.secondary">
              Detailed inspections to identify potential issues early and
              ensure your roof stays in top condition.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Services;
