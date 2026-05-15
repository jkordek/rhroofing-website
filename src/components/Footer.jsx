import React from "react";
import { Box, Typography, Stack, Link, Container } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Container sx={{ bgcolor: "#D9A842", height: "5px" }} maxWidth="false"/>
      <Box
        component="footer"
        sx={{
          bgcolor: "#2B2B2B",
          color: "#E5E7EB",
          py: 4,
          px: 2,
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 3 }}
          justifyContent="center"
          alignItems="center"
          sx={{ mb: 2 }}
        >
          <Link component={RouterLink} to="/privacy-policy/" underline="hover" color="#E5E7EB">
            Privacy Policy
          </Link>
          <Link component={RouterLink} to="/cookie-policy/" underline="hover" color="#E5E7EB">
            Cookie Policy
          </Link>
        </Stack>

        {/* Copyright */}
        <Typography variant="body2" align="center" sx={{ opacity: 0.8 }}>
          © {new Date().getFullYear()} Natural Flow Roofing Systems. All rights reserved.
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
