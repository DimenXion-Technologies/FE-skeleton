"use client";

import { useTranslation } from "../../../components/language-provider";
import { Typography, Container } from "@mui/material";

export default function Home() {
  const { t } = useTranslation();

  return (
    <Container>
      <Typography
        variant="h1"
        component="div"
        color="primary"
        fontWeight="bold"
        sx={{ fontSize: "6rem", animation: "pulse 2s infinite" }}
      >
        {t("Dashboard")}
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
