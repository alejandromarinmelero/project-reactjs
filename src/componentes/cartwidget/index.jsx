import React from 'react';
import './style.scss';
import cart from '../../assets/iconos/cart.png';

const CartWidget = ({title}) => {
  return (
    <div className='cart' title={title}>
        <span>0</span>
        <img src={cart} alt=''/>
    </div>
  )
}

export default CartWidget
