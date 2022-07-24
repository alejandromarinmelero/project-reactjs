import React, { useEffect } from 'react'
import './style.scss'
import { useState } from 'react'
import ItemDetails from '../../componentes/ItemDetails/ItemDetails';
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../utils/firebase/config'


const ItemDetailContainer = () => {

  const [productDetails, setProductDetails] = useState({});

  const { productId } = useParams()

  //Obtener los detalle de cada producto cuando se monta el componente y cuando haya cambios en los parámetros, en este caso, el ID.
  useEffect(() => {
        const getProductDetails = async () => {
            try{
              const docRef = doc(db, "Vinilos", `${productId}`);
              const docSnap = await getDoc(docRef);
              if (docSnap.exists()) {
                const dataDetails = {id: docSnap.id, ...docSnap.data()};
                setProductDetails(dataDetails)
              } else {
                console.log("No existen detalles del vinilo");
              }
            } catch (error) {
                console.log(`Ocurrio el siguiente error: ${error}`);
            }
        }
    
        getProductDetails();

  }, [productId])

  return (
    <div className='item-detail-container'>
        <ItemDetails details={productDetails}/>
    </div>
  )
}

export default ItemDetailContainer