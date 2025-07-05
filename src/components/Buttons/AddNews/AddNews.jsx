import React from "react";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';

const AddNews = ({ onClick }) => {
  return (
    <Button
    onClick={onClick}
      variant="contained"
      color="error"
      startIcon={<AddIcon />}
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
      Agregar noticia
    </Button>
  );
};

export default AddNews;
