import React, { useState } from 'react'
import Login from '../UserLogin/Login';
import SignUp from '../UserLogin/SignUp';
import { CSSTransition } from 'react-transition-group';
import '../UserLogin/style.css'
import { Grid, ImageList, ImageListItem } from '@mui/material';
import { Container } from '@mui/system';
import brandImg from '../../image/Foodland-Logo-Apples.jpg';


const LoginSIgnUpPage = () => {
    const [showLogin,setShowLogin] = useState(true);

    const handleToggle = () =>{
        setShowLogin(!showLogin);
    };

  return (
    <>
    <Container sx={{p:5}}>
    <Grid container pt={2}>
    <Grid item md={6} sx={{background:'red'}}  >
      
<div className='container'>
       <div className='basis'>
       <img 
            src={brandImg}
            alt='Brand_image'
            className='image'
            />
       </div>
       </div>

    </Grid>
    <Grid item md={6} className='gradient'> 
    <CSSTransition
        in={showLogin}
        timeout={300}
        classNames="login-form"
        unmountOnExit
      >
        <Login handleToggle={handleToggle} />
      </CSSTransition>

      <CSSTransition
        in={!showLogin}
        timeout={300}
        classNames="signup-form"
        unmountOnExit
      >
        <SignUp handleToggle={handleToggle} />
      </CSSTransition>
    </Grid>
</Grid>
    </Container>

    </>
  )
}

export default LoginSIgnUpPage
