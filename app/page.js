"use client";

import { Typography, Container } from "@mui/material";
import { useTranslation } from "../components/language-provider";

export default function Home() {
  const { t } = useTranslation();
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        textAlign: "center",
        py: 8,
      }}
    >
      <Typography
        variant="h1"
        component="div"
        color="primary"
        fontWeight="bold"
        sx={{ fontSize: "6rem", animation: "pulse 2s infinite" }}
      >
        {t("Home")}
      </Typography>

      <style jsx global>{`
        @keyframes pulse {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </Container>
  );
}
