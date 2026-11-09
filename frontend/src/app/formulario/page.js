"use client";

import useSerieCards from "../hooks/useSerieCardApi";
import { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { orange } from "@mui/material/colors";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

export default function MeuFormulario() {
  const { createSerieCard } = useSerieCards();

  const [titulo, setTitulo] = useState("");
  const [numTemp, setNumTemp] = useState("");
  const [dataLanc, setDataLanc] = useState("");
  const [diretor, setDiretor] = useState("");
  const [produtora, setProdutora] = useState("");
  const [categoria, setCategoria] = useState("");
  const [dataAssistido, setDataAssistido] = useState("");
  const [imagem, setImg] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const newSerie = {
    title: titulo,
    seasons: Number(numTemp),
    releaseDate: dataLanc,
    director: diretor,
    production: produtora,
    category: categoria,
    watchedAt: dataAssistido,
    imgUrl: imagem,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newSerie = {
      title: titulo,
      seasons: Number(numTemp),
      releaseDate: dataLanc,
      director: diretor,
      production: produtora,
      category: categoria,
      watchedAt: dataAssistido,
      imgUrl: imagem,
    };

    try {
      await createSerieCard(newSerie);
      setSuccessMessage("Série cadastrada na lista com sucesso!");

      setTimeout(() => {
        setSuccessMessage("");
      }, 8000);

      setTitulo("");
      setNumTemp("");
      setDataLanc("");
      setDiretor("");
      setProdutora("");
      setCategoria("");
      setDataAssistido("");
      setImg("");
    } catch (error) {
      setErrorMessage("Erro ao cadastrar a série. Tente novamente.");
      setTimeout(() => {
        setErrorMessage("");
      }, 8000);
    }
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          width: "400px",
          margin: "50px auto",
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" color="black" textAlign="center">
          Cadastrar Série
        </Typography>

        <TextField
          label="Título"
          variant="outlined"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          fullWidth
          required
        />

        <TextField
          label="Número de Temporadas"
          variant="outlined"
          value={numTemp}
          type="number"
          onChange={(e) => setNumTemp(e.target.value)}
          fullWidth
          required
        />

        <TextField
          label="Data de lançamento"
          variant="outlined"
          value={dataLanc}
          type="date"
          onChange={(e) => setDataLanc(e.target.value)}
          fullWidth
          required
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          label="Diretor"
          variant="outlined"
          value={diretor}
          onChange={(e) => setDiretor(e.target.value)}
          fullWidth
          required
        />

        <TextField
          label="Produtora"
          variant="outlined"
          value={produtora}
          onChange={(e) => setProdutora(e.target.value)}
          fullWidth
          required
        />
        <FormControl fullWidth required>
          <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={categoria}
            label="Categoria"
            onChange={(e) => setCategoria(e.target.value)}
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
          value={dataAssistido}
          type="date"
          onChange={(e) => setDataAssistido(e.target.value)}
          fullWidth
          required
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          label="Imagem URL"
          variant="outlined"
          value={imagem}
          onChange={(e) => setImg(e.target.value)}
          fullWidth
          required
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 4,
            backgroundColor: orange[800],
            "&:hover": { backgroundColor: orange[600] },
          }}
        >
          Enviar
        </Button>

        {successMessage && (
          <Alert
            icon={<CheckIcon fontSize="inherit" />}
            severity="success"
            sx={{ width: "400px", margin: "20px auto" }}
          >
            {successMessage}
          </Alert>
        )}
        {errorMessage && (
          <Alert
            icon={<CheckIcon fontSize="inherit" />}
            severity="error"
            sx={{ width: "400px" }}
          >
            {errorMessage}
          </Alert>
        )}
      </Box>
    </>
  );
}