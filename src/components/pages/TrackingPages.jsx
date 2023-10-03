import { Container } from '@mui/system'
import React from 'react'
import GoogleMaps from '../../TrackOrder/GoogleMaps'
import HorizontalLinearStepper from '../../TrackOrder/OrderTracking'
import UserLocation from '../../TrackOrder/UserLocation'


const steps = [
    { content: "Step 1 content" },
    { content: "Step 2 content" },
    { content: "Step 3 content" },
  ];
  
const TrackingPages = () => {
  return (
    <>
    <Container sx={{mt:3}}>
        <GoogleMaps />
        <UserLocation />
        <HorizontalLinearStepper />
    </Container>
    </>
  )
}

export default TrackingPages
