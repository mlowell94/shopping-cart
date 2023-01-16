import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { items } from '../items'
import ProductCard from './ProductCard'
import { motion } from 'framer-motion'

const Shop = () => {
  const test = useParams()
  if(test.id === 'all') {
    return (
        <div className='shop'>
            <div className='sidebar'>
                <Link to='/shop/all' id='active'>All Products</Link>
                <Link to='/shop/health'>Health</Link>
                <Link to='/shop/treasures'>Treasures</Link>
                <Link to='/shop/misc'>Misc</Link>
            </div>
            <motion.div className='for-sale'
            initial = {{left: "100%"}}
            animate = {{left: 0}}
            exit = {{right: "100%"}}
            >
                {Object.keys(items).map(item =>
                    <ProductCard name={items[item].name} imageURL={items[item].imgURL} 
                    blurb={items[item].blurb} id={item} price={items[item].price}
                    key={item}/>)}
            </motion.div>
        </div>
    )
  } else if (test.id === 'treasures') {
    return (
        <div className='shop'>
            <div className='sidebar'>
                <Link to='/shop/all'>All Products</Link>
                <Link to='/shop/health'>Health</Link>
                <Link to='/shop/treasures' id='active'>Treasures</Link>
                <Link to='/shop/misc'>Misc</Link>
            </div>
            <motion.div className='for-sale'
            initial = {{left: "100%"}}
            animate = {{left: 0}}
            exit = {{right: "100%"}}
            >
                {Object.keys(items).map(item => items[item].type === 'treasure' ? 
                    <ProductCard name={items[item].name} imageURL={items[item].imgURL} 
                    blurb={items[item].blurb} id={item} price={items[item].price}
                    key={item}/>: '')}
            </motion.div>
        </div>
    )
  } else if (test.id === 'health') {
    return (
        <div className='shop'>
            <div className='sidebar'>
                <Link to='/shop/all'>All Products</Link>
                <Link to='/shop/health' id='active'>Health</Link>
                <Link to='/shop/treasures'>Treasures</Link>
                <Link to='/shop/misc'>Misc</Link>
            </div>
            <motion.div className='for-sale'
            initial = {{left: "100%"}}
            animate = {{left: 0}}
            exit = {{right: "100%"}}
            >
                {Object.keys(items).map(item => items[item].type === 'health' ? 
                    <ProductCard name={items[item].name} imageURL={items[item].imgURL} 
                    blurb={items[item].blurb} id={item} price={items[item].price}
                    key={item}/>: '')}
            </motion.div>
        </div>
    )
  } else if (test.id === 'misc') {
    return (
        <div className='shop'>
            <div className='sidebar'>
                <Link to='/shop/all'>All Products</Link>
                <Link to='/shop/health'>Health</Link>
                <Link to='/shop/treasures'>Treasures</Link>
                <Link to='/shop/misc' id='active'>Misc</Link>
            </div>
            <motion.div className='for-sale'
            initial = {{left: "100%"}}
            animate = {{left: 0}}
            exit = {{right: "100%"}}
            >
                {Object.keys(items).map(item => items[item].type === 'misc' ? 
                    <ProductCard name={items[item].name} imageURL={items[item].imgURL} 
                    blurb={items[item].blurb} id={item} price={items[item].price}
                    key={item}/>: '')}
            </motion.div>
        </div>
    )
  }
}

export default Shop