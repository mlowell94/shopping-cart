import React from 'react'
import { MouseParallaxContainer, MouseParallaxChild } from 'react-parallax-mouse';
import { useParams } from 'react-router-dom';
import { items } from '../items';
import { motion } from 'framer-motion';


const ProductPage = (props) => {
  const test = useParams();
  const product = items[test.id];
  return (
    <motion.div className='product'
    initial = {{left: "100%"}}
    animate = {{left: 0, transition: {duration: 0.25}}}
    exit = {{left: "-102.5%", transition: {duration: 0.5}}}
    >
      <div className='main'>
        <div className='main-inner'>
          <div>
            <MouseParallaxContainer resetOnLeave={true}>
              <MouseParallaxChild factorX={-1.75} factorY={-1.75}>
                <div className='main-img-container'>
                  <img src={require('../assets/'+product.imgURL)} alt = {product.blurb}/>
                </div>
              </MouseParallaxChild>
            </MouseParallaxContainer>
            <span><em>{product.blurb}</em></span>
            <div className='product-cart'>
              <span onClick={ () => props.addToCart(test.id, product.price, product.imgURL, product.name) } className='add-to-cart'>Add to Cart</span>
            </div>
          </div>
          <div className='info'>
            <h1>{product.name}</h1>
            <h2>{product.price} ₧</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Eget nulla facilisi etiam dignissim. 
              Massa vitae tortor condimentum lacinia quis vel. 
              Quam elementum pulvinar etiam non quam lacus suspendisse faucibus.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductPage