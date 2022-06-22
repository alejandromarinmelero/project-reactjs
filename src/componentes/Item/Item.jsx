import React from 'react';
import './style.scss';

const Item = ({product}) => {
  return (
    <card className='card'>
        <p>{product.id}</p>
    </card>
  )
}

export default Item