import { Typography } from '@mui/material'
import  Box  from '@mui/material/Box'
import  Chip  from '@mui/material/Chip'
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ColorBackgroundSelector } from '../utils'

const Detail = () => {
  const {id} = useParams()
  const news = useSelector(state => state.newsState.news)
  const noticia = news.find(n => String(n.id) === String(id));

  return (
    <Box sx={{paddingTop:'8rem', paddingX:'2rem'}}>
      <Box >
        <Typography variant='h3'>{noticia.title}</Typography>
        <Chip label={noticia.category} color={ColorBackgroundSelector(noticia.category)}></Chip>
        <Typography variant='h5'>{noticia.subtitle}</Typography>
      </Box>
      <Box sx={{ width: "70%", height: "66%" }}>
        <img alt='' src={noticia.url}           style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: 12,
          }}></img>
      </Box>
    </Box>
  )
}

export default Detail