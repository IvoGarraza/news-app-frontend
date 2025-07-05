import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  IconButton,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  bgcolor: "rgba(0,0,0,0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const contentStyle = {
  bgcolor: "background.paper",
  borderRadius: 3,
  boxShadow: 3,
  width: { xs: "90vw", sm: "60vw", md: "50vw" },
  maxHeight: "90vh",
  overflowY: "auto",
  p: 0,
};

const headerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  bgcolor: "grey.100",
  p: 3,
  borderBottom: "2px solid #cbd5e1",
};

const AddModal = ({
  open,
  onClose,
  onSubmit,
  categories = [],
  initialData = {},
}) => {
  const [newsData, setNewsData] = useState({
    title: "",
    content: "",
    author: "",
    category: "",
    imageUrl: "",
    ...initialData,
  });

  const handleChange = (e) => {
    setNewsData({ ...newsData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newsData);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style} onClick={onClose}>
        <Box sx={contentStyle} onClick={(e) => e.stopPropagation()}>
          {/* Header */}
          <Box sx={headerStyle}>
            <Typography variant="h5" fontWeight="bold">
              Agregar Nueva Noticia
            </Typography>
            <IconButton onClick={onClose} size="large">
              <CloseIcon fontSize="inherit" />
            </IconButton>
          </Box>
          {/* Formulario */}
          <Box component="form" onSubmit={handleSubmit} sx={{ p: 4 }}>
            <TextField
              label="Título *"
              name="title"
              value={newsData.title}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
            />
            <TextField
              label="Contenido"
              name="content"
              value={newsData.content}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
              multiline
              rows={4}
            />
            <TextField
              label="Autor *"
              name="author"
              value={newsData.author}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
            />
            <TextField
              select
              label="Categoría"
              name="category"
              value={newsData.category}
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
              name="imageUrl"
              value={newsData.imageUrl}
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
              <Button
                variant="contained"
                color="primary"
                type="submit"
              >
                Agregar noticia
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddModal;