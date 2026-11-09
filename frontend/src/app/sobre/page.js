"use client";
import { Box, Typography } from "@mui/material";
import styles from "./sobre.module.css";

export default function Sobre() {
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
            variant="h6"
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
            Sobre o Projeto
          </Typography>

          <Typography
            variant="h6"
            sx={{ mt: 1, mb: 2, fontWeight: 500, color: "#333" }}
          >
            Este é um projeto de gerenciamento de séries assistidas com React
            para a Disciplina de Desenvolvimento Frontend.
          </Typography>

          <Typography sx={{ color: "#555", lineHeight: 1.7, mb: 3 }}>
            Aqui você pode cadastrar, visualizar, editar e excluir séries
            assistidas.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
