import { Button, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {styled} from '@mui/material/styles';
import { purple,blue } from '@mui/material/colors';

// css for text field
const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white',
  },
  '& label':{
      color:'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
});

// custom CSS styles

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: blue[700],
  },
}));

// custom css for social media icons

const ColorButtonIcon = styled(Button)(({theme}) => ({
  color:theme.palette.getContrastText(blue[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: blue[700],
  }
}));

const Footer = () => {
  return (
    <>
      <Container maxWidth={'xl'} sx={{mt:4, background:'#454545',color:'white'}}>

        {/* brand and language container */}

            <Grid container spacing={2} sx={{mt:3}}>
                <Grid item md={9} sm={6} xs={6}>
                    <Typography variant='h4' sx={{color:'red'}}>Food<span style={{color:'yellow'}}>Land</span></Typography>
                </Grid>
                <Grid item md={3} sm={6} xs={6}>
                    <Stack direction={'row'} spacing={2}>
                       <Typography variant='h6' sx={{color:'red'}}>Region</Typography>
                       <Typography variant='h6' sx={{color:'yellow'}}>Language</Typography>
                    </Stack>
                </Grid>
            </Grid>
{/* about us list  container */}

            <Grid container spacing={3} sx={{mt:5,cursor:'pointer'}}>
              {/* about foodland  */}
                <Grid item md={3} sm={6} xs={6}>
                    <Typography variant='h6'sx={{color:'red'}}>
                         <span style={{color:'yellowgreen'}}>About</span> Food<span style={{color:'yellow'}}>Land</span>
                         </Typography>
                    <Stack>
                        <Typography variant='subtitle' sx={{paddingTop:'12px'}}>who we are</Typography>
                        <Typography variant='subtitle' sx={{padding:'12px 0px'}}>Blog</Typography>
                        <Typography variant='subtitle'>work with us</Typography>
                        <Typography variant='subtitle' sx={{padding:'12px 0px'}}>Investor Relation</Typography>
                        <Typography variant='subtitle'>Report Fraud</Typography>
                        <Typography variant='subtitle' sx={{padding:'12px 0px'}}>Contact Us</Typography>
                    </Stack>
                </Grid>
                {/* foodverse  */}
                <Grid item md={3} sm={6} xs={6}>
                    <Stack >
                    <Typography variant='h6'  sx={{color:'yellow'}}>FoodVerse</Typography>
                    <Typography variant='subtitle' sx={{padding:'12px 0px'}}>FoodLand</Typography>
                    <Typography variant='subtitle'>Feeding India</Typography>
                    <Typography variant='subtitle' sx={{padding:'12px 0px'}}>HyperPure</Typography>
                    </Stack>
                </Grid>
                {/* for Restaurents  */}
                <Grid item md={3} sm={6} xs={6}> 
                    <Stack>
                    <Typography variant='h6' sx={{color:'red'}}>For Restaurents</Typography>
                    <Typography variant='subtitle' sx={{padding:'12px 0px'}}>Partner with us</Typography>
                    <Typography variant='subtitle'>Apps for you</Typography>
                    <Typography variant='h6' sx={{mt:5}}>For Enterprises</Typography>
                    <Typography variant='subtitle' sx={{padding:'10px 0px'}}>FoodLand for Work</Typography>
                    </Stack>
                </Grid>
                {/* learn more  */}
                <Grid item md={3} sm={6} xs={6}>
                    <Stack>
                    <Typography variant='h6'  sx={{color:'yellow'}}>Learn More</Typography>
                    <Typography variant='subtitle' sx={{padding:'12px 0px'}}>Privacy</Typography>
                    <Typography variant='subtitle'>Security</Typography>
                    <Typography variant='subtitle' sx={{padding:'12px 0px'}}>Terms & Conditions</Typography>
                    <Typography variant='subtitle'>Sitemap</Typography>
                    </Stack>
                </Grid>
            </Grid>

{/* social links & text field container  */}

          <Grid container spacing={3} sx={{mt:3,cursor:'pointer'}}>

              {/* social links  */}

            <Grid item md={6} sm={6} xs={12} sx={{
              display:'grid',
              gridTemplateColumns:{xs:'1fr 1fr',md:'1fr'}
            }} alignItems={'center'}>
                    <Typography variant='h6' mr={2}>Social Links</Typography>
                    <Stack direction={'row'} spacing={1}>
                 <ColorButtonIcon>
                 <FacebookIcon fontSize={'small'}/>
                 </ColorButtonIcon>
                
                <ColorButton>
                <LinkedInIcon  fontSize={'small'}/>
                </ColorButton>
                 
                 <ColorButton>
                 <InstagramIcon  fontSize={'small'}/>
                 </ColorButton>
                
                <ColorButton>
                <YouTubeIcon  fontSize={'small'}/>
                </ColorButton>

                <ColorButton>
                <TwitterIcon  fontSize={'small'}/>
                </ColorButton>
                
                </Stack>
           </Grid>

              {/* TextField  */}

            <Grid item md={6} sm={6} xs={12}>
     <Box
      component="form"
      noValidate
      sx={{
        display: 'grid',
        gridTemplateColumns: { sm: '1fr 1fr',md:'1fr 1fr 1fr' },
        gap: 2,
      }}
    >
      <CssTextField label="Enter Your Name" id="custom-css-outlined-input" />
      <CssTextField label="Enter Your Email" id="custom-css-outlined-input" />
      <ColorButton variant='contained'>submit</ColorButton>
      </Box>
            </Grid>
              
        </Grid>

  
 <Divider variant={'fullWidth'} color={'white'} sx={{marginTop:'20px'}} />

<Typography>
By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All 
trademarks are properties of their respective owners. 2008-2023 © FoodLand™ Ltd. All rights reserved.
</Typography>

      </Container>
    </>
  )
}

export default Footer
