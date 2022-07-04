import React from 'react';
import CartWidget from '../cartwidget';
import './style.scss';
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'

function NavBar () {

    const navigate = useNavigate();

    const home = () => {
        navigate('/project-reactjs');
    }

    const contact = () => {
        navigate('/project-reactjs/contact');
    }

    return (
            <div className='navbar'>
                <div className='navbar-links'>
                    <p onClick={home}>Tienda</p>
                    <div className='dropdown'>
                    <button className='dropbtn'>Géneros</button>
                    <ul className='dropdown-menu'>
                        <Link to='/project-reactjs/category/soul'><li>Soul</li></Link>
                        <Link to='/project-reactjs/category/rap'><li>Rap</li></Link>
                        <Link to='/project-reactjs/category/funk'><li>Funk</li></Link>
                        <Link to='/project-reactjs/category/rock'><li>Rock</li></Link>
                        <Link to='/project-reactjs/category/pop'><li>Pop</li></Link>
                    </ul>
                    </div>
                    <p onClick={contact}>Contacto</p>
                </div>
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