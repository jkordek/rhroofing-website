import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import roofing1 from '../images/roofing1.jpeg';

const Hero = () => {
  return (
    <>
      <section id="Home">
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
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.55)",
            }}
          />
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
              Reliable Roofing. Expert Craftsmanship. Lasting Protection.  
              Your home deserves a roof built to withstand anything. We deliver quality you can trust.
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
        <Container sx={{ bgcolor: "#D9A842", height: "5px" }} maxWidth="false"/>
      </section>
    </>
  );
};

export default Hero;