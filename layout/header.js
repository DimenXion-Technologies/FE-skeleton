"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SvgIcon from "@mui/material/SvgIcon";
import { Avatar, MenuItem, Select, Typography } from "@mui/material";
import { MobileSidebar } from "./mobile-sidebar";
import { UserNav } from "./user-nav";
import ThemeToggle from "./theme-toggle";
import { useTranslation } from "../components/language-provider";

function CustomIcon(props) {
  return (
    <SvgIcon {...props} sx={{ fontSize: 28 }}>
      <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
    </SvgIcon>
  );
}

export default function Header() {
  const { language, setLanguage, t } = useTranslation();
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <AppBar
      position="fixed"
      elevation={1}
      sx={{
        backdropFilter: "blur(8px)",
        borderBottom: `1px solid ${theme.palette.divider}`,
        bgcolor: "primary.main",
        zIndex: theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar
        sx={{
          height: 64,
          px: { xs: 2, sm: 3 },
          justifyContent: "space-between",
        }}
      >
        {/* Left side */}
        {isLgUp ? (
          <Box display="flex" alignItems="center" gap={1}>
            <CustomIcon />
            <Typography variant="h6" fontWeight="bold">
              {t("HIMS")}
            </Typography>
          </Box>
        ) : (
          <MobileSidebar />
        )}

        {/* Right side */}
        <Box display="flex" alignItems="center" gap={{ xs: 1, sm: 2 }}>
          <Select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            variant="outlined"
            size="small"
            sx={{
              minWidth: 90,
              backgroundColor: theme.palette.background.default,
              borderRadius: 2,
              "& .MuiSelect-select": {
                padding: "6px 12px",
                color: theme.palette.text.primary,
              },
              "& fieldset": {
                borderColor: theme.palette.divider,
              },
              "&:hover fieldset": {
                borderColor: theme.palette.primary.light,
              },
            }}
          >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="hi">हिन्दी</MenuItem>
            <MenuItem value="ta">தமிழ்</MenuItem>
          </Select>

          <UserNav />

          <ThemeToggle />

          <Avatar
            src="/profile.jpg"
            sx={{
              width: 36,
              height: 36,
              bgcolor: "primary.light",
              color: "white",
              fontWeight: "bold",
              fontSize: 14,
              boxShadow: 1,
              transition: "transform 0.2s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            MA
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
