import React from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom'

const Item = ({ product }) => {

  const navigate = useNavigate()

  const clicItem = () => {
    navigate(`/detail/${product.id}`)
  }

  return (
    <div onClick={clicItem} className='card'>
        <img src={product.image} alt=''></img>
        <div className='card-details'>
          <p><b>Album:</b> {product.name}</p>
          <p><b>Artista:</b> {product.artist}</p>
          <p><b>Precio:</b> {product.price}€</p>
        </div>
        <p className='more-info'>+ INFO</p> 
    </div>
  )
}

export default Item