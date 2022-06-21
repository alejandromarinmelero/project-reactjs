import React, { useState } from 'react'
import './style.scss';

const ItemCount = ({ handleAdd, stock }) => {

    const [count, setCount] = useState(1);

    const increase = () => {
        setCount(count + 1);
    }

    const decrease = () => {
        setCount(count - 1);
    }

  return (
    <div className='item-count'>
        <h2>Contador de vinilos</h2>
        <div className='item-count__components'>
            <button onClick={decrease} disabled={count === 1 ? true : null} className='item-count__decrease'>-</button>
            <p>{count}</p>
            <button onClick={increase} className='item-count__increase' disabled={count >= stock && true}>+</button>
        </div>
        <button className='add-to-cart__button' onClick={() => handleAdd(count)}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount