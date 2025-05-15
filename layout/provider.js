"use client";

import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import ThemeProvider from "./theme-proider";

export default function Providers({ session, children }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <ThemeProvider session={session}>{children}</ThemeProvider>
    </NextThemesProvider>
  );
}
