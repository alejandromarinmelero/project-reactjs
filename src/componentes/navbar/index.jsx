import React from 'react';
import CartWidget from '../CartWidget';
import './style.scss';
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'
import { useRef } from 'react';


function NavBar () {
    
    const tienda = useRef('');
    const contacto = useRef('');

    const navigate = useNavigate();

    const home = (e) => {
        navigate('/')
        contacto.current.classList.remove('selected')
        tienda.current.classList.remove('selected')
    }

    const selected = (e) => {
        switch (e.target.attributes.name.value) {
            case 'tienda':
                navigate('/tienda');
                e.target.classList.add('selected')
                contacto.current.classList.remove('selected')
                break;
            case 'contacto':
                navigate('/contact');
                e.target.classList.add('selected')
                tienda.current.classList.remove('selected')
                break;
            default:
                break;
        }
    }

    return (
            <div className='navbar' id='navbar' name='navbar'>
                <div onClick={home} className='logo'>
                    <img src='/assets/imagenes/logo.png' alt=''/>
                    <h2>B-NylFactory</h2>
                </div>
                <div className='navbar-links'>
                    <p name='tienda' ref={tienda} onClick={selected}>Tienda</p>
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
                    <p name='contacto' ref={contacto} onClick={selected}>Contacto</p>
                    <CartWidget />
                </div>
            </div>
    )
}

export default NavBar;