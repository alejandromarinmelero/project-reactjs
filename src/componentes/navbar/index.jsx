import React from 'react';
import CartWidget from '../CartWidget';
import './style.scss';
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'
import { NavLink } from "react-router-dom";

function NavBar () {

    //Definir estilos de los enlaces del NavBar cuando esté en la sección que corresponda
    let activeStyle = {
        background: "#0A3033",
        borderRadius: '10px',
        color: '#f3f3f3'
    };

    const navigate = useNavigate();

    const home = (e) => {
        navigate('/')
    }


    return (
            <div className='navbar' id='navbar' name='navbar'>
                <div onClick={home} className='logo'>
                    <img src='/assets/imagenes/logo.png' alt=''/>
                    <h2>B-NylFactory</h2>
                </div>
                <div className='navbar-links'>
                    <NavLink to="/tienda" className='tienda' style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                    >
                    Vinilos
                    </NavLink>
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
                    <NavLink to="/contact" className='contacto' style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                    >
                    Contacto
                    </NavLink>
                    <CartWidget />
                </div>
            </div>
    )
}

export default NavBar;