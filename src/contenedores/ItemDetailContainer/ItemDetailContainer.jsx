import React, { useEffect } from 'react'
import './style.scss'
import { useState } from 'react'
import ItemDetails from '../../componentes/ItemDetails/ItemDetails';
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config'


const ItemDetailContainer = () => {

  const [productDetails, setProductDetails] = useState({});

  const params = useParams()

  useEffect(() => {
        const getProductDetails = async () => {
            try{
              const docRef = doc(db, "Vinilos", "5VsbwuQqUmQMwk3FGGvZ");
              const docSnap = await getDoc(docRef);
              if (docSnap.exists()) {
                const dataDetails = {id: docSnap.id, ...docSnap.data()};
                setProductDetails(dataDetails)
              } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
              }
            // const response =  await fetch('/mocks/products.json');
            // const dataDetails = await response.json();
            // setProductDetails(dataDetails.find(detail => detail.id === parseInt(params.productId)))
            } catch (error) {
                console.log(`Ocurrio el siguiente error: ${error}`);
            }
        }
    
        getProductDetails();

  }, [params])

  return (
    <div className='item-detail-container'>
        <ItemDetails details={productDetails}/>
    </div>
  )
}

export default ItemDetailContainer