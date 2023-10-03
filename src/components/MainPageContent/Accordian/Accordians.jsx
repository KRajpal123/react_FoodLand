import { Container, Typography } from '@mui/material'
import React from 'react'
import ControlledAccordions from './AccList'

const Accordians = () => {
  return (
    <>
      <Container maxWidth={'xl'}sx={{
        background:'#D3D3D3',
        color:'#8A0A74',
        padding:'30px',
    mt:"30px",
    mb:5,
    }}>
        <Typography variant='h4'>
           Explore Options Near Me
        </Typography>
        <ControlledAccordions />
      </Container>
    </>
  )
}

export default Accordians
