"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Button,
  TextField,
  CircularProgress,
  Box,
  Typography,
  Paper,
  Stack,
} from "@mui/material";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export function ResetPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values) => {
    setIsLoading(true);

    try {
      setTimeout(() => {
        setIsLoading(false);
        setIsSubmitted(true);
      }, 1500);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <Paper elevation={6} sx={{ padding: 4, borderRadius: 3 }}>
      {isSubmitted ? (
        <Stack spacing={2} alignItems="center" textAlign="center">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            bgcolor="success.main"
            borderRadius="50%"
            width={56}
            height={56}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </Box>
          <Typography variant="h6" fontWeight="bold">
            Check your email
          </Typography>
          <Typography variant="body2" color="text.secondary">
            We’ve sent a password reset link to your email address.
          </Typography>
          <Button fullWidth onClick={() => setIsSubmitted(false)}>
            Back
          </Button>
        </Stack>
      ) : (
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            <TextField
              label="Email address"
              fullWidth
              variant="outlined"
              {...form.register("email")}
              error={!!form.formState.errors.email}
              helperText={form.formState.errors.email?.message}
            />

            <Button type="submit" fullWidth disabled={isLoading}>
              {isLoading ? (
                <>
                  <CircularProgress size={20} sx={{ mr: 1 }} />
                  Sending...
                </>
              ) : (
                "Send reset link"
              )}
            </Button>
          </Stack>
        </form>
      )}
    </Paper>
  );
}
