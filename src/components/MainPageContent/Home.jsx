import { Container, Typography } from '@mui/material'
import React from 'react'
import SliderCard from './SliderCard'

const Home = () => {
  return (
    <>
      <Container maxWidth= 'xl' sx={{
        background:'#D3D3D3',
        color:'#8A0A74',
        padding:'10px',
      }} >
        <Typography variant='h5' sx={{
            padding:'30px 0px'
        }}>Inspiration for your first order</Typography>
        <SliderCard/>
      </Container>
    </>
  )
}

export default Home
