"use client";

import React from "react";
import { useTranslation } from "../../../components/language-provider";
import { Typography, Container, Box } from "@mui/material";
import { DonorForm } from "../../../components/donor/form";
import { DonorTable } from "../../../components/donor/table";

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
          {t("Donor")}
        </Typography>

        <Typography variant="body2" sx={{ color: "GrayText" }}>
          View & Create Donor Details
        </Typography>
      </Box>

      <DonorForm />
      <DonorTable />
    </Container>
  );
}
