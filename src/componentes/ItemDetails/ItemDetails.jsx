import React from 'react'
import './style.scss'
import ItemCount from '../ItemCount'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { Shop } from '../../context/CartContext'

const ItemDetails = ({ details }) => {

  const { addItem } = useContext(Shop);

  const [qtyAdded, setQtyAdded] = useState();

  const navigate = useNavigate();

  const cart = () => {
    addItem(details, qtyAdded);
    navigate('/Cart');
  }

  const continueShoping = () => {
    addItem(details, qtyAdded);
    navigate('/');
  }

  const [confirm, setConfirm] = useState('');

  const addToCart = (count) => {
    setQtyAdded(count);
    setConfirm(window.confirm(`Se agregaron ${count} vinilos al carrito:\n\n ${details.artist} - ${details.name}`));
  }

  return (
    <div className='item-details'>
        <img src={details.image} alt=''></img>
        <div className='details'>
          <p><b>Album:</b> {details.name}</p>
          <p><b>Artist:</b> {details.artist}</p>
          <p><b>Precio:</b> {details.price} €</p>
          <p><b>Fecha:</b> {details.date}</p>
          <p><b>Descripción:</b> {details.description}</p>
          {confirm === true ? 
          <div className='buy-buttons'>
            <button className='continue' onClick={continueShoping}>Seguir comprando</button>
            <button className='buy' onClick={cart}>Finalizar Compra</button>
          </div>
          :
          <ItemCount handleAdd={addToCart} stock={details.stock}/>
          }
        </div>
    </div>
  )
}

export default ItemDetails