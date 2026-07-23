import {
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";

export default function ServiceDetails( {service} ) {
  return (
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
          <Box 
            p={5}
            sx={{
              margin: "20px"
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "#fff",
                mb: 3,
                fontWeight: 600,
              }}
            >
              {service.title}
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,.8)",
                mb: 3,
              }}
            >
              {service.description}
            </Typography>

            <Box component="ul" sx={{ pl: 2 }}>
              {service.features.map((feature) => (
                <Typography
                  key={feature}
                  component="li"
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
            src={service.image}
            alt={service.title}
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
  );
}