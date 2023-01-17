import React, { useState } from 'react'
import { HashRouter } from 'react-router-dom'
import Nav from './components/Nav'
import Cart from './components/Cart';
import Overlay from './components/Overlay';
import AnimatedRoutes from './components/AnimatedRoutes';

const App = () => {
  const [cartActive, setCartActive] = useState(false)
  const [cart, setCart] = useState({});
  
  const handleClickCart = () => {
    cartActive ? setCartActive(false) : setCartActive(true);
  }

  const addNewItem = (id, price, img, name) => { // Fires if the item is not in the cart
    let cartCopy = {...cart};
    cartCopy[id] = 
    {
      name: name,
      quantity: 1,
      price: price,
      img: img
    }
    setCart(cartCopy);
  }

  const updateQuantityFromInput = (id, amount) => { // Fires on change of input when cart interface is active
    let cartCopy = {...cart};
    if (amount <= 0 || amount === '') {
      cartCopy[id].quantity = 1;
    } else {
      cartCopy[id].quantity = amount;
    }
    setCart(cartCopy);
  }

  const updateQuantityFromButton = (id, operation) => { // Fires if +, - buttons are pressed when cart interface is active
    let cartCopy = {...cart}
    if (operation === 'addition') {
      cartCopy[id].quantity = parseInt(cartCopy[id].quantity) + 1;
    } else {
      if (cartCopy[id].quantity - 1 <= 0) {
        delete cartCopy[id];
      } else {
        cartCopy[id].quantity = parseInt(cartCopy[id].quantity) - 1;
      }
    }
    setCart(cartCopy);
  }

  const addToCart = (id, price, image, name) => { // Fires when 'Add to Cart' button is pressed on product screen
    if (cart[id]) {
      updateQuantityFromButton(id, 'addition')
    } else {
      addNewItem(id, price, image, name)
    }
    handleClickCart();
  }

  const sumItem = (quantity, price) => quantity * price;

  const checkout = () => {
    handleClickCart();
    setCart({})
  }

  const sumAll = () => {
    let total = 0;
    Object.keys(cart).map(item => total += sumItem(cart[item].quantity, cart[item].price))
    return total;
  }

  return (
    <HashRouter>
    <Nav cartClick = { handleClickCart }/>
    <Overlay active = { cartActive }/>
    <Cart active = { cartActive } cartClick = { handleClickCart } cart = { cart } 
    updateFromInput = {updateQuantityFromInput} updateFromButton = { updateQuantityFromButton }
    sumItem = { sumItem } total = { sumAll() } checkout = { checkout }/>
    <AnimatedRoutes addToCart={addToCart} />
    </HashRouter>
  );
}

export default App;
