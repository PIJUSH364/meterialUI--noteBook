import React, { useState } from "react";
import { IconButton, Typography, Box, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
function MuiDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            side Panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}

export default MuiDrawer;
