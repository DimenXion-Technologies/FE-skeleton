"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Button,
  TextField,
  CircularProgress,
  Paper,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  FormHelperText,
  Box,
  Stack,
} from "@mui/material";

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const statuses = ["Active", "Inactive", "Deferred"];

const formSchema = z.object({
  id: z.string().default("D001"),
  name: z.string().min(1, "Name is required."),
  bloodGroup: z.enum(bloodGroups),
  registrationDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  }),
  dob: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  }),
  contact: z.string().min(1, "Contact is required."),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  hospital: z.string().min(1, "Hospital is required."),
  status: z.enum(statuses),
});

export function RecipientForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
      name: "",
      bloodGroup: "",
      registrationDate: "",
      nextEligible: "",
      contact: "",
      email: "",
      hospital: "",
      status: "",
    },
  });

  const onSubmit = async (values) => {
    setIsLoading(true);
    try {
      console.log("Submitted values:", values);
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <Paper sx={{padding: 4, borderRadius: 4, width: "100%",}}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Stack container spacing={3}>
          <TextField
            label="Name"
            fullWidth
            {...form.register("name")}
            error={!!form.formState.errors.name}
            helperText={form.formState.errors.name?.message}
          />

          <FormControl fullWidth error={!!form.formState.errors.bloodGroup}>
            <InputLabel id="blood-group-label">Blood Group</InputLabel>
            <Select
              labelId="blood-group-label"
              label="Blood Group"
              defaultValue={form.getValues("bloodGroup")}
              {...form.register("bloodGroup")}
            >
              {bloodGroups.map((group) => (
                <MenuItem key={group} value={group}>
                  {group}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>
              {form.formState.errors.bloodGroup?.message}
            </FormHelperText>
          </FormControl>

          <TextField
            label="Regitration Date"
            type="date"
            fullWidth
            {...form.register("registrationDate")}
            InputLabelProps={{ shrink: true }}
            error={!!form.formState.errors.registrationDate}
            helperText={form.formState.errors.registrationDate?.message}
          />

          <TextField
            label="Date of Birth"
            type="date"
            fullWidth
            {...form.register("dob")}
            InputLabelProps={{ shrink: true }}
            error={!!form.formState.errors.dob}
            helperText={form.formState.errors.dob?.message}
          />

          <TextField
            label="Contact"
            fullWidth
            {...form.register("contact")}
            error={!!form.formState.errors.contact}
            helperText={form.formState.errors.contact?.message}
          />

          <TextField
            label="Email"
            fullWidth
            {...form.register("email")}
            error={!!form.formState.errors.email}
            helperText={form.formState.errors.email?.message}
          />

          <TextField
            label="Hospital"
            fullWidth
            {...form.register("hospital")}
            error={!!form.formState.errors.hospital}
            helperText={form.formState.errors.hospital?.message}
          />

          <FormControl fullWidth error={!!form.formState.errors.status}>
            <InputLabel id="status-label">Status</InputLabel>
            <Select
              labelId="status-label"
              label="Status"
              defaultValue={form.getValues("status")}
              {...form.register("status")}
            >
              {statuses.map((s) => (
                <MenuItem key={s} value={s}>
                  {s}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>
              {form.formState.errors.status?.message}
            </FormHelperText>
          </FormControl>
        </Stack>

        <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 4 }}>
          <Button
            type="submit"
            disabled={isLoading}
            sx={{ display: "flex", alignItems: "center", paddingX: 4 }}
          >
            {isLoading ? (
              <>
                <CircularProgress size={20} sx={{ mr: 1 }} />
                Saving...
              </>
            ) : (
              "Save Recipient"
            )}
          </Button>
        </Box>
      </form>
    </Paper>
  );
}
