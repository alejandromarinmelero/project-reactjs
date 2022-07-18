import React from 'react'
import './style.scss'

const Footer = () => {
 
  return (
    <div className='footer'>
        <div className='contact'>
            <h2>Contáctanos</h2>
            <p>info@bnylfactory.com</p>
        </div>
        <div className='clients'>
            <img src='/assets/imagenes/home/clientes.jpg' alt='banner'></img>
        </div>
        <div className='footer-elements'>
            <p>Lorem ipsum dolor</p>
            <p>Consectetur adipisicing elit</p>
            <p>Sapiente neque </p>
            <p>Pariatur</p>
            <p>Tempora deleniti esse</p>
        </div>
    </div>
  )
}

export default Footer