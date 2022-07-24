import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from '../Cart/Cart'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import NavBar from '../navbar'
import NotFound from '../NotFound/NotFound'
import PurchaseForm from '../PurchaseForm/PurchaseForm'
import ItemDetailContainer from '../../contenedores/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from '../../contenedores/ItemListContainer/ItemListContainer'
import CartContext from '../../context/CartContext'

const MainApp = () => {
  return (
    <CartContext>
    <BrowserRouter>
        <NavBar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/tienda' element={<ItemListContainer />}></Route>
            <Route path='/category/:category' element={<ItemListContainer />}></Route>
            <Route path='/detail/:productId' element={<ItemDetailContainer />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/purchase' element={<PurchaseForm />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </div>
        <Footer />
    </BrowserRouter>
  </CartContext>
  )
}

export default MainApp