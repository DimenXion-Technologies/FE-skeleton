"use client";

import { useState } from "react";
import { Drawer, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { navItems } from "../constants/navItem";
import { DashboardNav } from "../components/dashboard-nav";

export function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={() => setOpen(true)}
        sx={{ display: { lg: "none" } }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        ModalProps={{ keepMounted: true }}
      >
        <Box sx={{ px: 0.5, py: 8, width: 250 }}>
          <DashboardNav items={navItems} setOpen={setOpen} />
        </Box>
      </Drawer>
    </>
  );
}
