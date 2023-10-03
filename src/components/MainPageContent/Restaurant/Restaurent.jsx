import { Container, Grid, Typography } from '@mui/material'
import { padding } from '@mui/system'
import React from 'react'
import RecipeReviewCard from './RCard'

const Restaurent = () => {
  return (
    <>
      <Container maxWidth="xl"
      sx={{
        background:'#FEF8DD',
        paddingBottom:'30px'
      }}>
        <Typography variant='h4' padding={'30px 0px'}>
            Delivery Restaurents in Hyderabad
        </Typography>
        <RecipeReviewCard />
      </Container>
    </>
  )
}

export default Restaurent
