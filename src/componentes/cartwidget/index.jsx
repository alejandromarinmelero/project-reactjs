import React from 'react';
import './style.scss';

const CartWidget = ({ title, itemCart}) => {

  return (
    <div className='cart' title={title}>
        <span>{itemCart}</span>
        <img src='/project-reactjs/assets/iconos/cart.png' alt=''/>
    </div>
  )
}

export default CartWidget
