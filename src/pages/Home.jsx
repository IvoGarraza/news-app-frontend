import React from 'react'
import MainSection from '../components/MainSection/MainSection'
import Slider from '../components/Slider/Slider'

const Home = () => {
  return (
    <div className='h-screen pt-24 w-full px-12'>
        <MainSection></MainSection>
        <Slider></Slider>
    </div>
  )
}

export default Home