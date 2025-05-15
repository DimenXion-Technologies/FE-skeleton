"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Eye, EyeOff } from "lucide-react";
import {
  Button,
  TextField,
  InputAdornment,
  IconButton,
  CircularProgress,
  Link,
  Paper,
} from "@mui/material";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export function SignInForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values) => {
    setIsLoading(true);

    try {
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);

        // Create a mock user object
        const mockUser = {
          id: "user_1",
          name: "Dr. John Doe",
          email: values.email,
          role: "doctor",
          hospital: "Government General Hospital, Delhi",
        };

        // Store user in localStorage
        localStorage.setItem("user", JSON.stringify(mockUser));

        // Redirect to dashboard
        window.location.href = "/dashboard";
      }, 1500);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <Paper elevation={6} sx={{ padding: 4, borderRadius: 3 }}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          {...form.register("email")}
          error={!!form.formState.errors.email}
          helperText={form.formState.errors.email?.message}
        />

        <TextField
          label="Password"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          fullWidth
          {...form.register("password")}
          error={!!form.formState.errors.password}
          helperText={form.formState.errors.password?.message}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Link
          href="/auth/reset-password"
          variant="body2"
          sx={{
            cursor: "pointer",
            color: "#1976d2",
            textAlign: "right",
            fontSize: "0.875rem",
            display: "block",
            marginY: 1,
          }}
        >
          Forgot password?
        </Link>

        <Button type="submit" fullWidth disabled={isLoading}>
          {isLoading ? (
            <>
              <CircularProgress size={24} className="mr-2" />
              Signing in...
            </>
          ) : (
            "Sign in"
          )}
        </Button>
      </form>
    </Paper>
  );
}
