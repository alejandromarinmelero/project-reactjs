import React, { createContext, useState } from 'react'
import Swal from "sweetalert2"

export const Shop = createContext(); // Shop siempre se va a pasar como parámetro de useContext()

const CartContext = ({ children }) => {

    // Con esto estamos creando un estado global del cual van a poder hacer uso todos los componenetes de app

    const [cart, setCart] = useState([]);


    //Agrega un producto al carrito siempre que no esté duplicado
    const addItem = (producto, cantidad) => {
      //Comprobamos si está duplicado, y si lo está, no agregamos el producto y el sumamos la nueva cantidad al producto ya existente
      const productoDuplicado = isInCart(producto);
      if(productoDuplicado) {
        productoDuplicado.quantity += cantidad;
        productoDuplicado.precioTotal = productoDuplicado.precioTotal + productoDuplicado.precioTotal;
        setCart([...cart]);
      } else {
        setCart([...cart, {...producto, quantity: cantidad, precioTotal: producto.price * cantidad}]);
      }
    }

    //funcion para encontrar el producto duplicado
    const isInCart = (producto) => {
      return cart.find(producto2 => producto2.id === producto.id)
    }

    //Vaciar carrito
    const emptyCart = () => {
      setCart([])
    }

    //Eliminar un Item del carrito
    const deleteItem = (item) => {
      Swal.fire({
        title: 'Estas segur@?',
        text: `Eliminar\n\n${item.artist} - ${item.name}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar!'
      }).then((result) => {
        if (result.isConfirmed) {
          setCart([...cart].filter(ele => ele.id !== item.id))
            Swal.fire('Se elimino correctamente', '', 'success');
        }
      })
    }

    //Disminuir cantidad en carrito
    const quantityDecrease = (item) => {
      const producto = isInCart(item)
      if(producto) {
        producto.quantity = producto.quantity - 1;
        producto.precioTotal = producto.price * producto.quantity;
      }
      setCart([...cart])
    }

    //Aumentar cantidad en carrito
    const quantityIncrease = (item) => {
      const producto = isInCart(item)
      if(producto) {
        producto.quantity = producto.quantity + 1;
        producto.precioTotal = producto.price * producto.quantity;
      }
      setCart([...cart])
    }

    //Total del carrito
    const total =  cart.reduce((acc, item) => acc + item.precioTotal, 0);

    //

  return (
    <Shop.Provider value={{ addItem, cart, emptyCart, deleteItem, quantityDecrease, quantityIncrease, Swal, isInCart, total}}>
        {children}
    </Shop.Provider>
  )
}

export default CartContext