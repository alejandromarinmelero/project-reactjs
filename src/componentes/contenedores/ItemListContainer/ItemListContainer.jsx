import React from 'react';
import './style.scss';

const ItemListContainer = ({greeting}) => {
  return (
    <div className='item-list'>
        <h1>{greeting}</h1>
    </div>
  )
}

export default ItemListContainer