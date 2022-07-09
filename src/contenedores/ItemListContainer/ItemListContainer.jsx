import React, { useEffect, useState } from 'react';
import ItemList from '../../componentes/ItemList/ItemList';
import './style.scss';
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([]);

  const { category } = useParams();

  console.log(category)

  useEffect(() => {
    const getproducts = async () => {
      try {
        const response = await fetch('/mocks/products.json');
        const json = await response.json();
        setProducts(json);
      } catch (error) {
        console.log(`Se produjo un error: ${error}`);
      }
    }

    getproducts();
  }, []) 

  useEffect(() => {
    if(category) {
      const productosFiltrados = products.filter(product => product.category === category)
      setfilteredProducts(productosFiltrados)
    } else {
      setfilteredProducts(products)
    }
  }, [category, products])

  return (
    <div className='item-list-container'>
      <ItemList products={filteredProducts}/>
      </div>
  )
}

export default ItemListContainer