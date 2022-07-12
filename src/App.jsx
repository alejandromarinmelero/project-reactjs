import './styles/normalize.scss';
import './styles/variables.scss';
import './styles/globales.scss';
import './App.scss';
import ItemListContainer from './contenedores/ItemListContainer/ItemListContainer';
import NavBar from './componentes/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './contenedores/ItemDetailContainer/ItemDetailContainer';
import NotFound from './componentes/NotFound/NotFound';
import Footer from './componentes/Footer/Footer';
import Contact from './componentes/Contact/Contact';
import CartContext from './context/CartContext';
import Cart from './componentes/Cart/Cart';
import Home from './componentes/Home/Home';

function App() {

  // Aquí fuera va toda la lógica JavaScript

  return ( // Dentro del return va el código JSX para mostrar en el navegador
  <CartContext>
    <BrowserRouter>
      <div className='container'>
        <NavBar />
        
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/tienda' element={<ItemListContainer />}></Route>
          <Route path='/category/:category' element={<ItemListContainer />}></Route>
          <Route path='/detail/:productId' element={<ItemDetailContainer />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  </CartContext>
  );
}

export default App;
