import React from 'react'
import './style.scss'
import ItemCount from '../ItemCount'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ItemDetails = ({ details }) => {

  const navigate = useNavigate();

  const cart = () => {
    navigate('/project-reactjs/cart');
  }

  const [confirm, setConfirm] = useState('');

  const addToCart = (count) => {
    setConfirm(window.confirm(`Se agregaron ${count} vinilos al carrito:\n\n ${details.artist} - ${details.name}`));
  }

  return (
    <div className='item-details'>
        <img src={details.image} alt=''></img>
        <div className='details'>
          <p><b>Album:</b> {details.name}</p>
          <p><b>Artist:</b> {details.artist}</p>
          <p><b>Precio:</b> {details.price}</p>
          <p><b>Fecha:</b> {details.date}</p>
          <p><b>Descripción:</b> {details.description}</p>
          {confirm === true ? 
          <button onClick={cart} className='buy'>Finalizar Compra</button> :
          <ItemCount handleAdd={addToCart} stock={details.stock}/>
          }
        </div>
    </div>
  )
}

export default ItemDetails