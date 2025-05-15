"use client";

import React, { useEffect, useMemo, useState } from "react";
import { SessionProvider } from "next-auth/react";
import { useTheme } from "next-themes";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { getTheme } from "./theme";

export default function ThemeProvider({ session, children }) {
  const { resolvedTheme } = useTheme();
  const [mode, setMode] = useState("light");

  useEffect(() => {
    setMode(resolvedTheme || "light");
  }, [resolvedTheme]);

  const muiTheme = useMemo(() => getTheme(mode), [mode]);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <SessionProvider session={session}>{children}</SessionProvider>
    </MuiThemeProvider>
  );
}
