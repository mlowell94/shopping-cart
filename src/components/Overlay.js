import React from 'react'

const Overlay = (props) => {
  return (
    <div className='overlay' id={props.active ? 'active' : ''}></div>
    )
}

export default Overlay