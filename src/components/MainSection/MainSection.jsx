import React from "react";
import MainNews from "./MainNews/MainNews";
import SideNews from "./SideNews/SideNews";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";

const MainSection = () => {

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr",
        gridTemplateRows: "repeat(3, 1fr)",
        gap: 0,
        paddingTop:2
      }}
    >
      {/*noticia principal*/}
      <MainNews />
      {/*noticias laterales*/}
      <SideNews />
    </Box>
  );
};

export default MainSection;