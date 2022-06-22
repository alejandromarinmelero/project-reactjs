import React from 'react';
import Item from '../Item/Item';
import './style.scss';


const ItemList = ({products}) => {
  return (
    <div className='item-list'>
        {products.map(product => {
            return <Item product={product} key={product.id}/> // map siempre va a requerir de una key que podrá ser algun valor único de los objetos de la API o incluso el indice del propio map, en este caso: {products.map(product, index)}
        })}
    </div>
  )
}

export default ItemList