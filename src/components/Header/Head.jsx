import { Container, Grid, ListItem, ListItemText, Typography } from '@mui/material'
// icons List
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

import React from 'react'

const Head = () => {
  return (
    <>
      <Container maxWidth="xl" sx={{background:'#0f3460',color:'white',flexGrow:1,}}>

        <Grid display={'flex'} justifyContent={'space-between'}>

            <Grid item display={'flex'} >
               <Grid display={'flex'} mr={5}>
               <LocalPhoneIcon sx={{fontSize:'18px'}}/>
                <Typography variant='body1' ml={2} sx={{fontSize:'14px'}}>+88012 3457 7894</Typography>
               </Grid>
               <Grid display={'flex'}>
               <EmailIcon  sx={{fontSize:'18px'}}/>
                <Typography variant='body1' ml={2} sx={{fontSize:'14px'}}>example@gmail.com</Typography>
               </Grid>
            </Grid>
            <Grid display={'flex'}>
                <Typography mr={2} sx={{fontSize:'14px'}}>FAQ's</Typography>
                <Typography sx={{fontSize:'14px'}}>Help</Typography>
            </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Head
