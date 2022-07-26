import React, { createContext, useState } from 'react'

export const Shop = createContext(); 

const CartContext = ({ children }) => {

    const [cart, setCart] = useState([]);

    //Agregar un producto al carrito siempre que no esté duplicado, y si lo está, no agregamos el producto y le sumamos la nueva cantidad al producto ya existente
    const addItem = (producto, cantidad) => {
      const productoDuplicado = isInCart(producto);
      if(productoDuplicado) {
        productoDuplicado.quantity += cantidad;
        productoDuplicado.precioTotal = productoDuplicado.precioTotal + productoDuplicado.precioTotal;
        setCart([...cart]);
      } else {
        setCart([...cart, {...producto, quantity: cantidad, precioTotal: producto.price * cantidad}]);
      }
    }

    //Encontrar el producto duplicado
    const isInCart = (producto) => {
      return cart.find(producto2 => producto2.id === producto.id)
    }

    //Vaciar carrito
    const emptyCart = () => {
      setCart([]);
      localStorage.clear()
    }

    //Eliminar un Item del carrito
    const deleteItem = (item) => {
      setCart([...cart].filter(ele => ele.id !== item.id))
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


  return (
    <Shop.Provider value={{ addItem, cart, emptyCart, deleteItem, quantityDecrease, quantityIncrease, isInCart, total }}>
        {children}
    </Shop.Provider>
  )
}

export default CartContext