import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
  return (
    <div>
        <Link to={'/product/' + props.id} className='product-card'>
            <div className='test'>
              <img src={require('../assets/'+props.imageURL)} alt = {props.blurb}/>
            </div>
            <span>{props.name}</span>
            <em>{props.price + ' ₧'}</em>
        </Link>
    </div>
  )
}

export default ProductCard