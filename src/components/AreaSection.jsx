import { Box, Container, Typography, Paper, Link, Stack } from "@mui/material";

export default function AreasSection() {
  const areas = [
    { name: "Burton on Trent", link: "/roofers-burton-on-trent" },
    { name: "Swadlincote", link: "/roofers-swadlincote" },
    { name: "Derby" },
    { name: "Lichfield" },
    { name: "Tamworth" },
    { name: "Staffordshire" },
  ];

  return (
    <Box sx={{ py: 8, color: "#fff", textAlign: "center" }}>
      <Container maxWidth="lg">
        {/* Title */}
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          textAlign="center"
        >
          Areas We Cover
        </Typography>

        {/* Description */}
        <Typography
          sx={{ mb: 5, maxWidth: 700, mx: "auto" }}
          textAlign="center"
        >
          We provide professional roofing services across Burton on Trent
          and surrounding areas. Whether you need repairs, installation,
          or inspections, our team is ready to help.
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
          {areas.map((area, index) => (
            <Paper
              key={index}
              elevation={2}
              sx={{
                width: { xs: "100%", sm: "45%", md: "30%" },
                p: 3,
                textAlign: "center",
                borderRadius: 3,
                transition: "0.25s",
                bgcolor: "#2B2B2B",
                color: "#fff",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 6,
                },
              }}
            >
              {area.link ? (
                <Link
                  href={area.link}
                  underline="none"
                  sx={{ fontWeight: "bold", fontSize: "1.1rem", textDecoration: "none", color: "#D9A842" }}
                >
                  {area.name}
                </Link>
              ) : (
                <Typography fontWeight={500}>
                  {area.name}
                </Typography>
              )}
            </Paper>
          ))}
        </Stack>

        {/* CTA */}
        <Typography sx={{ mt: 6 }} textAlign="center">
          Looking for trusted{" "}
          <Link href="/roofers-burton-on-trent" underline="hover">
            roofers in Burton on Trent
          </Link>
          ? Contact us today for a free quote.
        </Typography>
      </Container>
    </Box>
  );
}