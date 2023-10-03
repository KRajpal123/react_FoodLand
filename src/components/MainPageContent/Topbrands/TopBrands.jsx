import { Container, Typography } from '@mui/material'
import React from 'react'
import TopCard from './TopCard'

const TopBrands = () => {
  return (
    <>
      <Container maxWidth="xl" sx={{
        mt:5,
        background:'grey',
        color:"white"
      }}>
        <Typography variant='h5' padding={'30px 0px'}>
            Top brands for you
        </Typography>
        <TopCard />
      </Container>
    </>
  )
}

export default TopBrands
