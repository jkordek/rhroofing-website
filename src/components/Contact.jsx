import React from "react";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  return (
    <>  
      <section id="Contact">
        <Box
          sx={{
            py: 10,
            px: 2,
            maxWidth: "1200px",
            mx: "auto",
            color: "#fff",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {/* Title */}
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Get in Touch
          </Typography>

          {/* Contact Boxes */}
          <Box sx={{ width: "100%", overflow: "hidden" }}>
            <Grid
              container
              spacing={3}
              sx={{
                mt: 6,
                mx: 0,
                width: "100%",    
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Phone */}
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                    bgcolor: "#2B2B2B",
                    color: "#fff",
                  }}
                >
                  <PhoneIcon sx={{ fontSize: 40, color: "#D9A842" }} />
                  <Typography variant="h6" fontWeight="bold">
                    Call Us
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    07440 448919 
                    <br />
                    07404 047918
                    <br />
                    Available 7 days a week
                  </Typography>
                </Paper>
              </Grid>

              {/* Email */}
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                    bgcolor: "#2B2B2B",
                    color: "#fff",
                  }}
                >
                  <EmailIcon sx={{ fontSize: 40, color: "#D9A842" }} />
                  <Typography variant="h6" fontWeight="bold">
                    Email Us
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    naturalflowroofingsystems@gmail.com
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Container sx={{ bgcolor: "#D9A842", height: "5px" }} maxWidth="false"/>
      </section>
    </>
  );
};

export default Contact;
