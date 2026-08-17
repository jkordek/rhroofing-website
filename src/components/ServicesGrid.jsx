import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardActionArea,
  Stack,
  Button,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
import { services } from "../data/services";

const whyChooseUs = [
  "Over 25 years of roofing experience in Burton on Trent and Staffordshire",
  "Fully certified and insured",
  "Transparent, honest pricing with no hidden costs",
  "Available 7 days a week",
  "High-quality, durable materials on every job",
];

export default function ServicesGrid() {
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
          component="h1"
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
          Natural Flow Roofing Systems offers a full range of roofing services
          for homes and businesses across Burton on Trent and Staffordshire.
          From minor repairs to complete new roof installations, every job is
          carried out by fully certified and insured specialists using
          durable materials, with transparent pricing agreed before any work
          begins. Below is a closer look at what each service involves.
        </Typography>

        <Grid container spacing={3}>
          {services.map((service) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={service.slug}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 3,
                  bgcolor: "#2f2f2f",
                  border: "1px solid rgba(255,255,255,.1)",
                  transition: "all .3s ease",

                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 15px 35px rgba(0,0,0,.4)",
                    borderColor: "#d4a537",
                  },
                }}
              >
                <CardActionArea
                  component={Link}
                  to={`/services/${service.slug}/`}
                  sx={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "stretch" }}
                >
                  <Box
                    component="img"
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    sx={{
                      width: "100%",
                      height: 200,
                      objectFit: "cover",
                    }}
                  />

                  <Box
                    sx={{
                      p: 3,
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="h2"
                      sx={{
                        color: "#fff",
                        fontWeight: 600,
                        mb: 1,
                        height: 64,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {service.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "rgba(255,255,255,.7)",
                        mb: 2,
                        height: 96,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {service.description}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#d4a537",
                        fontWeight: 600,
                        mt: "auto",
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

        <Box
          sx={{
            mt: 8,
            border: "1px solid rgba(212,165,55,.5)",
            borderRadius: 4,
            bgcolor: "#2f2f2f",
            p: { xs: 4, md: 6 },
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "#fff", fontWeight: 600, mb: 4 }}
          >
            Why Choose Natural Flow Roofing Systems
          </Typography>

          <Stack
            spacing={1.5}
            sx={{
              display: "inline-flex",
              alignItems: "flex-start",
              textAlign: "left",
              mb: 4,
            }}
          >
            {whyChooseUs.map((point) => (
              <Box key={point} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CheckCircleIcon sx={{ color: "#d4a537" }} />
                <Typography sx={{ color: "#fff" }}>{point}</Typography>
              </Box>
            ))}
          </Stack>

          <Box>
            <Button
              component={Link}
              to="/contact/"
              variant="contained"
              sx={{
                bgcolor: "#d4a537",
                color: "#111",
                fontWeight: 700,
                "&:hover": {
                  bgcolor: "#e3b84f",
                },
              }}
            >
              Get a free, no-obligation quote →
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
