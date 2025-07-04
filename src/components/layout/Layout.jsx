import React from 'react'
import AddNews from '../Buttons/AddNews/AddNews'
import { AppBar, Typography } from '@mui/material'
import Box from '@mui/material/Box'

const Layout = () => {
  return (
    <AppBar sx={{width:'100%', position:'fixed', height:'6rem', backgroundColor:'rojo.main', alignItems:'center', justifyContent:'space-between', display:'flex', flexDirection:'row', paddingX:'2rem'}}>
      <Typography sx={{fontWeight:'bold',}} variant='h4'>MFNews</Typography>
      <Box>
        <AddNews></AddNews>
      </Box>
    </AppBar>
  )
}

export default Layout