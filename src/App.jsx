import './styles/normalize.scss';
import './styles/variables.scss';
import './styles/globales.scss';
import './App.scss';
import ItemListContainer from './contenedores/ItemListContainer/ItemListContainer';
import NavBar from './componentes/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './contenedores/ItemDetailContainer/ItemDetailContainer';
import NotFound from './componentes/NotFound/NotFound';

function App() {

  // Aquí fuera va toda la lógica JavaScript

  return ( // Dentro del return va el código JSX para mostrar en el navegador
  <BrowserRouter>
  <div className='container'>
   <NavBar />
    
   <Routes>
    <Route path='/project-reactjs' element={<ItemListContainer/>}></Route>
    <Route path='/project-reactjs/category/:categoryId' element={<ItemListContainer />}></Route>
    <Route path='/project-reactjs/detail/:productId' element={<ItemDetailContainer />}></Route>
    <Route path='*' element={<NotFound />}></Route>
    </Routes>
  </div>
  </BrowserRouter>
  );
}

export default App;
