import React from 'react';
import './navbar.css';
import logo from './icono.png'

function NavBar () {
    return (
            <div className='navbar'>
                <ul className='links'>
                    <li>Tienda</li>
                    <li>Galería</li>
                    <li>Contacto</li>
                </ul>
                <div className='logo'>
                    <img src={logo}/>
                    <h2>B-NylFactory</h2>
                </div>
                <ul className='login-links'>
                    <li>Acceder</li>
                    <li>Registrarse</li>
                </ul>
            </div>
    )
}

export default NavBar;