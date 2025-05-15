"use client";

import Link from "next/link";
import { LocalHospital } from "@mui/icons-material";
import { Box, Typography, Grid, Button } from "@mui/material";

import { SignUpForm } from "../../../components/auth/signup-form";

export default function SignUpPage() {
  return (
    <Grid direction="row" sx={{ height: "100vh", width: "100vw" }}>
      <Grid
        item
        sx={{
          display: { xs: "none", lg: "flex" },
          flexDirection: "column",
          position: "relative",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "linear-gradient(to bottom, #16a34a, #ea580c)",
          color: "#fff",
          p: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: "1.5rem",
            fontWeight: 600,
            zIndex: 1,
          }}
        >
          <LocalHospital sx={{ mr: 1, fontSize: "2rem" }} />
          Government Hospital Management System
        </Box>
        <Box sx={{ mt: "auto", zIndex: 1 }}>
          <Typography variant="h6" gutterBottom sx={{ fontStyle: "italic" }}>
            "This centralized system has revolutionized how we manage healthcare
            data across all government hospitals, improving efficiency and
            patient care nationwide."
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            Dr. Sharma - National Health Director
          </Typography>
        </Box>
      </Grid>

      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 4,
        }}
      >
        <Box sx={{ mb: 3, textAlign: "center" }}>
          <Typography variant="h5" fontWeight={600}>
            Create an account
          </Typography>
          <Typography variant="body2">
            Enter your information below to create your account in the hospital
            management system
          </Typography>
        </Box>

        <SignUpForm />

        <Typography variant="body2" sx={{ mt: 2 }}>
          Don't have an account?{" "}
          <Link
            href="/auth/signin"
            style={{
              cursor: "pointer",
              color: "#1976d2",
            }}
          >
            Sign in
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
}
