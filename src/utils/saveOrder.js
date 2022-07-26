import { collection, addDoc, doc, getDoc, writeBatch } from "firebase/firestore";
import { db } from "./firebase/config";
import Swal from 'sweetalert2'

//Función para guardar la orden del pedido en firebase, teniendo en cuenta el stock de los productos.
const saveOrder = (cart, order) => {

  const batch = writeBatch(db)

  const outOfStock = [];

  cart.forEach((vinylInCart) => {
        getDoc(doc(db, 'Vinilos', vinylInCart.id)).then(async (documentSnapshot) => {
            const vinilos = {...documentSnapshot.data(), id: documentSnapshot.id}

            //Update del stock teniendo en cuenta la cantidad
            if(vinilos.stock >= vinylInCart.quantity){
                batch.update(doc(db, 'Vinilos', vinilos.id), {
                    stock: vinilos.stock - vinylInCart.quantity
                })
            } else {
                outOfStock.push(vinilos)
                alert('lo sentimos, no hay stock :(')
            }
        }).catch(err => console.log(`Ocurrió un error: ${err}`))
  });

  if(outOfStock.length === 0) {
    addDoc(collection(db, 'orders'), order).then(({ id }) => {
        batch.commit().then(() => {
            Swal.fire({
                icon: 'success',
                title: `¡Genial!\n\nTu número de pedido es:\n\n${id}`,
                text: `Te enviaremos un correo a ${order.buyer.Email} con los datos de compra\n\n¡Gracias :)!`,
                confirmButtonText: 'Ok',
            })
        })
    }).catch(err => console.log(err))   
} else {
    let mensaje = '';
    for(const vinyl of outOfStock) {
        mensaje += `${vinyl.title}`
        Swal.fire({
            icon: 'error',
            title: `Lo sentimos`,
            text: `Los siguientes productos están fuera de stock\n\n${mensaje}`,
            confirmButtonText: 'Ok',
        })
    }
}

}

export default saveOrder