import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
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
              variant="h2"
              component="h1"
              sx={{
                color: "#fff",
                fontWeight: 600,
                mb: 2,
                textAlign: "center",
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

            <Typography variant="h5" component="p" sx={{ maxWidth: 620, mx: "auto", mb: 4 }}>
              Reliable roofing services for your home, with expert craftsmanship,
              durable materials, and roof protection built to last.
            </Typography>

            <Button 
              component={Link}
              to="/contact/"
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
