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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Chip,
  Grid,
  InputAdornment,
  OutlinedInput
} from "@mui/material";
import { useTranslation } from "../../../../components/language-provider";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';

export default function BloodRequestTab() {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Box>
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {/* First row of filters */}
        <Grid item xs={12} md={3}>
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>Request ID</Typography>
            <FormControl fullWidth size="small">
              <TextField 
                size="small"
                placeholder="" 
                sx={{ bgcolor: 'background.paper' }}
              />
            </FormControl>
          </Box>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>Patient Name/ID</Typography>
            <FormControl fullWidth size="small">
              <TextField 
                size="small"
                placeholder="" 
                sx={{ bgcolor: 'background.paper' }}
              />
            </FormControl>
          </Box>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>Blood Group</Typography>
            <FormControl fullWidth size="small">
              <Select
                displayEmpty
                defaultValue="all"
                sx={{ bgcolor: 'background.paper' }}
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
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>Blood Component</Typography>
            <FormControl fullWidth size="small">
              <Select
                displayEmpty
                defaultValue="all"
                sx={{ bgcolor: 'background.paper' }}
              >
                <MenuItem value="all">All Components</MenuItem>
                <MenuItem value="whole">Whole Blood</MenuItem>
                <MenuItem value="plasma">Plasma</MenuItem>
                <MenuItem value="platelets">Platelets</MenuItem>
                <MenuItem value="rbc">Red Blood Cells</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        
        {/* Second row of filters */}
        <Grid item xs={12} md={3}>
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>Status</Typography>
            <FormControl fullWidth size="small">
              <Select
                displayEmpty
                defaultValue="all"
                sx={{ bgcolor: 'background.paper' }}
              >
                <MenuItem value="all">All Status</MenuItem>
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="approved">Approved</MenuItem>
                <MenuItem value="rejected">Rejected</MenuItem>
                <MenuItem value="completed">Completed</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>Urgency</Typography>
            <FormControl fullWidth size="small">
              <Select
                displayEmpty
                defaultValue="all"
                sx={{ bgcolor: 'background.paper' }}
              >
                <MenuItem value="all">All Urgency</MenuItem>
                <MenuItem value="emergency">Emergency</MenuItem>
                <MenuItem value="urgent">Urgent</MenuItem>
                <MenuItem value="standard">Standard</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>Department</Typography>
            <FormControl fullWidth size="small">
              <Select
                displayEmpty
                defaultValue="all"
                sx={{ bgcolor: 'background.paper' }}
              >
                <MenuItem value="all">All Departments</MenuItem>
                <MenuItem value="emergency">Emergency</MenuItem>
                <MenuItem value="surgery">Surgery</MenuItem>
                <MenuItem value="oncology">Oncology</MenuItem>
                <MenuItem value="cardiology">Cardiology</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>Search</Typography>
            <FormControl fullWidth size="small" variant="outlined">
              <OutlinedInput
                placeholder="Search requests..."
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon fontSize="small" />
                  </InputAdornment>
                }
                sx={{ bgcolor: 'background.paper' }}
              />
            </FormControl>
          </Box>
        </Grid>
      </Grid>
      
      {/* Table */}
      <TableContainer component={Paper} sx={{ mb: 3, boxShadow: 1 }}>
        <Table sx={{ minWidth: 650 }} aria-label="blood request table">
          <TableHead>
            <TableRow>
              <TableCell>Request ID</TableCell>
              <TableCell>Patient</TableCell>
              <TableCell>Blood Group</TableCell>
              <TableCell>Component</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Urgency</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">#REQ001</TableCell>
              <TableCell>John Doe</TableCell>
              <TableCell>A+</TableCell>
              <TableCell>Whole Blood</TableCell>
              <TableCell>2 units</TableCell>
              <TableCell>2023-05-14</TableCell>
              <TableCell>
                <Chip 
                  label="Pending" 
                  size="small" 
                  sx={{ 
                    bgcolor: '#fbbf2420', 
                    color: '#d97706',
                    fontWeight: 'medium',
                    fontSize: '0.75rem'
                  }} 
                />
              </TableCell>
              <TableCell>
                <Chip 
                  label="Emergency" 
                  size="small" 
                  sx={{ 
                    bgcolor: '#ef444420', 
                    color: '#dc2626',
                    fontWeight: 'medium',
                    fontSize: '0.75rem'
                  }} 
                />
              </TableCell>
              <TableCell align="center">
                <IconButton size="small" sx={{ color: 'primary.main' }}>
                  <VisibilityIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" sx={{ color: 'info.main' }}>
                  <EditIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" sx={{ color: 'error.main' }}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      
      {/* Pagination */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          Showing 1 to 10 of 97 results
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton 
            disabled={page === 1} 
            onClick={(e) => handleChangePage(e, page - 1)}
            size="small"
          >
            &lt;
          </IconButton>
          
          <Box sx={{ display: 'flex', mx: 1 }}>
            <Box
              sx={{
                width: 24,
                height: 24,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'primary.main',
                color: 'white',
                borderRadius: '4px',
                fontSize: '0.75rem',
                mx: 0.5
              }}
            >
              1
            </Box>
            
            <Box
              sx={{
                width: 24,
                height: 24,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: '4px',
                fontSize: '0.75rem',
                mx: 0.5,
                cursor: 'pointer'
              }}
            >
              2
            </Box>
            
            <Box
              sx={{
                width: 24,
                height: 24,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: '4px',
                fontSize: '0.75rem',
                mx: 0.5,
                cursor: 'pointer'
              }}
            >
              3
            </Box>
          </Box>
          
          <IconButton 
            onClick={(e) => handleChangePage(e, page + 1)}
            size="small"
          >
            &gt;
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
} 