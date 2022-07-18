import React from 'react'
import ButtonToTop from '../ButtonToTop/ButtonToTop'
import './style.scss'


const Home = () => {

  return (
    <div className='home'>
        <div className='banner'>
            <div className='overlay'></div>
            <img src='/assets/imagenes/home/banner.jpg' alt='banner'></img>
        </div>
        <div className='app-movil'>
            <h1>- DESCARGATE NUESTRA APP -</h1>
            <div className='app-movil-content'>
                <div className='app-movil-titles'>
                    <h1>B-NylPhone</h1>
                    <h2>¡Que se entere todo el mundo!</h2>
                </div>
                <img src='/assets/imagenes/home/app.jpg' alt='banner'></img>
            </div>
        </div>
        <ButtonToTop />
    </div>
  )
}

export default Home