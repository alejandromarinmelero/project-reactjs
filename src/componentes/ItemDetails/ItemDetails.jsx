import React from 'react'
import './style.scss'
import ItemCount from '../ItemCount'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { Shop } from '../../context/CartContext'


const ItemDetails = ({ details }) => {

  const { addItem, Swal } = useContext(Shop);

  const navigate = useNavigate();

  const cart = () => {
    navigate('/Cart');
  }

  const continueShoping = () => {
    navigate('/tienda');
  }

  const [confirm, setConfirm] = useState('');

  const addToCart = (count) => {
    Swal.fire({
      icon: 'question',
      title: `${details.artist} - ${details.name} x ${count}\n\n¿Añadir al carrito?`,
      showDenyButton: true,
      confirmButtonText: 'Añadir',
      denyButtonText: `No añadir`,
    }).then((result) => {
        if (result.isConfirmed) {
          setConfirm(true);
          addItem(details, count);
          Swal.fire('Se añadió al carrito', '', 'success');
        }
      }
    )
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
          <p><b>Stock:</b> {details.stock}</p>
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