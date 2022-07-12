import React from 'react'
import './style.scss'

const Home = () => {
  return (
    <div className='home'>
        <div className='banner'>
            <div className='overlay'></div>
            <img src='/assets/imagenes/home/banner.jpg' alt='banner'></img>
        </div>
        <div className='app-movil'>
            <h1>- DESCARGATE YA NUESTRA APP -</h1>
            <div className='app-movil-content'>
                <div className='app-movil-titles'>
                    <h1>B-NylPhone</h1>
                    <h2>¡Que se entere todo el mundo!</h2>
                </div>
                <img src='/assets/imagenes/home/app.jpg' alt='banner'></img>
            </div>
        </div>
        <div className='clients'>
            <h1>- ¡NUESTROS CLIENTES SI QUE SABEN! -</h1>
            <img src='/assets/imagenes/home/clientes.jpg' alt='banner'></img>
        </div>
    </div>
  )
}

export default Home