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
const recipientData = [
  {
    id: "R001",
    name: "John Doe",
    bloodGroup: "A+",
    registrationDate: "2024-11-20",
    dob: "2025-05-20",
    contact: "123-456-7890",
    email: "john@example.com",
    hospital: "HIMS",
    status: "Active",
  },
  {
    id: "R002",
    name: "Jane Smith",
    bloodGroup: "O-",
    registrationDate: "2024-09-10",
    dob: "2025-03-10",
    contact: "987-654-3210",
    email: "jane@example.com",
    hospital: "HIMS",
    status: "Inactive",
  },
  {
    id: "R003",
    name: "John Doe",
    bloodGroup: "A+",
    registrationDate: "2024-11-20",
    dob: "2025-05-20",
    contact: "123-456-7890",
    email: "john@example.com",
    hospital: "HIMS",
    status: "Active",
  },
  {
    id: "R004",
    name: "Jane Smith",
    bloodGroup: "O-",
    registrationDate: "2024-09-10",
    dob: "2025-03-10",
    contact: "987-654-3210",
    email: "jane@example.com",
    hospital: "HIMS",
    status: "Inactive",
  },
  {
    id: "R005",
    name: "John Doe",
    bloodGroup: "A+",
    registrationDate: "2024-11-20",
    dob: "2025-05-20",
    contact: "123-456-7890",
    email: "john@example.com",
    hospital: "HIMS",
    status: "Active",
  },
];

const RecipientTable = () => {
  return (
    <TableContainer
      component={Paper}
      elevation={3}
      sx={{
        borderRadius: 3,
        boxSizing: "border-box",
        marginY: 4,
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            {[
              "Recipient ID",
              "Name",
              "Blood Group",
              "Registration Date",
              "Date of Birth",
              "Contact",
              "Email",
              "Hospital",
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
          {recipientData.map((recipient) => (
            <TableRow key={recipient.id}>
              <TableCell>{recipient.id}</TableCell>
              <TableCell>{recipient.name}</TableCell>
              <TableCell>{recipient.bloodGroup}</TableCell>
              <TableCell>{recipient.registrationDate}</TableCell>
              <TableCell>{recipient.dob}</TableCell>
              <TableCell>{recipient.contact}</TableCell>
              <TableCell>{recipient.email}</TableCell>
              <TableCell>{recipient.hospital}</TableCell>
              <TableCell>
                <Chip
                  label={recipient.status}
                  color={recipient.status === "Active" ? "success" : "error"}
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

export default RecipientTable;
