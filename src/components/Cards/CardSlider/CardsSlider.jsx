import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Chip } from "@mui/material";
import { ColorBackgroundSelector } from "../../../utils";
import { NavLink } from "react-router-dom";

const CardsSlider = (props) => {

  return (
    <Card sx={{ maxWidth: 345, borderRadius: 3, cursor: "pointer", transition: "transform 0.2s", "&:hover": { boxShadow: 6, transform: "scale(1.01)" } }}>
      <CardMedia
        component="img"
        image={props.noticia.url}
        alt="slider-img"
        sx={{ borderRadius: 3, height:200 }}
      />
      <CardContent>
        <Chip label={props.noticia.category} variant="outlined" color={ColorBackgroundSelector(props.noticia.category)} gutterBottom>
        </Chip>
        <Typography variant="h6" component="div" fontWeight="bold">
          {props.noticia.title}
        </Typography>
        <NavLink to={`/detail/${props.noticia.id}`}>
          <Button variant="contained" color="rojo">Ver mas</Button>
        </NavLink>
      </CardContent>
    </Card>
  );
};

export default CardsSlider;