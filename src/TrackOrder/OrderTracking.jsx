import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { Button, StepContent,styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { blue, purple } from '@mui/material/colors';

const steps = [
  {
    name : 'order preparing',
    Description: 'your order is preparing our restaurent'
  },
  {
    name : 'order ready',
    Description: 'your order is ready'
  },
  {
    name : 'order picked up',
    Description: 'your order is picked up by our delivery partner'
  },
  {
    name : 'on the way to deliver',
    Description: 'he is on his way to deliver your order'
  },
  {
    name : 'order delivered',
    Description: 'order delivered successfully'
  },
];

// custom CSS styles

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: blue[700],
  },
}));

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  // Steps automatically changes every 1 min
  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeStep < steps.length) {
        setActiveStep(activeStep + 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [activeStep, steps]);

  return (
    <Box sx={{ width: '100%',mt:5,mb:5 }}>
      <Stepper activeStep={activeStep} orientation={'vertical'}>
        {steps.map((label,index) => {
          const stepProps = {};
          const labelProps = {};
         
          return (
            <Step key={label.name} {...stepProps}>
              <StepLabel {...labelProps}>{label.name}</StepLabel>
              <StepContent>
                <Typography>{label.Description}</Typography>
              </StepContent>
            </Step>
          );
        })}
      </Stepper>

      {
        activeStep === steps.length ? (
          <React.Fragment>
            <Typography variant='h6' sx={{mt:3}}>your order is delivered by our delivery partner</Typography>
            
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography>step {activeStep + 1}</Typography>
          </React.Fragment>
        )
      }
      
      <Link to='/products' style={{textDecoration:'none'}}>
        <ColorButton>order more</ColorButton>
      </Link>
    </Box>
  );
}