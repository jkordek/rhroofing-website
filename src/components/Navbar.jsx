import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, Container } from "@mui/material";

const Navbar = () => {
  const menuItems = ["Home", "Services", "Projects", "Gallery", "Contact"];

  return (
    <>
      <AppBar sx={{ bgcolor: "#2B2B2B", mt: "10px" }} position="static">
        <Toolbar>
          
          {/* Left */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6">MyLogo</Typography>
          </Box>

          {/* Center */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              gap: 2,
            }}
          >
            {menuItems.map((item) => (
              <Button sx={{ color: "#E5E7EB" }} key={item}>
                {item}
              </Button>
            ))}
          </Box>

          {/* Right */}
          <Box sx={{ flex: 1 }} />
        </Toolbar>
      </AppBar>
      <Container sx={{ bgcolor: "#D9A842", height: "5px" }} maxWidth="false"/>
    </>
  );
};

export default Navbar;