import React, { useEffect, useState } from 'react';
import ItemList from '../../componentes/ItemList/ItemList';
import './style.scss';
import { useParams } from 'react-router-dom'
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config';
import { Circles } from  'react-loader-spinner'


const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    const getproducts = async () => {
      try {
        const q = query(collection(db, "Vinilos"));
        const querySnapshot = await getDocs(q);
        const vinilos = [];
        querySnapshot.forEach((doc) => {
          vinilos.push({id: doc.id, ...doc.data()})
        });
        setProducts(vinilos);
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
  },[category, products])


  return (
    <div className='item-list-container'>
      {filteredProducts.length ? 
      <ItemList products={filteredProducts}/>
      :
      <Circles 
        height="100"
        width="100"
        color='#4C434A'
        ariaLabel='loading'/>}
    </div>
  )
}

export default ItemListContainer