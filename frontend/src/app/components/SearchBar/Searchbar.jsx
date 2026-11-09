"use client";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({ onSearch }) {
  const [text, setText] = useState("");

  return (
    <Paper
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(text);
      }}
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 300,
        margin: "0 auto",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Buscar série..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <IconButton type="submit">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
