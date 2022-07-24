import React, { useEffect, useState } from 'react';
import ItemList from '../../componentes/ItemList/ItemList';
import './style.scss';
import { useParams } from 'react-router-dom'
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../../utils/firebase/config';
import { Circles } from  'react-loader-spinner'

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([]);

  //Acceso a los parametros definidos en las rutas de App.jsx mediante useParams
  const { category } = useParams();

  useEffect(() => {
    const getproducts = async () => {
      try {
        //Obtener los vinilos de firestore de forma asíncrona
        const q = query(collection(db, "Vinilos"));
        const querySnapshot = await getDocs(q);
        const vinyls = [];
        querySnapshot.forEach((doc) => {
          vinyls.push({id: doc.id, ...doc.data()})
        });
        setProducts(vinyls);
      } catch (error) {
        console.log(`Se produjo un error: ${error}`);
      }
    }

    getproducts();
  }, []) 

  useEffect(() => {
    //Filtro para obtener los vinilos segun su categoría
    if(category) {
      const productosFiltrados = products.filter(product => product.category === category)
      setfilteredProducts(productosFiltrados)
    } else {
      setfilteredProducts(products)
    }
  },[category, products])


  return (
    <div className='item-list-container'>
      {category === 'soul' ? 
            <div className='bio'>
              <h1>Soul</h1>
              <p>El soul es un término adoptado para describir la música afroamericana en los Estados Unidos a medida que esta evolucionó entre las décadas de 1950 y 1970.También se lo considera simplemente como un término nuevo para el género musical conocido como Rhythm and blues (R&B).En este sentido, una generación de artistas reinterpretó los sonidos de los pioneros del R&B de la década de 1950: Bo Diddley, Chuck Berry, Little Richard, Ray Charles y Sam Cooke, cuya música encontró acogida entre la población blanca estadounidense y se transformó en el género rock and roll.</p>
            </div>
          : category === 'rap' ?
            <div className='bio'>
              <h1>Rap</h1>
              <p>El rap es un género musical que incorpora "rima, habla rítmica y jerga apoteósica", que se interpreta en una variedad de tipos, por lo general sobre un acompañamiento musical. Los componentes del rap incluyen "contenido" (lo que se dice), "flow" (ritmo, rima) y "entrega" (cadencia, tono). El rap generalmente se interpreta sobre una pista instrumental​, aunque también puede realizarse a capella. El rap hace parte de la música hip-hop, pero los orígenes del fenómeno son anteriores a la cultura hip-hop.</p>
            </div>
          : category === 'funk' ?
            <div className='bio'>
              <h1>Funk</h1>
              <p>El funk es un género musical que nació entre mediados y finales de los años 1960, cuando músicos principalmente afroamericanos fusionaron soul, jazz, ritmos latinos (mambo, por ejemplo) y R&B dando lugar a una nueva forma musical rítmica y bailable. El funk reduce el protagonismo de la melodía y de la armonía y dota, a cambio, de mayor peso a la percusión y a la línea de bajo eléctrico. Las canciones de funk suelen basarse en un vamp (una figura, sección o acompañamiento repetidos) extendido sobre un solo acorde, distinguiéndose del R&B y el soul, más centrados alrededor de la progresión de acordes.</p>
            </div>
          : category === 'rock' ?
            <div className='bio'>
              <h1>Rock</h1>
              <p>El rock es un amplio género de música popular originado como rock and roll a principios de la década de 1950 en Estados Unidos y que derivaría en un gran rango de diferentes estilos durante mediados de los años 60 y posteriores, particularmente en ese país y Reino Unido. Tiene sus raíces en el rock and roll de los años 50, estilo nacido directamente de géneros como el blues, el rhythm and blues (pertenecientes a la música afroamericana) y el country. También se nutrió fuertemente del blues eléctrico y el folk, además de incorporar influencias del jazz y la música clásica, entre otras fuentes. Instrumentalmente, el rock se ha centrado en la guitarra eléctrica, normalmente como parte de un grupo integrado por batería, bajo, uno o más cantantes y, algunas veces, instrumentos de teclado como el órgano y el piano. Usualmente, el rock se basa en canciones en compás de 4/4 y una estructura verso-estribillo.</p>
            </div>
          : category === 'pop' &&
            <div className='bio'>
              <h1>Pop</h1>
              <p>La música pop (del inglés pop music, contracción de popular music) es un género de música popular que tuvo su origen a finales de los años 1950 como una derivación del traditional pop, en combinación con otros géneros musicales que estaban de moda en aquel momento. Los términos música pop y música popular se usan a menudo de manera indistinta, aunque el segundo tiene un sentido más amplio al dar cabida a otros géneros distintos del pop que se consideren populares.</p>
            </div>
          }
      {filteredProducts.length ? 
      <ItemList vinyls={filteredProducts}/>
      :
      <div className='loading'>
        <Circles height="100" width="100" color='#4C434A' ariaLabel='loading'/>
      </div>}
    </div>
  )
}

export default ItemListContainer