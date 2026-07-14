import { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardActionArea,
  Button,
  Fade,
} from "@mui/material";

const services = [
  {
    id: "flat",
    title: "Flat Roofing",
    image: "/images/services/flat-roofing.jpg",
    description:
      "Our flat roofing solutions are designed to provide long-lasting protection for homes and commercial properties.",
    features: [
      "High-quality materials",
      "Weatherproof and leak-resistant",
      "Residential & commercial",
      "Long-lasting performance",
    ],
  },
  {
    id: "leadwork",
    title: "Leadwork",
    image: "/images/services/leadwork.jpg",
    description:
      "Professional leadwork for flashings, valleys and roofing details.",
    features: [
      "Traditional craftsmanship",
      "Weatherproof joints",
      "Durable finish",
    ],
  },
  {
    id: "repairs",
    title: "Roof Repairs",
    image: "/images/services/roof-repair.jpg",
    description:
      "Fast and reliable roof repair services to keep your property protected.",
    features: [
      "Emergency call-outs",
      "Leak detection",
      "Tile replacement",
    ],
  },
  {
    id: "gutters",
    title: "Guttering Services",
    image: "/images/services/guttering.jpg",
    description:
      "Installation and repair of gutters, downpipes and drainage systems.",
    features: [
      "uPVC systems",
      "Repairs",
      "Maintenance",
    ],
  },
];

export default function ServicesGrid() {
  const [selected, setSelected] = useState(services[0]);

  return (
    <Box
      sx={{
        bgcolor: "#3f3f3f",
        py: 10,
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="overline"
          sx={{
            color: "#d4a537",
            letterSpacing: 2,
            display: "block",
            textAlign: "center",
          }}
        >
          OUR SERVICES
        </Typography>

        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            color: "#fff",
            mb: 2,
            fontWeight: 600,
          }}
        >
          Professional Roofing Services
        </Typography>

        <Typography
          sx={{
            color: "rgba(255,255,255,0.7)",
            textAlign: "center",
            maxWidth: 700,
            mx: "auto",
            mb: 6,
          }}
        >
          We provide high-quality roofing solutions for homes and businesses.
        </Typography>

        <Grid container spacing={3}>
          {services.map((service) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={service.id}>
              <Card
                sx={{
                  position: "relative",
                  height: 260,
                  overflow: "hidden",
                  borderRadius: 3,
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  border:
                    selected.id === service.id
                      ? "2px solid #d4a537"
                      : "1px solid rgba(255,255,255,.1)",
                  transition: "all .3s ease",
                  cursor: "pointer",

                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 15px 35px rgba(0,0,0,.4)",
                  },

                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,.85), rgba(0,0,0,.15))",
                  },
                }}
              >
                <CardActionArea
                  onClick={() => setSelected(service)}
                  sx={{
                    height: "100%",
                    position: "relative",
                    zIndex: 2,
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <Box p={3}>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#fff",
                        fontWeight: 600,
                      }}
                    >
                      {service.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#d4a537",
                        mt: 1,
                      }}
                    >
                      Learn more →
                    </Typography>
                  </Box>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Fade in timeout={300}>
          <Box
            sx={{
              mt: 5,
              border: "1px solid rgba(212,165,55,.5)",
              borderRadius: 4,
              overflow: "hidden",
              bgcolor: "#2f2f2f",
            }}
          >
            <Grid container>
              <Grid size={{ xs: 12, md: 5 }}>
                <Box p={5}>
                  <Typography
                    variant="h3"
                    sx={{
                      color: "#fff",
                      mb: 3,
                      fontWeight: 600,
                    }}
                  >
                    {selected.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "rgba(255,255,255,.8)",
                      mb: 3,
                    }}
                  >
                    {selected.description}
                  </Typography>

                  <Box component="ul" sx={{ pl: 2 }}>
                    {selected.features.map((feature) => (
                      <Typography
                        component="li"
                        key={feature}
                        sx={{
                          color: "#fff",
                          mb: 1,
                        }}
                      >
                        {feature}
                      </Typography>
                    ))}
                  </Box>

                  <Button
                    variant="contained"
                    sx={{
                      mt: 3,
                      bgcolor: "#d4a537",
                      color: "#111",
                      fontWeight: 700,

                      "&:hover": {
                        bgcolor: "#e3b84f",
                      },
                    }}
                  >
                    Get a Free Quote
                  </Button>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 7 }}>
                <Box
                  component="img"
                  src={selected.image}
                  alt={selected.title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    minHeight: 500,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}