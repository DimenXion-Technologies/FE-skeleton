"use client";

import { useRouter } from "next/navigation";
import { Typography, Button, Stack, Container } from "@mui/material";

export default function NotFound() {
  const router = useRouter();

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        textAlign: "center",
        py: 8,
      }}
    >
      <Typography
        variant="h1"
        component="div"
        color="primary"
        fontWeight="bold"
        sx={{ fontSize: "6rem", animation: "pulse 2s infinite" }}
      >
        404
      </Typography>

      <Typography variant="h4" gutterBottom>
        Page not found
      </Typography>

      <Typography variant="body1" mb={4}>
        Sorry, the page you are looking for doesn&apos;t exist or has been
        moved.
      </Typography>

      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => router.back()}
        >
          Go Back
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          onClick={() => router.push("/")}
        >
          Back to Home
        </Button>
      </Stack>

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
