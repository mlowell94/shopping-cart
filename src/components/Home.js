import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div className='home'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <Link to ='/shop/all'>ENTER</Link>
    </motion.div>
  )
}

export default Home