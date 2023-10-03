import { Button, Checkbox, FormControlLabel,IconButton,Typography } from '@mui/material';
import React,{useState} from 'react';
import {TextField} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/system';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './style.css'

const Login = ({handleToggle}) => {

  // checking user information matches with login credentials.

const [checkEmail,setCheckEmail] = useState('');
const [checkPassword,setCheckPassword] = useState('');
const[errorMessage,setErrorMessage] = useState('');
 
// Re-directing the user to homepage.
const Navigate = useNavigate();

// authenticating the user loggedin or not.

const chekingDetails = (event) =>{
    event.preventDefault();

     // Retrieve user information from local storage
     const storedEmail = localStorage.getItem('email');
     const storedPassword = localStorage.getItem('password');
 
     // Check if the user input matches the stored information
     if (checkEmail === storedEmail && checkPassword === storedPassword) {
       // Allow the user to log in
       Navigate('/Home')
     } else {
       // Display an error message
       setErrorMessage('Invalid email or password.');
     }

     // Clear form inputs
    setCheckEmail('');
    setCheckPassword('');
}

  return (
    <>
   <Container sx={{width:'350px',m:'auto',backgroundColor:'red', height:'450px',
   boxShadow:'10px 10px  10px -6px #777',borderRadius:'10px',color:'white'}}
   style={{background: 'linear-gradient(to right bottom, #430089, #82ffa1)'}}
   >
    <Typography variant='h6'textAlign={'center'}
    color={'white'}
    borderBottom={'1px solid white'}
    pt={3}
    >
      Welcome to <span style={{color:'violet'}}>FOODLAND</span>  
    </Typography>
    <IconButton style={{color:'red',}}>
      <AccountCircleIcon />
    </IconButton>
   <form onSubmit={chekingDetails} 
    style={{display:'flex',flexDirection:'column',padding:'auto',
    marginTop:'10px'}}>
    <TextField
        label="Email"
        variant="outlined"
        value={checkEmail}
        onChange={(event) => setCheckEmail(event.target.value)}
        sx={{mb:3,backgroundColor:'transparent',color:'green',mt:3}}
        inputProps={{style:{color:'white'}}}
        InputLabelProps={{style:{color:'pink'}}}
        fullWidth
        required
        focused
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        value={checkPassword}
        onChange={(event) => setCheckPassword(event.target.value)}
        fullWidth
        inputProps={{style:{color:'white',}}}
        InputLabelProps={{style:{color:'pink'}}}
        required
        focused
      />
      {errorMessage && <p>{errorMessage}</p>}

      <FormControlLabel 
      control={<Checkbox />}
      label={'Remember me'}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        sx={{mt:3}}
      >
        Login
      </Button>
    </form>

    <div style={{display:'flex',justifyContent:'space-between',marginTop:'30px'}}>
      <div>
      <Button onClick={handleToggle} sx={{fontSize:'8px',color:'whitesmoke'}}>don't have an account ? Sign Up</Button>
      </div>
      <div>
       <Button sx={{fontSize:'10px'}}> <a href="#" style={{color:'whitesmoke'}}> Forgot Password</a></Button>
      </div>
    </div>
   </Container>
    </>
  )
}

export default Login
