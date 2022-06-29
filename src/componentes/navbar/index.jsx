import React from 'react';
import CartWidget from '../cartwidget';
import './style.scss';
import { useNavigate } from 'react-router-dom'

function NavBar () {

    const navigate = useNavigate();

    const home = () => {
        navigate('/project-reactjs');
    }

    return (
            <div className='navbar'>
                <ul className='navbar-links'>
                    <li>Tienda</li>
                    <li>Galería</li>
                    <li>Contacto</li>
                </ul>
                <div onClick={home} className='logo'>
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