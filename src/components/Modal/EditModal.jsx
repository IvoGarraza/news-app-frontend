import React, { useState, useEffect } from "react";
import {
  Modal,
  Box,
  Typography,
  IconButton,
  TextField,
  MenuItem,
  Button,
  CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  bgcolor: "rgba(0,0,0,0.55)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1300,
  animation: "fadeIn 0.3s ease-in-out",
};

const contentStyle = {
  bgcolor: "background.paper",
  borderRadius: 3,
  boxShadow: 3,
  width: { xs: "95vw", sm: "70vw", md: "50vw" },
  height: { xs: "90vh", sm: "80vh", md: "75vh" },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  overflowY: "auto",
  p: 0,
};

const headerStyle = {
  width: "100%",
  bgcolor: "grey.100",
  p: 3,
  fontWeight: "bold",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "2px solid #cbd5e1",
  position: "relative",
};

const EditModal = ({
  open,
  onClose,
  onSave,
  categories = [],
  initialData = {},
  isLoading = false,
  isSuccess = false,
}) => {
  const [editedNews, setEditedNews] = useState({
    title: "",
    description: "",
    author: "",
    category: "",
    url: "",
    ...initialData,
  });


  useEffect(() => {
    /* setEditedNews({ ...editedNews, ...initialData }); */
    
  }, [initialData, open]);

  const handleChange = (e) => {
    setEditedNews({ ...editedNews, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedNews);
  };

  const { id } = useParams();
  console.log("ide:", id);
  const news = useSelector((state) => state.newsState.news);
  console.log(news);
  const noticia = news.find((n) => String(n.id) === String(id));
  useEffect(() => {
    if (noticia && open) {
      setEditedNews({
        title: noticia.title || "",
        description: noticia.description || "",
        author: noticia.author || "",
        category: noticia.category || "",
        url: noticia.url || "",
      });
    }
  }, [noticia, open]);

  // Si noticia no existe, puedes mostrar un loading, un mensaje, o simplemente no renderizar el formulario
  /*   if (!noticia) {
    return (
      <Modal open={open} onClose={onClose}>
        <Box sx={overlayStyle} onClick={onClose}>
          <Box sx={contentStyle} onClick={(e) => e.stopPropagation()}>
            <Typography variant="h6" sx={{ p: 4 }}>
              No se encontró la noticia para editar.
            </Typography>
          </Box>
        </Box>
      </Modal>
    );
  } */

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={overlayStyle} onClick={onClose}>
        <Box sx={contentStyle} onClick={(e) => e.stopPropagation()}>
          {/* Header */}
          <Box sx={headerStyle}>
            <Typography variant="h5" fontWeight="bold">
              Editar Noticia
            </Typography>
            <IconButton
              onClick={onClose}
              size="large"
              sx={{ position: "absolute", right: 16, top: 8 }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          </Box>
          {/* Formulario */}
          {!isLoading && !isSuccess && editedNews && (
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ width: "100%", p: 4, flex: 1 }}
            >
              <TextField
                label="Título"
                name="title"
                value={editedNews.title}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
              />
              <TextField
                label="Contenido"
                name="description"
                value={editedNews.description}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
                multiline
                rows={4}
              />
              <TextField
                label="Autor"
                name="author"
                value={editedNews.author}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
              />
              <TextField
                select
                label="Categoría"
                name="category"
                value={editedNews.category}
                onChange={handleChange}
                fullWidth
                margin="normal"
              >
                <MenuItem value="">Selecciona una categoría</MenuItem>
                {categories.map((cat) => (
                  <MenuItem key={cat} value={cat}>
                    {cat}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                label="Url de la imagen"
                name="url"
                value={editedNews.url}
                onChange={handleChange}
                fullWidth
                margin="normal"
                type="url"
                placeholder="https://ejemplo.com/imagen.jpg"
              />
              {/* Botones */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 2,
                  mt: 4,
                }}
              >
                <Button
                  variant="contained"
                  color="error"
                  onClick={onClose}
                  type="button"
                >
                  Cancelar
                </Button>
                <Button variant="contained" color="primary" type="submit">
                  Guardar Cambios
                </Button>
              </Box>
            </Box>
          )}
          {isLoading && (
            <Box sx={{ p: 4, textAlign: "center" }}>
              Guardando... <CircularProgress size={24} sx={{ ml: 2 }} />
            </Box>
          )}
          {isSuccess && (
            <Box sx={{ p: 4, textAlign: "center", color: "green" }}>
              ¡Noticia modificada con éxito!
            </Box>
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default EditModal;
