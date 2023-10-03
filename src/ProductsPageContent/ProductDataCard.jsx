import React from 'react'

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { Grid } from '@mui/material';

import StarBorderIcon from '@mui/icons-material/StarBorder';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const ProductDataCard = ({filterData,addToCart}) => {
  return (
    <>
      <Grid container spacing={2} >

       {
           filterData.map((value,index) =>{
               return(
                   <>
        <Grid item xl={3} lg={4} md={6} xs={12} sm={12} key={index} >         
          <Card sx={{ maxWidth:'auto' }}>
         <CardMedia
           component="img"
           height="194"
           image={value.img}
           alt="Paella dish"
         />
         {/* ------------card header ---------------- */}
         <CardContent sx={{display:"flex",justifyContent:"space-between"}}>
         <Typography>{value.name}</Typography>
           <Typography variant='body2' sx={{background:"Green",
           borderRadius:"5px",
           color:"white", 
           padding:"2px 5px"
           }} >
   
            4.5<StarBorderIcon fontSize='10px' color='yellow' sx={{color:"yellow"}}/>
               
          </Typography>  
         </CardContent>

         {/* ---------------------card description ------------ */}
   
         <CardContent sx={{display:"flex",justifyContent:"space-between"}}>
         <Typography variant="caption" color="text.secondary" sx={{flexBasis:'80%'}}>
          {value.desc}
           </Typography>
           <Typography style={{color:"blue"}}>Rs {value.price}</Typography>
         </CardContent>
   
   {/*--------------- card action buttons ------------- */}
         <CardActions sx={{display:"flex",justifyContent:"space-between",}}>

         <Checkbox 
         {...label} 
         icon={<FavoriteBorder />}
         checkedIcon={<Favorite />} 
         color={'error'}
         />
           <IconButton aria-label="share" style={{background:"blue"}}
           onClick={()=>addToCart(value)}
           >
             <AddIcon style={{color:'white'}} />
           </IconButton>
           
         </CardActions>
   
                   </Card>
                </Grid>
                   </>
               )
           })
       }
         </Grid>
    </>
  )
}

export default ProductDataCard
