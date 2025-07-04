import React from 'react'
import ArrowSlider from '../Buttons/ArrowSlider/ArrowSlider'
import CardsSlider from '../Cards/CardSlider/CardsSlider'
import { useSelector } from 'react-redux'

const Slider = () => {
  const newsSliders = useSelector(state => state.newsState.news).slice(4,7)

  return (
    <div className="h-2/3 w-full flex flex-row items-center justify-around py-4">
    {/* <!--boton izquierda--> */}
    <ArrowSlider direction='left'></ArrowSlider>
    {/* <!--noticias--> */}
    <div className="h-full w-4/6 grid grid-cols-3 grid-rows-1 gap-4">
    {newsSliders.map((noticia, index)=>(
      <CardsSlider noticia={noticia}></CardsSlider>
    ))}
    </div>
    {/* <!--boton derecha--> */}
    <ArrowSlider direction='right'></ArrowSlider>
</div>
  )
}

export default Slider