import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Chip } from "@mui/material";
import { useSelector } from "react-redux";
import { ColorBackgroundSelector } from "../../../utils";

const MainNews = () => {
  const MainNews = useSelector(state => state.newsState.news[0])
  return (
    <Paper
      elevation={3}
      sx={{
        gridColumn: "1 / span 2",
        gridRow: "1 / span 3",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "start",
        height: "100%",
        padding:'2rem'
      }}
    >
      <Box
        sx={{
          height: "16%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems:'start'
        }}
      >
        <Chip
          label={MainNews.category}
          
          color={ColorBackgroundSelector(MainNews.category)}
          variant="filled"
        >
          asdasd
        </Chip>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          {MainNews.title}
        </Typography>
      </Box>
      <Box sx={{ width: "100%", height: "66%" }}>
        <img
          src={MainNews.url}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: 12,
          }}
          alt="main-img"
        />
      </Box>
      <Box
        sx={{
          height: "16%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            color: "text.secondary",
            fontWeight: 300,
          }}
        >
          <Typography variant="caption">Autor: {MainNews.author}</Typography>
          <Typography variant="caption">Actualizado: {MainNews.date}</Typography>
        </Box>
        <Typography variant="h5" sx={{ fontWeight: 500 }}>
          {MainNews.subtitle}
        </Typography>
      </Box>
    </Paper>
  );
};

export default MainNews;
