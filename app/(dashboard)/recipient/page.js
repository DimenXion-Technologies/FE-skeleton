"use client";

import React from "react";
import { useTranslation } from "../../../components/language-provider";
import { Typography, Container, Box } from "@mui/material";
import { RecipientForm } from "../../../components/recipient/form";
import RecipientTable from "../../../components/recipient/table";

export default function Home() {
  const { t } = useTranslation();

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography
          variant="h3"
          component="div"
          fontWeight="bold"
          color="primary"
          sx={{ animation: "pulse 2s infinite" }}
        >
          {t("Recipient")}
        </Typography>

        <Typography variant="body2" sx={{ color: "GrayText" }}>
          View & Create Recipient Details
        </Typography>
      </Box>

      <RecipientForm />
      <RecipientTable />

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
