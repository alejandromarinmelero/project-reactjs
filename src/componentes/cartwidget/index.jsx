import React from 'react';
import { useContext } from 'react';
import { Shop } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom'
import './style.scss';

const CartWidget = () => {

  const navigate = useNavigate()

  const toCart = () => {
    navigate('/cart');
  }

  const { cart } = useContext(Shop);

  return (
    <div className='cart-widget' onClick={toCart}>
        {cart.length ? <span>{cart.length}</span> : '0'}
        <img src='/assets/iconos/cart.png' alt=''/>
    </div>
  )
}

export default CartWidget
