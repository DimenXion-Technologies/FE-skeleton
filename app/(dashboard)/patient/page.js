"use client";

import React from "react";
import { useTranslation } from "../../../components/language-provider";
import { Typography, Container, Tabs, Tab, Box } from "@mui/material";
import TabPanel from "../../../components/tab-panel";

export default function Home() {
  const { t } = useTranslation();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        py: 8,
      }}
    >
      <Typography
        variant="h4"
        component="div"
        color="primary"
        fontWeight="bold"
        sx={{ animation: "pulse 2s infinite" }}
      >
        {t("Patient")}
      </Typography>

      <Box>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Patients" />
          <Tab label="Donor" />
          <Tab label="Recepient" />
        </Tabs>

        <TabPanel value={value} index={0}>
          {/* Patients Tab Content */}
          This is the Patients tab.
        </TabPanel>
        <TabPanel value={value} index={1}>
          {/* Donor Tab Content */}
          This is the Donor tab.
        </TabPanel>
        <TabPanel value={value} index={2}>
          {/* Recipient Tab Content */}
          This is the Recipient tab.
        </TabPanel>
      </Box>

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
