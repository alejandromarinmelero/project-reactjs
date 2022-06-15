import React from 'react';
import CartWidget from '../cartwidget';
import './style.scss';
import logo from '../../assets/imagenes/logo.png';


function NavBar () {
    return (
            <div className='navbar'>
                <ul className='links'>
                    <li>Tienda</li>
                    <li>Galería</li>
                    <li>Contacto</li>
                </ul>
                <div className='logo'>
                    <img src={logo} alt=''/>
                    <h2>B-NylFactory</h2>
                </div>
                <ul className='login-links'>
                    <li>Acceder</li>
                    <li>Registrarse</li>
                    <CartWidget title={'cart'}/>
                </ul>
            </div>
    )
}

export default NavBar;