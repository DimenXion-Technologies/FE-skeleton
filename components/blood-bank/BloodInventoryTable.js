"use client";

import { useState, useEffect, useMemo } from "react";
import {
  Typography,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Chip,
  TableSortLabel,
  InputAdornment,
  TextField,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import PaginationComponent from "../pagination";

const sampleData = [
  {
    unitId: "#BU001",
    donationId: "#DN001",
    bloodGroup: "A+",
    component: "Whole Blood",
    quantity: "450ml",
    collectionDate: "2023-05-01",
    expiryDate: "2025-05-01",
    location: "Main Hospital",
    status: "Available",
  },
  {
    unitId: "#BU002",
    donationId: "#DN002",
    bloodGroup: "O-",
    component: "Plasma",
    quantity: "250ml",
    collectionDate: "2023-06-15",
    expiryDate: "2025-06-15",
    location: "City Clinic",
    status: "Used",
  },
];

export function BloodInventoryTable() {
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
              { key: "unitId", label: "Unit ID" },
              { key: "donationId", label: "Donation ID" },
              { key: "bloodGroup", label: "Blood Group" },
              { key: "component", label: "Component" },
              { key: "quantity", label: "Quantity" },
              { key: "collectionDate", label: "Collection Date" },
              { key: "expiryDate", label: "Expiry Date" },
              { key: "location", label: "Location" },
              { key: "status", label: "Status" },
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
              <TableCell colSpan={10} align="center">
                No records found
              </TableCell>
            </TableRow>
          ) : (
            paginatedData.map((item, idx) => (
              <TableRow key={idx}>
                <TableCell>{item.unitId}</TableCell>
                <TableCell>{item.donationId}</TableCell>
                <TableCell>{item.bloodGroup}</TableCell>
                <TableCell>{item.component}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.collectionDate}</TableCell>
                <TableCell>{item.expiryDate}</TableCell>
                <TableCell>{item.location}</TableCell>
                <TableCell>
                  <Chip
                    label={item.status}
                    size="small"
                    sx={{
                      bgcolor:
                        item.status === "Available" ? "#22c55e20" : "#f43f5e20",
                      color:
                        item.status === "Available" ? "#22c55e" : "#f43f5e",
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
