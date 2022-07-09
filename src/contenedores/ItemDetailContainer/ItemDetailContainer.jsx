import React, { useEffect } from 'react'
import { useState } from 'react'
import ItemDetails from '../../componentes/ItemDetails/ItemDetails';
import './style.scss'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

  const [productDetails, setProductDetails] = useState({});

  const params = useParams()

  // console.log(params);

  useEffect(() => {
        const getProductDetails = async () => {
            try{
            const response =  await fetch('/mocks/products.json');
            const dataDetails = await response.json();
            setProductDetails(dataDetails.find(detail => detail.id === parseInt(params.productId)))
            } catch (error) {
                console.log(`Ocurrio el siguiente error: ${error}`);
            }
        }
    
        getProductDetails();

  }, [params])

  Object.keys(productDetails).length && console.log(productDetails);

  return (
    <div className='item-detail-container'>
        <ItemDetails details={productDetails}/>
    </div>
  )
}

export default ItemDetailContainer