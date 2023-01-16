import React, { useEffect, useState } from 'react'

const CartCard = (props) => {
  const [quantity, setQuantity] = useState(props.quantity)
  useEffect(() => {
    setQuantity(props.quantity)
  }, [props])
  return (
    <div className='cart-card'>
        <div className='cart-main'>
            <img src={require('../assets/' + props.image)} alt={props.name}/>
            <div className='cart-sub'>
                {props.name}
                <span>Subtotal: {props.sumItem(props.quantity, props.price) + ' ₧'}</span>
                <div className='interface'>
                    <span onClick={() => props.updateFromButton(props.id, 'addition')}>+</span>
                    <input type='number' value={quantity} onChange={(e) => props.updateFromInput(props.id, e.target.value)}/>
                    <span onClick={() => props.updateFromButton(props.id, 'subtraction')}>-</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartCard