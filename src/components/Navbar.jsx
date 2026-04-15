import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Navbar = () => {
  const menuItems = ["Home", "Services", "Projects", "Gallery", "Contact"];

  return (
    <AppBar sx={{ bgcolor: "#2B2B2B" }} position="static">
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
  );
};

export default Navbar;