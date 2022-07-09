import React, { createContext, useState } from 'react'

export const Shop = createContext(); // Shop siempre se va a pasar como parámetro de useContext()

const CartContext = ({ children }) => {

    // Con esto estamos creando un estado global del cual van a poder hacer uso todos los componenetes de app

    const [estadoA, setEstadoA] = useState('Estado por defecto');

    const [cart, setCart] = useState([]);

    //Agrega un producto al carrito siempre que no esté duplicado
    const addItem = (producto, cantidad) => {
      //Comprobamos si está duplicado, y si lo está, no agregamos el producto y el sumamos la nueva cantidad al producto ya existente
      const productoDuplicado = isInCart(producto);
      if(productoDuplicado) {
        productoDuplicado.quantity += cantidad;
        setCart([...cart]);
      } else {
        setCart([...cart, {...producto, quantity: cantidad}]);
      }
    }

    const emptyCart = () => {
      if(cart.length > 0 && window.confirm('¿Está seguro?')) {       
          setCart([]);
      }
    }

    //funcion para encontrar el producto duplicado
    const isInCart = (producto) => {
      return cart.find(producto2 => producto2.id === producto.id)
    }


  return (
    <Shop.Provider value={{estadoA, setEstadoA, addItem, cart, setCart, emptyCart}}>
        {children}
    </Shop.Provider>
  )
}

export default CartContext