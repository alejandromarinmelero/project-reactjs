import React from 'react';
import './style.scss';
import cart from '../../assets/iconos/cart.png';

const CartWidget = ({title}) => {
  return (
    <div className='cart' title={title}>
        <p>0</p>
        <img src={cart} alt=''/>
    </div>
  )
}

export default CartWidget
