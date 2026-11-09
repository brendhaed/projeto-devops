"use client";
import { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Modal,
} from "@mui/material";

export default function SerieEdit({ open, onClose, serieCard, onSave }) {
  const [formData, setFormData] = useState({
    title: "",
    seasons: "",
    releaseDate: "",
    director: "",
    production: "", 
    category: "",
    watchedAt: "",
    imgUrl: "",
  });

  useEffect(() => {
    if (serieCard) {
      setFormData({
        title: serieCard.title,
        seasons: serieCard.seasons,
        releaseDate: serieCard.releaseDate,
        director: serieCard.director,
        production: serieCard.production,
        category: serieCard.category,
        watchedAt: serieCard.watchedAt,
        imgUrl: serieCard.imgUrl,
      });
    }
  }, [serieCard]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    onSave({ ...serieCard, ...formData });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" mb={2}>
          Editar Série
        </Typography>

        <TextField
          label="Título"
          name="title"
          value={formData.title}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />

        <TextField
          label="Número de Temporadas"
          name="seasons"
          type="number"
          value={formData.seasons}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />

        <TextField
          label="Data de lançamento"
          name="releaseDate"
          type="date"
          value={formData.releaseDate}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          fullWidth
          sx={{ mb: 2 }}
        />

        <TextField
          label="Diretor"
          name="director"
          value={formData.director}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />

        <TextField
          label="Produtora"
          name="production"
          value={formData.production}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Categoria</InputLabel>
          <Select
            name="category"
            value={formData.category}
            label="Categoria"
            onChange={handleChange}
          > 
            <MenuItem value={"terror"}>Terror</MenuItem>
            <MenuItem value={"suspense"}>Suspense</MenuItem>
            <MenuItem value={"comedia"}>Comedia</MenuItem>
            <MenuItem value={"drama"}>Drama</MenuItem>
            <MenuItem value={"aventura"}>Aventura</MenuItem>
            <MenuItem value={"romance"}>Romance</MenuItem>
            <MenuItem value={"animacao"}>Animação</MenuItem>
            <MenuItem value={"acao"}>Ação</MenuItem>
            <MenuItem value={"ficcao-cientifica"}>Ficção Científica</MenuItem>
            <MenuItem value={"misterio"}>Mistério</MenuItem>
            <MenuItem value={"super-herois"}>Super-Herois</MenuItem>
            <MenuItem value={"drama-historico"}>Drama Histórico</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Data que assistiu"
          name="watchedAt"
          type="date"
          value={formData.watchedAt}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          fullWidth
          sx={{ mb: 2 }}
        />

        <TextField
          label="Imagem URL"
          name="imgUrl"
          value={formData.imgUrl}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />

        <Button variant="contained" fullWidth onClick={handleSaveClick}
        sx={{
            backgroundColor: "#fb8c00",
            "&:hover": { backgroundColor: "#ffa726" },
          }}>
          Salvar
        </Button>
      </Box>
    </Modal>
  );
}