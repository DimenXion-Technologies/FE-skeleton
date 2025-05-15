"use client";

import { 
  Typography, 
  Box 
} from "@mui/material";
import { useTranslation } from "../../../../components/language-provider";

export default function BloodTransfusionTab() {
  const { t } = useTranslation();

  return (
    <Box>
      <Typography variant="h6">{t("Blood Transfusion")}</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Blood transfusion content will go here. This section manages blood transfusion records and processes.
      </Typography>
    </Box>
  );
} 