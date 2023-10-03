import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Header from './components/Header/Header';
import HomePages from './components/pages/HomePages';
import Footer from './components/footer/Footer';
import ProductPages from './components/pages/ProductPages';
import Cart from './components/CartPageContent/Cart';
import PaymentGateway from './components/pages/PaymentGateway';

// fetching the data from the database
// passing the data using props

import FilterData from './ProductsPageContent/ProductData';
import TrackingPages from './components/pages/TrackingPages';
import LoginSIgnUpPage from './components/pages/LoginSIgnUpPage';


function App() {
  // creating useState for cart items

  const [cartItem, setCartItem] = useState([]);

  // this function uses for adding the data values into cart page.
  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id); // checking the values are strictly equal or not.

    if (productExit) {
      setCartItem(cartItem.map((item) => // mapping on each CartItem values & condition checking
      (item.id === product.id
        ? { ...productExit, qty: productExit.qty + 1 } : item), // adds diffrent product items
      ));
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }]); // adds same product item once
    }
  };

  // decresing the cart value

  const decreaseCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id); // Iteration method =>   find()-: Runs function on each array element & returns the first value that pass the test otherwise returns undefined
    if (productExit.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id)); // Iteration method =>  filter()-: it is creates a new array of element that passes the test.
    } else {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item))); //Iteration method => map()-: Runs the function on each array element & returns new array.
    }                                                              // spread operator ( ... ) -: 
  };

  return (
    <Router>
      <Header cartItem={cartItem} />
      <Routes>
        <Route path="/" element={<LoginSIgnUpPage />} />
        <Route path="/Home" element={<HomePages cartItem={cartItem} />} />
        <Route path="/Products" element={<ProductPages FilterData={FilterData} addToCart={addToCart} />} />
        <Route path="/Cart" element={<Cart cartItem={cartItem} addToCart={addToCart} decreaseCart={decreaseCart} />} />
        <Route path="/Payment" element={<PaymentGateway />} />
        <Route path='/Track' element={<TrackingPages />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
