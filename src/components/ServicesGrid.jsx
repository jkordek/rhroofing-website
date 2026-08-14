import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardActionArea,
} from "@mui/material";
import { Link } from "react-router-dom";
import { services } from "../data/services";

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
          We provide high-quality roofing solutions for homes and businesses
          across Burton on Trent and Staffordshire. Explore each service
          below for full details.
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

                  <Box p={3}>
                    <Typography
                      variant="h5"
                      component="h2"
                      sx={{
                        color: "#fff",
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      {service.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "rgba(255,255,255,.7)",
                        mb: 2,
                      }}
                    >
                      {service.description}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#d4a537",
                        fontWeight: 600,
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
      </Container>
    </Box>
  );
}
