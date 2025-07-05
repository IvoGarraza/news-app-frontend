import React, { useState } from "react";
import AddNews from "../Buttons/AddNews/AddNews";
import { AppBar, Typography, Modal, Button } from "@mui/material";
import Box from "@mui/material/Box";
import { NavLink, useLocation } from "react-router-dom";
import DeleteNews from "../Buttons/DeleteNews/DeleteNews";
import EditNews from "../Buttons/EditNews/EditNews";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddModal from "../Modal/AddModal";
import EditModal from "../Modal/EditModal";

const categories = [
  "Tecnología",
  "Ciencia",
  "Deportes",
  "Política",
  "Economía",
];

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [open, setOpen] = useState(false);

  // Función para manejar el submit del modal
  const handleAddNews = (newsData) => {
    // Aquí va la lógica para agregar la noticia (ej: dispatch a redux)
    console.log("Nueva noticia:", newsData);
    setOpen(false);
  };

  return (
    <>
      <AppBar
        sx={{
          width: "100%",
          position: "fixed",
          height: "6rem",
          backgroundColor: "rojo.main",
          alignItems: "center",
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "row",
          paddingX: "2rem",
        }}
      >
        {isHome ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }} variant="h4">
              MFNews
            </Typography>
            <AddNews onClick={() => setOpen(true)} />
            <AddModal
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleAddNews}
        categories={categories}
      />
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <NavLink to={"/"}>
                <ArrowBackIcon
                  fontSize="large"
                  sx={{
                    "&:hover": { transform: "scale(1.1)" },
                    cursor: "pointer",
                    color: "white",
                  }}
                ></ArrowBackIcon>
              </NavLink>
            </Box>
            <Box>
              <EditNews onClick={() => setOpen(true)}></EditNews>
              <DeleteNews></DeleteNews>
            </Box>
            <EditModal
        open={open}
        onClose={() => setOpen(false)}
        onSave={(data) => {
          /* lógica para guardar cambios */
        }}
        categories={["Tecnología", "Ciencia", "Deportes", "Política"]}

      />
          </Box>
        )}
      </AppBar>


    </>
  );
};

export default Layout;
