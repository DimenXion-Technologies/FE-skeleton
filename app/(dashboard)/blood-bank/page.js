"use client";

import { useState } from "react";
import { 
  Typography, 
  Box, 
  Tabs, 
  Tab, 
  Paper
} from "@mui/material";
import { useTranslation } from "../../../components/language-provider";
import BloodRequestTab from "./components/BloodRequestTab";
import BloodInventoryTab from "./components/BloodInventoryTab";
import BloodTransfusionTab from "./components/BloodTransfusionTab";

// Tab Panel component
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function BloodBankPage() {
  const { t } = useTranslation();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <Typography 
        variant="h4" 
        component="h1" 
        fontWeight="bold"
        sx={{ mb: 3 }}
      >
        {t("Blood Bank")}
      </Typography>
      
      <Paper 
        elevation={2} 
        sx={{ 
          borderRadius: 2,
          overflow: 'hidden'
        }}
      >
        <Box>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="blood bank tabs"
            variant="fullWidth"
          >
            <Tab label={t("Blood Request")} />
            <Tab label={t("Blood Inventory")} />
            <Tab label={t("Blood Transfusion")} />
          </Tabs>
        </Box>

        <TabPanel value={tabValue} index={0}>
          <BloodRequestTab />
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <BloodInventoryTab />
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <BloodTransfusionTab />
        </TabPanel>
      </Paper>
    </>
  );
}
