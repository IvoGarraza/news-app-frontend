import React from "react";
import Button from "@mui/material/Button";
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const EditNews = ({onClick}) => {
  return (
    <Button
    onClick={onClick}
      variant="contained"
      color="error"
      startIcon={<ModeEditIcon />}
      sx={{
        borderRadius: "999px",
        py: 1.5,
        mr:2,
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
      Editar noticia
    </Button>
  );
};

export default EditNews;
