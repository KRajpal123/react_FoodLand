import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SliderData from './SliderData';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export default function RecipeReviewCard() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        responsive:[
            {
                breakpoint: 1200,
                settings:{
                    slidesToShow:3,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true,
                }
            },
            {
                breakpoint: 900,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true
                }
            },
            {
                breakpoint: 600,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                    dots:false
                }
            },
        ]
    };

  return (
    <>
    <Slider {...settings}>
    {
        SliderData.map((value,index)=>{
            return(
                <>
   <Card sx={{ maxWidth: 'auto',padding:'10px 0px',margin:'0px 10px' }} key={index}>
      <CardMedia
        component="img"
        sx={{width:'200px',mx:"auto"}}
        height="auto"
        image={value.Img}
        alt="Paella dish"
      />
      <CardContent>
      <Typography variant='h6'>{value.title}</Typography>
      </CardContent>
      <CardContent>
        <Typography variant='body2' color='text.secondary'>{value.desc}</Typography>
      </CardContent>
    </Card>
                </>
            )
        })
    }
    </Slider>
    </>
  );
}