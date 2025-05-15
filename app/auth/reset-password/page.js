"use client";

import Link from "next/link";
import { ArrowBack } from "@mui/icons-material";
import { Box, Container, Typography, Stack } from "@mui/material";

import { ResetPasswordForm } from "../../../components/auth/reset-password-form";

export default function ResetPasswordPage() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Link href="/auth/signin" passHref>
        <Box
          component="a"
          sx={{
            position: "absolute",
            top: { xs: 16, md: 32 },
            left: { xs: 16, md: 32 },
            bgcolor: "#E8E9EB",
            borderRadius: "8px",
            padding: "4px 8px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "text.primary",
          }}
        >
          <ArrowBack fontSize="small" sx={{ marginRight: 1 }} />
          Back to login
        </Box>
      </Link>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Stack spacing={1} textAlign="center">
          <Typography variant="h5" fontWeight={600}>
            Reset password
          </Typography>
          <Typography variant="body2">
            Enter your email address and we will send you a link to reset your
            password
          </Typography>
        </Stack>

        <ResetPasswordForm />
      </Box>
    </Container>
  );
}
