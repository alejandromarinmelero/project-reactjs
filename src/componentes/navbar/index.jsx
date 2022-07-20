import React from 'react';
import CartWidget from '../CartWidget';
import './style.scss';
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'


function NavBar () {
    
    const navigate = useNavigate();

    const home = () => {
        navigate('/');
    }

    const shop = (e) => {
        navigate('/tienda');
    }

    const contact = () => {
        navigate('/contact');
    }

    return (
            <div className='navbar' id='navbar' name='navbar'>
                <div onClick={home} className='logo'>
                    <img src='/assets/imagenes/logo.png' alt=''/>
                    <h2>B-NylFactory</h2>
                </div>
                <div className='navbar-links'>
                    <p onClick={shop}>Tienda</p>
                    <div className='dropdown'>
                        <li className='dropbtn'>Géneros
                            <ul className='dropdown-menu'>
                                <Link to='/category/soul'><li>Soul</li></Link>
                                <Link to='/category/rap'><li>Rap</li></Link>
                                <Link to='/category/funk'><li>Funk</li></Link>
                                <Link to='/category/rock'><li>Rock</li></Link>
                                <Link to='/category/pop'><li>Pop</li></Link>
                            </ul>
                        </li>
                    </div>
                    <p onClick={contact}>Contacto</p>
                    <CartWidget />
                </div>
            </div>
    )
}

export default NavBar;