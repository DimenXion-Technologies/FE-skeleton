"use client";

import { useState } from "react";
import {
  Typography,
  Box,
  Paper,
  FormControl,
  Select,
  MenuItem,
  TextField,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export function BloodRequestForm() {
  return (
    <Paper sx={{ padding: 4, borderRadius: 4, width: "100%" }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
          Request ID
        </Typography>
        <FormControl fullWidth size="small">
          <TextField
            size="small"
            placeholder=""
            sx={{ bgcolor: "background.paper" }}
          />
        </FormControl>
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
          Patient Name/ID
        </Typography>
        <FormControl fullWidth size="small">
          <TextField
            size="small"
            placeholder=""
            sx={{ bgcolor: "background.paper" }}
          />
        </FormControl>
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
          Blood Group
        </Typography>
        <FormControl fullWidth size="small">
          <Select
            displayEmpty
            defaultValue="all"
            sx={{ bgcolor: "background.paper" }}
          >
            <MenuItem value="all">All Blood Groups</MenuItem>
            <MenuItem value="A+">A+</MenuItem>
            <MenuItem value="A-">A-</MenuItem>
            <MenuItem value="B+">B+</MenuItem>
            <MenuItem value="B-">B-</MenuItem>
            <MenuItem value="AB+">AB+</MenuItem>
            <MenuItem value="AB-">AB-</MenuItem>
            <MenuItem value="O+">O+</MenuItem>
            <MenuItem value="O-">O-</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
          Blood Component
        </Typography>
        <FormControl fullWidth size="small">
          <Select
            displayEmpty
            defaultValue="all"
            sx={{ bgcolor: "background.paper" }}
          >
            <MenuItem value="all">All Components</MenuItem>
            <MenuItem value="whole">Whole Blood</MenuItem>
            <MenuItem value="plasma">Plasma</MenuItem>
            <MenuItem value="platelets">Platelets</MenuItem>
            <MenuItem value="rbc">Red Blood Cells</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
          Status
        </Typography>
        <FormControl fullWidth size="small">
          <Select
            displayEmpty
            defaultValue="all"
            sx={{ bgcolor: "background.paper" }}
          >
            <MenuItem value="all">All Status</MenuItem>
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="approved">Approved</MenuItem>
            <MenuItem value="rejected">Rejected</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
          Urgency
        </Typography>
        <FormControl fullWidth size="small">
          <Select
            displayEmpty
            defaultValue="all"
            sx={{ bgcolor: "background.paper" }}
          >
            <MenuItem value="all">All Urgency</MenuItem>
            <MenuItem value="emergency">Emergency</MenuItem>
            <MenuItem value="urgent">Urgent</MenuItem>
            <MenuItem value="standard">Standard</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
          Department
        </Typography>
        <FormControl fullWidth size="small">
          <Select
            displayEmpty
            defaultValue="all"
            sx={{ bgcolor: "background.paper" }}
          >
            <MenuItem value="all">All Departments</MenuItem>
            <MenuItem value="emergency">Emergency</MenuItem>
            <MenuItem value="surgery">Surgery</MenuItem>
            <MenuItem value="oncology">Oncology</MenuItem>
            <MenuItem value="cardiology">Cardiology</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Paper>
  );
}
