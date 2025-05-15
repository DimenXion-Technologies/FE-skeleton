"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Eye, EyeOff } from "lucide-react";
import {
  Button,
  TextField,
  FormControl,
  InputAdornment,
  IconButton,
  CircularProgress,
  Paper,
} from "@mui/material";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  hospital: z.string().min(3, {
    message: "Hospital name must be at least 3 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  confirmPassword: z.string().min(8, {
    message: "Confirm Password must be at least 8 characters.",
  }),
});

export function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      hospital: "",
      password: "",
      confirmPassword: "",
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
          name: values.name,
          hospital: values.hospital,
          email: values.email,
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
    <Paper>
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
          label="Name"
          variant="outlined"
          fullWidth
          {...form.register("name")}
          error={!!form.formState.errors.name}
          helperText={form.formState.errors.name?.message}
        />

        <TextField
          label="Hospital"
          variant="outlined"
          fullWidth
          {...form.register("hospital")}
          error={!!form.formState.errors.hospital}
          helperText={form.formState.errors.hospital?.message}
        />

        <TextField
          label="Password"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          fullWidth
          {...form.register("password")}
          helperText={form.formState.errors.password?.message}
          error={!!form.formState.errors.password}
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

        <TextField
          label="Confirm Password"
          type={showConfirmPassword ? "text" : "password"}
          variant="outlined"
          fullWidth
          {...form.register("confirmPassword")}
          helperText={form.formState.errors.confirmPassword?.message}
          error={!!form.formState.errors.confirmPassword}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  edge="end"
                >
                  {showConfirmPassword ? <EyeOff /> : <Eye />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button type="submit" fullWidth disabled={isLoading}>
          {isLoading ? (
            <>
              <CircularProgress size={24} className="mr-2" />
              Creating Account...
            </>
          ) : (
            "Sign up"
          )}
        </Button>
      </form>
    </Paper>
  );
}
