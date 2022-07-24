import React from 'react';
import ButtonToTop from '../ButtonToTop/ButtonToTop';
import Item from '../Item/Item';
import './style.scss';

const ItemList = ({vinyls}) => {

  return (
    <div className='item-list'>
        {/* Mapeo de vinilos para obtener un item por cada vinilo */}
        {vinyls.map(vinyl => {
          return <Item product={vinyl} key={vinyl.id}></Item> 
        })}
        <ButtonToTop />
    </div>
  )
}

export default ItemList