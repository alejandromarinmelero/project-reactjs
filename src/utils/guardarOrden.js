import { collection, addDoc, doc, getDoc, writeBatch } from "firebase/firestore";
import { db } from "./firebase/config";
import Swal from 'sweetalert2'

//Función para guardar la orden del pedido en firebase, teniendo en cuenta el stock de los productos.
const saveOrder = (cart, order) => {

  const batch = writeBatch(db)

  const outOfStock = [];

  cart.forEach(async (vinylInCart) => {
    try {
        const getVinyls = await getDoc(doc(db, 'Vinilos', vinylInCart.id))
        const vinilos = {...getVinyls.data(), id: getVinyls.id}

        if(vinilos.stock >= vinylInCart.quantity){
            batch.update(doc(db, 'Vinilos', vinilos.id), {
                stock: vinilos.stock - vinylInCart.quantity
            })
        } else {
            outOfStock.push(vinilos)
            alert('lo sentimos, no hay stock :(')
        }

        if(outOfStock.length === 0) {
            const addOrder = await addDoc(collection(db, 'orders'), order);
            await batch.commit()
            Swal.fire({
                icon: 'success',
                title: `¡Genial!\n\nTu número de pedido es:\n\n${addOrder.id}`,
                text: `Te enviaremos un correo a ${order.buyer.Email} con los datos de compra\n\n¡Gracias :)!`,
                confirmButtonText: 'Ok',
            })
        } 
    } catch (error) {
        console.log(error);
    }
    
  });

}

export default saveOrder