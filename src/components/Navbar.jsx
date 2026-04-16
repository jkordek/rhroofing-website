import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const menuItems = ["Home", "Services", "Projects", "Gallery", "Contact"];

  // Detect mobile screen
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Drawer state
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar sx={{ bgcolor: "#2B2B2B" }} position="static">
        <Toolbar sx={{ display: "flex", alignItems: "center" }}>
          
          {/* Left - Logo */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6">MyLogo</Typography>
          </Box>

          {/* Desktop Menu */}
          {!isMobile && (
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
          )}

          {/* Right (empty for now) */}
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            {/* Mobile Hamburger */}
            {isMobile && (
              <IconButton
                sx={{ color: "#E5E7EB" }}
                onClick={() => setOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Gold bar under navbar */}
      <Box sx={{ bgcolor: "#D9A842", height: "5px", width: "100%" }} />

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton onClick={() => setOpen(false)}>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
