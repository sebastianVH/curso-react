import { Link } from "react-router-dom"
import './NavBar.css'
//importar una imagen que se encuentra en public

function NavBar() { 

    return (
        <div className="container">
        <nav className="navbar">
                <Link to={"/"} className="navlink">Home</Link>
                <Link to={"/productos"} className="navlink">Productos</Link>
                <Link to={"/nosotros"} className="navlink">Sobre Nosotros</Link>
                <Link to={"/contacto"} className="navlink">Contactanos</Link>
                <Link to ={"/carrito"} className="navlink"> Ver Carrito</Link>
        </nav>
            <h1 className="titulo-principal">CyberSale</h1>
            <h2 className="sub-titulo">Bienvenidos a nuestra web de ventas de insumos para PC</h2>
        </div>

    )
}

export default NavBar