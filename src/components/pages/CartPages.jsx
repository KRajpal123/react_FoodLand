import React from 'react'
import Cart from '../CartPageContent/Cart'

const CartPages = ({cartItem,addToCart}) => {
  return (
    <>
     <Cart cartItem={cartItem} addToCart={addToCart} />
    </>
  )
}

export default CartPages
