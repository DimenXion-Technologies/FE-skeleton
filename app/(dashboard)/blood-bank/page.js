"use client";

import { useState } from "react";
import { Typography, Box, Tabs, Tab, Paper, Container } from "@mui/material";
import { useTranslation } from "../../../components/language-provider";
import TabPanel from "../../../components/tab-panel";
import { BloodRequestForm } from "../../../components/blood-bank/BloodRequestForm";
import { BloodRequestTale } from "../../../components/blood-bank/BloodRequestTable";
import {BloodTransfusionTab} from "../../../components/blood-bank/BloodTransfusionTab";
import {BloodInventoryForm} from "../../../components/blood-bank/BloodInventoryForm";
import {BloodInventoryTable} from "../../../components/blood-bank/BloodInventoryTable";

export default function BloodBankPage() {
  const { t } = useTranslation();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

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
          {t("Blood Bank")}
        </Typography>

        <Typography variant="body2" sx={{ color: "GrayText" }}>
          View & Create Bllod Inventory
        </Typography>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Tabs value={tabValue} onChange={handleTabChange} variant="fullWidth">
          <Tab label={t("Blood Request")} />
          <Tab label={t("Blood Inventory")} />
          <Tab label={t("Blood Transfusion")} />
        </Tabs>

        <TabPanel value={tabValue} index={0}>
            <BloodRequestForm />
            <BloodRequestTale />
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <BloodInventoryForm />
          <BloodInventoryTable />
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <BloodTransfusionTab />
        </TabPanel>
      </Box>
    </Container>
  );
}
