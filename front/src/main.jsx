import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Eventos from './components/eventos/Eventos.jsx'

//importar el componente que querramos utilizar y renderizarlo
import Ejemplo from './components/ejemplo/Ejemplo.jsx'
import Ejemplo2 from './components/ejemplo2/Ejemplo2.jsx'
import Reutilizable from './components/Reutilizables/Reutilizable.jsx'
import ListadoTareas from './components/Tareas/ListadoTareas.jsx'
import Condicional from './components/condicional/Condicional.jsx'
import Formulario from './components/Formularios/Formulario.jsx'
import Ejemploapi from './components/Apiexterna/Ejemploapi.jsx'
import Contador from './components/Contador/Contador.jsx'
import Usuarios from './components/Ruteador/Usuarios.jsx'
import Albums from './components/Ruteador/Albums.jsx'
import Posteos from './components/Posts/Posteos.jsx'
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ThemeProvider theme={darkTheme}>
    <CssBaseline/>
      <App/>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
