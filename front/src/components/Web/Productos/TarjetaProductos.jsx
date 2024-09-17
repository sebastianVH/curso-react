
import { Link } from 'react-router-dom'
import './TarjetaProductos.css'
import useCheckCarrito from '../Utils/CheckCarrito'
import { Button } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


function TarjetaProducto({producto}) {

    const {agregarCarrito} = useCheckCarrito()


    return (
        <div className="card">
            <Link 
            to={'/productos/detalle/'+producto.id}
            className={'card-link'}
            state={producto}
            >
                <img className='card-img' src={producto.img} 
                />
            </Link>
            <h2 className="card-title">{producto.nombre}</h2>
            <p className="card-text">Precio: ${producto.precio}</p>
            <p className="card-text">Unidades Disponibles: {producto.stock}</p>
            {/* <button onClick={()=>agregarCarrito(producto)} className="card-button">Comprar</button> */}
            <Button size='large' endIcon={<ShoppingCartOutlinedIcon />} onClick={()=>agregarCarrito(producto)} variant="outlined">Comprar</Button>
        </div>
    )

}

export default TarjetaProducto