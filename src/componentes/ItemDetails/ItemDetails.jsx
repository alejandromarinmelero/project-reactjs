import React from 'react'
import './style.scss'
import ItemCount from '../ItemCount'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { Shop } from '../../context/CartContext'



const ItemDetails = ({ details }) => {

  const { isInCart, addItem, Swal } = useContext(Shop);
  
  const navigate = useNavigate();

  const productoDuplicado = isInCart(details)

  const ToCart = () => {
    navigate('/Cart');
  }

  const continueShoping = () => {
    navigate('/tienda');
  }

  const [confirm, setConfirm] = useState('');

  const addToCart = (count) => {
      if(productoDuplicado){
        count > (details.stock - productoDuplicado.quantity) ?
        Swal.fire({
          icon: 'error',
          title: 'No hay stock, lo sentimos :(',
          confirmButtonText: 'Ok',
        })
        :
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
      } else {
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
          {productoDuplicado ? 
            productoDuplicado.quantity >= details.stock ?
              <p><b>Stock:</b><b className='no-stock'> No hay stock</b></p>
            :
              <p><b>Stock:</b> {details.stock}</p>
          :
          <p><b>Stock:</b> {details.stock}</p>
          }
          {confirm === true ?
          <div className='buy-buttons'>
            <button className='continue' onClick={continueShoping}>Seguir comprando</button>
            <button className='buy' onClick={ToCart}>Ir al carrito</button>
          </div>
          : productoDuplicado ?
            productoDuplicado.quantity >= details.stock ?
              <div className='buy-buttons'>
                <button className='continue' onClick={continueShoping}>Seguir comprando</button>
                <button className='buy' onClick={ToCart}>Ir al carrito</button>
              </div>
            :
            <ItemCount handleAdd={addToCart} stock={details.stock}/>
          :
          <ItemCount handleAdd={addToCart} stock={details.stock}/>
          }
        </div>
    </div>
  )
}

export default ItemDetails