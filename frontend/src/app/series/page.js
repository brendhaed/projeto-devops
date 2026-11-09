"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import useSerieCardApi from "../hooks/useSerieCardApi";
import { Box, CircularProgress } from "@mui/material";
import { orange } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import EditIcon from "@mui/icons-material/Edit";
import SerieEdit from "../components/SerieEdit/SerieEdit";
import SearchBar from "../components/SearchBar/Searchbar";

export default function SeriesList() {
  const { getSerieCards, deleteSerieCard, updateSerieCard } = useSerieCardApi();
  const [serieCards, setSerieCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSerieCard, setSelectedSerieCard] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [filteredSeries, setFilteredSeries] = useState([]);
  const [notFound, setNotFound] = useState(false);

  // Carrega as series cadastradas
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSerieCards();
        setSerieCards(data);
        setFilteredSeries(data);
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Deletar série
  const handleDelete = async (id) => {
    try {
      await deleteSerieCard(id);
      setSerieCards((prev) => prev.filter((item) => item.id !== id));
      setFilteredSeries((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.log("Erro ao deletar:", error);
    }
  };

  // Abre o modal de edição da série
  const handleOpenModal = (serieCard) => {
    setSelectedSerieCard(serieCard);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setSelectedSerieCard(null);
    setOpenModal(false);
  };

  // Salva a edição 
  const handleSave = async (updatedSerie) => {
    try {
      await updateSerieCard(updatedSerie);
      setSerieCards((prev) =>
        prev.map((item) => (item.id === updatedSerie.id ? updatedSerie : item))
      );
      setFilteredSeries((prev) =>
        prev.map((item) => (item.id === updatedSerie.id ? updatedSerie : item))
      );

      handleCloseModal();
    } catch (error) {
      console.error("Erro ao salvar edição:", error);
    }
  };


  // Buscar séries
  const handleSearch = (textoDigitado) => {
    const texto = textoDigitado.trim().toLowerCase();

    if (!texto) {
      setFilteredSeries(serieCards);
      setNotFound(false);
      return;
    }

    const filtradas = serieCards.filter((serie) =>
      serie.title.toLowerCase().includes(texto)
    );

    setFilteredSeries(filtradas);
    setNotFound(filtradas.length === 0);
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Box sx={{ maxWidth: 400, margin: "20px auto" }}>
        <SearchBar onSearch={handleSearch} />
      </Box>

      <Box sx={{ textAlign: "center", marginTop: 5, marginBottom: 5 }}>
        <Typography
          variant="h4"
          fontWeight="semibold"
          sx={{
            mb: 1,
            textTransform: "uppercase",
            background: "linear-gradient(80deg, #ef6c00, #ffbf00ff, #ef5000ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: { xs: "1.4rem", md: "1.8rem" },
          }}
        >
          Lista de Séries
        </Typography>
      </Box>
 
      {/* Mensagem quando nenhuma serie é encontrada */}
      {notFound && (
        <Typography variant="h6" align="center" sx={{ mt: 2 }}>
          Nenhuma série encontrada.
        </Typography>
      )}

      {/* Lista de Cards */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
          p: 5,
        }}
      >
        {filteredSeries.map((serieCard) => (
          <Card
            key={serieCard.id}
            sx={{
              width: 260,
              borderRadius: 4,
              backgroundColor: "#ffffff",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              transition: "0.3s ease",
              overflow: "hidden",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 8px 30px rgba(0,0,0,0.18)",
              },
            }}
          >
            <CardMedia
              component="img"
              height="340"
              image={serieCard.imgUrl}
              alt={serieCard.title}
              sx={{ objectFit: "cover" }}
            />

            <CardContent sx={{ px: 2, py: 2 }}>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ mb: 1, color: "#222" }}
              >
                {serieCard.title}
              </Typography>

              <Typography variant="body2" sx={{ color: "#555" }}>
                <strong>Temporadas:</strong> {serieCard.seasons}
              </Typography>
              <Typography variant="body2" sx={{ color: "#555" }}>
                <strong>Lançamento:</strong> {serieCard.releaseDate}
              </Typography>
              <Typography variant="body2" sx={{ color: "#555" }}>
                <strong>Diretor:</strong> {serieCard.director}
              </Typography>
              <Typography variant="body2" sx={{ color: "#555" }}>
                <strong>Produtora:</strong> {serieCard.production}
              </Typography>
              <Typography variant="body2" sx={{ color: "#555" }}>
                <strong>Categoria:</strong> {serieCard.category}
              </Typography>
              <Typography variant="body2" sx={{ color: "#555" }}>
                <strong>Data que assistiu:</strong> {serieCard.watchedAt}
              </Typography>
            </CardContent>

            <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
              <Tooltip title="Editar">
                <IconButton
                  sx={{
                    backgroundColor: "#e8e8e8",
                    "&:hover": { backgroundColor: "#d5d5d5" },
                  }}
                  onClick={() => handleOpenModal(serieCard)}
                >
                  <EditIcon sx={{ color: "#333" }} />
                </IconButton>
              </Tooltip>

              <Tooltip title="Excluir">
                <IconButton
                  sx={{
                    backgroundColor: "#ffe8e8",
                    "&:hover": { backgroundColor: "#ffcccc" },
                  }}
                  onClick={() => handleDelete(serieCard.id)}
                >
                  <DeleteIcon sx={{ color: "#d32f2f" }} />
                </IconButton>
              </Tooltip>
            </CardActions>
          </Card>
        ))}
      </Box>

      <Box sx={{ textAlign: "center", mb: 10 }}>
        <Link href="/formulario">
          <Button
            variant="contained"
            sx={{
              mt: 4,
              backgroundColor: orange[800],
              "&:hover": { backgroundColor: orange[600] },
            }}
          >
            Cadastrar nova
          </Button>
        </Link>
      </Box>

      <SerieEdit
        open={openModal}
        onClose={handleCloseModal}
        serieCard={selectedSerieCard}
        onSave={handleSave}
      />
    </>
  );
}