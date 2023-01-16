import React from 'react'
import { MouseParallaxContainer, MouseParallaxChild } from 'react-parallax-mouse'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
  return (
    <div>
        <Link to={'/product/' + props.id} className='product-card'>
            <div className='test'>
              <MouseParallaxContainer resetOnLeave={true}>
                <MouseParallaxChild factorX={-1} factorY={-1}>
                  <img src={require('../assets/'+props.imageURL)} alt = {props.blurb}/>
                </MouseParallaxChild>
              </MouseParallaxContainer>
            </div>
            <span>{props.name}</span>
            <em>{props.price + ' ₧'}</em>
        </Link>
    </div>
  )
}

export default ProductCard