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
  Button,
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
  OutlinedInput,
  TableSortLabel
} from "@mui/material";
import { useTranslation } from "../../../../components/language-provider";
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';

export default function BloodInventoryTab() {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Box>
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {/* First row of filters */}
        <Grid item xs={12} md={4}>
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
        
        <Grid item xs={12} md={4}>
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
        
        <Grid item xs={12} md={4}>
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>Location/Blood Bank</Typography>
            <FormControl fullWidth size="small">
              <Select
                displayEmpty
                defaultValue="all"
                sx={{ bgcolor: 'background.paper' }}
              >
                <MenuItem value="all">All Locations</MenuItem>
                <MenuItem value="main">Main Hospital</MenuItem>
                <MenuItem value="branch1">Branch 1</MenuItem>
                <MenuItem value="branch2">Branch 2</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        
        {/* Second row of filters */}
        <Grid item xs={12} md={4}>
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>Expiry Date Range</Typography>
            <TextField
              fullWidth
              placeholder="mm/dd/yyyy"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Box component="svg" width={18} height={18} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </Box>
                  </InputAdornment>
                ),
              }}
              sx={{ bgcolor: 'background.paper' }}
            />
          </Box>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>Status</Typography>
            <FormControl fullWidth size="small">
              <Select
                displayEmpty
                defaultValue="all"
                sx={{ bgcolor: 'background.paper' }}
              >
                <MenuItem value="all">All Status</MenuItem>
                <MenuItem value="available">Available</MenuItem>
                <MenuItem value="reserved">Reserved</MenuItem>
                <MenuItem value="expired">Expired</MenuItem>
                <MenuItem value="used">Used</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>Search</Typography>
            <FormControl fullWidth size="small" variant="outlined">
              <OutlinedInput
                placeholder="Search by Unit ID or Donation ID"
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
      
      {/* Action buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Box>
          <Button 
            variant="contained" 
            startIcon={<AddIcon />} 
            sx={{ mr: 1, bgcolor: '#3b82f6', '&:hover': { bgcolor: '#2563eb' } }}
          >
            Add New Blood Unit
          </Button>
          <Button 
            variant="contained" 
            startIcon={<AddIcon />} 
            sx={{ bgcolor: '#ef4444', '&:hover': { bgcolor: '#dc2626' } }}
          >
            Return Blood Unit
          </Button>
        </Box>
        <Button 
          variant="outlined" 
          endIcon={<KeyboardArrowDownIcon />}
          sx={{ color: 'text.primary', borderColor: 'divider' }}
        >
          Bulk Actions
        </Button>
      </Box>
      
      {/* Table */}
      <TableContainer component={Paper} sx={{ mb: 3, boxShadow: 1 }}>
        <Table sx={{ minWidth: 650 }} aria-label="blood inventory table">
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel>Unit ID</TableSortLabel>
              </TableCell>
              <TableCell>Donation ID</TableCell>
              <TableCell>
                <TableSortLabel>Blood Group</TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel>Component</TableSortLabel>
              </TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>
                <TableSortLabel>Collection Date</TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel>Expiry Date</TableSortLabel>
              </TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">#BU001</TableCell>
              <TableCell>#DN001</TableCell>
              <TableCell>A+</TableCell>
              <TableCell>Whole Blood</TableCell>
              <TableCell>450ml</TableCell>
              <TableCell>2023-05-01</TableCell>
              <TableCell>2025-05-01</TableCell>
              <TableCell>Main Hospital</TableCell>
              <TableCell>
                <Chip 
                  label="Available" 
                  size="small" 
                  sx={{ 
                    bgcolor: '#22c55e20', 
                    color: '#22c55e',
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
          Showing 1 to 10 of 100 entries
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button 
            disabled={page === 1} 
            onClick={(e) => handleChangePage(e, page - 1)}
            sx={{ textTransform: 'none', mr: 1 }}
          >
            Previous
          </Button>
          
          <Box sx={{ display: 'flex' }}>
            <Box
              sx={{
                width: 28,
                height: 28,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'primary.main',
                color: 'white',
                borderRadius: '4px',
                fontSize: '0.875rem',
                mr: 0.5
              }}
            >
              1
            </Box>
            
            <Box
              sx={{
                width: 28,
                height: 28,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: '4px',
                fontSize: '0.875rem',
                mr: 0.5,
                cursor: 'pointer'
              }}
            >
              2
            </Box>
            
            <Box
              sx={{
                width: 28,
                height: 28,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: '4px',
                fontSize: '0.875rem',
                cursor: 'pointer'
              }}
            >
              3
            </Box>
          </Box>
          
          <Button 
            onClick={(e) => handleChangePage(e, page + 1)}
            sx={{ textTransform: 'none', ml: 1 }}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
} 