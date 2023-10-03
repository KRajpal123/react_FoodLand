import { Button, CardActions, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'

//grid image card
import CardMedia from '@mui/material/CardMedia';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

// Link 
import { Link } from 'react-router-dom';

// custom CSS styles
import { purple,blue } from '@mui/material/colors';
import {styled} from '@mui/material';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: blue[700],
  },
}));

const Cart = ({addToCart,cartItem,decreaseCart}) => {

  // creating variable & storing the data
  // calculating the total price of items in the cart & quatity of the item.

  const totalPrice = cartItem.reduce((price,item)=> price+item.qty * item.price, 0);
  // reduce method uses for returning a single value. eg: array of object Total sum,sub,mul,div...etc.

  return (
    <>
      <section style={{background:'#ccc'}}>
      <Grid container spacing={5} mt={0.5} p={4}>

<Grid item md={8}
textAlign={'center'}
fontSize={'12px'}
fontWeight={'500'}
color={'black'}
>
{cartItem.length === 0 && <h1 className='no-items product'>No Items are added in the cart</h1>}

{cartItem.map((item,index) => {
 const productQty = item.price * item.qty

 return(
  <>
 <Grid container key={index} mb={2} sx={{background:"#fff",
 borderRadius:"5px",boxShadow:'0 10px 6px -6px #777'}} >

  <Grid item md={4}>
    <CardMedia
     component="img"
     height="194"
     image={item.img}
     alt="Paella dish"
    />
   </Grid>

   <Grid item  md={4}>
   <Typography>{item.name}</Typography>
      <Typography> {item.price}.00  * {item.qty}</Typography>
      <Typography>${productQty}.00</Typography>
   </Grid>

   <Grid item  md={4} sx={{display:"flex"}}> 
    <CardActions>
      <ColorButton onClick={() => addToCart(item)}><AddIcon /></ColorButton>
    </CardActions>
    <CardActions>
      <ColorButton onClick={() =>decreaseCart(item)}><RemoveIcon /></ColorButton>
    </CardActions>
   </Grid>
   </Grid>
  </>
 )

})}
</Grid>
<Grid item  md={4}
>
 <div style={{background:'#f9f4d9',textAlign:'center',padding:5,boxShadow:'0 10px 6px -6px #777',
borderRadius:'5px'}}>
 <Typography ml={2}
  fontFamily={'sans-serif'}
  fontSize={'22px'}
  borderBottom='1px solid purple'
  color={'blue'}
  >
    Cart Summary
    </Typography>

  <CardContent sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
    <Typography variant='body1' mr={2}  >Total Price: </Typography>
    <Typography variant='subtitle'> $ {totalPrice}.00 </Typography>
  </CardContent>

  <Link to='/payment' style={{textDecoration:"none",color:'white'}} >
    <ColorButton>Make Payment</ColorButton>
  </Link>
 </div>
</Grid>
</Grid>
      </section>
    </>
  )
}

export default Cart
