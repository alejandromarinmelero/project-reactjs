import React from 'react';
import CartWidget from '../cartwidget';
import './style.scss';

function NavBar () {
    return (
            <div className='navbar'>
                <ul className='navbar-links'>
                    <li>Tienda</li>
                    <li>Galería</li>
                    <li>Contacto</li>
                </ul>
                <div className='logo'>
                    <img src='/project-reactjs/assets/imagenes/logo.png' alt=''/>
                    <h2>B-NylFactory</h2>
                </div>
                <ul className='navbar-secundary-links'>
                    <li>Acceder</li>
                    <li>Registrarse</li>
                    <CartWidget title={'cart'} itemCart={0}/>
                </ul>
            </div>
    )
}

export default NavBar;