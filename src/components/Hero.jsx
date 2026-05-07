import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import roofing1 from '../images/roofing1.jpeg';

const Hero = () => {
  return (
    <>
      <section id="Home">
        <Container sx={{ bgcolor: "#D9A842", height: "5px" }} maxWidth="false"/>
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
            <Typography
              variant="h1"
              fontWeight="bold"
              gutterBottom
              sx={{
                maxWidth: 900,
                mx: "auto",
                fontSize: { xs: "2.8rem", sm: "4rem", md: "5.5rem" },
                lineHeight: 0.95,
                letterSpacing: 0,
                textShadow: "0 4px 18px rgba(0,0,0,0.55)",
              }}
            >
              Natural Flow
              <Box
                component="span"
                sx={{
                  display: "block",
                  color: "#D9A842",
                }}
              >
                Roofing Systems
              </Box>
            </Typography>

            <Typography variant="h5" sx={{ maxWidth: 600, mx: "auto", mb: 4 }}>
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
      </section>
    </>
  );
};

export default Hero;
