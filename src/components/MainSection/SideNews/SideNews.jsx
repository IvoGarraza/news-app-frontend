import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { Chip } from "@mui/material";
import { ColorBackgroundSelector} from "../../../utils";
import { NavLink } from "react-router-dom";

const SideNews = () => {
  const sideNews = useSelector(state => state.newsState.news).slice(1,4)
  console.log(sideNews)
  return (
    
      <Box
        sx={{
          gridColumn: "3",
          gridRow: "1 / span 3",
          display: "grid",
          gridTemplateRows: "repeat(3, 1fr)",
          gap: 2,
          paddingLeft: 2,
          width: "100%",
          height: "100%",
        }}
      >
        {sideNews.map((noticia, index) => (
          <NavLink to={`/detail/${noticia.id}`}>
            <Paper
              key={index}
              elevation={2}
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent:'space-between',
                borderRadius: 2,
                p: 2,
                cursor: "pointer",
                transition: "all 0.2s",
                "&:hover": { boxShadow: 6, transform: "scale(1.01)" },
              }}
            >
              <Box sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", paddingRight:'1rem' }}>
                <Box sx={{width:'50%'}}>
                  <Chip label={noticia.category} variant="outlined" color={ColorBackgroundSelector(noticia.category)}></Chip>
                </Box>
                <Typography variant="h8" sx={{ fontWeight: "bold" }}>{noticia.title}</Typography>
                <Typography variant="caption">{noticia.author}</Typography>
              </Box>
              <Box sx={{ width: "50%", height: "100%", overflow: "hidden" }}>
                <img
                  src={noticia.url}
                  style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 12 }}
                  alt="card-img"
                />
              </Box>
            </Paper>
          </NavLink>
        ))}
      </Box>
  );
};

export default SideNews;
