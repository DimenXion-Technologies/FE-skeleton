"use client";

import { AppBar, Box, CssBaseline, Toolbar } from "@mui/material";
import Header from "../../layout/header";
import Sidebar from "../../layout/sidebar";

export default function DashboardLayout({ children }) {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Header />
      </AppBar>

      <Box sx={{ overflow: "auto" }}>
        <Sidebar />
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          overflow: "auto",
          px: 2,
          py: 4,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
