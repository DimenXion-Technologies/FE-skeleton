import React from "react";
import { Box, Button, Typography } from "@mui/material";

export default function PaginationComponent({
  page,
  totalItems,
  rowsPerPage,
  handleChangePage,
}) {
  const totalPages = Math.ceil(totalItems / rowsPerPage);

  // Helper function to generate page numbers with ellipsis
  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (page > 3) pages.push("...");

      const start = Math.max(2, page - 1);
      const end = Math.min(totalPages - 1, page + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (page < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        gap: 2,
        mt: 2,
        overflowX: "hidden",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        Showing {(page - 1) * rowsPerPage + 1} to{" "}
        {Math.min(page * rowsPerPage, totalItems)} of {totalItems} entries
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          overflowX: "auto",
        }}
      >
        <Button
          disabled={page === 1}
          onClick={(e) => handleChangePage(e, page - 1)}
          sx={{ mr: 1, p: 1 }}
        >
          Previous
        </Button>

        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          {pageNumbers.map((num, index) =>
            num === "..." ? (
              <Box
                key={`ellipsis-${index}`}
                sx={{
                  width: 28,
                  height: 28,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "text.secondary",
                  fontSize: "0.875rem",
                  mr: 0.5,
                }}
              >
                ...
              </Box>
            ) : (
              <Box
                key={num}
                onClick={(e) => handleChangePage(e, num)}
                sx={{
                  width: 28,
                  height: 28,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: page === num ? "primary.main" : "transparent",
                  color: page === num ? "white" : "text.primary",
                  border: page === num ? "none" : "1px solid",
                  borderColor: "divider",
                  borderRadius: "4px",
                  fontSize: "0.875rem",
                  cursor: "pointer",
                  mr: 0.5,
                }}
              >
                {num}
              </Box>
            )
          )}
        </Box>

        <Button
          disabled={page === totalPages}
          onClick={(e) => handleChangePage(e, page + 1)}
          sx={{ ml: 1, p: 1 }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}
