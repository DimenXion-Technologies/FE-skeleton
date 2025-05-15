"use client";

import { DashboardNav } from "../components/dashboard-nav";
import { navItems } from "../constants/navItem";
import { Box, Drawer, useTheme } from "@mui/material";

export default function Sidebar() {
  const theme = useTheme();

  return (
    <Drawer
      variant="permanent"
      open
      sx={{
        width: 250,
        flexShrink: 0,
        display: { xs: "none", lg: "block" },
        [`& .MuiDrawer-paper`]: {
          width: 250,
          boxSizing: "border-box",
          borderRight: `1px solid ${theme.palette.divider}`,
          top: 52,
          height: "calc(100% - 52px)",
        },
      }}
    >
      <Box sx={{ px: 1, py: 2 }}>
        <DashboardNav items={navItems} />
      </Box>
    </Drawer>
  );
}
