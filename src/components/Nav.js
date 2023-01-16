import React from 'react'
import { Link } from 'react-router-dom'
import Cart from '../assets/shopping-cart.svg'

const Nav = (props) => {
  return (
    <div className='nav-outer'>
        <Link to = '/shopping-cart'>SURVIVALIST</Link>
        <div className='nav-inner'>
            <Link to = '/shop/all'>SHOP</Link>
            <img src={Cart} alt={'Open cart.'} onClick={props.cartClick}/>
        </div>
    </div>
  )
}

export default Nav