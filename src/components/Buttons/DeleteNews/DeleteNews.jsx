import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteNews = () => {
  return (
    <Button
      variant="contained"
      color="error"
      startIcon={<DeleteIcon />}
      sx={{
        borderRadius: "999px",
        py: 1.5,
        px: 3,
        bgcolor: "white",
        color: "error.main",
        transition: "all 0.2s",
        fontWeight: "bold",
        "&:hover": {
          bgcolor: "black",
          color: "white",
        },
        cursor: "pointer"
      }}
      
    >
      Eliminar noticia
    </Button>
  );
};

export default DeleteNews;
