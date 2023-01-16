import React  from 'react'
import CartCard from './CartCard'
import X from '../assets/x.svg'
import Bag from '../assets/shopping-bag.svg'
import { Link } from 'react-router-dom'

const Cart = (props) => {
  return (
    <div className='cart' id={props.active ? 'active' : ''}>
        <img src={X} alt={'Close the cart'} onClick={ props.cartClick }/>
        <h1>YOUR CART</h1>
        <div className='cart-items'>
        {Object.keys(props.cart).length !== 0 ? 
        Object.keys(props.cart).map(item => 
         <CartCard id={item} name={props.cart[item].name} 
          image={props.cart[item].img} price={props.cart[item].price} 
          quantity={props.cart[item].quantity} updateFromButton = {props.updateFromButton}
          updateFromInput = {props.updateFromInput} sumItem = {props.sumItem} key={item}/>
          ) : 
        <div className='empty-cart'><img src={Bag} alt='An empty shopping bag'/><span>Your shopping cart is empty</span></div>}
        </div>
        <div className='checkout'>
          <div className='checkout-button'>
            <Link to = '/' onClick={ props.checkout }> CHECKOUT </Link>
          </div>
          <div className='total'>TOTAL: <span>{props.total + ' ₧'}</span></div>
        </div>
    </div>
  )
}

export default Cart