import React from 'react'
import Accordians from '../MainPageContent/Accordian/Accordians'
import Home from '../MainPageContent/Home'
import Restaurent from '../MainPageContent/Restaurant/Restaurent'
import TopBrands from '../MainPageContent/Topbrands/TopBrands'

const HomePages = () => {
  return (
    <>
     <Home />
     <TopBrands />
     <Restaurent />
     <Accordians />
    </>
  )
}

export default HomePages
