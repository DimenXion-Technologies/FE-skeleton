"use client";

import { DashboardNav } from "../components/dashboard-nav";
import { navItems } from "../constants/navItem";
import { Box, Drawer, IconButton } from "@mui/material";
import { useSidebar } from "../components/sidebar-provider";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

export default function Sidebar() {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <Drawer
      variant="permanent"
      sx={{
        flexShrink: 0,
        display: { xs: "none", lg: "block" },
        [`& .MuiDrawer-paper`]: {
          width: isOpen ? 250 : 65,
          boxSizing: "border-box",
          borderRight: "1px solid",
          borderColor: "divider",
          top: 56,
          height: "calc(100% - 56px)",
          overflowX: "hidden",
          transition: theme => theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
      }}
      open
    >
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'flex-end', 
        p: 1 
      }}>
        <IconButton onClick={toggleSidebar} size="small">
          <MenuOpenIcon sx={{ 
            transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)',
            transition: 'transform 0.3s'
          }} />
        </IconButton>
      </Box>
      <Box sx={{ px: 0.5, py: 1 }}>
        <DashboardNav items={navItems} isCollapsed={!isOpen} />
      </Box>
    </Drawer>
  );
}
