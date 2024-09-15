//Importaciones de modulos, componentes,css, etc
import './App.css'
import { Routes, Route } from 'react-router-dom'

import NavBar from './components/Web/NavBar/NavBar'
import ListadoProductos from './components/Web/Productos/ListadoProductos'
import Nosotros from './components/Web/Nosotros/Nosotros'
import Contacto from './components/Web/Contacto/Contacto'
import Landing from './components/Web/Landing'
import Error from './components/Web/Error/Error'
import Footer from './components/Web/Footer/Footer'
import InfoProducto from './components/Web/Productos/InfoProducto'
import Carrito from './components/Web/Carrito/Carrito'



function App() {

  /**
   *  Route: Componente de react-router-dom para crear rutas
   * path: Cual es la ruta que pondremos en la URL de nuestra pagina
   * element: Cual es el componente que se renderizara cuando se accede a la ruta indicada
   */

  return (
    <div className="App">
      <NavBar/>
      <div id='div-contenido' style={{minHeight: '80vh'}}>
        <Routes>
          <Route path="/productos" element={<ListadoProductos/>}/>
          <Route path='/productos/detalle/:id' element={<InfoProducto/>}/>
          <Route path='/nosotros' element={<Nosotros/>} />
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/carrito' element={<Carrito/>}/>
          <Route path='/' element={<Landing/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
        </div>
      <Footer/>
    </div>
  
  )
}

export default App
