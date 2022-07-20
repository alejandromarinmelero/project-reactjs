import React from 'react'
import './style.scss'
import { useNavigate } from 'react-router-dom'


const Home = () => {

  const navigate = useNavigate();

  const toShop = () => {
    navigate('/tienda');
  }

  return (
    <div className='home'>
        <div className='welcome'>
                <h1>¡Bienvenido a B-NylFactory!</h1>
                <button className='enter' onClick={toShop}>ENTRAR</button>
            </div>
    </div>
  )
}

export default Home