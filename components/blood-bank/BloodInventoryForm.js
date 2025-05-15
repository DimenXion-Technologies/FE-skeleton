"use client";

import {
  Typography,
  Box,
  Paper,
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button,
  InputAdornment,
  Stack,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export function BloodInventoryForm() {
  return (
    <Paper sx={{ padding: 4, borderRadius: 4, width: "100%" }}>
      <Stack container spacing={3}>
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
            Location/Blood Bank
          </Typography>
          <FormControl fullWidth size="small">
            <Select
              displayEmpty
              defaultValue="all"
              sx={{ bgcolor: "background.paper" }}
            >
              <MenuItem value="all">All Locations</MenuItem>
              <MenuItem value="main">Main Hospital</MenuItem>
              <MenuItem value="branch1">Branch 1</MenuItem>
              <MenuItem value="branch2">Branch 2</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
            Expiry Date Range
          </Typography>
          <TextField
            fullWidth
            placeholder="mm/dd/yyyy"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Box
                    component="svg"
                    width={18}
                    height={18}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </Box>
                </InputAdornment>
              ),
            }}
            sx={{ bgcolor: "background.paper" }}
          />
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
              <MenuItem value="available">Available</MenuItem>
              <MenuItem value="reserved">Reserved</MenuItem>
              <MenuItem value="expired">Expired</MenuItem>
              <MenuItem value="used">Used</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Stack>

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
        <Box>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              mr: 1,
              bgcolor: "#3b82f6",
              "&:hover": { bgcolor: "#2563eb" },
            }}
          >
            Add New Blood Unit
          </Button>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{ bgcolor: "#ef4444", "&:hover": { bgcolor: "#dc2626" } }}
          >
            Return Blood Unit
          </Button>
        </Box>
        <Button
          variant="outlined"
          endIcon={<KeyboardArrowDownIcon />}
          sx={{ color: "text.primary", borderColor: "divider" }}
        >
          Bulk Actions
        </Button>
      </Box>
    </Paper>
  );
}
