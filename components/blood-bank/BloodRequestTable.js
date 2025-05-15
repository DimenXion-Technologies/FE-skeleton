"use client";

import { useState, useMemo } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Chip,
  TextField,
  InputAdornment,
  TableSortLabel,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import PaginationComponent from "../pagination";

// ✅ Replace this with real/fetched data
const sampleData = [
  {
    requestId: "#REQ001",
    patient: "John Doe",
    bloodGroup: "A+",
    component: "Whole Blood",
    quantity: "2 units",
    date: "2023-05-14",
    status: "Pending",
    urgency: "Emergency",
  },
  {
    requestId: "#REQ002",
    patient: "Jane Smith",
    bloodGroup: "B-",
    component: "Plasma",
    quantity: "1 unit",
    date: "2023-05-10",
    status: "Completed",
    urgency: "Routine",
  },
];

export function BloodRequestTale() {
  const [data, setData] = useState(sampleData);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [sortConfig, setSortConfig] = useState(null);

  const filteredData = useMemo(() => {
    let filtered = data.filter((item) =>
      Object.values(item).some((val) =>
        val.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

    if (sortConfig) {
      filtered.sort((a, b) => {
        const aVal = a[sortConfig.key];
        const bVal = b[sortConfig.key];
        if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    return filtered;
  }, [data, searchTerm, sortConfig]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    return filteredData.slice(startIndex, startIndex + rowsPerPage);
  }, [filteredData, currentPage, rowsPerPage]);

  const handleSort = (key) => {
    setSortConfig((prev) => {
      if (prev?.key === key) {
        return { key, direction: prev.direction === "asc" ? "desc" : "asc" };
      }
      return { key, direction: "asc" };
    });
  };

  return (
    <TableContainer
      component={Paper}
      elevation={3}
      sx={{ borderRadius: 3, boxSizing: "border-box", marginY: 4 }}
    >
      <TextField
        label="Search"
        variant="outlined"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ m: 2 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon fontSize="small" />
            </InputAdornment>
          ),
        }}
      />

      <Table>
        <TableHead>
          <TableRow>
            {[
              { key: "requestId", label: "Request ID" },
              { key: "patient", label: "Patient" },
              { key: "bloodGroup", label: "Blood Group" },
              { key: "component", label: "Component" },
              { key: "quantity", label: "Quantity" },
              { key: "date", label: "Date" },
              { key: "status", label: "Status" },
              { key: "urgency", label: "Urgency" },
            ].map((col) => (
              <TableCell key={col.key}>
                <TableSortLabel
                  active={sortConfig?.key === col.key}
                  direction={sortConfig?.direction}
                  onClick={() => handleSort(col.key)}
                >
                  {col.label}
                </TableSortLabel>
              </TableCell>
            ))}
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedData.length === 0 ? (
            <TableRow>
              <TableCell colSpan={9} align="center">
                No requests found.
              </TableCell>
            </TableRow>
          ) : (
            paginatedData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.requestId}</TableCell>
                <TableCell>{item.patient}</TableCell>
                <TableCell>{item.bloodGroup}</TableCell>
                <TableCell>{item.component}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>
                  <Chip
                    label={item.status}
                    size="small"
                    sx={{
                      bgcolor:
                        item.status === "Pending"
                          ? "#fbbf2420"
                          : item.status === "Completed"
                          ? "#22c55e20"
                          : "#e5e7eb",
                      color:
                        item.status === "Pending"
                          ? "#d97706"
                          : item.status === "Completed"
                          ? "#22c55e"
                          : "#6b7280",
                      fontWeight: "medium",
                      fontSize: "0.75rem",
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Chip
                    label={item.urgency}
                    size="small"
                    sx={{
                      bgcolor:
                        item.urgency === "Emergency"
                          ? "#ef444420"
                          : "#3b82f620",
                      color:
                        item.urgency === "Emergency" ? "#dc2626" : "#2563eb",
                      fontWeight: "medium",
                      fontSize: "0.75rem",
                    }}
                  />
                </TableCell>
                <TableCell align="center">
                  <IconButton size="small" sx={{ color: "primary.main" }}>
                    <VisibilityIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" sx={{ color: "info.main" }}>
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" sx={{ color: "error.main" }}>
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      <PaginationComponent
        page={currentPage}
        totalItems={filteredData.length}
        rowsPerPage={rowsPerPage}
        handleChangePage={(e, newPage) => setCurrentPage(newPage)}
      />
    </TableContainer>
  );
}
