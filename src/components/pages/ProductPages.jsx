import React from 'react';
import Product from '../../ProductsPageContent/Product';

const ProductPages = ({ FilterData, addToCart }) => (
  <Product FilterData={FilterData} addToCart={addToCart} />
);

export default ProductPages;
