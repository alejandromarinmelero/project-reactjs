import React from 'react'
import './style.scss'
import { useContext } from 'react'
import { Shop } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


const Cart = () => {

  const { cart, emptyCart, deleteItem, quantityDecrease, quantityIncrease, total} = useContext(Shop);

  const navigate = useNavigate()

  const continueShoping = () => {
    navigate('/tienda');
    window.scroll(0,0)
  }

  const priceByQuantity = (item) => {
    return item.price * item.quantity;
  }

  const confirmarCompra = () => {
      navigate('/purchase');
      window.scroll(0,0)
  }

  
  return (
    <>
      {cart.length > 0 ?
        <div className='cart-components'>
          <h2>Tu carrito</h2>
          <table className='table-cart-products'>
            <thead>
            <tr>
              <th className='product-row'>Producto</th>
              <th className='price-row'>Cantidad</th>
              <th className='quantity-row'>Precio</th>
              <th className='quantity-row'>Eliminar</th>
            </tr>
            </thead>
            <tbody>
            {cart.map(item => {
              return <tr className='table-elements' key={item.id}>
                <td className='element-name'><img alt={item.name} title={item.name} src={item.image}/> {item.artist} - {item.name}</td>
                <td className='element-quantity'>
                  <button className='decrease-quantity' disabled={item.quantity === 1 && true}onClick={() => quantityDecrease(item)}>-</button>
                  {item.quantity}
                  <button disabled={item.quantity >= item.stock && true} onClick={() => quantityIncrease(item)} className='increase-quantity'>+</button>
                </td>
                <td className='element-price'>{priceByQuantity(item).toFixed(2)} €</td>
                <td className='element-edit'><img id="image" data-size="512" className='remove-item' src="https://cdn.icon-icons.com/icons2/1097/PNG/512/1485477104-basket_78591.png" title="Icono Cesta de la basura, eliminar  Gratis" alt="Icono cesta de la basura, eliminar" onClick ={() => deleteItem(item)}></img></td>
              </tr>
            })}
            </tbody>
          </table>
          <div className='table-results'>
            <p>Total</p>
            <p>{total.toFixed(2)} €</p>
          </div>
          <div className='cart-buttons'>
            <button className='empty-cart' onClick={() => {
              Swal.fire({
                icon: 'warning',
                title: `Vaciar carrito\n\n¿Está seguro?`,
                showDenyButton: true,
                confirmButtonText: 'Vaciar',
                denyButtonText: `Cancelar`,
              }).then((result) => {
                  if (result.isConfirmed) {
                    emptyCart()
                    Swal.fire('El carrito se vació', '', 'success');
                  }
                }
              )
            }}>Vaciar carrito</button>
            <button className='continue-shoping' onClick={continueShoping}>Seguir comprando</button>
            <button className='confirm-purchase' onClick={() => confirmarCompra(cart)}>Confirmar Compra</button>
          </div>
        </div>
        :
        <div className='cart-components'>
          <h2>El carrito está vacío</h2>
          <div className='table-results'>
            <p>Total</p>
            <p>{total.toFixed(2)} €</p>
          </div>
          <button className='continue-shoping' onClick={continueShoping}>Seguir comprando</button>
        </div>
      }
    </>
  )
}

export default Cart