import './Navegador.css'
import { Link } from 'react-router-dom'

function Navegador(){
    
    return(
        <nav className="navegador">
            <Link to="/posteos" className='rutas'>
                Posteos de usuarios
            </Link>
            <Link className='rutas' to={'/usuarios'}>Lista de usuarios</Link>
            <Link className='rutas' to={'/albumes'}>Listado de albumes</Link>
        </nav>
    )

    }

export default Navegador