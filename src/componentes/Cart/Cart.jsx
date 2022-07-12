import React from 'react'
import './style.scss'
import { useContext } from 'react'
import { Shop } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const { cart, emptyCart, deleteItem, quantityDecrease, quantityIncrease } = useContext(Shop);

  const navigate = useNavigate()

  const continueShoping = () => {
    navigate('/');
  }

  const priceByQuantity = (item) => {
    return item.price * item.quantity;
  }

  const totalPrice = () => {
    const total = cart.reduce((acc, item) => acc + item.precioTotal, 0);
    return total.toFixed(2);
  }

  
  return (
    <div className='cart'>
      {cart.length > 0 ?
      <div className='cart-components'>
        <h2>Tu carrito</h2>
        <table className='table-cart-products'>
          <thead>
          <tr>
            <th className='product-row'>Producto</th>
            <th className='price-row'>Cantidad</th>
            <th className='quantity-row'>Precio</th>
            <th className='quantity-row'>Editar</th>
          </tr>
          </thead>
          <tbody>
          {cart.map(item => {
            return <tr className='table-elements' key={item.id}>
              <td className='element-name'><img alt={item.name} title={item.name} src={item.image}/> {item.artist} - {item.name}</td>
              <td className='element-quantity'>
                <button className='decrease-quantity' disabled={item.quantity === 1 && true}onClick={() => quantityDecrease(item)}>-</button>
                {item.quantity}
                <button disabled={item.quantity > item.stock && true} onClick={() => quantityIncrease(item)} className='increase-quantity'>+</button>
              </td>
              <td className='element-price'>{priceByQuantity(item).toFixed(2)} €</td>
              <td className='element-edit'><img alt='delete' className='remove-item' src="https://img.icons8.com/material-two-tone/24/000000/filled-trash.png" onClick ={() => deleteItem(item)}  /></td>
            </tr>
          })}
          </tbody>
        </table>
        <div className='table-results'>
          <p>Total</p>
          <p>{totalPrice()} €</p>
        </div>
        <div className='cart-buttons'>
          <button className='empty-cart' onClick={emptyCart}>Vaciar carrito</button>
          <button className='continue-shoping' onClick={continueShoping}>Seguir comprando</button>
          <button className='confirm-purchase'>Confirmar Compra</button>
        </div>
      </div>
      :
      <div className='cart-components'>
        <h2>El carrito está vacío</h2>
        <div className='table-results'>
          <p>Total</p>
          <p>{totalPrice()} €</p>
        </div>
        <button className='continue-shoping' onClick={continueShoping}>Seguir comprando</button>
      </div>
      }
    </div>
  )
}

export default Cart