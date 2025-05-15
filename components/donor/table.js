import React, { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  IconButton,
  TextField,
  InputAdornment,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PaginationComponent from "../pagination";

// Sample Donor Data
const sampleData = [
  {
    id: "D001",
    name: "John Doe",
    bloodGroup: "A+",
    lastDonation: "2024-11-20",
    nextEligible: "2025-05-20",
    contact: "123-456-7890",
    email: "john@example.com",
    status: "Active",
  },
  {
    id: "D002",
    name: "Jane Smith",
    bloodGroup: "O-",
    lastDonation: "2024-09-10",
    nextEligible: "2025-03-10",
    contact: "987-654-3210",
    email: "jane@example.com",
    status: "Inactive",
  },
];

export function DonorTable() {
  const [data, setData] = useState(sampleData);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5);
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

  const pageCount = Math.ceil(filteredData.length / rowsPerPage);

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
            <TableCell onClick={() => handleSort("id")}>ID</TableCell>
            <TableCell onClick={() => handleSort("name")}>Name</TableCell>
            <TableCell onClick={() => handleSort("bloodGroup")}>
              Blood Group
            </TableCell>
            <TableCell onClick={() => handleSort("lastDonation")}>
              Last Donation
            </TableCell>
            <TableCell onClick={() => handleSort("nextEligible")}>
              Next Eligible
            </TableCell>
            <TableCell onClick={() => handleSort("contact")}>Contact</TableCell>
            <TableCell onClick={() => handleSort("email")}>Email</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedData.length === 0 ? (
            <TableRow>
              <TableCell colSpan={9} align="center">
                No records found
              </TableCell>
            </TableRow>
          ) : (
            paginatedData.map((item, idx) => (
              <TableRow key={idx}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.bloodGroup}</TableCell>
                <TableCell>{item.lastDonation}</TableCell>
                <TableCell>{item.nextEligible}</TableCell>
                <TableCell>{item.contact}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>
                  <Chip
                    label={item.status}
                    size="small"
                    sx={{
                      bgcolor:
                        item.status === "Active" ? "#22c55e20" : "#f43f5e20",
                      color: item.status === "Active" ? "#22c55e" : "#f43f5e",
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
