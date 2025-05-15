"use client";

import { Typography, Box, Paper } from "@mui/material";
import { useTranslation } from "../language-provider";

export function BloodTransfusionTab() {
  const { t } = useTranslation();

  return (
    <Paper sx={{ padding: 4, borderRadius: 4, width: "100%" }}>
      <Typography variant="h6">{t("Blood Transfusion")}</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Blood transfusion content will go here. This section manages blood
        transfusion records and processes.
      </Typography>
    </Paper>
  );
}
