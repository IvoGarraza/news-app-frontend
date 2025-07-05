import React from 'react'
import MainSection from '../components/MainSection/MainSection'
import Slider from '../components/Slider/Slider'
import Box from "@mui/material/Box";

const Home = () => {
  return (
    <Box sx={{height:'100vh', paddingTop:'6rem', width:'100%', paddingX:'3rem'}} >
        <MainSection></MainSection>
        <Slider></Slider>
    </Box>
  )
}

export default Home