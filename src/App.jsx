import './styles/normalize.scss';
import './styles/variables.scss';
import './styles/globales.scss';
import './App.scss';
import ItemListContainer from './contenedores/ItemListContainer/ItemListContainer';
import NavBar from './componentes/navbar';

function App() {

  // Aquí fuera va toda la lógica JavaScript

  return ( // Dentro del return va el código JSX para mostrar en el navegador
  <div className='container'>
      <NavBar />
      <ItemListContainer greeting={'En esta sección se mostrarán los vinilos en venta'}/>
  </div>
  );
}

export default App;
