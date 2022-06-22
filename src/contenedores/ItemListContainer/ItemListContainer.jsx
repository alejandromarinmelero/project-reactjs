import React, { useEffect, useState } from 'react';
import ItemList from '../../componentes/ItemList/ItemList';
import './style.scss';

const ItemListContainer = () => {

  const [products, setProducts] = useState(null);

  useEffect(() => {
    const getproducts = async () => {
      try {
        console.log('Obteniendo productos...')
        const response = await fetch('/mocks/products.json');
        const json = await response.json();
        setProducts(json);
      } catch (error) {
        console.log(`Se produjo un error: ${error}`);
      }
    }

    getproducts();
  }, []) 

  // console.log(products);

  return (
    <div className='item-list-container'>
      {products ? <ItemList products={products}/> : null }
    </div>
  )
}

export default ItemListContainer