import React, { useState } from 'react';
import { TextField, Button} from '@mui/material';
import { Container } from '@mui/system';


const SignUp = ({handleToggle}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Save user information in local storage
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    // Clear form inputs
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };


  return ( 
    <Container sx={{display:'flex'}}>
        
    <form onSubmit={handleSubmit} style={{marginTop:'10px',margin:'auto',display:'flex',
    flexDirection:'column',maxWidth:'500px'}}>
      <TextField
        label="First Name"
        variant="outlined"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <TextField
        label="Last Name"
        variant="outlined"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <TextField
        label="Confirm Password"
        variant="outlined"
        type="password"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
      >
        Register
      </Button>
    </form>
    <Button onClick={handleToggle}>Already have an account? Login</Button>
    </Container>
  );
};

export default SignUp;
