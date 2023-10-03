import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Grid } from '@mui/material';
import RData from './RData';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function RecipeReviewCard() {
  return (
    <>
    <Grid container spacing={2} >
       
  

    {
        RData.map((value,index) =>{
            return(
                <>
              <Grid item xl={3} lg={3} md={4} xs={12} sm={6} >         
                  <Card sx={{ maxWidth:'auto' }} key={index}>
      <CardMedia
        component="img"
        height="194"
        image={value.img}
        alt="Paella dish"
      />
      <CardContent sx={{display:"flex",justifyContent:"space-between"}}>
      <Typography>{value.title}</Typography>
        <Typography variant='body2' sx={{background:"Green",
        borderRadius:"5px",
        color:"white", 
        padding:"2px 5px"
        }} >

         4.5<StarBorderIcon fontSize='10px' color='yellow' sx={{color:"yellow"}}/>
            
       </Typography>  
      </CardContent>

      <CardContent sx={{display:"flex",justifyContent:"space-between"}}>
      <Typography variant="caption" color="text.secondary">
       {value.subtitle}
        </Typography>
        <Typography style={{color:"blue"}}>${value.price}</Typography>
      </CardContent>

      <CardActions sx={{display:"flex",justifyContent:"space-between",}}>
        <IconButton aria-label="add to favorites" style={{background:"red"}}>
          <FavoriteIcon  style={{color:'white'}}/>
        </IconButton>
        <IconButton aria-label="share" style={{background:"blue"}}>
          <ShareIcon style={{color:'white'}} />
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
  );
}