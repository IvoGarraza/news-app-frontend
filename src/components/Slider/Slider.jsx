import React, { useState } from "react";
import ArrowSlider from "../Buttons/ArrowSlider/ArrowSlider";
import CardsSlider from "../Cards/CardSlider/CardsSlider";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";


const CARDS_PER_PAGE = 3;

const Slider = () => {
  const allNews = useSelector((state) => state.newsState.news);
  const [startIndex, setStartIndex] = useState(0);

  // Calcula el slice de noticias a mostrar
  const newsSliders = allNews.slice(startIndex, startIndex + CARDS_PER_PAGE);

  // Funciones para cambiar el índice
  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - CARDS_PER_PAGE, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + CARDS_PER_PAGE < allNews.length
        ? prev + CARDS_PER_PAGE
        : prev
    );
  };
  return (
    <Box sx={{    width: '100%',
      minHeight: '60vh', display:'flex',    margin: 0,
      padding: 0, flexDirection:'row', alignItems:'center', justifyContent:'space-around', paddingY:'2rem'}}>
      {/* <!--boton izquierda--> */}
      <ArrowSlider direction="left" onClick={handlePrev}></ArrowSlider>
      {/* <!--noticias--> */}
      <Box sx={{height:'100%', width:'80%', display:'grid', gridTemplateColumns:'repeat(3, minmax(0, 1fr))', gridTemplateRows:'repeat(1, minmax(0, 1fr))'}}>
        {newsSliders.map((noticia, index) => (
          <CardsSlider noticia={noticia}></CardsSlider>
        ))}
      </Box>
      {/* <!--boton derecha--> */}
      <ArrowSlider direction="right" onClick={handleNext} ></ArrowSlider>
    </Box>
  );
};

export default Slider;
