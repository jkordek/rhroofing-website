import React, { useState, useCallback, useEffect } from "react";
import { Box, Typography, Container, Paper, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import service1 from "../images/roofing1.jpeg";
import service2 from "../images/roofing2.jpeg";
import service3 from "../images/roofing3.jpeg";
import service4 from "../images/roofing4.jpeg";
import service5 from "../images/roofing5.jpg";

const services = [
  {
    title: "Roof Repairs",
    image: service1,
    description:
      "Professional repair services to fix leaks, damaged tiles, and structural issues to keep your home protected.",
  },
  {
    title: "New Roof Installation",
    image: service3,
    description:
      "High-quality roof installations using durable materials designed to last for decades.",
  },
  {
    title: "Leadwork",
    image: service2,
    description:
      "Detailed inspections to identify potential issues early and ensure your roof stays in top condition.",
  },
  {
    title: "Flat Roofing",
    image: service4,
    description:
      "Reliable flat roofing services for homes and commercial properties, finished with durable materials.",
  },
  {
    title: "Soffit and Fascias",
    image: service5,
    description:
      "Durable soffit and fascia repairs to protect your roofline, improve ventilation, and keep your home looking neat and weatherproof.",
  },
];

const mod = (n, m) => ((n % m) + m) % m;

const Services = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  const total = services.length;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slots = isMobile
    ? [
        { offset: 0, scale: 1, opacity: 1, zIndex: 10, widthVw: 90, imgH: 200 },
      ]
    : [
        { offset: -340, scale: 0.82, opacity: 0.25, zIndex: 1, width: 260, imgH: 140 },
        { offset: -175, scale: 0.9, opacity: 0.55, zIndex: 2, width: 280, imgH: 150 },
        { offset: 0, scale: 1, opacity: 1, zIndex: 10, width: 310, imgH: 170 },
        { offset: 175, scale: 0.9, opacity: 0.55, zIndex: 2, width: 280, imgH: 150 },
        { offset: 340, scale: 0.82, opacity: 0.25, zIndex: 1, width: 260, imgH: 140 },
      ];

  const centerIndex = isMobile ? 0 : 2;

  const move = useCallback((dir) => {
    setCurrent((prev) => mod(prev + dir, total));
  }, [total]);

  return (
    <section id="Services">
      <Container sx={{ bgcolor: "#D9A842", height: "5px" }} maxWidth={false} />

      <Container maxWidth="lg" disableGutters={isMobile}>
        <Box
          sx={{
            py: 10,
            px: 2,
            color: "#fff",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{ mb: "0.70rem" }}
          >
            Our Services
          </Typography>

          <Box sx={{ position: "relative", width: "100%" }}>
            <IconButton
              onClick={() => move(-1)}
              aria-label="Previous service"
              sx={{
                position: "absolute",
                left: isMobile ? 8 : 0,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 20,
                bgcolor: "#D9A842",
                color: "#03002e",
                width: 44,
                height: 44,
                "&:hover": { bgcolor: "#e8b84b" },
              }}
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>

            <Box
              sx={{
                position: "relative",
                height: isMobile ? 480 : 420,
                overflow: "hidden",
                width: "100%",
              }}
            >
              {slots.map((slot, i) => {
                const idx = mod(current + i - centerIndex, total);
                const service = services[idx];
                const isCenter = i === centerIndex;
                const cardWidth = isMobile ? `${slot.widthVw}vw` : `${slot.width}px`;

                return (
                  <Box
                    key={`${service.title}-${i}`}
                    onClick={() => !isCenter && move(i - centerIndex)}
                    sx={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      width: cardWidth,
                      transform: `translate(calc(-50% + ${slot.offset}px), -50%) scale(${slot.scale})`,
                      opacity: slot.opacity,
                      zIndex: slot.zIndex,
                      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                      cursor: isCenter ? "default" : "pointer",
                    }}
                  >
                    <Paper
                      elevation={isCenter ? 8 : 2}
                      sx={{
                        bgcolor: "#1a1840",
                        color: "#fff",
                        borderBottom: "5px solid #D9A842",
                        borderRadius: 2,
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Box
                        component="img"
                        src={service.image}
                        alt={service.title}
                        sx={{
                          width: "100%",
                          height: slot.imgH,
                          objectFit: "cover",
                        }}
                      />
                      <Box sx={{ p: 2.5 }}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                          {service.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "#E5E7EB", lineHeight: 1.7 }}
                        >
                          {service.description}
                        </Typography>
                      </Box>
                    </Paper>
                  </Box>
                );
              })}
            </Box>

            <IconButton
              onClick={() => move(1)}
              aria-label="Next service"
              sx={{
                position: "absolute",
                right: isMobile ? 8 : 0,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 20,
                bgcolor: "#D9A842",
                color: "#03002e",
                width: 44,
                height: 44,
                "&:hover": { bgcolor: "#e8b84b" },
              }}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 4 }}>
            {services.map((_, i) => (
              <Box
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Show service ${i + 1}`}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    setCurrent(i);
                  }
                }}
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  cursor: "pointer",
                  bgcolor: i === current ? "#D9A842" : "rgba(255,255,255,0.2)",
                  transition: "background 0.3s",
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default Services;
