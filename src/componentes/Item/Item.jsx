import React from 'react';
import './style.scss';

const Item = ({ product }) => {

  const clicarVinilo = () => {
    alert(`Has seleccionado ${product.name}`);
  }

  return (
    <div onClick={clicarVinilo} className='card'>
        <img src={product.image} alt=''></img>
        <div className='card-details'>
          <p><b>Album: </b>{product.name}</p>
          <p><b>Artista:</b> {product.artist}</p>
          <p><b>Precio:</b> {product.price}€</p>
          <p><b>Lanzamiento:</b> {product.date}</p>
        </div>
       <p>+ INFO</p> 
    </div>
  )
}

export default Item