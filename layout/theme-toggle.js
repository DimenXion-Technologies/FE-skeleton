"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    handleClose();
  };

  const getThemeIcon = () => {
    if (!mounted) return <SettingsSuggestIcon />;
    
    switch (theme) {
      case "light":
        return <Brightness7Icon />;
      case "dark":
        return <Brightness4Icon />;
      default:
        return <SettingsSuggestIcon />;
    }
  };

  if (!mounted) {
    return (
      <IconButton disabled color="inherit">
        <SettingsSuggestIcon />
      </IconButton>
    );
  }

  return (
    <>
      <Tooltip title="Toggle theme">
        <IconButton onClick={handleOpen} color="inherit">
          {getThemeIcon()}
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem
          onClick={() => handleThemeChange("light")}
          selected={theme === "light"}
        >
          <Brightness7Icon sx={{ mr: 1 }} fontSize="small" />
          Light
        </MenuItem>
        <MenuItem
          onClick={() => handleThemeChange("dark")}
          selected={theme === "dark"}
        >
          <Brightness4Icon sx={{ mr: 1 }} fontSize="small" />
          Dark
        </MenuItem>
        <MenuItem
          onClick={() => handleThemeChange("system")}
          selected={theme === "system"}
        >
          <SettingsSuggestIcon sx={{ mr: 1 }} fontSize="small" />
          System
        </MenuItem>
      </Menu>
    </>
  );
}