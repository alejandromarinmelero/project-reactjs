import React, { useEffect } from 'react'
import { useState } from 'react'
import ItemDetails from '../../componentes/ItemDetails/ItemDetails';
import './style.scss'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

  const [productDetails, setProductDetails] = useState([]);

  const params = useParams()

  console.log(params);

  useEffect(() => {
        const getProductDetails = async () => {
            try{
            const response =  await fetch('/project-reactjs/mocks/products.json');
            const dataDetails = await response.json();
            setProductDetails(dataDetails)
            } catch (error) {
                console.log(`Ocurrio el siguiente error: ${error}`);
            }
        }
    
        getProductDetails();

  }, [])

  console.log(productDetails);

  return (
    <div className='item-detail-container'>
        <h2>ItemDetailContainer Desafio</h2>
        <ItemDetails details={productDetails}/>
    </div>
  )
}

export default ItemDetailContainer