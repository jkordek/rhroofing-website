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
import logo from "../images/logo.svg";

const Navbar = () => {
  const menuItems = ["Home", "Services", "Projects", "Gallery", "Contact"];
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar sx={{ bgcolor: "#2B2B2B" }} position="sticky" elevation={4}>
        <Toolbar sx={{ display: "flex", alignItems: "center" }}>
          
          {/* Left - Logo */}
          <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
            <Box
              component="img"
              src={logo}
              alt="Natural Flow Roofing Logo"
              sx={{
                height: 50,
                width: "auto",
                cursor: "pointer",
              }}
            />
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

          {/* Right */}
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
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
