import React from "react";
import { Box, Container, Link, List, ListItem, Typography } from "@mui/material";
import SEO from "../components/SEO";

const sections = [
  {
    title: "Who we are",
    body: [
      "Natural Flow Roofing Systems provides roofing services in Burton on Trent, Staffordshire, and nearby areas.",
      "For data protection questions, contact us at naturalflowroofingsystems@gmail.com or call 07440 448919 / 07404 047918.",
    ],
  },
  {
    title: "Personal information we collect",
    body: [
      "When you contact us, ask for a quote, book work, or discuss an existing job, we may collect your name, phone number, email address, property address, enquiry details, photos you send us, appointment information, and records of our communications.",
      "We may also keep basic payment, invoice, and job records where needed for accounting, insurance, warranty, or legal purposes.",
    ],
  },
  {
    title: "How we use your information",
    bullets: [
      "Responding to enquiries and providing quotes.",
      "Arranging visits, inspections, repairs, installations, and follow-up work.",
      "Keeping records of completed work, invoices, guarantees, and customer communications.",
      "Managing accounting, insurance, legal, and business administration requirements.",
      "Improving our services and handling complaints or disputes.",
    ],
  },
  {
    title: "Our lawful bases",
    body: [
      "We process enquiry and job information because it is necessary to take steps before entering into a contract with you, to perform a contract with you, to meet legal obligations, and for our legitimate interests in running a roofing business, keeping accurate records, and responding to customers.",
    ],
  },
  {
    title: "Who we share information with",
    body: [
      "We do not sell personal information. We only share it where needed with trusted service providers, professional advisers, insurers, payment or accounting providers, subcontractors involved in your job, or public authorities where the law requires it.",
    ],
  },
  {
    title: "How long we keep information",
    body: [
      "We keep enquiry information only for as long as needed to respond and follow up. Quote, job, invoice, guarantee, insurance, and tax records may be kept for longer where required for business, legal, accounting, or warranty reasons.",
    ],
  },
  {
    title: "Your rights",
    body: [
      "You can ask us to access, correct, delete, restrict, or transfer your personal information. You can also object to processing based on legitimate interests. These rights may not apply in every situation, but we will explain our response clearly.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy policy for Natural Flow Roofing Systems, explaining how customer personal information is collected, used, shared, and protected."
        path="/privacy-policy/"
      />

      <Container sx={{ bgcolor: "#D9A842", height: "5px" }} maxWidth={false} />

      <Box component="main" sx={{ bgcolor: "#474646", color: "#fff", py: 8, px: 2 }}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
            Privacy Policy
          </Typography>
          <Typography sx={{ color: "#E5E7EB", mb: 5 }}>
            Last updated: 15 May 2026
          </Typography>

          {sections.map((section) => (
            <Box key={section.title} sx={{ mb: 4 }}>
              <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom>
                {section.title}
              </Typography>

              {section.body?.map((paragraph) => (
                <Typography key={paragraph} sx={{ color: "#E5E7EB", lineHeight: 1.8, mb: 1.5 }}>
                  {paragraph}
                </Typography>
              ))}

              {section.bullets && (
                <List sx={{ color: "#E5E7EB", pl: 2, listStyleType: "disc" }}>
                  {section.bullets.map((item) => (
                    <ListItem key={item} sx={{ display: "list-item", py: 0.5, pl: 0 }}>
                      {item}
                    </ListItem>
                  ))}
                </List>
              )}
            </Box>
          ))}

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom>
              Complaints
            </Typography>
            <Typography sx={{ color: "#E5E7EB", lineHeight: 1.8 }}>
              Please contact us first if you have a concern. You also have the right to complain to
              the Information Commissioner&apos;s Office at{" "}
              <Link href="https://ico.org.uk/make-a-complaint/" color="#D9A842">
                ico.org.uk/make-a-complaint
              </Link>
              .
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom>
              Cookies
            </Typography>
            <Typography sx={{ color: "#E5E7EB", lineHeight: 1.8 }}>
              See our{" "}
              <Link href="/cookie-policy/" color="#D9A842">
                Cookie Policy
              </Link>{" "}
              for information about this website&apos;s cookie use.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}
