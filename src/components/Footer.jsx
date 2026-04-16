import React from "react";
import { Box, Typography, Stack, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#2B2B2B",
        color: "#E5E7EB",
        py: 4,
        px: 2,
      }}
    >
      {/* Future Links Section */}
      <Stack
        direction="row"
        spacing={3}
        justifyContent="center"
        sx={{ mb: 2 }}
      >
        {/* Add links here when ready */}
        {/* Example:
        <Link href="/privacy" underline="hover" color="#E5E7EB">
          Privacy Policy
        </Link>
        */}
      </Stack>

      {/* Copyright */}
      <Typography variant="body2" align="center" sx={{ opacity: 0.8 }}>
        © {new Date().getFullYear()} Natural Flow Roofing Services. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
