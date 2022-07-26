import React from 'react'
import './style.scss'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { Shop } from '../../context/CartContext'
import generateOrder from '../../utils/generateOrder'
import saveOrder from '../../utils//saveOrder'
import { useState } from 'react'
import ItemListContainer from '../../contenedores/ItemListContainer/ItemListContainer'
import Swal from "sweetalert2"

const PurchaseForm = () => {

  const navigate = useNavigate();

  const toCart = () => {
    navigate('/cart')
    window.scroll(0,0)
  }

  const { cart, total, emptyCart } = useContext(Shop);

  const [name, setName] = useState('');
  const [direction, setDirecction] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');

  //Validar Inputs del formulario al rellenarlos y cambiar estilos
  const validateInputs = (e) => {
    e.preventDefault();
    switch (e.target.name) {
      case 'nombre':
        setName(e.target.value)
          if(!name.match('^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$')) {
            e.target.classList.add('incorrecto')
            e.target.classList.remove('correcto')      
          } else {
            e.target.classList.remove('incorrecto')
            e.target.classList.add('correcto')      
          } 
        break;
      case 'direccion':
        setDirecction(e.target.value)
          if(direction !== '') {
            e.target.classList.add('correcto')      
          } else {
            e.target.classList.remove('correcto')
          } 
        break;
      case 'telefono':
        setPhone(e.target.value)
          if(isNaN(phone)) {
            e.target.classList.add('incorrecto')      
            e.target.classList.remove('correcto')      
          } else {
            e.target.classList.add('correcto')
            e.target.classList.remove('incorrecto')
          } 
        break;
      case 'email':
        setEmail(e.target.value)
          if(!email.match(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)) {
            e.target.classList.add('incorrecto')      
            e.target.classList.remove('correcto')      
          } else {
            e.target.classList.add('correcto')
            e.target.classList.remove('incorrecto')
          } 
        break;
      case 'confirmar-email':
        setConfirmEmail(e.target.value)
          if(confirmEmail !== email) {
            e.target.classList.add('incorrecto')      
            e.target.classList.remove('correcto')      
          } else {
            e.target.classList.add('correcto')
            e.target.classList.remove('incorrecto')
          } 
        break;
    
      default:
        break;
    }
  }

  //Validar inputs al enviar el formulario
  const submitForm = (e) => {
    e.preventDefault()
    if(name === '' || direction === '' || phone === '' || email === '' || confirmEmail === ''){
      Swal.fire({
        icon: 'warning',
        title: `Debes rellenar el formulario para finalizar tu compra`,
        confirmButtonText: 'Ok',
      })
    } else if (!name.match('^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$') || name.length <= 2) {
      Swal.fire({
        icon: 'error',
        title: `El nombre no puede contener números y debe tener más de dos caracteres`,
        confirmButtonText: 'Ok',
      })
    } else if (isNaN(phone)) {
      Swal.fire({
        icon: 'error',
        title: `El teléfono solo puede contener números`,
        confirmButtonText: 'Ok',
      })
    } else if (!email.match(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)) {
      Swal.fire({
        icon: 'error',
        title: `Introduce un email válido`,
        confirmButtonText: 'Ok',
      })
    } else if (confirmEmail !== email) {
      Swal.fire({
        icon: 'error',
        title: `El email no coincide`,
        confirmButtonText: 'Ok',
      })
    } else {
      const order = generateOrder(name, phone, email, cart, total);
      saveOrder(cart, order);
      setTimeout(() => {
        navigate('/tienda');
        emptyCart();
      }, 3500);
      e.target.childNodes[5].childNodes[1].setAttribute('disabled', true)
    }

  }

  return (
    <>
    {cart.length === 0 ?
    <ItemListContainer />
    :
    <div className='purchase-form'>
        <h1>¡Introduce tus datos para finalizar la compra!</h1>
        <form className='form' onSubmit={submitForm} >
            <input type='text' name='nombre' placeholder='Nombre' onChange={validateInputs}
            ></input>
            <input type='text' name='direccion' placeholder='Dirección' onChange={validateInputs}></input>
            <input type='tel' name='telefono' placeholder='Teléfono' onChange={validateInputs}></input>
            <input type='email' name='email' placeholder='Email' onChange={validateInputs}></input>
            <input type='email' name='confirmar-email' placeholder='Confirmar Email' onChange={validateInputs}></input>
            <div className='form-buttons'>
                <button onClick={toCart} className='atras'>Atras</button>
                <button type='submit' className='confirm-purchase'>Confirmar compra</button>
            </div>
        </form>
    </div>
    }
    </>
  )
}

export default PurchaseForm