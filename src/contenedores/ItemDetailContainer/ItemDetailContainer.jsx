import React, { useEffect } from 'react'
import { useState } from 'react'
import ItemDetails from '../../componentes/ItemDetails/ItemDetails';
import './style.scss'

const ItemDetailContainer = () => {

  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    setTimeout(() => {
        const getProductDetails = async () => {
            try{
            const response =  await fetch('https://fakestoreapi.com/products/1');
            const dataDetails = await response.json();
            setProductDetails(dataDetails)
            } catch (error) {
                console.log(`Ocurrio el siguiente error: ${error}`);
            }
        }
    
        getProductDetails();
    }, 2000)

  }, [])

  console.log(productDetails)


  return (
    <div className='item-detail-container'>
        <h2>ItemDetailContainer Desafio</h2>
        <ItemDetails details={productDetails}/>
    </div>
  )
}

export default ItemDetailContainer