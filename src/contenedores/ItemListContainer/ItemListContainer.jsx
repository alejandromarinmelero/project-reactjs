import React from 'react';
import ItemCount from '../../componentes/ItemCount';
import './style.scss';

const ItemListContainer = ({greeting}) => {

  const onAdd = (count) => {
    alert(`Se agregaron ${count} vinilos al carrito`);
  }

  return (
    <div className='item-list'>
        <h1>{greeting}</h1>
        <ItemCount handleAdd={onAdd} stock={5}/>
    </div>
  )
}

export default ItemListContainer