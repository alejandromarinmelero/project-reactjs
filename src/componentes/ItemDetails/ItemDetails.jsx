import React from 'react'
import './style.scss'
import ItemCount from '../ItemCount'

const ItemDetails = ({ details }) => {

  const addToCart = (count) => {
    alert(`Se agregaron ${count} ${details.title} al carrito`);
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
          <ItemCount handleAdd={addToCart}/>
        </div>
    </div>
  )
}

export default ItemDetails