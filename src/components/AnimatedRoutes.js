import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './Home';
import ProductPage from './Product';
import Shop from './Shop';

import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = (props) =>{
  const location = useLocation();

  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/shopping-cart' exact element = { <Home /> } />
            <Route path='/shop/:id' element = { <Shop /> } />
            <Route path='/product/:id' element = { <ProductPage addToCart = { props.addToCart }/> }/>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes