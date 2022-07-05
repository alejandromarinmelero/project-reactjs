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

function App() {

  // Aquí fuera va toda la lógica JavaScript

  return ( // Dentro del return va el código JSX para mostrar en el navegador
  <BrowserRouter>
  <div className='container'>
   <NavBar />
    
   <Routes>
    <Route path='/' element={<ItemListContainer/>}></Route>
    <Route path='/contact' element={<Contact />}></Route>
    <Route path='/category/:category' element={<ItemListContainer />}></Route>
    <Route path='/detail/:productId' element={<ItemDetailContainer />}></Route>
    <Route path='*' element={<NotFound />}></Route>
    </Routes>

    <Footer />
  </div>
  </BrowserRouter>
  );
}

export default App;
