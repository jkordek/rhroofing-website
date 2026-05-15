import React from "react";
import {
  Box,
  Typography,
  Stack,
  Container,
  Paper,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Contact = () => {
  const cards = [
    {
      icon: <PhoneIcon sx={{ fontSize: 40, color: "#D9A842" }} />,
      title: "Call Us",
      content: (
        <>
          <Box component="a" href="tel:+447440448919" sx={{ color: "inherit", textDecoration: "none" }}>
            07440 448919
          </Box>
          <br />
          <Box component="a" href="tel:+447404047918" sx={{ color: "inherit", textDecoration: "none" }}>
            07404 047918
          </Box>
          <br />
          Available 7 days a week
        </>
      ),
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40, color: "#D9A842" }} />,
      title: "Email Us",
      content: (
        <Box
          component="a"
          href="mailto:naturalflowroofingsystems@gmail.com"
          sx={{ color: "inherit", textDecoration: "none" }}
        >
          naturalflowroofingsystems@gmail.com
        </Box>
      ),
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 40, color: "#D9A842" }} />,
      title: "Where we operate",
      content:
        "We are based in Burton on Trent, Staffordshire but it's not a problem for us to come wherever you need us to.",
    },
  ];

  return (
    <section id="Contact">
      <Container sx={{ bgcolor: "#D9A842", height: "5px" }} maxWidth={false} />

      <Container maxWidth="lg">
        <Box
          sx={{
            py: 10,
            color: "#fff",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Get in Touch
          </Typography>

          {/* Cards */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={3}
            sx={{
              mt: 6,
              alignItems: "stretch",
            }}
          >
            {cards.map((card, i) => (
              <Box key={i} sx={{ flex: 1, display: "flex" }}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 2,
                    bgcolor: "#2B2B2B",
                    color: "#fff",
                  }}
                >
                  {card.icon}

                  <Typography variant="h6" fontWeight="bold">
                    {card.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "#E5E7EB",
                      wordBreak: "break-word",
                    }}
                  >
                    {card.content}
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

export default Contact;
