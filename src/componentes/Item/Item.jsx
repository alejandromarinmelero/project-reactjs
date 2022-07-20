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
          <p>{product.name}</p>
          <p>{product.price} €</p>
        </div>
        <div className='more-info' onClick={clicItem}>
          <span>+</span>
          <p>INFO</p> 
        </div>
    </div>
  )
}

export default Item