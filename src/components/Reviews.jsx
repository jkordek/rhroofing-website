import React from "react";
import { Card, CardContent, CardHeader, Box } from "@mui/material";

const Reviews = () => {
  return (
    <Card elevation={3} sx={{ maxWidth: 800, margin: "auto" }}>
      <CardHeader
        title="What Our Customers Say"
        subheader="Google Reviews"
      />

      <CardContent>
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            width: "100%",
            paddingTop: "56.25%", // 16:9 ratio
            borderRadius: 2
          }}
        >
          <iframe
            title="Google Reviews"
            src="https://www.google.com/maps/embed?pb=YOUR_PLACE_EMBED_CODE"
            style={{
              border: 0,
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%"
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Reviews;
