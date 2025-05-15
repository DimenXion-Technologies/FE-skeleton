"use client";

import React from "react";
import { useTranslation } from "../../../components/language-provider";
import { Typography, Container, Tabs, Tab } from "@mui/material";

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
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
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

      <Tabs value={value} onChange={handleChange}>
        <Tab label="One" />
        <Tab label="Two" />
        <Tab label="Three" />
      </Tabs>

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
