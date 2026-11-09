"use client";
import { useEffect, useState } from "react";
import useSerieCardApi from "./hooks/useSerieCardApi";
import { Box, Button, Typography } from "@mui/material";
import styles from "./page.module.css";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

export default function Home() {
  const { getSerieCards, deleteSerieCard, updateSerieCard } = useSerieCardApi();
  const [serieCards, setSerieCards] = useState([]);
  const [selectedSerieCard, setSelectedSerieCard] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSerieCards();
        setSerieCards(data);
        console.log(data);
      } catch (error) {
        console.log("Error:", error, loading);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Box
        className={styles.homepage}
        sx={{
          position: "relative",
          overflow: "hidden",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column-reverse", md: "row" },
          gap: { xs: 4, md: 10 },
          padding: { md: 15, xs: 2 },
          textAlign: { xs: "center", md: "left" },

          "&::before": {
            content: '""',
            position: "fixed",
            inset: 0,
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: 'url("/ft-background.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "blur(8px)",
            transform: "scale(1.1)",
            zIndex: -1,
          },
        }}
      >

        <Box
          sx={{
            maxWidth: { xs: "100%", md: 500 },
            backgroundColor: "white",
            padding: 4,
            borderRadius: 4,
            boxShadow: "0 4px 25px rgba(0,0,0,0.08)",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="semibold"
            sx={{
              mb: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textTransform: "uppercase",
              background:
                "linear-gradient(80deg, #ef6c00, #ffbf00ff, #ef5000ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "1.6rem", md: "2.2rem" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            CRUD de Séries
          </Typography>

          <Typography
            variant="h5"
            sx={{ mt: 1, mb: 2, fontWeight: 500, color: "#333" }}
          >
            Bem vindo ao projeto CRUD de séries!
          </Typography>

          <Typography sx={{ color: "#555", lineHeight: 1.7, mb: 3 }}>
            Aqui você pode encontrar
            informações sobre suas séries favoritas, cadastrar novas séries e
            explorar a lista completa de títulos disponíveis. Navegue pelo menu
            para começar!
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Link href="/formulario" underline="none">
              <Button
                variant="contained"
                sx={{
                  mt: 1,
                  px: 4,
                  py: 1.4,
                  fontSize: "1rem",
                  background: "linear-gradient(80deg, #ef6c00, #ff9100)",
                  borderRadius: 3,
                  boxShadow: "0 4px 15px rgba(255,140,0,0.4)",
                  "&:hover": {
                    background: "linear-gradient(80deg, #ff6d00, #ffa000)",
                  },
                }}
              >
                Cadastrar
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>

      {/* series cards */}
      <Typography
        variant="h6"
        align="center"
        sx={{ mb: 2, fontWeight: "bold", paddingTop: 4, color: "#ffff" }}
      >
        Algumas Séries cadastradas
      </Typography>

      <Box
        sx={{
          display: "flex", 
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
          mb: 6,
          px: 2,
        }}
      >
        {serieCards.slice(0, 6).map((serieCard) => (
          <Card
            key={serieCard.id}
            sx={{
              width: 180,
              borderRadius: 4,
              backgroundColor: "#ffffff",
              boxShadow: "0 4px 18px rgba(0,0,0,0.12)",
              transition: "0.3s ease",
              overflow: "hidden",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
              },
            }}
          >
            <CardMedia
              component="img"
              image={serieCard.imgUrl}
              alt="Série"
              sx={{
                height: 260,
                objectFit: "cover",
              }}
            />

            <CardContent sx={{ p: 1.5 }}>
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                sx={{
                  fontSize: "0.9rem",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  color: "#2b2b2b",
                  textAlign: "center",
                }}
              >
                {serieCard.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
}