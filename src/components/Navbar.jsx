import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
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
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.svg";

const Navbar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Company", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const isMobile = useMediaQuery("(max-width: 768px)");
  const [open, setOpen] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // ensures top of page
  };

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
              onClick={() => handleNavigate("/")}
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
                <Button
                  component={Link}
                  to={item.path}
                  sx={{ color: "#E5E7EB" }}
                  key={item.label}
                >
                  {item.label}
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

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={() => setOpen(false)}
                >
                  <ListItemText primary={item.label} />
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