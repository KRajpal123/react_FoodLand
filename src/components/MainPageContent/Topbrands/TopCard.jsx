import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import TopBrandData from './TopBrandData'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export default function TitlebarBelowImageList() {
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
                    slidesToShow:2,
                    slidesToScroll:1,
                    dots:false
                }
            },
            {
                breakpoint: 420,
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
        TopBrandData.map((value,index) =>{
            return(
                <>
        <ImageList sx={{ width:500,cursor:'pointer'}}>
             <ImageListItem key={index}>
           <img
            src= {value.Image}
            srcSet={`${value.Image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={value.Title}
            loading="lazy"
            style={{borderRadius:"50%"}}
          />
          <ImageListItemBar
            title={value.Title}
            subtitle={<span>by: {value.time} min</span>}
            position="below"
            style={{alignItems:'center',justifyContent:'center'}}
            sx={{alignItems:'center',justifyContent:'center'}}
          />
        </ImageListItem>
    </ImageList>
                </>
            )
        })
    }
    </Slider>
    </>
  );
}
