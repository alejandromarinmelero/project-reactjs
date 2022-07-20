import React from 'react'
import './style.scss'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { Shop } from '../../context/CartContext'
import generarOrden from '../../utils/generarOrden'
import guardarOrden from '../../utils/guardarOrden'
import { useState } from 'react'

const PurchaseForm = () => {

  const navigate = useNavigate();

  const toCart = () => {
    navigate('/cart')
  }

  const { cart, total, Swal, emptyCart } = useContext(Shop);

  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [confirmarEmail, setConfirmarEmail] = useState('');

  //Validar Inputs formulario y cambiar estilos
  const validarInputs = (e) => {
    e.preventDefault();
    switch (e.target.name) {
      case 'nombre':
        setNombre(e.target.value)
          if(!nombre.match('^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$')) {
            e.target.classList.add('incorrecto')
            e.target.classList.remove('correcto')      
          } else {
            e.target.classList.remove('incorrecto')
            e.target.classList.add('correcto')      
          } 
        break;
      case 'direccion':
        setDireccion(e.target.value)
          if(direccion !== '') {
            e.target.classList.add('correcto')      
          } else {
            e.target.classList.remove('correcto')
          } 
        break;
      case 'telefono':
        setTelefono(e.target.value)
          if(isNaN(telefono)) {
            e.target.classList.add('incorrecto')      
            e.target.classList.remove('correcto')      
          } else {
            e.target.classList.add('correcto')
            e.target.classList.remove('incorrecto')
          } 
        break;
      case 'email':
        setEmail(e.target.value)
          if(!email.includes('@')) {
            e.target.classList.add('incorrecto')      
            e.target.classList.remove('correcto')      
          } else {
            e.target.classList.add('correcto')
            e.target.classList.remove('incorrecto')
          } 
        break;
      case 'confirmar-email':
        setConfirmarEmail(e.target.value)
          if(confirmarEmail !== email) {
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

  const confirmarOrden = (e) => {
    e.preventDefault()
    if(nombre === '' || direccion === '' || telefono === '' || email === '' || confirmarEmail === ''){
      Swal.fire({
        icon: 'warning',
        title: `Debes rellenar el formulario para finalizar tu compra`,
        confirmButtonText: 'Ok',
      })
    } else if (!nombre.match('^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$')) {
      Swal.fire({
        icon: 'error',
        title: `El nombre no puede contener números`,
        confirmButtonText: 'Ok',
      })
    } else if (isNaN(telefono)) {
      Swal.fire({
        icon: 'error',
        title: `El teléfono solo puede contener números`,
        confirmButtonText: 'Ok',
      })
    } else if (!email.includes('@')) {
      Swal.fire({
        icon: 'error',
        title: `Introduce un email válido`,
        confirmButtonText: 'Ok',
      })
    } else if (confirmarEmail !== email) {
      Swal.fire({
        icon: 'error',
        title: `El email no coincide`,
        confirmButtonText: 'Ok',
      })
    } else {
      const orden = generarOrden(nombre, telefono, email, cart, total);
      console.log(orden);
      guardarOrden(cart, orden);
    }

    setTimeout(() => {
      emptyCart();
      navigate('/tienda');
    }, 2500);

  }

 

  return (
    <div className='purchase-form'>
        <h1>¡Introduce tus datos para finalizar la compra!</h1>
        <form className='form'>
            <input type='text' name='nombre' placeholder='Nombre' onChange={validarInputs}
            ></input>
            <input type='text' name='direccion' placeholder='Dirección' onChange={validarInputs}></input>
            <input type='tel' name='telefono' placeholder='Teléfono' onChange={validarInputs}></input>
            <input type='email' name='email' placeholder='Email' onChange={validarInputs}></input>
            <input type='email' name='confirmar-email' placeholder='Confirmar Email' onChange={validarInputs}></input>
            <div className='form-buttons'>
                <button onClick={toCart} className='atras'>Atras</button>
                <button onClick={confirmarOrden} className='confirm-purchase'>Confirmar compra</button>
            </div>
        </form>
    </div>
  )
}

export default PurchaseForm