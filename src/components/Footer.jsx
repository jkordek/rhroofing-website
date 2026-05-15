import React from "react";
import { Box, Typography, Stack, Link, Container, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link as RouterLink } from "react-router-dom";

const facebookUrl = "https://www.facebook.com/profile.php?id=100077565369301";

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

        <Stack direction="row" justifyContent="center" sx={{ mb: 2 }}>
          <IconButton
            component="a"
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Natural Flow Roofing Systems on Facebook"
            sx={{
              color: "#E5E7EB",
              "&:hover": { color: "#D9A842" },
            }}
          >
            <FacebookIcon />
          </IconButton>
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
