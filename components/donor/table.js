import React from "react";
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
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// Sample data
const donorData = [
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
  {
    id: "D003",
    name: "John Doe",
    bloodGroup: "A+",
    lastDonation: "2024-11-20",
    nextEligible: "2025-05-20",
    contact: "123-456-7890",
    email: "john@example.com",
    status: "Active",
  },
  {
    id: "D004",
    name: "Jane Smith",
    bloodGroup: "O-",
    lastDonation: "2024-09-10",
    nextEligible: "2025-03-10",
    contact: "987-654-3210",
    email: "jane@example.com",
    status: "Inactive",
  },
  {
    id: "D005",
    name: "John Doe",
    bloodGroup: "A+",
    lastDonation: "2024-11-20",
    nextEligible: "2025-05-20",
    contact: "123-456-7890",
    email: "john@example.com",
    status: "Active",
  },
];

const DonorTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {[
              "Donor ID",
              "Name",
              "Blood Group",
              "Last Donation",
              "Next Eligibility",
              "Contact",
              "Email",
              "Status",
              "Action",
            ].map((header) => (
              <TableCell key={header} sx={{ fontWeight: "bold" }}>
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {donorData.map((donor) => (
            <TableRow key={donor.id}>
              <TableCell>{donor.id}</TableCell>
              <TableCell>{donor.name}</TableCell>
              <TableCell>{donor.bloodGroup}</TableCell>
              <TableCell>{donor.lastDonation}</TableCell>
              <TableCell>{donor.nextEligible}</TableCell>
              <TableCell>{donor.contact}</TableCell>
              <TableCell>{donor.email}</TableCell>
              <TableCell>
                <Chip
                  label={donor.status}
                  color={donor.status === "Active" ? "success" : "error"}
                  variant="outlined"
                />
              </TableCell>
              <TableCell>
                <IconButton size="small">
                  <EditIcon />
                </IconButton>
                <IconButton size="small">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DonorTable;
