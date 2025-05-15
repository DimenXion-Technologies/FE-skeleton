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
  Stack,
  Box,
} from "@mui/material";

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const statuses = ["Active", "Inactive", "Deferred"];

const formSchema = z.object({
  id: z.string().default("D001"),
  name: z.string().min(1, "Name is required."),
  bloodGroup: z.enum(bloodGroups),
  lastDonation: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  }),
  nextEligible: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  }),
  contact: z.string().min(1, "Contact is required."),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  status: z.enum(statuses),
});

export function DonorForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
      name: "",
      bloodGroup: "",
      lastDonation: "",
      nextEligible: "",
      contact: "",
      email: "",
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
            label="Last Donation Date"
            type="date"
            fullWidth
            {...form.register("lastDonation")}
            InputLabelProps={{ shrink: true }}
            error={!!form.formState.errors.lastDonation}
            helperText={form.formState.errors.lastDonation?.message}
          />

          <TextField
            label="Next Eligible Date"
            type="date"
            fullWidth
            {...form.register("nextEligible")}
            InputLabelProps={{ shrink: true }}
            error={!!form.formState.errors.nextEligible}
            helperText={form.formState.errors.nextEligible?.message}
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
              "Save Donor"
            )}
          </Button>
        </Box>
      </form>
    </Paper>
  );
}
