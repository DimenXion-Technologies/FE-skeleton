"use client";

import { DashboardNav } from "../components/dashboard-nav";
import { navItems } from "../constants/navItem";
import { Box, Drawer } from "@mui/material";

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        flexShrink: 0,
        display: { xs: "none", lg: "block" },
        [`& .MuiDrawer-paper`]: {
          width: 250,
          boxSizing: "border-box",
          borderRight: "1px solid",
          borderColor: "divider",
          top: 56,
          height: "calc(100% - 56px)",
        },
      }}
      open
    >
      <Box sx={{ px: 0.5, py: 2 }}>
        <DashboardNav items={navItems} />
      </Box>
    </Drawer>
  );
}
