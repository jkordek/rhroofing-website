import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import roofing1 from '../images/roofing1.jpeg';

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        backgroundImage: `url(${roofing1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.55)",
        }}
      />

      {/* Content */}
      <Container
        sx={{
          position: "relative",
          textAlign: "center",
          zIndex: 2,
        }}
      >
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          Natural Flow Roofing Systems
        </Typography>

        <Typography variant="h6" sx={{ maxWidth: 600, mx: "auto", mb: 4 }}>
          This is your website description. Make it short, punchy, and
          compelling so users know exactly why they should stay.
        </Typography>

        <Button 
          variant="contained" 
          size="large" 
          sx={{
            backgroundColor: "#D9A842",
            color: "#000",
            "&:hover": {
              backgroundColor: "#c09038",
            },
          }}
        >
          Contact Us
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;