import React from "react";
import {
  Box,
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { faqs } from "../data/faqs";

const FAQ = ({ isPage = false }) => {
  return (
    <section id="FAQ">
      <Container sx={{ bgcolor: "#D9A842", height: "5px" }} maxWidth={false} />

      <Container maxWidth="md">
        <Box
          sx={{
            py: 10,
            color: "#fff",
            textAlign: "center",
          }}
        >
          {isPage ? (
            <Typography
              variant="h2"
              component="h1"
              sx={{ color: "#fff", fontWeight: 600, mb: 2, textAlign: "center" }}
            >
              Frequently Asked Questions
            </Typography>
          ) : (
            <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
              Frequently Asked Questions
            </Typography>
          )}

          <Typography
            variant="body1"
            sx={{
              color: "rgba(255,255,255,.75)",
              maxWidth: 700,
              mx: "auto",
              mb: 6,
            }}
          >
            Answers to the questions we're asked most often. Can't find what
            you're looking for? Get in touch and we'll be happy to help.
          </Typography>

          <Box sx={{ textAlign: "left" }}>
            {faqs.map((faq, i) => (
              <Accordion
                key={faq.question}
                defaultExpanded={i === 0}
                disableGutters
                sx={{
                  bgcolor: "#2B2B2B",
                  color: "#fff",
                  mb: 1.5,
                  borderRadius: "8px !important",
                  overflow: "hidden",
                  "&:before": { display: "none" },
                  border: "1px solid rgba(255,255,255,.08)",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#D9A842" }} />}
                  sx={{ px: 3 }}
                >
                  <Typography variant="h6" component={isPage ? "h2" : "h3"} sx={{ fontSize: "1.05rem", fontWeight: 600 }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 3, pb: 3 }}>
                  <Typography variant="body1" sx={{ color: "#E5E7EB" }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default FAQ;
